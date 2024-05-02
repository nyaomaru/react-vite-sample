import { useState, useEffect } from 'react';

import { SimpleButton } from '@/components/atoms/SimpleButton';
import { SimpleTextField } from '@/components/atoms/SImplrTextField';

import { useNavigate } from 'react-router-dom';

import { axiosBase } from '@/plugins/axiosBase';

function Login() {
  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');
  const [data, setData] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await axiosBase('/login');
        const parseData = String(result.data);
        setData(parseData);
      } catch (err) {
        console.log(err);
      }
    };

    fetchData();
  }, []);

  const handleSubmit = () => {
    navigate('/');
  };

  return (
    <>
      <h1>Login page</h1>

      <p>Login State: {data}</p>

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
