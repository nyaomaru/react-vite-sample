import { createFileRoute } from '@tanstack/react-router';

import { CustomerList } from './-components/CustomerList';

export const Route = createFileRoute('/customer/list')({
  component: CustomerList,
});
