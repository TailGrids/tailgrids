"use client";

import { Spinner } from "@/registry/core/spinner";

export default function SpinnerPreview() {
  return (
    <div className="flex flex-col gap-8 w-full">
      {/* Types */}
      <div>
        <h3 className="text-sm font-medium mb-4 text-neutral-700">Types</h3>
        <div className="flex flex-wrap items-center gap-8">
          <div className="flex flex-col items-center gap-2">
            <Spinner type="default" />
            <span className="text-xs text-neutral-500">Default</span>
          </div>
          <div className="flex flex-col items-center gap-2">
            <Spinner type="dotted" />
            <span className="text-xs text-neutral-500">Dotted</span>
          </div>
          <div className="flex flex-col items-center gap-2">
            <Spinner type="dotted-round" />
            <span className="text-xs text-neutral-500">Dotted Round</span>
          </div>
        </div>
      </div>

      {/* Sizes */}
      <div>
        <h3 className="text-sm font-medium mb-4 text-neutral-700">Sizes</h3>
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
      </div>
    </div>
  );
}
