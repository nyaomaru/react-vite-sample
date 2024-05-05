import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { SimpleButton } from '@/components/atoms/SimpleButton';
import { SimpleCard } from '@/components/molecules/SimpleCard';
import { useAppSelector } from '@/app/hooks';
import { CardStyle } from './Top.css';
import { PATH } from '@/pages/router';

export const Top = () => {
  const [count, setCount] = useState(0);
  const countStore = useAppSelector((state) => state.counter.value);
  const navigate = useNavigate();

  return (
    <>
      <h1>React_Vite_Sample</h1>
      <div className={CardStyle}>
        <SimpleButton
          buttonName="Count Up"
          onClick={() => setCount((count) => count + 1)}
        ></SimpleButton>
        <p>count is {count}</p>
      </div>

      <SimpleCard minWidth={275} countStore={countStore} />

      <SimpleButton
        buttonName="Page to Login"
        onClick={() => navigate(PATH.LOGIN)}
      ></SimpleButton>

      <SimpleButton
        buttonName="Page to Register"
        onClick={() => navigate(PATH.REGISTER)}
      ></SimpleButton>
    </>
  );
};
