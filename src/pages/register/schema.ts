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
  username: castToValOrNull(z.string().nullable()),
  password: castToValOrNull(z.string()),
});

export type RegisterFormSchema = z.infer<typeof registerFormSchema>;
