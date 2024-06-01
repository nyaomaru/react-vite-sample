import z from 'zod';

export const counterState = z.object({
  value: z.number().default(0),
});

export type CounterState = z.infer<typeof counterState>;

export const authSchema = z.object({
  username: z.string(),
  password: z.string(),
});

export type AuthSchema = z.infer<typeof authSchema>;
