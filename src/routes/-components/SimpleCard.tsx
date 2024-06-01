import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

import { Counter } from '@/routes/-components/Counter';

type SimpleCardProps = {
  countStore: number;
  minWidth: number;
};

export const SimpleCard: React.FC<SimpleCardProps> = ({ countStore, minWidth = 275 }) => {
  return (
    <Card sx={{ minWidth: minWidth }}>
      <CardContent>
        <Typography sx={{ fontSize: 14 }} color='text.secondary' gutterBottom>
          Nyaomaru test
        </Typography>
        <Typography sx={{ mb: 1.5 }} color='text.secondary'>
          Nyaomaru test
        </Typography>
        <Typography variant='body2'>{countStore}</Typography>
      </CardContent>
      <CardActions>
        <Counter></Counter>
      </CardActions>
    </Card>
  );
};
