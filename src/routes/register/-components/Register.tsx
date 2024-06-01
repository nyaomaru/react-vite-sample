import { useNavigate } from '@tanstack/react-router';

import { zodResolver } from '@hookform/resolvers/zod';
import { useState } from 'react';
import { type SubmitHandler, useForm } from 'react-hook-form';

import { PATH } from '@/constant/routes';
import { useAuthCheck } from '@/hooks/useAuthCheck';
import { useRegisterSubmit } from '@/hooks/useRegister';

import { ErrorAlert } from '@/components/atoms/ErrorAlert';
import { SimpleButton } from '@/components/atoms/SimpleButton';
import { SuccessAlert } from '@/components/atoms/SuccessAlert';
import { RHFRadio } from '@/components/molecules/RHFRadio';
import { RHFSelect } from '@/components/molecules/RHFSelect';
import { RHFTextInput } from '@/components/molecules/RHFTextInput';

import { type RegisterFormSchema, registerFormSchema } from '../-types/schema';
import { BaseFieldStyle, FieldStyle } from './Register.css';

export const Register = () => {
  useAuthCheck();
  const [errorMessage, setErrorMessage] = useState('');
  const [showAlert, setShowAlert] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const navigate = useNavigate();

  const {
    control,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<RegisterFormSchema>({
    mode: 'onSubmit',
    defaultValues: { username: '', password: '', city: 1, option: '' },
    resolver: zodResolver(registerFormSchema),
  });

  const handleError = (message: string) => {
    setErrorMessage(message);
    setShowAlert(true);
    setIsLoading(false);
  };

  const { mutateAsync } = useRegisterSubmit(handleError);

  const onSubmit: SubmitHandler<RegisterFormSchema> = async (data) => {
    setShowAlert(false);
    setIsLoading(true);

    try {
      await mutateAsync(data);
    } catch (_e) {
      return;
    }
    setIsLoading(false);
    setShowSuccess(true);
    reset();
  };

  return (
    <>
      <h1>Register page</h1>

      <ErrorAlert errorMessage={errorMessage} isShow={showAlert} />

      <SuccessAlert
        successMessage={'Success to register!!'}
        isShow={showSuccess}
      />

      <form onSubmit={handleSubmit(onSubmit)}>
        <div className={FieldStyle}>
          <RHFTextInput name={'username'} control={control} />

          {errors.username?.message && (
            <ErrorAlert errorMessage={errors.username.message} isShow={true} />
          )}
        </div>

        <div className={FieldStyle}>
          <RHFTextInput name={'password'} control={control} />

          {errors.password?.message && (
            <ErrorAlert errorMessage={errors.password.message} isShow={true} />
          )}
        </div>

        <div className={FieldStyle}>
          <RHFSelect name={'city'} control={control} />

          {errors.city?.message && (
            <ErrorAlert errorMessage={errors.city.message} isShow={true} />
          )}
        </div>

        <div className={FieldStyle}>
          <RHFRadio name={'option'} control={control} />

          {errors.option?.message && (
            <ErrorAlert errorMessage={errors.option.message} isShow={true} />
          )}
        </div>

        <div className={BaseFieldStyle}>
          <SimpleButton
            disabled={isLoading}
            buttonName='Submit'
            buttonType='submit'
            onClick={() => setShowSuccess(false)}
          />
        </div>

        <div className={BaseFieldStyle}>
          <SimpleButton
            disabled={isLoading}
            buttonName='Return'
            buttonType='button'
            color='secondary'
            onClick={() => navigate({ to: PATH.TOP })}
          />
        </div>
      </form>
    </>
  );
};
