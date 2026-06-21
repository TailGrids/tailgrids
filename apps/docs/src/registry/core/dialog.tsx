import { cn } from "@/utils/cn";
import { Close } from "@tailgrids/icons";
import type { ComponentProps } from "react";
import {
  Button as AriaButton,
  Dialog as AriaDialog,
  Modal as AriaModal,
  Heading,
  type DialogProps as AriaDialogProps,
  type HeadingProps
} from "react-aria-components";
import { Button, ButtonProps } from "./button";
import { Description, DescriptionProps } from "./description";

export interface DialogProps extends AriaDialogProps {
  isOpen?: boolean;
  defaultOpen?: boolean;
  onOpenChange?: (isOpen: boolean) => void;
  showCloseButton?: boolean;
}

export function Dialog({
  isOpen,
  defaultOpen,
  onOpenChange,
  className,
  showCloseButton = true,
  children,
  ...props
}: DialogProps) {
  return (
    <AriaModal
      isOpen={isOpen}
      defaultOpen={defaultOpen}
      onOpenChange={onOpenChange}
    >
      <AriaDialog
        className={cn(
          "w-full max-w-140 max-sm:max-w-[calc(100%-2rem)] p-6 border border-base-100 bg-background-100 fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-xl shadow-lg outline-none",
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
    </AriaModal>
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

export interface DialogDescriptionProps extends DescriptionProps {}

export function DialogDescription({ ...props }: DialogDescriptionProps) {
  return <Description {...props} />;
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
      {children}
    </div>
  );
}

export interface DialogCloseProps extends Omit<ButtonProps, "slot"> {}

export function DialogClose({ ...props }: DialogCloseProps) {
  return <Button slot="close" {...props} />;
}
