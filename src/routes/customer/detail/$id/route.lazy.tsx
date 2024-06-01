import { createLazyFileRoute } from '@tanstack/react-router';

import { CustomerDetail } from './-components/CustomerDetail';

export const Route = createLazyFileRoute('/customer/detail/$id')({
  component: CustomerDetail,
});
