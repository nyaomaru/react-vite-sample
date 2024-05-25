import { createFileRoute } from '@tanstack/react-router';
import { useNavigate } from '@tanstack/react-router';
import { useSuspenseQuery } from '@tanstack/react-query';

import { ErrorAlert } from '@/components/atoms/ErrorAlert';
import { SimpleButton } from '@/components/atoms/SimpleButton';
import { useAuthCheck } from '@/hooks/useAuthCheck';
import { CustomerDetailQueries } from '@/queries/customer.queries';
import { PATH } from '@/constant/routes';

import { ButtonStyle } from '@/features/customer/Customer.css';
import { DetailCard } from '@/features/customer/components/DetailCard';

export const Route = createFileRoute('/customer/detail/$id')({
  component: CustomerDetail,
});

function CustomerDetail() {
  useAuthCheck();

  const { id } = Route.useParams();
  const navigate = useNavigate();
  const { data, isError, error } = useSuspenseQuery({
    ...CustomerDetailQueries.getCustomerDetail(Number(id)),
  });

  return (
    <>
      <h1>Customer detail page</h1>
      <h2>ID: {id}</h2>
      {isError && <ErrorAlert errorMessage={error?.message ?? ''} />}
      {data !== undefined && <DetailCard data={data} />}

      <div className={ButtonStyle}>
        <SimpleButton
          buttonName='Edit'
          buttonType='button'
          color='primary'
          onClick={() => navigate({ to: PATH.CUSTOMER_EDIT.replace('$id', id ?? '') })}
        ></SimpleButton>
      </div>

      <div className={ButtonStyle}>
        <SimpleButton
          buttonName='Return'
          buttonType='button'
          color='secondary'
          onClick={() => navigate({ to: PATH.CUSTOMER })}
        ></SimpleButton>
      </div>
    </>
  );
}
