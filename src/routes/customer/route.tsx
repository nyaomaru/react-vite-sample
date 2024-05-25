import { createFileRoute, Outlet, useNavigate, useLocation } from '@tanstack/react-router';

import { SimpleButton } from '@/components/atoms/SimpleButton';
import { useAuthCheck } from '@/hooks/useAuthCheck';
import { PATH } from '@/constant/routes';

import { ButtonStyle } from '@/features/customer/Customer.css';

export const Route = createFileRoute('/customer')({
  component: Customer,
});

function Customer() {
  useAuthCheck();
  const navigate = useNavigate();

  const location = useLocation();
  console.log(location.pathname);

  return (
    <>
      <h1>Customer page</h1>
      <Outlet></Outlet>

      {location.pathname === PATH.CUSTOMER && (
        <>
          <div className={ButtonStyle}>
            <SimpleButton
              buttonName='List'
              buttonType='button'
              color='primary'
              onClick={() => navigate({ to: PATH.CUSTOMER_LIST })}
            ></SimpleButton>
          </div>

          <div className={ButtonStyle}>
            <SimpleButton
              buttonName='Return'
              buttonType='button'
              color='secondary'
              onClick={() => navigate({ to: PATH.TOP })}
            ></SimpleButton>
          </div>
        </>
      )}
    </>
  );
}
