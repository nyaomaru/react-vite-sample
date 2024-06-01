import { createLazyFileRoute } from '@tanstack/react-router';
import { Login } from './-components/Login';

export const Route = createLazyFileRoute('/login')({
  component: LoginPage,
});

function LoginPage() {
  return <Login />;
}
