"use client";

import { Spinner } from "@/registry/core/spinner";

export default function SpinnerTypesPreview() {
  return (
    <div className="flex flex-wrap items-center gap-8">
      <div className="flex flex-col items-center gap-2">
        <Spinner type="default" />
        <span className="text-xs text-text-100">Default</span>
      </div>
      <div className="flex flex-col items-center gap-2">
        <Spinner type="dotted" />
        <span className="text-xs text-text-100">Dotted</span>
      </div>
      <div className="flex flex-col items-center gap-2">
        <Spinner type="dotted-round" />
        <span className="text-xs text-text-100">Dotted Round</span>
      </div>
    </div>
  );
}
