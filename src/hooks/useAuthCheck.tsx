import { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { useAppSelector } from '@/app/hooks';

import { PATH } from '@/pages/router/const';

export const useAuthCheck = () => {
  const location = useLocation();
  const authStore = useAppSelector((state) => state.auth);
  const navigate = useNavigate();

  useEffect(() => {
    console.log(location.pathname);
    if (location.pathname !== PATH.LOGIN) {
      if (authStore.username === '' || authStore.password === '') {
        navigate(PATH.LOGIN);
      }
    }
  }, [location]);
};
