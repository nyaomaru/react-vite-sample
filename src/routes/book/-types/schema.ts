import z from 'zod';

export const bookSchema = z.object({
  title: z.string().min(1, { message: 'Must input' }),
  author: z.string().min(1, { message: 'Must input' }),
});

export type BookSchema = z.infer<typeof bookSchema>;
