import {
  ScrollArea,
  ScrollAreaViewport,
  ScrollBar
} from "@/registry/core/scroll-area";

export function ScrollAreaBothPreview() {
  return (
    <ScrollArea className="h-72 w-full max-w-100 border bg-white rounded-md">
      <ScrollAreaViewport className="p-4">
        <div className="w-150 h-125 p-4 flex items-center justify-center rounded-lg">
          <div className="text-center">
            <h3 className="mb-2 text-lg font-bold text-black dark:text-white">
              Multi-axis Scroll content
            </h3>
            <p className="max-w-xs mx-auto text-black dark:text-white">
              This area is larger than its container in both directions,
              demonstrating vertical and horizontal scrollbars.
            </p>
          </div>
        </div>
      </ScrollAreaViewport>
      <ScrollBar orientation="vertical" />
      <ScrollBar orientation="horizontal" />
    </ScrollArea>
  );
}
