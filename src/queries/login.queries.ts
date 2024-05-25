import { createQueryKeys } from '@lukemorales/query-key-factory';
import { axiosBase } from '@/plugins/axiosBase';

import { PATH } from '@/constant/routes';

export const LoginQueries = createQueryKeys('createQueryKeys', {
  getLoginState: () => ({
    queryKey: ['getLoginState'],
    queryFn: () => axiosBase(PATH.LOGIN).then((res) => res.data),
  }),
});
