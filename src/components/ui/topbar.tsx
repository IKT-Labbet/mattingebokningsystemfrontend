import { Menu } from "lucide-react";

export default function TopBar() {
	return <div className="w-full h-16 grid grid-cols-3 grid-rows-1 gap-4 p-4 shadow-md items-center">
		<div className="place-self-start" />
		<div className="text-2xl place-self-center">Mattinge</div>
		<Menu className="place-self-end"/>
	</div>;
}