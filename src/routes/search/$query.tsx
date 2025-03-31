import { createFileRoute, Outlet } from '@tanstack/react-router'

export const Route = createFileRoute('/search/$query')({
  component: RouteComponent,
})

function RouteComponent() {
  return <Outlet />
}
