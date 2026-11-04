import { z } from 'zod';

export const emailSchema = z.string().trim().max(255).email().transform((value) => value.toLowerCase());
export const partnerSchema = z.object({
  name: z.string().trim().min(1).max(100),
  business_name: z.string().trim().min(1).max(200),
  email: emailSchema,
  type: z.enum(['salon', 'artist']),
  instagram: z.string().trim().max(200).optional().default(''),
  phone: z.string().trim().max(50).optional().default(''),
});
export const waitlistSchema = z.object({ email: emailSchema });
export const passwordSchema = z.object({ password: z.string().min(1).max(256) });
export type PartnerInput = z.input<typeof partnerSchema>;
export type WaitlistInput = z.input<typeof waitlistSchema>;
