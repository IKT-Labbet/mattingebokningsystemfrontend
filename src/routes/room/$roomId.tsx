import { Badge } from "@/components/ui/badge";
import { createFileRoute } from "@tanstack/react-router";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
} from "@/components/ui/carousel";
import { QueryClient, useQuery, useQueryClient } from "@tanstack/react-query";

export const Route = createFileRoute("/room/$roomId")({
  component: RouteComponent,
});

function RouteComponent() {
  const { roomId } = Route.useParams();
  const data = useQuery({})
  return (
    <>
      <div className="w-screen h-screen relative">
        <Carousel className="w-full h-full">
          <CarouselContent className="w-full h-full">
            {/* Slide 1 */}
            <CarouselItem className="w-full h-full relative">
              <img
                src="http://melker.se/bilder/webbetta.jpg"
                className="w-full h-full object-cover"
                alt="Slide 1"
              />
            </CarouselItem>

            {/* Slide 2 */}
            <CarouselItem className="w-full h-full relative">
              <img
                src="https://source.unsplash.com/random/1920x1080?city"
                className="w-full h-full object-cover"
                alt="Slide 2"
              />
            </CarouselItem>

            {/* Slide 3 */}
            <CarouselItem className="w-full h-full relative">
              <img
                src="https://source.unsplash.com/random/1920x1080?ocean"
                className="w-full h-full object-cover"
                alt="Slide 3"
              />
            </CarouselItem>
          </CarouselContent>

          {/* Navigation buttons (Inside the slides) */}
          <CarouselPrevious className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black text-white p-3 rounded-full" />
          <CarouselNext className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black text-white p-3 rounded-full" />
        </Carousel>
      </div>

      <div className="w-full h-[64vh] p-10">
        <div className="flex flex-row">
          <p className=" text-3xl">Rum nummer: {roomId}</p>
          <Badge className="flex justify-center  text-2xl ml-10">Badges!</Badge>
        </div>
        <h1 className="mt-10">här beskriv!</h1>
      </div>
    </>
  );
}
