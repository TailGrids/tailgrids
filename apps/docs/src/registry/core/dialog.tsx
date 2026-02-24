"use client";

import { cn } from "@/utils/cn";
import { Close } from "@tailgrids/icons";
import type { ComponentProps } from "react";
import {
  Button as AriaButton,
  type ButtonProps as AriaButtonProps,
  Dialog as AriaDialog,
  type DialogProps as AriaDialogProps,
  DialogTrigger as AriaDialogTrigger,
  type DialogTriggerProps as AriaDialogTriggerProps,
  Heading,
  type HeadingProps,
  Modal,
  ModalOverlay,
  type ModalOverlayProps
} from "react-aria-components";

export interface DialogProps extends AriaDialogTriggerProps {}

export function Dialog(props: DialogProps) {
  return <AriaDialogTrigger {...props} />;
}

export interface DialogTriggerProps extends AriaButtonProps {}

export function DialogTrigger({ className, ...props }: DialogTriggerProps) {
  return <AriaButton className={cn("outline-none", className)} {...props} />;
}

export interface DialogOverlayProps extends ModalOverlayProps {
  className?: string;
}

export function DialogOverlay({ className, ...props }: DialogOverlayProps) {
  return (
    <ModalOverlay
      className={cn(
        "fixed inset-0 z-50 bg-black/50 backdrop-blur-sm",
        "transition-opacity duration-200",
        "data-entering:opacity-0",
        "data-exiting:opacity-0",
        className
      )}
      {...props}
    />
  );
}

export interface DialogContentProps extends AriaDialogProps {
  modalProps?: ComponentProps<typeof Modal>;
  showCloseButton?: boolean;
  className?: string;
}

export function DialogContent({
  children,
  className,
  modalProps,
  showCloseButton = true,
  ...props
}: DialogContentProps) {
  return (
    <Modal
      className={cn(
        "fixed top-1/2 left-1/2 z-50 w-full max-w-lg -translate-x-1/2 -translate-y-1/2 outline-none",
        "transition-all duration-200",
        "data-entering:scale-95 data-entering:opacity-0",
        "data-exiting:scale-95 data-exiting:opacity-0",
        modalProps?.className
      )}
      {...modalProps}
    >
      <AriaDialog
        className={cn(
          "relative rounded-xl border border-base-100 bg-background-100 p-6 shadow-lg outline-none",
          className
        )}
        {...props}
      >
        {({ close }) => (
          <>
            {typeof children === "function" ? children({ close }) : children}
            {showCloseButton && (
              <AriaButton
                onPress={close}
                aria-label="Close"
                className="absolute top-4 right-4 flex size-7 items-center justify-center rounded-md text-text-100 opacity-70 outline-none transition-opacity hover:opacity-100 focus-visible:ring-2 focus-visible:ring-primary-500 disabled:pointer-events-none [&>svg]:size-5"
              >
                <Close />
                <span className="sr-only">Close</span>
              </AriaButton>
            )}
          </>
        )}
      </AriaDialog>
    </Modal>
  );
}

export interface DialogHeaderProps extends ComponentProps<"div"> {}

export function DialogHeader({ className, ...props }: DialogHeaderProps) {
  return (
    <div
      data-slot="dialog-header"
      className={cn("flex flex-col gap-1.5 text-left", className)}
      {...props}
    />
  );
}

export interface DialogTitleProps extends HeadingProps {
  className?: string;
}

export function DialogTitle({ className, ...props }: DialogTitleProps) {
  return (
    <Heading
      slot="title"
      className={cn(
        "text-lg font-semibold leading-none text-title-50",
        className
      )}
      {...props}
    />
  );
}

export interface DialogDescriptionProps extends ComponentProps<"p"> {}

export function DialogDescription({
  className,
  ...props
}: DialogDescriptionProps) {
  return (
    <p
      data-slot="dialog-description"
      className={cn("text-sm text-text-100", className)}
      {...props}
    />
  );
}

export interface DialogBodyProps extends ComponentProps<"div"> {}

export function DialogBody({ className, ...props }: DialogBodyProps) {
  return (
    <div
      data-slot="dialog-body"
      className={cn("py-4 text-sm text-text-100", className)}
      {...props}
    />
  );
}

export interface DialogFooterProps extends ComponentProps<"div"> {
  showCloseButton?: boolean;
}

export function DialogFooter({
  className,
  showCloseButton = false,
  children,
  ...props
}: DialogFooterProps) {
  return (
    <div
      data-slot="dialog-footer"
      className={cn(
        "flex flex-col-reverse gap-2 pt-4 sm:flex-row sm:justify-end",
        className
      )}
      {...props}
    >
      {showCloseButton && (
        <DialogClose className="inline-flex h-10 items-center justify-center rounded-lg border border-base-100 bg-background-100 px-4 text-sm font-medium text-title-50 outline-none transition hover:bg-background-soft-50 focus-visible:ring-2 focus-visible:ring-primary-500">
          Close
        </DialogClose>
      )}
      {children}
    </div>
  );
}

export interface DialogCloseProps extends AriaButtonProps {}

export function DialogClose({ className, ...props }: DialogCloseProps) {
  return (
    <AriaButton
      slot="close"
      className={cn("outline-none", className)}
      {...props}
    />
  );
}
