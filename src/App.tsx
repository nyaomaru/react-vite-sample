import { useState } from 'react';

import { Counter } from '@/features/counter/Counter';
import { SimpleButton } from '@/components/atoms/SimpleButton';
import { useAppSelector } from '@/app/hooks';
import './App.css';

import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

function App() {
  const [count, setCount] = useState(0);
  const countStore = useAppSelector((state) => state.counter.value);

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

      <Card sx={{ minWidth: 275 }}>
        <CardContent>
          <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
            Nyaomaru test
          </Typography>
          <Typography sx={{ mb: 1.5 }} color="text.secondary">
            Nyaomaru test
          </Typography>
          <Typography variant="body2">{countStore}</Typography>
        </CardContent>
        <CardActions>
          <Counter></Counter>
        </CardActions>
      </Card>
    </>
  );
}

export default App;
