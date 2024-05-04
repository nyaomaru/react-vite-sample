import z from 'zod';

const castToValOrNull = <T extends Parameters<typeof z.preprocess>[1]>(
  schema: T
) =>
  z.preprocess((val) => {
    if (typeof val === 'string') {
      const trimmedVal = val.trim();
      return trimmedVal.length > 0 ? trimmedVal : null;
    }
    return null;
  }, schema);

export const registerFormSchema = z.object({
  username: z.string().min(1, 'Must input').max(8, 'Too long username'),
  password: castToValOrNull(z.string().max(8, 'Too long username')),
  city: z.number(),
  option: z.string().nullable(),
});

export type RegisterFormSchema = z.infer<typeof registerFormSchema>;
