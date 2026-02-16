"use client";

import { Card, CardAction, CardHeader } from "@/registry/core/card";
import Image from "next/image";

export default function CardWithBadgePreview() {
  return (
    <Card className="w-full max-w-92.5 rounded-[20px] overflow-hidden">
      <CardHeader className="p-0">
        <div className="relative w-full aspect-350/240">
          <Image
            src="/docs/images/demo/building-2.webp"
            alt="Building with balloons"
            className="w-full h-full object-cover"
            width={350}
            height={240}
          />
          <CardAction className="bg-background-100 rounded-[10px] w-12 h-13.5 flex flex-col items-center justify-center shadow-card-2">
            <span className="text-lg font-bold text-title-50 leading-none mb-0.5">
              17
            </span>
            <span className="text-xs font-medium text-text-100 leading-none">
              Mar
            </span>
          </CardAction>
        </div>
        <div className="p-5">
          <span className="block text-base font-medium text-text-100">
            Cartoon
          </span>
          <h3 className="text-xl md:text-2xl mt-2 font-bold text-title-50 leading-tight">
            Behind the Scenes of Popular Cartoons
          </h3>
        </div>
      </CardHeader>
    </Card>
  );
}
