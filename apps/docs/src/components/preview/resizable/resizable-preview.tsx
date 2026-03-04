import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup
} from "@/registry/core/resizable";

export default function ResizablePreview() {
  return (
    <ResizablePanelGroup
      orientation="horizontal"
      className="min-h-50 w-full rounded-lg border border-(--border-color-base-200)"
    >
      <ResizablePanel defaultSize={25} minSize={20}>
        <div className="flex h-full items-center justify-center p-6">
          <span className="font-medium text-sm">Sidebar</span>
        </div>
      </ResizablePanel>
      <ResizableHandle />
      <ResizablePanel defaultSize={75}>
        <div className="flex h-full items-center justify-center p-6">
          <span className="font-medium text-sm">Main Content</span>
        </div>
      </ResizablePanel>
    </ResizablePanelGroup>
  );
}
