import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious
} from "@/registry/core/carousel";

export default function CarouselPreview() {
  return (
    <div className="w-full max-w-4xl mx-auto py-10">
      <Carousel className="w-full">
        <CarouselContent>
          {[1, 2, 3, 4, 5].map(el => (
            <CarouselItem key={el}>
              <div className="relative aspect-2/1 overflow-hidden rounded-xl border border-fd-border flex items-center justify-center">
                <p className="text-4xl text-title-50 font-semibold">{el}</p>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="left-4" />
        <CarouselNext className="right-4" />
      </Carousel>
    </div>
  );
}
