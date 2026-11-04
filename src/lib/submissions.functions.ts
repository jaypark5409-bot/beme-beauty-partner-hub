import { createServerFn } from '@tanstack/react-start';
import { setResponseHeader } from '@tanstack/react-start/server';
import { partnerSchema, waitlistSchema, passwordSchema } from './submission-schemas';
import { adminSession, isAdminUnlocked, limitRequest, passwordMatches, passwordVersion } from './submissions.server';

export const submitPartner = createServerFn({ method: 'POST' })
  .inputValidator((input: unknown) => partnerSchema.parse(input))
  .handler(async ({ data }) => {
    await limitRequest('partner', 10);
    const { supabaseAdmin } = await import('@/integrations/supabase/client.server');
    const result = await supabaseAdmin.from('partner_applications').insert(data).select('id').single();
    if (result.error || !result.data) throw new Error('Could not save your application. Please try again.');
    return { success: true, id: result.data.id };
  });

export const submitWaitlist = createServerFn({ method: 'POST' })
  .inputValidator((input: unknown) => waitlistSchema.parse(input))
  .handler(async ({ data }) => {
    await limitRequest('waitlist', 20);
    const { supabaseAdmin } = await import('@/integrations/supabase/client.server');
    const result = await supabaseAdmin.from('waitlist').insert(data);
    if (result.error && result.error.code !== '23505') throw new Error('Could not save your email. Please try again.');
    return { success: true };
  });

export const unlockAdmin = createServerFn({ method: 'POST' })
  .inputValidator((input: unknown) => passwordSchema.parse(input))
  .handler(async ({ data }) => {
    setResponseHeader('Cache-Control', 'no-store');
    await limitRequest('admin-login', 5);
    const expected = process.env['SITE_PASSWORD'];
    if (!expected) return { success: false, error: 'Admin password has not been set yet.' };
    if (!passwordMatches(data.password, expected)) return { success: false, error: 'Incorrect password.' };
    const session = await adminSession();
    await session.update({ unlocked: true, passwordVersion: passwordVersion(expected) });
    return { success: true, error: '' };
  });

export const lockAdmin = createServerFn({ method: 'POST' }).handler(async () => {
  setResponseHeader('Cache-Control', 'no-store');
  const session = await adminSession();
  await session.clear();
  return { success: true };
});

export const getAdminSubmissions = createServerFn({ method: 'GET' }).handler(async () => {
  setResponseHeader('Cache-Control', 'no-store');
  if (!(await isAdminUnlocked())) return { unlocked: false as const, partners: [], waitlist: [] };
  const { supabaseAdmin } = await import('@/integrations/supabase/client.server');
  // Page every read so CSV exports do not silently truncate at 1,000 rows.
  async function allPartners() {
    const rows = [];
    for (let from = 0; ; from += 1000) {
      const { data, error } = await supabaseAdmin.from('partner_applications').select('id,name,business_name,email,type,instagram,phone,created_at').order('created_at', { ascending: false }).order('id', { ascending: false }).range(from, from + 999);
      if (error) throw new Error('Could not load partner applications.');
      rows.push(...(data ?? []));
      if (!data || data.length < 1000) return rows;
    }
  }
  async function allWaitlist() {
    const rows = [];
    for (let from = 0; ; from += 1000) {
      const { data, error } = await supabaseAdmin.from('waitlist').select('id,email,created_at').order('created_at', { ascending: false }).order('id', { ascending: false }).range(from, from + 999);
      if (error) throw new Error('Could not load the waitlist.');
      rows.push(...(data ?? []));
      if (!data || data.length < 1000) return rows;
    }
  }
  const [partners, waitlist] = await Promise.all([allPartners(), allWaitlist()]);
  return { unlocked: true as const, partners, waitlist };
});
