import {
  ScrollArea,
  ScrollAreaViewport,
  ScrollBar
} from "@/registry/core/scroll-area";

const items = Array.from({ length: 20 }).map((_, i) => `Item ${i + 1}`);

export function ScrollAreaHorizontalPreview() {
  return (
    <ScrollArea className="w-full max-w-87.5 border bg-background-50 whitespace-nowrap rounded-md">
      <ScrollAreaViewport className="p-4">
        <div className="w-max border flex space-x-4 divide-x rounded-[inherit]">
          {items.map(item => (
            <div
              key={item}
              className="h-37.5 w-37.5 flex shrink-0 items-center justify-center text-sm text-text-50 font-medium last:border-r-0"
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
