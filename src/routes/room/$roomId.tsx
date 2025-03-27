import { Badge } from "@/components/ui/badge";
import { createFileRoute } from "@tanstack/react-router";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { CalendarComponent } from '@syncfusion/ej2-react-calendars';

export const Route = createFileRoute("/room/$roomId")({
  component: RouteComponent,
});

function RouteComponent() {
  const { roomId } = Route.useParams();
  return (
    <div className="bg-neutral-500 w-[full] h-[100vh}">
      <div className="w-[full] h-[10vh] bg-green-500 text-center flex justify-evenly items-center ">
        <img src="${}" alt="NIGG"></img>
      </div>
      <div className="w-[full] h-[10vh] text-center flex justify-evenly items-center ">
      <h1 >här skrivs beskrivning av rum</h1>
      </div>
      <div className="w-[full] h-[40vh]  text-center flex justify-center items-center">
        <Accordion type="single" collapsible className=" w-[30vw] border-4 border-black border-1px p-10 rounded-sm">
          <AccordionItem value="item-1" >
            <AccordionTrigger>När kan rummet bokas?</AccordionTrigger>
            <AccordionContent>
            <CalendarComponent id="calendar" className="border-4 border-black border-1px p-3" />
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
      <Badge className="flex justify-center">{roomId}</Badge>
    </div>
  );
}
