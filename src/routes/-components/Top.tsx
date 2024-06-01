import { useNavigate } from '@tanstack/react-router';
import { useState } from 'react';

import { useAppSelector } from '@/app/hooks';
import { SimpleButton } from '@/components/atoms/SimpleButton';
import { PATH } from '@/constant/routes';
import { useAuthCheck } from '@/hooks/useAuthCheck';
import { SimpleCard } from './SimpleCard';

import { ButtonStyle, CardStyle } from './Top.css';

export const Top = () => {
  useAuthCheck();
  const [count, setCount] = useState(0);
  const countStore = useAppSelector((state) => state.counter.value);
  const navigate = useNavigate();

  return (
    <>
      <h1>React_Vite_Sample</h1>
      <div className={CardStyle}>
        <SimpleButton
          buttonName='Count Up'
          onClick={() => setCount((count) => count + 1)}
        />
        <p>count is {count}</p>
      </div>

      <SimpleCard minWidth={275} countStore={countStore} />

      <div className={ButtonStyle}>
        <SimpleButton
          buttonName='Page to Register'
          onClick={() => navigate({ to: PATH.REGISTER })}
        />
      </div>
      <div className={ButtonStyle}>
        <SimpleButton
          color='info'
          buttonName='Page to Customer'
          onClick={() => navigate({ to: PATH.CUSTOMER })}
        />
      </div>
    </>
  );
};
