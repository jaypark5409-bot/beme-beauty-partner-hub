import { createHash, timingSafeEqual } from 'node:crypto';
import { getRequestHeader, getRequestUrl, useSession } from '@tanstack/react-start/server';

export function passwordMatches(input: string, expected: string): boolean {
  return timingSafeEqual(createHash('sha256').update(input).digest(), createHash('sha256').update(expected).digest());
}

export async function adminSession() {
  const password = process.env['SESSION_SECRET'];
  if (!password) throw new Error('Admin access is not configured.');
  return useSession<{ unlocked?: boolean; passwordVersion?: string }>({
    password,
    name: 'beme-admin',
    maxAge: 60 * 60 * 8,
    cookie: { httpOnly: true, sameSite: 'strict', secure: new URL(getRequestUrl()).protocol === 'https:', path: '/' },
  });
}

export function passwordVersion(password: string) {
  return createHash('sha256').update(password).digest('hex');
}

export async function isAdminUnlocked() {
  const expected = process.env['SITE_PASSWORD'];
  if (!expected) return false;
  const session = await adminSession();
  return session.data.unlocked === true && session.data.passwordVersion === passwordVersion(expected);
}

export async function limitRequest(kind: string, maximum: number) {
  // Hosting replaces this header with the actual visitor IP. Never persist raw IPs.
  const ip = getRequestHeader('cf-connecting-ip') ?? getRequestHeader('x-real-ip') ?? 'local';
  const key = createHash('sha256').update(`${kind}:${ip}`).digest('hex');
  const { supabaseAdmin } = await import('@/integrations/supabase/client.server');
  const { data, error } = await supabaseAdmin.rpc('consume_form_limit', { p_key: key, p_max: maximum });
  if (error || !data) throw new Error('Please wait a few minutes and try again.');
}
