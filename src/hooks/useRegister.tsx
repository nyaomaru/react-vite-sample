import { useMutation } from '@tanstack/react-query';

import { axiosBase } from '@/plugins/axiosBase';
import type { RegisterFormSchema } from '@/features/register/schema';

import { PATH } from '@/pages/router/const';

export const useRegisterSubmit = (handleError: (message: string) => void) => {
  return useMutation({
    mutationFn: (req: RegisterFormSchema) =>
      axiosBase
        .post(PATH.FORM, {
          username: req.username,
          password: req.password,
          city: String(req.city),
          option: req.option,
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
