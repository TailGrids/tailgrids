import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup
} from "@/registry/core/resizable";

export default function ResizableVertical() {
  return (
    <ResizablePanelGroup
      orientation="vertical"
      className="min-h-100 w-full rounded-lg border border-(--border-color-base-200)"
    >
      <ResizablePanel defaultSize={25}>
        <div className="flex h-full items-center justify-center p-6">
          <span className="font-medium text-sm">Header</span>
        </div>
      </ResizablePanel>
      <ResizableHandle />
      <ResizablePanel defaultSize={75}>
        <div className="flex h-full items-center justify-center p-6">
          <span className="font-medium text-sm">Content</span>
        </div>
      </ResizablePanel>
    </ResizablePanelGroup>
  );
}
