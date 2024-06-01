import { createLazyFileRoute } from '@tanstack/react-router';

import { Customer } from './-components/Customer';

export const Route = createLazyFileRoute('/customer')({
  component: Customer,
});
