import { RouterProvider } from 'react-router-dom';

import { useRouter } from '@/pages/router';

const router = useRouter();

export const CustomRouteProvider = () => {
  return <RouterProvider router={router} />;
};
