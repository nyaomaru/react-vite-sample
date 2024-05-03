import { useState } from 'react';

import { SimpleButton } from '@/components/atoms/SimpleButton';
import { SimpleCard } from '@/components/molecules/SimpleCard';
import { useAppSelector } from '@/app/hooks';
import './App.css';

import { useNavigate } from 'react-router-dom';

function App() {
  const [count, setCount] = useState(0);
  const countStore = useAppSelector((state) => state.counter.value);
  const navigate = useNavigate();

  return (
    <>
      <h1>React_Vite_Sample</h1>
      <div className="card">
        <SimpleButton
          buttonName="Count Up"
          onClick={() => setCount((count) => count + 1)}
        ></SimpleButton>
        <p>count is {count}</p>
      </div>

      <SimpleCard minWidth={275} countStore={countStore}></SimpleCard>

      <SimpleButton
        buttonName="Page to Login"
        onClick={() => navigate('/login')}
      ></SimpleButton>

      <SimpleButton
        buttonName="Page to Register"
        onClick={() => navigate('/register')}
      ></SimpleButton>
    </>
  );
}

export default App;
