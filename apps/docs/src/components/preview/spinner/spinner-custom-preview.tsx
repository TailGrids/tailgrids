"use client";

import { Spinner } from "@/registry/core/spinner";

export default function SpinnerCustomPreview() {
  return (
    <div className="flex flex-wrap items-center gap-8">
      {/* Primary Color Spinner */}
      <div className="flex flex-col items-center gap-2">
        <Spinner className="text-primary-500" />
        <span className="text-xs text-neutral-500">Brand Color</span>
      </div>

      {/* Slow Motion Spinner */}
      <div className="flex flex-col items-center gap-2">
        <Spinner className="animate-[spin_3s_linear_infinite]" />
        <span className="text-xs text-neutral-500">Slow Motion</span>
      </div>

      {/* Dual Spinner Style */}
      <div className="relative flex flex-col items-center gap-2">
        <div className="relative size-12">
          <Spinner size="xxl" className="absolute inset-0 opacity-20" />
          <Spinner size="lg" className="absolute inset-0 m-auto" />
        </div>
        <span className="text-xs text-neutral-500">Dual Track</span>
      </div>
    </div>
  );
}
