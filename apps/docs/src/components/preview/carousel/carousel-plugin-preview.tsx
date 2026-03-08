"use client";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious
} from "@/registry/core/carousel";
import Autoplay from "embla-carousel-autoplay";

export default function CarouselPluginPreview() {
  return (
    <div className="w-full max-w-5xl mx-auto py-10">
      <Carousel
        opts={{
          align: "start",
          loop: true
        }}
        plugins={[
          Autoplay({
            delay: 2000
          })
        ]}
        className="w-full"
      >
        <CarouselContent className="-ml-2 md:-ml-4">
          {[1, 2, 3, 4, 5].map(el => (
            <CarouselItem key={el}>
              <div className="relative aspect-2/1 overflow-hidden rounded-xl border border-fd-border flex items-center justify-center">
                <p className="text-4xl text-title-50 font-semibold">{el}</p>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <div className="flex justify-end gap-2 mt-4">
          <CarouselPrevious className="static translate-y-0" />
          <CarouselNext className="static translate-y-0" />
        </div>
      </Carousel>
    </div>
  );
}
