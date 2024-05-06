import { createQueryKeys } from '@lukemorales/query-key-factory';
import { axiosBase } from '@/plugins/axiosBase';

import { PATH } from '@/pages/router/const';
import type { ResponseCustomerListSchema } from '@/features/customer/schema';

export const CustomerQueries = createQueryKeys('createQueryKeys', {
  getCustomerList: () => ({
    queryKey: ['getCustomerList'],
    queryFn: () =>
      axiosBase<ResponseCustomerListSchema>(PATH.CUSTOMER).then((res) => {
        return res.data.customerList[0];
      }),
  }),
});
