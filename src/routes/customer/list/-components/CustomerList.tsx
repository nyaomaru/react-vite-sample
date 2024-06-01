import { useNavigate } from '@tanstack/react-router';
import { useSuspenseQuery } from '@tanstack/react-query';

import { ErrorAlert } from '@/components/atoms/ErrorAlert';
import { SimpleButton } from '@/components/atoms/SimpleButton';
import { CustomerQueries } from '@/queries/customer.queries';

import { PATH } from '@/constant/routes';

import { ButtonStyle } from '@/routes/customer/-components/Customer.css';
import { CustomerTable } from '@/routes/customer/-components/CustomerTable';

export const CustomerList = () => {
  const navigate = useNavigate();

  const { data, isError, error } = useSuspenseQuery({
    ...CustomerQueries.getCustomerList(),
  });

  return (
    <>
      {isError && <ErrorAlert errorMessage={error?.message ?? ''} />}
      {data !== undefined && <CustomerTable data={data} />}

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
};
