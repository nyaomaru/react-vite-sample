import { createLazyFileRoute } from "@tanstack/react-router";
import { Top } from "@/features/top/Top";

export const Route = createLazyFileRoute("/")({
  component: Index,
});

function Index() {
  return <Top />;
}
