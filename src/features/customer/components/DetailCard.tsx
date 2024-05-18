import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

import { CardContentStyle } from '../Customer.css';

import type { CustomerDetailSchema } from '../schema';

type DetailCardProps = {
  data: CustomerDetailSchema;
};

export const DetailCard = ({ data }: DetailCardProps) => {
  return (
    <Card sx={{ minWidth: 275 }}>
      <CardContent className={CardContentStyle}>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          name
        </Typography>
        <Typography variant="h5" component="div">
          {data.name}
        </Typography>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          city
        </Typography>
        <Typography variant="h5" component="div">
          {data.city}
        </Typography>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          favorite
        </Typography>
        <Typography variant="h5" component="div">
          {data.favorite}
        </Typography>
      </CardContent>
    </Card>
  );
};
