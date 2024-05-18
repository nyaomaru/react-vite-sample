import { useNavigate, useParams } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';

import { ErrorAlert } from '@/components/atoms/ErrorAlert';
import { SimpleButton } from '@/components/atoms/SimpleButton';
import { useAuthCheck } from '@/hooks/useAuthCheck';
import { CustomerDetailQueries } from '@/queries/customer.queries';
import { PATH } from '@/pages/router/const';

import { ButtonStyle } from './Customer.css';

import { EditForm } from './components/EditForm';

export const CustomerEdit = () => {
  useAuthCheck();

  const { id } = useParams();
  const navigate = useNavigate();

  const { data, isError, error } = useQuery({
    ...CustomerDetailQueries.getCustomerDetail(Number(id)),
  });

  return (
    <>
      <h1>Customer edit page</h1>
      <h2>ID: {id}</h2>
      {isError && <ErrorAlert errorMessage={error.message} />}
      {data !== undefined && <EditForm id={id ?? ''} data={data} />}

      <div className={ButtonStyle}>
        <SimpleButton
          buttonName="Return"
          buttonType="button"
          color="secondary"
          onClick={() => navigate(PATH.CUSTOMER)}
        ></SimpleButton>
      </div>
    </>
  );
};
