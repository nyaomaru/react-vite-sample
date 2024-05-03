import { zodResolver } from '@hookform/resolvers/zod';

import { useForm, SubmitHandler } from 'react-hook-form';

import { ErrorAlert } from '@/components/atoms/ErrorAlert';

import { SimpleTextField } from '@/components/atoms/SImplrTextField';
import { SimpleButton } from '@/components/atoms/SimpleButton';

import { TextFieldStyle } from './Register.css';
import { registerFormSchema, RegisterFormSchema } from './schema';

const Register = () => {
  const {
    control,
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<RegisterFormSchema>({
    mode: 'onSubmit',
    defaultValues: undefined,
    resolver: zodResolver(registerFormSchema),
  });
  const onSubmit: SubmitHandler<RegisterFormSchema> = (data) =>
    console.log(data);

  return (
    <>
      <h1>Register page</h1>

      <form onSubmit={handleSubmit(onSubmit)}>
        <div className={TextFieldStyle}>
          <SimpleTextField
            id={'user-name'}
            label={'user name'}
            {...register('username', { required: true })}
          />
        </div>

        {errors.username && (
          <ErrorAlert
            errorMessage={'This username is required'}
            isShow={true}
          />
        )}

        <div className={TextFieldStyle}>
          <SimpleTextField
            className={TextFieldStyle}
            id={'password'}
            label={'password'}
            {...register('password', { required: true })}
          />
        </div>

        {errors.password && (
          <ErrorAlert
            errorMessage={'This password is required'}
            isShow={true}
          />
        )}

        <SimpleButton buttonName="Submit" buttonType="submit"></SimpleButton>
      </form>
    </>
  );
};

export default Register;
