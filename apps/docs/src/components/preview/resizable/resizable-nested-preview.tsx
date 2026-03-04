import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup
} from "@/registry/core/resizable";

export default function ResizableNested() {
  return (
    <ResizablePanelGroup
      orientation="horizontal"
      className="max-h-100 min-h-100 w-full rounded-lg border border-(--border-color-base-200)"
    >
      <ResizablePanel defaultSize={40} minSize={30}>
        <div className="flex h-full items-center justify-center p-6">
          <span className="font-medium text-sm">Sidebar</span>
        </div>
      </ResizablePanel>

      <ResizableHandle withHandle />

      <ResizablePanel defaultSize={60}>
        <ResizablePanelGroup orientation="vertical">
          <ResizablePanel defaultSize={40}>
            <div className="flex h-full items-center justify-center p-6">
              <span className="font-medium text-sm">Top Content</span>
            </div>
          </ResizablePanel>

          <ResizableHandle withHandle />

          <ResizablePanel defaultSize={60}>
            <div className="flex h-full items-center justify-center p-6">
              <span className="font-medium text-sm">Bottom Content</span>
            </div>
          </ResizablePanel>
        </ResizablePanelGroup>
      </ResizablePanel>
    </ResizablePanelGroup>
  );
}
