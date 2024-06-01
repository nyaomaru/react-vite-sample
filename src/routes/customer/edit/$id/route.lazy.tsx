import { createLazyFileRoute } from '@tanstack/react-router';

import { CustomerEdit } from './-components/CustomerEdit';

export const Route = createLazyFileRoute('/customer/edit/$id')({
  component: CustomerEdit,
});
