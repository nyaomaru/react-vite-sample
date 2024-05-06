import { useState, useEffect } from 'react';
import { useQuery, useMutation } from '@tanstack/react-query';

import { axiosBase } from '@/plugins/axiosBase';
import { LoginQueries } from '@/queries/login.queries';
import type { LoginSchema } from '@/features/login/schema';

import { PATH } from '@/pages/router/const';

export const useLoginState = () => {
  const [state, setState] = useState('');

  const { data, isError, error } = useQuery({
    ...LoginQueries.getLoginState(),
  });

  if (isError) {
    console.error(error);
  }

  useEffect(() => {
    const fetchData = async () => {
      try {
        const parseData = String(data);
        setState(parseData);
      } catch (err) {
        console.log(err);
      }
    };

    fetchData();
  }, [data]);

  return state;
};

export const useLoginSubmit = (handleError: (message: string) => void) => {
  return useMutation({
    mutationFn: (req: LoginSchema) =>
      axiosBase
        .post(PATH.LOGIN, {
          username: req.username,
          password: req.password,
        })
        .then<string>((res) => res.data ?? ''),
    onSuccess: (data) => {
      if (String(data) !== 'true') {
        handleError(data ?? '');
        throw new Error();
      }
    },
    onError: (err) => {
      console.log(err);
      handleError(String(err));
      throw new Error();
    },
  });
};
