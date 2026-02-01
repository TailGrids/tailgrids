import { Skeleton } from "@/registry/core/skeleton";

export default function SkeletonShapesPreview() {
  return (
    <div className="flex w-full max-w-sm flex-wrap items-center gap-4">
      {/* Circle */}
      <Skeleton className="size-12 rounded-full" />

      {/* Square */}
      <Skeleton className="size-12 rounded-lg" />

      {/* Rectangle */}
      <Skeleton className="h-10 w-24 rounded-lg" />

      {/* Line */}
      <Skeleton className="h-1 w-32" />
    </div>
  );
}
