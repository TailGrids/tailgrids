import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious
} from "@/registry/core/carousel";

export default function CarouselVerticalPreview() {
  return (
    <div className="w-full flex justify-center py-10">
      <Carousel
        orientation="vertical"
        opts={{
          align: "start"
        }}
        className="w-full max-w-md"
      >
        <CarouselContent className="-mt-1 h-100">
          {Array.from({ length: 5 }).map((_, index) => (
            <CarouselItem key={index} className="pt-1 basis-1/2">
              <div className="p-1 h-full">
                <div className="flex items-center justify-center rounded-xl border border-color-base-100 bg-background-soft-50 h-full p-6 transition-colors hover:bg-background-soft-100">
                  <span className="text-3xl font-semibold text-text-200">
                    Slide {index + 1}
                  </span>
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  );
}
