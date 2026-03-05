"use client";

import {
  ContextMenu,
  ContextMenuCheckboxItem,
  ContextMenuContent,
  ContextMenuGroup,
  ContextMenuLabel,
  ContextMenuRadioGroup,
  ContextMenuRadioItem,
  ContextMenuSeparator,
  ContextMenuTrigger
} from "@/registry/core/context-menu";
import * as React from "react";

export function ContextMenuRadioCheckbox() {
  const [showBookmarks, setShowBookmarks] = React.useState(true);
  const [showFullURLs, setShowFullURLs] = React.useState(false);
  const [theme, setTheme] = React.useState("system");

  return (
    <ContextMenu>
      <ContextMenuTrigger className="flex h-37.5 w-full max-w-75 items-center justify-center rounded-md border border-dashed border-border-color-base-100 text-sm">
        Right click for settings
      </ContextMenuTrigger>

      <ContextMenuContent className="w-64">
        <ContextMenuGroup>
          <ContextMenuLabel>Page Settings</ContextMenuLabel>
          <ContextMenuCheckboxItem
            checked={showBookmarks}
            onCheckedChange={setShowBookmarks}
          >
            Show Bookmarks Bar
          </ContextMenuCheckboxItem>
          <ContextMenuCheckboxItem
            checked={showFullURLs}
            onCheckedChange={setShowFullURLs}
          >
            Show Full URLs
          </ContextMenuCheckboxItem>
        </ContextMenuGroup>

        <ContextMenuSeparator />

        <ContextMenuGroup>
          <ContextMenuLabel>Appearance</ContextMenuLabel>
          <ContextMenuRadioGroup value={theme} onValueChange={setTheme}>
            <ContextMenuRadioItem value="light">
              Light Mode
            </ContextMenuRadioItem>
            <ContextMenuRadioItem value="dark">Dark Mode</ContextMenuRadioItem>
            <ContextMenuRadioItem value="system">
              System Default
            </ContextMenuRadioItem>
          </ContextMenuRadioGroup>
        </ContextMenuGroup>
      </ContextMenuContent>
    </ContextMenu>
  );
}
