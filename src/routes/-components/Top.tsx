import { useNavigate } from '@tanstack/react-router';
import { useState } from 'react';

import { useAppSelector } from '@/app/hooks';
import { SimpleButton } from '@/components/atoms/SimpleButton';
import { PATH } from '@/constants/routes';
import { useAuthCheck } from '@/hooks/useAuthCheck';
import { SimpleCard } from './SimpleCard';

import { ButtonGroupStyle, ButtonStyle, CardStyle } from './Top.css';

export const Top = () => {
  useAuthCheck();
  const [count, setCount] = useState(0);
  const countStore = useAppSelector((state) => state.counter.value);
  const navigate = useNavigate();

  return (
    <>
      <h1>React_Vite_Sample</h1>

      <h2>Count up</h2>
      <div className={CardStyle}>
        <SimpleButton
          buttonName='Count Up'
          onClick={() => setCount((count) => count + 1)}
        />
        <p>count is {count}</p>
      </div>

      <h2>Count up with redux</h2>
      <SimpleCard minWidth={275} countStore={countStore} />

      <h2>Page</h2>
      <div className={ButtonGroupStyle}>
        <div className={ButtonStyle}>
          <SimpleButton
            buttonName='Register'
            onClick={() => navigate({ to: PATH.REGISTER })}
          />
        </div>
        <div className={ButtonStyle}>
          <SimpleButton
            color='secondary'
            buttonName='Customer'
            onClick={() => navigate({ to: PATH.CUSTOMER })}
          />
        </div>
        <div className={ButtonStyle}>
          <SimpleButton
            color='info'
            buttonName='GraphQL Sample'
            onClick={() => navigate({ to: PATH.BOOK })}
          />
        </div>
      </div>
    </>
  );
};
