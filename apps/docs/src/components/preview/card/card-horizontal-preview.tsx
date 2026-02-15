"use client";

import { Button } from "@/registry/core/button";
import { Card } from "@/registry/core/card";
import { ChevronRight } from "@tailgrids/icons";
import Image from "next/image";

export default function CardHorizontalPreview() {
  return (
    <div className="w-full max-w-200 flex flex-col items-center gap-8 mx-auto md:p-8">
      {/* Horizontal Card Section */}
      <div className="flex flex-col gap-3 w-full">
        <Card className="flex-col md:flex-row overflow-hidden border-none shadow-none md:min-w-0 bg-card-background-50">
          <div className="flex-1 p-6 md:p-8 flex flex-col justify-center">
            <h3 className="text-xl md:text-2xl font-bold text-title-50 mb-2 leading-tight">
              Barry Geraghty’s blog Vango runs unchained up in trip.
            </h3>
            <p className="text-text-100 mb-6 text-sm leading-6">
              William Hill ambassador Barry Geraghty previews Saturday’s races
              at Uttoxeter, Kempton, and Thurles.
            </p>
            <div>
              <Button variant="primary" className="rounded-lg px-6 py-2.5">
                Learn More
                <ChevronRight size={24} />
              </Button>
            </div>
          </div>
          <div className="relative w-full md:max-w-70 h-76.5 shrink-0 order-first md:order-last">
            <Image
              src="/docs/images/demo/building-2.webp"
              alt="Barry Geraghty’s blog Vango runs unchained up in trip."
              className="object-cover"
              fill
            />
          </div>
        </Card>
      </div>

      {/* Separator */}
      <div className="w-full h-px bg-(--border-color-base-100)" />

      {/* Vertical Card Section */}
      <div className="flex flex-col gap-3 w-full max-w-92.5">
        <Card className="w-full flex flex-col overflow-hidden border-none shadow-none">
          <div className="relative w-full h-60">
            <Image
              src="/docs/images/demo/building-2.webp"
              alt="Barry Geraghty’s blog Vango runs unchained up in trip."
              fill
              className="object-cover"
            />
          </div>
          <div className="p-6">
            <h3 className="text-xl font-bold text-title-50 mb-2 leading-tight">
              Barry Geraghty’s blog Vango runs unchained up in trip.
            </h3>
            <p className="text-text-100 mb-6 text-sm leading-6">
              William Hill ambassador Barry Geraghty previews Saturday’s races
              at Uttoxeter, Kempton, and Thurles.
            </p>
            <Button
              variant="primary"
              className="w-full rounded-lg py-2.5 justify-center"
            >
              Learn More
              <ChevronRight size={24} />
            </Button>
          </div>
        </Card>
      </div>
    </div>
  );
}
