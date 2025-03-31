import { Button } from "@/components/ui/button";
import { DatePicker } from "@/components/ui/datepicker";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
	component: App,
});

function App() {
	return (
		<div className="text-center flex justify-center items-center h-80">
			<div className="flex flex-col justify-center">
				MY NAME IS MATTINGE
				<Button variant="outline" className="">Hello im mr Buton</Button>
				<DatePicker />
			</div>
		</div>
	);
}
