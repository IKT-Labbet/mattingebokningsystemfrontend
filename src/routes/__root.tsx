import TopBar from "@/components/ui/topbar";
import { Outlet, createRootRoute } from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/react-router-devtools";

export const Route = createRootRoute({
	component: () => (
		<>
			<TopBar />
			<Outlet />
			<TanStackRouterDevtools />
		</>
	),
});
