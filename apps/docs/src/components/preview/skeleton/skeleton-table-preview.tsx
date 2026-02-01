import { Skeleton } from "@/registry/core/skeleton";

export default function SkeletonTablePreview() {
  return (
    <div className="w-full max-w-sm space-y-3">
      <Skeleton className="h-10 w-full rounded-lg" />
      <Skeleton className="h-8 w-full" />
      <Skeleton className="h-8 w-full" />
      <Skeleton className="h-8 w-full" />
    </div>
  );
}
