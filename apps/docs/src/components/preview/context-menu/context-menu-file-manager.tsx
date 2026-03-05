import {
  ContextMenu,
  ContextMenuContent,
  ContextMenuGroup,
  ContextMenuItem,
  ContextMenuLabel,
  ContextMenuSeparator,
  ContextMenuShortcut,
  ContextMenuTrigger
} from "@/registry/core/context-menu";
import {
  Copy4,
  Download1,
  InfoCircle,
  Pencil1,
  ShareNodes,
  Trash1
} from "@tailgrids/icons";

export function ContextMenuFileManager() {
  return (
    <ContextMenu>
      <ContextMenuTrigger className="flex h-37.5 w-full max-w-75 items-center justify-center rounded-md border border-dashed border-border-color-base-100 text-sm">
        Right click on file
      </ContextMenuTrigger>
      <ContextMenuContent className="w-64">
        <ContextMenuGroup>
          <ContextMenuLabel>File Actions</ContextMenuLabel>
          <ContextMenuItem>
            <Pencil1 />
            Rename
          </ContextMenuItem>
          <ContextMenuItem>
            <Copy4 />
            Make a Copy
          </ContextMenuItem>
          <ContextMenuItem>
            <ShareNodes />
            Share
          </ContextMenuItem>
        </ContextMenuGroup>
        <ContextMenuSeparator />
        <ContextMenuGroup>
          <ContextMenuItem>
            <Download1 />
            Download
          </ContextMenuItem>
          <ContextMenuItem>
            <InfoCircle />
            View Details
          </ContextMenuItem>
        </ContextMenuGroup>
        <ContextMenuSeparator />
        <ContextMenuGroup>
          <ContextMenuItem variant="destructive">
            <Trash1 />
            Move to Trash
            <ContextMenuShortcut>⌘⌫</ContextMenuShortcut>
          </ContextMenuItem>
        </ContextMenuGroup>
      </ContextMenuContent>
    </ContextMenu>
  );
}
