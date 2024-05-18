import z from 'zod';

export const customerListSchema = z
  .object({
    id: z.string(),
    name: z.string(),
  })
  .array();

export const customerDetailSchema = z.object({
  id: z.string(),
  name: z.string(),
  city: z.number(),
  favorite: z.string(),
});

export const responseCustomerListSchema = z.object({
  customerList: customerListSchema.array(),
});

export type CustomerListSchema = z.infer<typeof customerListSchema>;
export type ResponseCustomerListSchema = z.infer<
  typeof responseCustomerListSchema
>;

export type CustomerDetailSchema = z.infer<typeof customerDetailSchema>;
