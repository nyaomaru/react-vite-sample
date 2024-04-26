import { useState } from 'react';
import { SimpleButton } from '@/components/atoms/SimpleButton';
import './App.css';

function App() {
  const [count, setCount] = useState(0);

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
    </>
  );
}

export default App;
