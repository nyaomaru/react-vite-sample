import { createFileRoute } from '@tanstack/react-router';
import { QueryClient } from '@tanstack/react-query';

import { CustomerQueries } from '@/queries/customer.queries';

const queryClient = new QueryClient();

export const Route = createFileRoute('/customer/list')({
  loader: () => queryClient.ensureQueryData(CustomerQueries.getCustomerList()),
});
