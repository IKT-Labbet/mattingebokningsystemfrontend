import { Button } from "@/components/ui/button";
import { DatePicker } from "@/components/ui/datepicker";
import { Input } from "@/components/ui/input";
import {
	Popover,
	PopoverContent,
	PopoverTrigger,
	Portal,
} from "@radix-ui/react-popover";
import { createFileRoute } from "@tanstack/react-router";
import { Minus, Plus, Search, User } from "lucide-react";

export const Route = createFileRoute("/search/")({
	component: RouteComponent,
});

function RouteComponent() {
	return (
		<div className="w-full p-5 justify-center flex select-none">
			<div className="flex w-max items-center space-x-2 flex-row gap-4">
				<div className="relative">
					<Search
						className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
						size={18}
					/>
					<Input type="text" placeholder="" className="pl-10" />
				</div>
				<DatePicker />
				<Popover>
					<PopoverTrigger asChild>
						<Button variant="outline">
							<User className="text-gray-400" />4 vuxna • 2 barn • 1 rum
						</Button>
					</PopoverTrigger>
					<Portal>
						<PopoverContent className="w-80 shadow-md p-4 rounded-md mt-5 select-none">
							<div className="flex flex-row gap-4 justify-between items-center font-medium">
								Vuxna
								<div className="flex gap-2 justify-center items-center">
									<Minus className="hover:bg-neutral-400/20 rounded-sm transition-colors"/>
									4
									<Plus />
								</div>
							</div>
						</PopoverContent>
					</Portal>
				</Popover>
				<Button className="w-20">Sök</Button>
			</div>
		</div>
	);
}
