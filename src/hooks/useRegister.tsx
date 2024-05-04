import { useMutation } from '@tanstack/react-query';
import { axiosBase } from '@/plugins/axiosBase';
import { RegisterFormSchema } from '@/pages/register/schema';

export const useRegisterSubmit = (handleError: (message: string) => void) => {
  return useMutation({
    mutationFn: (req: RegisterFormSchema) =>
      axiosBase
        .post('/form', {
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
