"use client";

import { cn } from "@/utils/cn";
import { type ComponentProps } from "react";
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
  ModalOverlay
} from "react-aria-components";

import { buttonStyles } from "./button";

export interface AlertDialogProps extends AriaDialogTriggerProps {}

export function AlertDialog(props: AlertDialogProps) {
  return <AriaDialogTrigger {...props} />;
}

export interface AlertDialogTriggerProps extends AriaButtonProps {}

export function AlertDialogTrigger({
  className,
  ...props
}: AlertDialogTriggerProps) {
  return <AriaButton className={cn("outline-none", className)} {...props} />;
}

export interface AlertDialogContentProps extends AriaDialogProps {
  overlayClassName?: string;
}

export function AlertDialogContent({
  children,
  className,
  overlayClassName,
  ...props
}: AlertDialogContentProps) {
  return (
    <ModalOverlay
      className={cn(
        "fixed inset-0 z-50 bg-black/50 backdrop-blur-sm",
        "transition-opacity duration-200",
        "data-entering:opacity-0",
        "data-exiting:opacity-0",
        overlayClassName
      )}
    >
      <Modal
        className={cn(
          "fixed top-1/2 left-1/2 z-50 w-full max-w-lg -translate-x-1/2 -translate-y-1/2 outline-none",
          "transition-all duration-200",
          "data-entering:scale-95 data-entering:opacity-0",
          "data-exiting:scale-95 data-exiting:opacity-0"
        )}
      >
        <AriaDialog
          role="alertdialog"
          className={cn(
            "relative rounded-xl border border-base-100 bg-background-100 p-6 shadow-lg outline-none",
            className
          )}
          {...props}
        >
          {({ close }) => (
            <>
              {typeof children === "function" ? children({ close }) : children}
            </>
          )}
        </AriaDialog>
      </Modal>
    </ModalOverlay>
  );
}

export interface AlertDialogHeaderProps extends ComponentProps<"div"> {}

export function AlertDialogHeader({
  className,
  ...props
}: AlertDialogHeaderProps) {
  return (
    <div
      className={cn("flex flex-col gap-1.5 text-left", className)}
      {...props}
    />
  );
}

export interface AlertDialogTitleProps extends HeadingProps {
  className?: string;
}

export function AlertDialogTitle({
  className,
  ...props
}: AlertDialogTitleProps) {
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

export interface AlertDialogDescriptionProps extends ComponentProps<"p"> {}

export function AlertDialogDescription({
  className,
  ...props
}: AlertDialogDescriptionProps) {
  return <p className={cn("text-sm text-text-100", className)} {...props} />;
}

export interface AlertDialogFooterProps extends ComponentProps<"div"> {}

export function AlertDialogFooter({
  className,
  ...props
}: AlertDialogFooterProps) {
  return (
    <div
      className={cn(
        "flex flex-col-reverse gap-2 pt-4 sm:flex-row sm:justify-end",
        className
      )}
      {...props}
    />
  );
}

export interface AlertDialogActionProps extends AriaButtonProps {}

export function AlertDialogAction({
  className,
  ...props
}: AlertDialogActionProps) {
  return (
    <AriaButton
      className={cn(
        buttonStyles({ variant: "primary", size: "sm" }),
        className
      )}
      {...props}
    />
  );
}

export interface AlertDialogCancelProps extends AriaButtonProps {}

export function AlertDialogCancel({
  className,
  ...props
}: AlertDialogCancelProps) {
  return (
    <AriaButton
      slot="close"
      className={cn(
        buttonStyles({ variant: "ghost", appearance: "outline", size: "sm" }),
        "mt-2 sm:mt-0",
        className
      )}
      {...props}
    />
  );
}
