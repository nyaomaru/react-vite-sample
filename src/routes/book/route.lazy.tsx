import { createLazyFileRoute } from '@tanstack/react-router';
import { Book } from './-components/Book';

export const Route = createLazyFileRoute('/book')({
  component: BookPage,
});

function BookPage() {
  return <Book />;
}
