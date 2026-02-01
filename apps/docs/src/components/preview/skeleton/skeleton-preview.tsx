import { Skeleton } from "@/registry/core/skeleton";

export default function SkeletonPreview() {
  return (
    <div className="w-full max-w-sm space-y-2">
      <Skeleton className="h-4 w-full" />
      <Skeleton className="h-4 w-5/6" />
      <Skeleton className="h-4 w-4/6" />
    </div>
  );
}
