import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
	component: App,
});

function App() {
	return (
		<div className="text-center flex justify-center items-center h-full">
			<div className="flex flex-col justify-center">
				MY NAME IS MATTINGE
			</div>
		</div>
	);
}
