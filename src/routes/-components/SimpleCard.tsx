import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

import { Counter } from '@/routes/-components/Counter';
import { CounterButtonStyle } from '@/routes/-components/SimpleCard.css';

type SimpleCardProps = {
  countStore: number;
  minWidth: number;
};

export const SimpleCard: React.FC<SimpleCardProps> = ({ countStore, minWidth = 275 }) => {
  return (
    <Card sx={{ minWidth: minWidth }}>
      <CardContent>
        <Typography sx={{ mb: 1.5 }} color='text.secondary'>
          Nyaomaru test
        </Typography>
        <Typography variant='body2'>{countStore}</Typography>
      </CardContent>
      <CardActions className={CounterButtonStyle}>
        <Counter />
      </CardActions>
    </Card>
  );
};
