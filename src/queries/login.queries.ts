import { axiosBase } from '@/plugins/axiosBase';
import { createQueryKeys } from '@lukemorales/query-key-factory';

import { PATH } from '@/constant/routes';

export const LoginQueries = createQueryKeys('createQueryKeys', {
  getLoginState: () => ({
    queryKey: ['getLoginState'],
    queryFn: () => axiosBase(PATH.LOGIN).then((res) => res.data),
  }),
});
