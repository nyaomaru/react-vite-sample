import { QueryClient } from '@tanstack/react-query';
import { createFileRoute } from '@tanstack/react-router';

import { CustomerDetailQueries } from '@/queries/customer.queries';

const queryClient = new QueryClient();

export const Route = createFileRoute('/customer/edit/$id')({
  loader: ({ params: { id } }) =>
    queryClient.ensureQueryData(
      CustomerDetailQueries.getCustomerDetail(Number(id)),
    ),
});
