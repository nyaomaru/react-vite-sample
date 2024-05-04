import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useForm, SubmitHandler } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';

import { SimpleButton } from '@/components/atoms/SimpleButton';
import { ErrorAlert } from '@/components/atoms/ErrorAlert';
import { RHFTextInput } from '@/components/molecules/RHFTextInput';

import { useLoginState, useLoginSubmit } from '@/hooks/useLogin';

import { loginSchema, LoginSchema } from './schema';
import { TextFieldStyle } from './Login.css';

const Login = () => {
  const [errorMessage, setErrorMessage] = useState('');
  const [showAlert, setShowAlert] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

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
      navigate('/');
    } catch (e) {
      return;
    }
    setIsLoading(false);
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

        <SimpleButton
          disabled={isLoading}
          buttonName="Submit"
          buttonType="submit"
        ></SimpleButton>
      </form>
    </>
  );
};

export default Login;
