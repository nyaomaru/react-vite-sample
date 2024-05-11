import { useNavigate, useParams } from 'react-router-dom';

import { SimpleButton } from '@/components/atoms/SimpleButton';
import { useAuthCheck } from '@/hooks/useAuthCheck';
import { PATH } from '@/pages/router/const';

export const CustomerDetail = () => {
  useAuthCheck();

  const { id } = useParams();
  const navigate = useNavigate();

  return (
    <>
      <h1>Customer detail page</h1>
      <h2>ID: {id}</h2>
      <SimpleButton
        buttonName="Return"
        buttonType="button"
        color="secondary"
        onClick={() => navigate(PATH.CUSTOMER)}
      ></SimpleButton>
    </>
  );
};
