import { z } from 'zod';

export const signinFormSchema = z.object({
  email: z.string().email(),
  password: z.string().min(8),
});

export type SigninFormSchemaType = z.infer<typeof signinFormSchema>;
