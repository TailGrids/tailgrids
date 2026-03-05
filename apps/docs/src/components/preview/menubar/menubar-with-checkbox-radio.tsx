"use client";

import {
  Menubar,
  MenubarCheckboxItem,
  MenubarContent,
  MenubarGroup,
  MenubarItem,
  MenubarLabel,
  MenubarMenu,
  MenubarRadioGroup,
  MenubarRadioItem,
  MenubarSeparator,
  MenubarTrigger
} from "@/registry/core/menubar";
import * as React from "react";

export default function MenubarWithCheckboxRadio() {
  const [showBookmarks, setShowBookmarks] = React.useState(true);
  const [layout, setLayout] = React.useState("vertical");

  return (
    <Menubar>
      <MenubarMenu>
        <MenubarTrigger>View</MenubarTrigger>

        <MenubarContent>
          <MenubarCheckboxItem
            checked={showBookmarks}
            onCheckedChange={setShowBookmarks}
          >
            Always Show Bookmarks Bar
          </MenubarCheckboxItem>
          <MenubarSeparator />
          <MenubarItem>Reload</MenubarItem>
        </MenubarContent>
      </MenubarMenu>

      <MenubarMenu>
        <MenubarTrigger>Profiles</MenubarTrigger>

        <MenubarContent>
          <MenubarGroup>
            <MenubarLabel>Layout</MenubarLabel>
            <MenubarRadioGroup value={layout} onValueChange={setLayout}>
              <MenubarRadioItem value="vertical">Vertical</MenubarRadioItem>
              <MenubarRadioItem value="horizontal">Horizontal</MenubarRadioItem>
            </MenubarRadioGroup>
          </MenubarGroup>
          <MenubarSeparator />
          <MenubarItem>Edit Profiles...</MenubarItem>
        </MenubarContent>
      </MenubarMenu>
    </Menubar>
  );
}
