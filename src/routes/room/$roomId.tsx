import { Badge } from "@/components/ui/badge";
import { createFileRoute } from "@tanstack/react-router";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export const Route = createFileRoute("/room/$roomId")({
  component: RouteComponent,
});

function RouteComponent() {
  const { roomId } = Route.useParams();
  return (
    <div className="w-[full] h-[100vh} flex flex-col">
      <img
        className="w-full aspect-16/9 max-h-120 object-cover"
        src="https://cdn.discordapp.com/attachments/954001456405577788/1354801941011632249/claudio2.jpg?ex=67e69d21&is=67e54ba1&hm=7eee8881ffe05d1fb96b5a00bd9405352cdec580596eae68f48dff91edfa9d84&"
        alt="hensida"
      ></img>
      <div className="w-full h-[64vh] p-10">
        <div className="flex flex-row">
          <p className=" text-3xl">Rum nummer: {roomId}</p>
          <Badge className="flex justify-center  text-2xl ">Badges!</Badge>
        </div>
        <h1 className="mt-10">här beskriv!</h1>
      </div>
    </div>
  );
}
