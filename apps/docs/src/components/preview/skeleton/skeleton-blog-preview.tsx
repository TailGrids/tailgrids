import { Skeleton } from "@/registry/core/skeleton";

export default function SkeletonBlogPreview() {
  return (
    <div className="w-full max-w-sm overflow-hidden rounded-lg border border-neutral-200 dark:border-neutral-800">
      <Skeleton className="h-48 w-full rounded-none" />
      <div className="space-y-3 p-4">
        <Skeleton className="h-6 w-3/4" />
        <Skeleton className="h-4 w-full" />
        <Skeleton className="h-4 w-5/6" />
        <Skeleton className="h-4 w-4/6" />
        <div className="flex items-center gap-2 pt-2">
          <Skeleton className="size-8 rounded-full" />
          <Skeleton className="h-3 w-24" />
        </div>
      </div>
    </div>
  );
}
