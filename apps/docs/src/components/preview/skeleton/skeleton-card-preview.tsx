import { Skeleton } from "@/registry/core/skeleton";

export default function SkeletonCardPreview() {
  return (
    <div className="w-full max-w-sm space-y-3 rounded-lg border border-neutral-200 p-4 dark:border-neutral-800">
      <Skeleton className="h-8 w-8 rounded-lg" />
      <Skeleton className="h-4 w-3/4" />
      <Skeleton className="h-3 w-full" />
      <Skeleton className="h-3 w-5/6" />
    </div>
  );
}
