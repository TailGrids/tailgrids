import { Skeleton } from "@/registry/core/skeleton";

export default function SkeletonPreview() {
  return (
    <div className="flex flex-col gap-8 w-full max-w-2xl">
      {/* Text Lines */}
      <div>
        <h3 className="text-sm font-medium mb-3 text-neutral-700">
          Text Lines
        </h3>
        <div className="space-y-2">
          <Skeleton className="h-4 w-full" />
          <Skeleton className="h-4 w-5/6" />
          <Skeleton className="h-4 w-4/6" />
        </div>
      </div>

      {/* Card Skeleton */}
      <div>
        <h3 className="text-sm font-medium mb-3 text-neutral-700">Card</h3>
        <div className="border border-neutral-200 rounded-lg p-4 space-y-3">
          <Skeleton className="h-8 w-8 rounded-lg" />
          <Skeleton className="h-4 w-3/4" />
          <Skeleton className="h-3 w-full" />
          <Skeleton className="h-3 w-5/6" />
        </div>
      </div>

      {/* Avatar with Text */}
      <div>
        <h3 className="text-sm font-medium mb-3 text-neutral-700">
          Avatar with Text
        </h3>
        <div className="flex items-center gap-3">
          <Skeleton className="size-12 rounded-full" />
          <div className="space-y-2 flex-1">
            <Skeleton className="h-4 w-32" />
            <Skeleton className="h-3 w-48" />
          </div>
        </div>
      </div>

      {/* Different Shapes */}
      <div>
        <h3 className="text-sm font-medium mb-3 text-neutral-700">
          Different Shapes
        </h3>
        <div className="flex flex-wrap items-center gap-4">
          <Skeleton className="size-12 rounded-full" />
          <Skeleton className="size-12 rounded-lg" />
          <Skeleton className="h-12 w-32 rounded-lg" />
          <Skeleton className="h-10 w-24 rounded-lg" />
        </div>
      </div>

      {/* Blog Post Card */}
      <div>
        <h3 className="text-sm font-medium mb-3 text-neutral-700">
          Blog Post Card
        </h3>
        <div className="border border-neutral-200 rounded-lg overflow-hidden">
          <Skeleton className="h-48 w-full rounded-none" />
          <div className="p-4 space-y-3">
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
      </div>

      {/* List Items */}
      <div>
        <h3 className="text-sm font-medium mb-3 text-neutral-700">
          List Items
        </h3>
        <div className="space-y-3">
          {[1, 2, 3, 4].map(i => (
            <div key={i} className="flex items-center gap-3">
              <Skeleton className="size-10 rounded-lg" />
              <div className="space-y-2 flex-1">
                <Skeleton className="h-4 w-2/3" />
                <Skeleton className="h-3 w-1/3" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
