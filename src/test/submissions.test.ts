import { describe, expect, it } from 'vitest';
import { partnerSchema, waitlistSchema } from '@/lib/submission-schemas';
import { csvCell, makeCsv } from '@/lib/submission-csv';
import { passwordMatches } from '@/lib/submissions.server';
const partner = { name: 'Jay', business_name: 'beme', email: 'JAY@example.com', type: 'salon', instagram: '', phone: '' };
describe('Submission rules', () => {
  it('accepts empty Instagram', () => expect(partnerSchema.parse(partner).instagram).toBe(''));
  it('accepts empty phone', () => expect(partnerSchema.parse(partner).phone).toBe(''));
  it.each(['name', 'business_name', 'email'])('requires %s', field => expect(partnerSchema.safeParse({ ...partner, [field]: '' }).success).toBe(false));
  it.each(['salon', 'artist'])('accepts %s type', type => expect(partnerSchema.parse({ ...partner, type }).type).toBe(type));
  it('rejects unsupported partner types', () => expect(partnerSchema.safeParse({ ...partner, type: 'other' }).success).toBe(false));
  it('normalizes waitlist emails for duplicate prevention', () => expect(waitlistSchema.parse({ email: '  JAY@EXAMPLE.COM ' }).email).toBe('jay@example.com'));
  it('rejects invalid waitlist email', () => expect(waitlistSchema.safeParse({ email: 'not-email' }).success).toBe(false));
  it('only matches the correct password', () => { expect(passwordMatches('test-password', 'test-password')).toBe(true); expect(passwordMatches('wrong', 'test-password')).toBe(false); });
  it('escapes CSV data and formulas', () => { expect(csvCell('=1+1')).toBe('"\'=1+1"'); expect(csvCell('A,"B"')).toBe('"A,""B"""'); });
  it('exports all provided rows in order', () => expect(makeCsv(['email'], [{ email: 'new@example.com' }, { email: 'old@example.com' }])).toBe('\uFEFF"email"\r\n"new@example.com"\r\n"old@example.com"'));
});
