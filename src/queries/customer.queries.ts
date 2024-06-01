import { createQueryKeys } from '@lukemorales/query-key-factory';
import { axiosBase } from '@/plugins/axiosBase';

import { PATH } from '@/constant/routes';
import type { ResponseCustomerListSchema, CustomerDetailSchema } from '@/routes/customer/-types/schema';

export const CustomerQueries = createQueryKeys('customer', {
  getCustomerList: () => ({
    queryKey: ['getCustomerList'],
    queryFn: () =>
      axiosBase<ResponseCustomerListSchema>(PATH.CUSTOMER).then((res) => {
        return res.data.customerList[0];
      }),
  }),
});

export const CustomerDetailQueries = createQueryKeys('customer', {
  getCustomerDetail: (id: number) => ({
    queryKey: ['getCustomerDetail'],
    queryFn: () =>
      axiosBase<CustomerDetailSchema>(PATH.CUSTOMER_DETAIL.replace('$id', String(id))).then((res) => {
        return res.data;
      }),
  }),
});
