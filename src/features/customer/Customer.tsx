import { useNavigate } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';

import { ErrorAlert } from '@/components/atoms/ErrorAlert';
import { SimpleButton } from '@/components/atoms/SimpleButton';
import { useAuthCheck } from '@/hooks/useAuthCheck';
import { CustomerQueries } from '@/queries/customer.queries';
import { PATH } from '@/pages/router/const';

import { CustomerTable } from './components/CustomerTable';

export const Customer = () => {
  useAuthCheck();

  const navigate = useNavigate();

  const { data, isError, error } = useQuery({
    ...CustomerQueries.getCustomerList(),
  });

  return (
    <>
      <h1>Customer page</h1>
      {isError && <ErrorAlert errorMessage={error.message} />}
      {data !== undefined && <CustomerTable data={data} />}
      <SimpleButton
        buttonName="Return"
        buttonType="button"
        color="secondary"
        onClick={() => navigate(PATH.TOP)}
      ></SimpleButton>
    </>
  );
};
