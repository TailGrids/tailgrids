import {
  ContextMenu,
  ContextMenuContent,
  ContextMenuItem,
  ContextMenuSeparator,
  ContextMenuShortcut,
  ContextMenuSub,
  ContextMenuSubContent,
  ContextMenuSubTrigger,
  ContextMenuTrigger
} from "@/registry/core/context-menu";

export function ContextMenuTextSelection() {
  return (
    <ContextMenu>
      <ContextMenuTrigger className="flex h-37.5 w-full max-w-75 items-center justify-center rounded-md border border-dashed border-border-color-base-100 p-4 text-center text-sm">
        Right click to format text
      </ContextMenuTrigger>
      <ContextMenuContent className="w-64">
        <ContextMenuItem>
          Cut
          <ContextMenuShortcut>⌘X</ContextMenuShortcut>
        </ContextMenuItem>
        <ContextMenuItem>
          Copy
          <ContextMenuShortcut>⌘C</ContextMenuShortcut>
        </ContextMenuItem>
        <ContextMenuItem>
          Paste
          <ContextMenuShortcut>⌘V</ContextMenuShortcut>
        </ContextMenuItem>
        <ContextMenuSeparator />
        <ContextMenuSub>
          <ContextMenuSubTrigger>Transform</ContextMenuSubTrigger>
          <ContextMenuSubContent className="w-48">
            <ContextMenuItem>Uppercase</ContextMenuItem>
            <ContextMenuItem>Lowercase</ContextMenuItem>
            <ContextMenuItem>Capitalize</ContextMenuItem>
          </ContextMenuSubContent>
        </ContextMenuSub>
        <ContextMenuSub>
          <ContextMenuSubTrigger>Font Styles</ContextMenuSubTrigger>
          <ContextMenuSubContent className="w-48">
            <ContextMenuItem>Bold</ContextMenuItem>
            <ContextMenuItem>Italic</ContextMenuItem>
            <ContextMenuItem>Underline</ContextMenuItem>
            <ContextMenuSeparator />
            <ContextMenuItem>Strikethrough</ContextMenuItem>
          </ContextMenuSubContent>
        </ContextMenuSub>
        <ContextMenuSeparator />
        <ContextMenuItem>Search Google for...</ContextMenuItem>
      </ContextMenuContent>
    </ContextMenu>
  );
}
