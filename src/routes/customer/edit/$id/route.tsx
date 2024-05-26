import { createFileRoute, useNavigate } from '@tanstack/react-router';
import { useSuspenseQuery, QueryClient } from '@tanstack/react-query';

import { ErrorAlert } from '@/components/atoms/ErrorAlert';
import { SimpleButton } from '@/components/atoms/SimpleButton';
import { useAuthCheck } from '@/hooks/useAuthCheck';
import { CustomerDetailQueries } from '@/queries/customer.queries';
import { PATH } from '@/constant/routes';

import { ButtonStyle } from '@/features/customer/Customer.css';
import { EditForm } from '@/features/customer/components/EditForm';

const queryClient = new QueryClient();

export const Route = createFileRoute('/customer/edit/$id')({
  component: CustomerEdit,
  loader: ({ params: { id } }) => queryClient.ensureQueryData(CustomerDetailQueries.getCustomerDetail(Number(id))),
});

function CustomerEdit() {
  useAuthCheck();

  const { id } = Route.useParams();
  const navigate = useNavigate();

  const { data, isError, error } = useSuspenseQuery({
    ...CustomerDetailQueries.getCustomerDetail(Number(id)),
  });

  return (
    <>
      <h1>Customer edit page</h1>
      <h2>ID: {id}</h2>
      {isError && <ErrorAlert errorMessage={error?.message ?? ''} />}
      {data !== undefined && <EditForm id={id ?? ''} data={data} />}

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
