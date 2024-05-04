import z from 'zod';

export const loginSchema = z.object({
  username: z.string().min(3, { message: 'More than 3 words' }),
  password: z.string().min(3, { message: 'Must input' }),
});

export type LoginSchema = z.infer<typeof loginSchema>;
