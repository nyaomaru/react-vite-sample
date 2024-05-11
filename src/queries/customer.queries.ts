import { createQueryKeys } from '@lukemorales/query-key-factory';
import { axiosBase } from '@/plugins/axiosBase';

import { PATH } from '@/pages/router/const';
import type {
  ResponseCustomerListSchema,
  CustomerDetailSchema,
} from '@/features/customer/schema';

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
      axiosBase<CustomerDetailSchema>(PATH.CUSTOMER + `/${id}`).then((res) => {
        return res.data;
      }),
  }),
});
