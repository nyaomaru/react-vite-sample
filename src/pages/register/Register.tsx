import { useForm, SubmitHandler } from 'react-hook-form';

import { ErrorAlert } from '@/components/atoms/ErrorAlert';

import { SimpleButton } from '@/components/atoms/SimpleButton';

import { TextFieldStyle } from './Register.css';
import { RegisterFormSchema } from './schema';
import { RHFTextInput } from '@/components/molecules/RHFTextInput';

const rules = {
  required: { value: true, message: 'Must input' },
  maxLength: { value: 5, message: `Max length is 5` },
} as const;

const Register = () => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<RegisterFormSchema>({
    mode: 'onSubmit',
    defaultValues: { username: '', password: '' },
    // resolver: zodResolver(registerFormSchema),
  });
  const onSubmit: SubmitHandler<RegisterFormSchema> = (data) =>
    console.log(data);

  return (
    <>
      <h1>Register page</h1>

      <form onSubmit={handleSubmit(onSubmit)}>
        <div className={TextFieldStyle}>
          <RHFTextInput
            name={'username'}
            control={control}
            rules={rules}
          ></RHFTextInput>
        </div>

        {/* <p>errors.username: {errors.username}</p> */}

        {errors.username?.message && (
          <ErrorAlert errorMessage={errors.username.message} isShow={true} />
        )}

        <div className={TextFieldStyle}>
          <RHFTextInput
            name={'password'}
            control={control}
            rules={rules}
          ></RHFTextInput>
        </div>

        {errors.password?.message && (
          <ErrorAlert errorMessage={errors.password.message} isShow={true} />
        )}

        <SimpleButton buttonName="Submit" buttonType="submit"></SimpleButton>
      </form>
    </>
  );
};

export default Register;
