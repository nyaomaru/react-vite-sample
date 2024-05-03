import { createQueryKeys } from '@lukemorales/query-key-factory';
import { axiosBase } from '@/plugins/axiosBase';

export const LoginQueries = createQueryKeys('createQueryKeys', {
  getLoginState: () => ({
    queryKey: ['getLoginState'],
    queryFn: () => axiosBase('/login').then((res) => res.data),
  }),
});
