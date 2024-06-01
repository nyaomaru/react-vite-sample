import { createFileRoute } from '@tanstack/react-router';
import { QueryClient } from '@tanstack/react-query';

import { CustomerDetailQueries } from '@/queries/customer.queries';

const queryClient = new QueryClient();

export const Route = createFileRoute('/customer/detail/$id')({
  loader: ({ params: { id } }) =>
    queryClient.ensureQueryData(
      CustomerDetailQueries.getCustomerDetail(Number(id)),
    ),
});
