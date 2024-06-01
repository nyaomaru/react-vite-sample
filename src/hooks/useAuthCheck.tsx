import { useEffect } from 'react';
import { useLocation, useNavigate } from '@tanstack/react-router';
import { useAppSelector } from '@/app/hooks';

import { PATH } from '@/constant/routes';

export const useAuthCheck = () => {
  const location = useLocation();
  const authStore = useAppSelector((state) => state.auth);
  const navigate = useNavigate();

  useEffect(() => {
    if (location.pathname !== PATH.LOGIN) {
      if (authStore.username === '' || authStore.password === '') {
        navigate({ to: PATH.LOGIN });
      }
    }
  }, [location, navigate, authStore]);
};
