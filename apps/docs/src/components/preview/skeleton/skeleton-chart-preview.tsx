import { Skeleton } from "@/registry/core/skeleton";

export default function SkeletonChartPreview() {
  return (
    <div className="flex w-full max-w-xl items-center gap-12 py-4">
      {/* Bar Chart Skeleton */}
      <div className="flex h-32 items-end gap-2">
        <Skeleton className="h-[40%] w-8 rounded-md" />
        <Skeleton className="h-[60%] w-8 rounded-md" />
        <Skeleton className="h-[80%] w-8 rounded-md" />
        <Skeleton className="h-full w-8 rounded-md" />
        <Skeleton className="h-[50%] w-8 rounded-md" />
      </div>

      {/* Stats/Data Skeleton */}
      <div className="flex-1 space-y-3">
        <Skeleton className="h-4 w-full" />
        <Skeleton className="h-4 w-[60%]" />
        <Skeleton className="h-4 w-[85%]" />
        <Skeleton className="h-4 w-full" />
        <Skeleton className="h-4 w-[80%]" />
      </div>
    </div>
  );
}
