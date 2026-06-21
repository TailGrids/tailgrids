import { cn } from "@/utils/cn";
import {
  DialogTrigger as AriaDialogTrigger,
  ModalOverlay as AriaModalOverlay,
  type DialogTriggerProps as AriaDialogTriggerProps,
  type ModalOverlayProps as AriaModalOverlayProps
} from "react-aria-components";

export interface OverlayWrapperProps extends AriaDialogTriggerProps {}

export function OverlayWrapper({ ...props }: OverlayWrapperProps) {
  return <AriaDialogTrigger {...props} />;
}

export interface BackdropProps extends AriaModalOverlayProps {}

export function Backdrop({
  className,
  isDismissable = true,
  ...props
}: BackdropProps) {
  return (
    <AriaModalOverlay
      isDismissable={isDismissable}
      className={cn(
        "fixed inset-0 z-50 bg-black/50 backdrop-blur-sm transition-opacity duration-200",
        className
      )}
      {...props}
    />
  );
}
