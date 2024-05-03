import { useNavigate } from 'react-router-dom';

import { useState } from 'react';

import { SimpleButton } from '@/components/atoms/SimpleButton';
import { SimpleTextField } from '@/components/atoms/SImplrTextField';
import { ErrorAlert } from '@/components/atoms/ErrorAlert';
import { axiosBase } from '@/plugins/axiosBase';
import { useLoginState } from '@/hooks/useLogin';

function Login() {
  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [showAlert, setShowAlert] = useState(false);

  const loginState = useLoginState();

  const navigate = useNavigate();

  const handleSubmit = async () => {
    try {
      const result = await axiosBase.post('/login', {
        username: userName,
        password: password,
      });
      if (String(result.data) !== 'true') {
        handleError(result.data);
        return;
      }
    } catch (error) {
      console.log(error);
      handleError(String('Error'));
      return;
    }
    navigate('/');
  };

  const handleError = (message: string) => {
    setErrorMessage(message);
    setShowAlert(true);
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
          onClick={(e) => setUserName(e.target.value)}
        />
        <SimpleTextField
          id={'password'}
          label={'password'}
          onClick={(e) => setPassword(e.target.value)}
        />
      </div>

      <p>
        Input value: {userName} : {password}
      </p>

      <SimpleButton buttonName="Submit" onClick={handleSubmit}></SimpleButton>
    </>
  );
}

export default Login;
