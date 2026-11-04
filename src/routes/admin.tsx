import { createFileRoute, Link, useRouter } from '@tanstack/react-router';
import { useServerFn } from '@tanstack/react-start';
import { useState, type FormEvent } from 'react';
import { Button } from '@/components/ui/button';
import { getAdminSubmissions, unlockAdmin, lockAdmin } from '@/lib/submissions.functions';
import { makeCsv } from '@/lib/submission-csv';
import adminCss from '@/lib/admin.css?url';

export const Route = createFileRoute('/admin')({
  loader: () => getAdminSubmissions(),
  head: () => ({
    meta: [
      { title: 'beme — Partner submissions' },
      { name: 'description', content: 'Private beme partner applications and client waitlist.' },
      { property: 'og:title', content: 'beme — Partner submissions' },
      { property: 'og:description', content: 'Private beme partner applications and client waitlist.' },
      { property: 'og:type', content: 'website' },
      { name: 'twitter:card', content: 'summary' },
      { name: 'robots', content: 'noindex, nofollow' },
    ],
    links: [{ rel: 'stylesheet', href: adminCss }, { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Raleway:wght@400;500;600;700&display=swap' }],
  }),
  component: Admin,
});

function download(name: string, columns: string[], rows: Record<string, unknown>[]) {
  const url = URL.createObjectURL(new Blob([makeCsv(columns, rows)], { type: 'text/csv;charset=utf-8;' }));
  const anchor = document.createElement('a');
  anchor.href = url;
  anchor.download = name;
  anchor.click();
  setTimeout(() => URL.revokeObjectURL(url), 1000);
}

function Admin() {
  const data = Route.useLoaderData();
  const router = useRouter();
  const unlock = useServerFn(unlockAdmin);
  const lock = useServerFn(lockAdmin);
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [pending, setPending] = useState(false);
  async function login(e: FormEvent) {
    e.preventDefault();
    setPending(true); setError('');
    try {
      const result = await unlock({ data: { password } });
      if (!result.success) setError(result.error);
      else { setPassword(''); await router.invalidate(); }
    } catch { setError('Could not sign in. Please try again later.'); }
    finally { setPending(false); }
  }
  async function logout() {
    setPending(true); setError('');
    try { await lock(); await router.invalidate(); }
    catch { setError('Could not sign out. Please try again.'); }
    finally { setPending(false); }
  }
  const partnerColumns = ['created_at', 'name', 'business_name', 'email', 'type', 'instagram', 'phone'];
  return <main className="beme-admin"><div className="admin-inner">
    <header className="admin-header"><Link to="/"><img src="/images/beme-logo.png" alt="beme" /></Link><h1 className="admin-heading">Submissions</h1>{data.unlocked && <Button className="admin-button" disabled={pending} onClick={logout}>Sign out</Button>}</header>
    {!data.unlocked ? <form className="admin-login" onSubmit={login}>
      <h2 className="admin-subheading">Admin access</h2><label htmlFor="admin-password">Password</label>
      <input id="admin-password" className="admin-input" type="password" autoComplete="current-password" required maxLength={256} value={password} onChange={e => setPassword(e.target.value)} />
      {error && <p role="alert" className="admin-error">{error}</p>}
      <Button className="admin-button" type="submit" disabled={pending}>{pending ? 'Signing in…' : 'Sign in'}</Button>
    </form> : <>
      {error && <p role="alert" className="admin-error">{error}</p>}
      <section className="admin-section"><div className="admin-section-header"><h2 className="admin-subheading">Partner applications ({data.partners.length})</h2><Button className="admin-button" onClick={() => download('partner_applications.csv', partnerColumns, data.partners)}>Export CSV</Button></div>
      {data.partners.length === 0 ? <p className="admin-empty">No partner applications yet.</p> : <div className="admin-table-wrap"><table className="admin-table"><thead><tr>{['Submitted', 'Name', 'Business', 'Email', 'Type', 'Instagram', 'Phone'].map(label => <th key={label}>{label}</th>)}</tr></thead><tbody>{data.partners.map(row => <tr key={row.id}><td>{new Date(row.created_at).toLocaleString('en-CA')}</td><td>{row.name}</td><td>{row.business_name}</td><td>{row.email}</td><td>{row.type}</td><td>{row.instagram || '—'}</td><td>{row.phone || '—'}</td></tr>)}</tbody></table></div>}</section>
      <section className="admin-section"><div className="admin-section-header"><h2 className="admin-subheading">Waitlist ({data.waitlist.length})</h2><Button className="admin-button" onClick={() => download('waitlist.csv', ['created_at', 'email'], data.waitlist)}>Export CSV</Button></div>
      {data.waitlist.length === 0 ? <p className="admin-empty">No waitlist entries yet.</p> : <div className="admin-table-wrap"><table className="admin-table"><thead><tr><th>Submitted</th><th>Email</th></tr></thead><tbody>{data.waitlist.map(row => <tr key={row.id}><td>{new Date(row.created_at).toLocaleString('en-CA')}</td><td>{row.email}</td></tr>)}</tbody></table></div>}</section>
    </>}
  </div></main>;
}