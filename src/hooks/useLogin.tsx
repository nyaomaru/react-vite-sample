import { useState, useEffect } from 'react';
import { useQuery, useMutation } from '@tanstack/react-query';
import { axiosBase } from '@/plugins/axiosBase';

export const useLoginState = () => {
  const [state, setState] = useState('');

  const { data, isError, error } = useQuery({
    queryKey: ['loginGet'],
    queryFn: () => axiosBase('/login').then((res) => res.data),
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

export const useLoginSubmit = (
  userName: string,
  password: string,
  handleError: (message: string) => void
) => {
  return useMutation({
    mutationFn: () =>
      axiosBase
        .post('/login/eee', {
          username: userName,
          password: password,
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
