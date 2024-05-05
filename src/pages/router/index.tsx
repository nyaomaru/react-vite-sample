import Top from '@/pages/top';
import Login from '@/pages/login';
import Register from '@/pages/register';

import { createBrowserRouter } from 'react-router-dom';

export const PATH = {
  TOP: '/',
  LOGIN: '/login',
  REGISTER: '/register',
} as const;

export const useRouter = () =>
  createBrowserRouter([
    {
      path: PATH.TOP,
      element: Top(),
    },
    {
      path: PATH.LOGIN,
      element: Login(),
    },
    {
      path: PATH.REGISTER,
      element: Register(),
    },
  ]);
