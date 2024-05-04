import { useNavigate } from 'react-router-dom';

import { useState } from 'react';

import { SimpleButton } from '@/components/atoms/SimpleButton';
import { SimpleTextField } from '@/components/atoms/SImpleTextField';
import { ErrorAlert } from '@/components/atoms/ErrorAlert';

import { useLoginState, useLoginSubmit } from '@/hooks/useLogin';

const Login = () => {
  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [showAlert, setShowAlert] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const loginState = useLoginState();

  const navigate = useNavigate();

  const handleError = (message: string) => {
    setErrorMessage(message);
    setShowAlert(true);
    setIsLoading(false);
  };

  const { mutateAsync } = useLoginSubmit(userName, password, handleError);

  const handleSubmit = async () => {
    setIsLoading(true);

    try {
      await mutateAsync();
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

      <div>
        <SimpleTextField
          id={'user-name'}
          label={'user name'}
          onChange={(e) => setUserName(e.target.value)}
        />
        <SimpleTextField
          id={'password'}
          label={'password'}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>

      <p>
        Input value: {userName} : {password}
      </p>

      <SimpleButton
        disabled={isLoading}
        buttonName="Submit"
        onClick={handleSubmit}
      ></SimpleButton>
    </>
  );
};

export default Login;
