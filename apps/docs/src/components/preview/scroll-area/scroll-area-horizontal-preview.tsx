import {
  ScrollArea,
  ScrollAreaViewport,
  ScrollBar
} from "@/registry/core/scroll-area";

const items = Array.from({ length: 20 }).map((_, i) => `Item ${i + 1}`);

export function ScrollAreaHorizontalPreview() {
  return (
    <ScrollArea className="w-full max-w-87.5 whitespace-nowrap rounded-md border border-stroke-dark dark:border-dark-3 bg-background-50 dark:bg-dark-2">
      <ScrollAreaViewport className="p-4">
        <div className="flex w-max space-x-4 border divide-x divide-stroke-dark rounded-[inherit]">
          {items.map(item => (
            <div
              key={item}
              className="flex h-37.5 w-37.5 shrink-0 items-center justify-center bg-gray-1 dark:bg-dark-3 text-sm font-medium text-body-color dark:text-dark-6 last:border-r-0"
            >
              {item}
            </div>
          ))}
        </div>
      </ScrollAreaViewport>
      <ScrollBar orientation="horizontal" />
    </ScrollArea>
  );
}
