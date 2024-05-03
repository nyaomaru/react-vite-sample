import { useState, useEffect } from 'react';
import { axiosBase } from '@/plugins/axiosBase';

export const useLoginState = () => {
  const [state, setState] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await axiosBase('/login');
        const parseData = String(result.data);
        setState(parseData);
      } catch (err) {
        console.log(err);
      }
    };

    fetchData();
  }, []);

  return state;
};
