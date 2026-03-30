"use client";

import { buttonStyles } from "@/registry/core/button";
import { Input } from "@/registry/core/input";
import { Label } from "@/registry/core/label";
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
              Make changes to your profile here. Click save when you&apos;re
              done.
            </SheetDescription>
          </SheetHeader>

          <SheetBody className="pt-2">
            <div className="flex flex-col gap-4">
              <div className="flex flex-col gap-1.5">
                <Label className="text-sm font-medium text-text-100">
                  Name
                </Label>
                <Input
                  type="text"
                  value={formData.name}
                  onChange={e =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                />
              </div>
              <div className="flex flex-col gap-1.5">
                <Label className="text-sm font-medium text-text-100">
                  Username
                </Label>
                <Input
                  type="text"
                  value={formData.username}
                  onChange={e =>
                    setFormData({ ...formData, username: e.target.value })
                  }
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
