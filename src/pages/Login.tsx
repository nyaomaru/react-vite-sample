import { useState } from 'react';

import { SimpleButton } from '@/components/atoms/SimpleButton';
import { SimpleTextField } from '@/components/atoms/SImplrTextField';

import { useNavigate } from 'react-router-dom';

function Login() {
  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  return (
    <>
      <h1>Login page</h1>

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

      <SimpleButton
        buttonName="Submit"
        onClick={() => navigate('/')}
      ></SimpleButton>
    </>
  );
}

export default Login;
