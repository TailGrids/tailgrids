"use client";

import { buttonStyles } from "@/registry/core/button";
import {
  Sheet,
  SheetBody,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetOverlay,
  SheetTitle,
  SheetTrigger
} from "@/registry/core/sheet";
import { useState } from "react";

export default function SheetFormPreview() {
  const [formData, setFormData] = useState({
    name: "Pedro Duarte",
    username: "@peduarte"
  });

  return (
    <Sheet>
      <SheetTrigger className={buttonStyles()}>Edit Profile</SheetTrigger>
      <SheetOverlay>
        <SheetContent side="right" className="sm:max-w-md">
          <SheetHeader>
            <SheetTitle>Edit Profile</SheetTitle>
            <SheetDescription>
              Make changes to your profile here. Click save when you're done.
            </SheetDescription>
          </SheetHeader>
          <SheetBody className="pt-2">
            <div className="flex flex-col gap-4">
              <div className="flex flex-col gap-1.5">
                <label className="text-sm font-medium text-text-100">
                  Name
                </label>
                <input
                  type="text"
                  value={formData.name}
                  onChange={e =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                  className="rounded-lg border border-base-100 bg-background-100 px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-primary-500"
                />
              </div>
              <div className="flex flex-col gap-1.5">
                <label className="text-sm font-medium text-text-100">
                  Username
                </label>
                <input
                  type="text"
                  value={formData.username}
                  onChange={e =>
                    setFormData({ ...formData, username: e.target.value })
                  }
                  className="rounded-lg border border-base-100 bg-background-100 px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-primary-500"
                />
              </div>
            </div>
          </SheetBody>
          <SheetFooter>
            <SheetClose className={buttonStyles({ appearance: "outline" })}>
              Cancel
            </SheetClose>
            <SheetClose
              className={buttonStyles()}
              onPress={() => console.log("Saved", formData)}
            >
              Save changes
            </SheetClose>
          </SheetFooter>
        </SheetContent>
      </SheetOverlay>
    </Sheet>
  );
}
