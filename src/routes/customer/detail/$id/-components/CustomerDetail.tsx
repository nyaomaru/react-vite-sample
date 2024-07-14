import { useSuspenseQuery } from '@tanstack/react-query';
import { useNavigate } from '@tanstack/react-router';

import { ErrorAlert } from '@/components/atoms/ErrorAlert';
import { SimpleButton } from '@/components/atoms/SimpleButton';
import { useAuthCheck } from '@/hooks/useAuthCheck';
import { CustomerDetailQueries } from '@/queries/customer.queries';

import { PATH } from '@/constants/routes';

import { ButtonStyle } from '@/routes/customer/-components/Customer.css';
import { DetailCard } from '@/routes/customer/-components/DetailCard';

import { Route } from '../route';

export const CustomerDetail = () => {
  useAuthCheck();

  const { id } = Route.useParams();
  const navigate = useNavigate();
  const { data, isError, error } = useSuspenseQuery(
    CustomerDetailQueries.getCustomerDetail(Number(id)),
  );

  return (
    <>
      <h2>Detail</h2>

      <h2>ID: {id}</h2>
      {isError && <ErrorAlert errorMessage={error?.message ?? ''} />}
      {data !== undefined && <DetailCard data={data} />}

      <div className={ButtonStyle}>
        <SimpleButton
          buttonName='Edit'
          buttonType='button'
          color='primary'
          onClick={() =>
            navigate({ to: PATH.CUSTOMER_EDIT.replace('$id', id ?? '') })
          }
        />
      </div>

      <div className={ButtonStyle}>
        <SimpleButton
          buttonName='Return'
          buttonType='button'
          color='secondary'
          onClick={() => navigate({ to: PATH.CUSTOMER })}
        />
      </div>
    </>
  );
};
