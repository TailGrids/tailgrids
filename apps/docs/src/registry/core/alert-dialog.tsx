"use client";

import { cn } from "@/utils/cn";
import { ReactNode } from "react";
import {
  Dialog as AriaDialog,
  Modal as AriaModal,
  DialogRenderProps
} from "react-aria-components";
import { Backdrop, BackdropProps } from "./overlay";

export interface AlertDialogProps extends Omit<
  BackdropProps,
  "role" | "render" | "children"
> {
  isOpen?: boolean;
  defaultOpen?: boolean;
  onOpenChange?: (isOpen: boolean) => void;
  children: ReactNode | ((opts: DialogRenderProps) => ReactNode);
}

export function AlertDialog({
  children,
  isOpen,
  defaultOpen,
  onOpenChange,
  className,
  isDismissable = false,
  isKeyboardDismissDisabled = true,
  ...props
}: AlertDialogProps) {
  return (
    <Backdrop
      isOpen={isOpen}
      defaultOpen={defaultOpen}
      onOpenChange={onOpenChange}
      isDismissable={isDismissable}
      isKeyboardDismissDisabled={isKeyboardDismissDisabled}
      {...props}
    >
      <AriaModal>
        <AriaDialog
          className={cn(
            "w-full max-w-140 max-sm:max-w-[calc(100%-2rem)] p-6 border border-base-100 bg-background-100 fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-xl shadow-lg outline-none",
            className
          )}
          role="alertdialog"
        >
          {children}
        </AriaDialog>
      </AriaModal>
    </Backdrop>
  );
}
