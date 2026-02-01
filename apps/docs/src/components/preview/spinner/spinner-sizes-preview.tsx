"use client";

import { Spinner } from "@/registry/core/spinner";

export default function SpinnerSizesPreview() {
  return (
    <div className="flex flex-wrap items-end gap-6">
      <div className="flex flex-col items-center gap-2">
        <Spinner size="sm" />
        <span className="text-xs text-neutral-500">Small</span>
      </div>
      <div className="flex flex-col items-center gap-2">
        <Spinner size="md" />
        <span className="text-xs text-neutral-500">Medium</span>
      </div>
      <div className="flex flex-col items-center gap-2">
        <Spinner size="lg" />
        <span className="text-xs text-neutral-500">Large</span>
      </div>
      <div className="flex flex-col items-center gap-2">
        <Spinner size="xl" />
        <span className="text-xs text-neutral-500">XL</span>
      </div>
      <div className="flex flex-col items-center gap-2">
        <Spinner size="xxl" />
        <span className="text-xs text-neutral-500">2XL</span>
      </div>
    </div>
  );
}
