import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious
} from "@/registry/core/carousel";

const testimonials = [
  {
    content:
      "This carousel component is incredibly smooth. I love how easy it was to integrate with our design system.",
    author: "Jane Doe",
    role: "Lead Designer at TechCo"
  },
  {
    content:
      "Vertical orientation was exactly what we needed for our sidebar news feed. Performance is top-notch.",
    author: "John Smith",
    role: "Frontend Engineer at StartupX"
  },
  {
    content:
      "The API accessibility is fantastic. We were able to build complex custom navigation in minutes.",
    author: "Sarah Brown",
    role: "Product Manager at WebDev"
  }
];

export default function CarouselTestimonialsPreview() {
  return (
    <div className="w-full max-w-3xl mx-auto py-12 px-12">
      <Carousel className="w-full bg-background-50 rounded-3xl p-8 border border-color-base-100 shadow-sm">
        <CarouselContent>
          {testimonials.map((testimonial, index) => (
            <CarouselItem key={index}>
              <div className="flex flex-col items-center text-center space-y-6">
                <blockquote className="text-xl md:text-2xl font-medium text-title-50 italic">
                  &ldquo;{testimonial.content}&rdquo;
                </blockquote>
                <div className="space-y-1">
                  <p className="font-bold text-title-50">
                    {testimonial.author}
                  </p>
                  <p className="text-sm text-text-100">{testimonial.role}</p>
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="-left-12" />
        <CarouselNext className="-right-12" />
      </Carousel>
    </div>
  );
}
