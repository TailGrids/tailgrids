"use client";

import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger
} from "@/registry/core/hover-card";
import Image from "next/image";

export default function HoverCardProductPreview() {
  return (
    <div className="flex justify-center p-10">
      <HoverCard>
        <HoverCardTrigger
          href="#"
          className="text-title-50 font-semibold border-b border-dashed border-title-50/50 hover:border-title-50 transition-colors"
        >
          Luxury Building
        </HoverCardTrigger>

        <HoverCardContent className="w-64 p-0 overflow-hidden border-none shadow-xl">
          <div className="relative h-40 w-full">
            <Image
              src={"/docs/images/demo/building.webp"}
              alt="Product"
              fill
              className="object-cover"
            />
          </div>
          <div className="p-4 space-y-2">
            <div className="flex justify-between items-start">
              <h4 className="text-sm font-bold text-title-50">
                Luxury Building
              </h4>
              <span className="text-sm font-bold text-primary-500">
                $4900.00
              </span>
            </div>
            <p className="text-xs text-text-100">
              Experience unparalleled comfort and elegance in this modern
              architectural masterpiece located in the heart of the city.
            </p>
            <button className="w-full py-2 bg-title-50 text-background-50 text-[10px] font-bold uppercase tracking-widest rounded transition-colors hover:bg-title-50/90 mt-2">
              View Details
            </button>
          </div>
        </HoverCardContent>
      </HoverCard>
    </div>
  );
}
