import { createBrowserRouter } from 'react-router-dom';

import Top from '@/pages/top';
import Login from '@/pages/login';
import Register from '@/pages/register';
import Customer from '@/pages/customer';

import { PATH } from './const';

export const useRouter = () =>
  createBrowserRouter([
    {
      path: PATH.TOP,
      element: <Top />,
    },
    {
      path: PATH.LOGIN,
      element: <Login />,
    },
    {
      path: PATH.REGISTER,
      element: <Register />,
    },
    {
      path: PATH.CUSTOMER,
      element: <Customer />,
    },
  ]);
