import { zodResolver } from '@hookform/resolvers/zod';
import { useNavigate } from '@tanstack/react-router';
import { useState } from 'react';
import { type SubmitHandler, useForm } from 'react-hook-form';

import { ErrorAlert } from '@/components/atoms/ErrorAlert';
import { SimpleButton } from '@/components/atoms/SimpleButton';
import { RHFTextInput } from '@/components/molecules/RHFTextInput';

import { useAppDispatch } from '@/app/hooks';
import { useLoginState, useLoginSubmit } from '@/hooks/useLogin';

import { type LoginSchema, loginSchema } from '../-types/schema';
import { ButtonStyle, TextFieldStyle } from './Login.css';

import { PATH } from '@/constants/routes';
import { register } from '@/routes/-functions/auth';

export const Login = () => {
  const [errorMessage, setErrorMessage] = useState('');
  const [showAlert, setShowAlert] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const dispatch = useAppDispatch();

  const loginState = useLoginState();

  const navigate = useNavigate();

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginSchema>({
    mode: 'onSubmit',
    defaultValues: { username: '', password: '' },
    resolver: zodResolver(loginSchema),
  });

  const handleError = (message: string) => {
    setErrorMessage(message);
    setShowAlert(true);
    setIsLoading(false);
  };

  const { mutateAsync } = useLoginSubmit(handleError);

  const onSubmit: SubmitHandler<LoginSchema> = async (data) => {
    setShowAlert(false);
    setIsLoading(true);

    try {
      await mutateAsync(data);
      navigate({ to: PATH.TOP });
    } catch (_e) {
      return;
    }
    setIsLoading(false);
    dispatch(register(data));
  };

  return (
    <>
      <h1>Login page</h1>

      <p>Login State: {loginState}</p>

      <ErrorAlert errorMessage={errorMessage} isShow={showAlert} />

      <form onSubmit={handleSubmit(onSubmit)}>
        <div className={TextFieldStyle}>
          <RHFTextInput name={'username'} control={control} />

          {errors.username?.message && (
            <ErrorAlert errorMessage={errors.username.message} isShow={true} />
          )}
        </div>
        <div className={TextFieldStyle}>
          <RHFTextInput name={'password'} control={control} />

          {errors.password?.message && (
            <ErrorAlert errorMessage={errors.password.message} isShow={true} />
          )}
        </div>

        <div className={ButtonStyle}>
          <SimpleButton
            disabled={isLoading}
            buttonName='Submit'
            buttonType='submit'
          />
        </div>
      </form>
    </>
  );
};
