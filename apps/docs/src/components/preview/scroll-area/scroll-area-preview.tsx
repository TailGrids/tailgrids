import {
  ScrollArea,
  ScrollAreaViewport,
  ScrollBar
} from "@/registry/core/scroll-area";

const tags = Array.from({ length: 50 }).map(
  (_, i, a) => `v1.2.0-beta.${a.length - i}`
);

export function ScrollAreaPreview() {
  return (
    <ScrollArea className="h-72 w-48 rounded-md border border-stroke-dark dark:border-dark-3 bg-background-50 dark:bg-dark-2">
      <ScrollAreaViewport className="p-4">
        <div className="text-sm font-medium text-body-color dark:text-dark-6 mb-4">
          Tags
        </div>
        {tags.map(tag => (
          <div
            key={tag}
            className="text-sm py-2 border-b border-stroke-dark dark:border-dark-3 last:border-0 text-body-color dark:text-dark-6"
          >
            {tag}
          </div>
        ))}
      </ScrollAreaViewport>
      <ScrollBar orientation="vertical" />
    </ScrollArea>
  );
}
