import App from '@/pages/App';
import Login from '@/pages/login/Login';
import Register from '@/pages/register/Register';

import { createBrowserRouter } from 'react-router-dom';

export const PATH = {
  TOP: '/',
  LOGIN: '/login',
  REGISTER: '/register',
};

export const useRouter = () =>
  createBrowserRouter([
    {
      path: PATH.TOP,
      element: <App />,
    },
    {
      path: PATH.LOGIN,
      element: <Login />,
    },
    {
      path: PATH.REGISTER,
      element: <Register />,
    },
  ]);
