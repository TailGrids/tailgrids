import {
  ScrollArea,
  ScrollAreaViewport,
  ScrollBar
} from "@/registry/core/scroll-area";

export function ScrollAreaBothPreview() {
  return (
    <ScrollArea className="h-72 w-full max-w-100 rounded-md border border-stroke-dark dark:border-dark-3 bg-white dark:bg-dark-2">
      <ScrollAreaViewport className="p-4">
        <div className="w-150 h-125 p-4 bg-linear-to-br from-primary/10 to-secondary/10 rounded-lg flex items-center justify-center">
          <div className="text-center">
            <h3 className="text-lg font-bold text-dark dark:text-white mb-2">
              Multi-axis Scroll content
            </h3>
            <p className="text-body-color dark:text-dark-6 max-w-xs mx-auto">
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
