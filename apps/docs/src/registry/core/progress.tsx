"use client";

import { cn } from "@/utils/cn";

type ProgressProps = {
  progress: number;
  withLabel?: boolean;
  className?: string;
};

export function Progress({ progress, withLabel, className }: ProgressProps) {
  return (
    <div className={cn("flex max-w-80 items-center gap-3", className)}>
      <div
        className="relative h-2 w-full rounded-full bg-(--border-color-base-100)"
        style={{
          // Fix overflow clipping in Safari
          // https://gist.github.com/domske/b66047671c780a238b51c51ffde8d3a0
          transform: "translateZ(0)"
        }}
        aria-valuemax={100}
        aria-valuemin={0}
        aria-valuenow={progress}
        aria-valuetext={`${progress}%`}
        role="progressbar"
      >
        <div className="size-full overflow-hidden rounded-full">
          <div
            className="bg-primary-500 size-full rounded-full text-center"
            style={{ transform: `translateX(-${100 - progress}%)` }}
          />
        </div>
      </div>

      {withLabel && (
        <div className="text-sm leading-none font-medium text-text-50">
          {progress}%
        </div>
      )}
    </div>
  );
}
