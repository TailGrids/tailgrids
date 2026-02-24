"use client";

import { cn } from "@/utils/cn";
import { Close } from "@tailgrids/icons";
import { cva, type VariantProps } from "class-variance-authority";
import {
  animate,
  AnimatePresence,
  cubicBezier,
  motion,
  useMotionTemplate,
  useMotionValue,
  useTransform
} from "framer-motion";
import { type ComponentProps, useCallback, useEffect, useState } from "react";
import {
  Button as AriaButton,
  type ButtonProps as AriaButtonProps,
  Dialog as AriaDialog,
  type DialogProps as AriaDialogProps,
  Heading,
  type HeadingProps,
  Modal,
  ModalOverlay
} from "react-aria-components";

type DrawerSide = "top" | "right" | "bottom" | "left";

const MotionModal = motion.create(Modal);
const MotionModalOverlay = motion.create(ModalOverlay);

// Transition configs

const inertiaTransition = {
  type: "inertia" as const,
  bounceStiffness: 300,
  bounceDamping: 40,
  timeConstant: 300
};

const staticTransition = {
  duration: 0.4,
  ease: cubicBezier(0.32, 0.72, 0, 1)
};

// Helpers

/** Returns the axis ("x" or "y") that the given side drags along. */
function getDragAxis(side: DrawerSide): "x" | "y" {
  return side === "left" || side === "right" ? "x" : "y";
}

/** Determines whether the drawer should close based on drag offset, velocity, and threshold. */
function shouldClose(
  side: DrawerSide,
  offset: { x: number; y: number },
  velocity: { x: number; y: number },
  threshold: number
): boolean {
  const axis = getDragAxis(side);
  const o = axis === "x" ? offset.x : offset.y;
  const v = axis === "x" ? velocity.x : velocity.y;

  switch (side) {
    case "bottom":
      return o > threshold * 0.75 || v > 10;
    case "top":
      return o < -threshold * 0.75 || v < -10;
    case "right":
      return o > threshold * 0.75 || v > 10;
    case "left":
      return o < -threshold * 0.75 || v < -10;
  }
}

/** Returns the motion value that corresponds to the "open" position (0). */
function getOpenValue() {
  return 0;
}

/** Returns drag constraints for each side. */
function getDragConstraints(side: DrawerSide) {
  switch (side) {
    case "bottom":
      return { top: 0 };
    case "top":
      return { bottom: 0 };
    case "right":
      return { left: 0 };
    case "left":
      return { right: 0 };
  }
}

/** Returns the initial/exit offset based on side and viewport dimension. */
function getOffScreenValue(side: DrawerSide): number {
  if (typeof window === "undefined") return 0;
  switch (side) {
    case "bottom":
      return window.innerHeight;
    case "top":
      return -window.innerHeight;
    case "right":
      return window.innerWidth;
    case "left":
      return -window.innerWidth;
  }
}

// Drawer Context

import { createContext, useContext } from "react";

interface DrawerContextValue {
  isOpen: boolean;
  setOpen: (isOpen: boolean) => void;
}

const DrawerContext = createContext<DrawerContextValue>({
  isOpen: false,
  setOpen: () => {}
});

function useDrawer() {
  return useContext(DrawerContext);
}

// Drawer (root)

export interface DrawerProps {
  children: React.ReactNode;
  isOpen?: boolean;
  onOpenChange?: (isOpen: boolean) => void;
  defaultOpen?: boolean;
}

export function Drawer({
  children,
  isOpen: controlledIsOpen,
  onOpenChange,
  defaultOpen = false
}: DrawerProps) {
  const [uncontrolledIsOpen, setUncontrolledIsOpen] = useState(defaultOpen);
  const isOpen = controlledIsOpen ?? uncontrolledIsOpen;

  const setOpen = useCallback(
    (value: boolean) => {
      onOpenChange?.(value);
      if (controlledIsOpen === undefined) {
        setUncontrolledIsOpen(value);
      }
    },
    [controlledIsOpen, onOpenChange]
  );

  return (
    <DrawerContext.Provider value={{ isOpen, setOpen }}>
      {children}
    </DrawerContext.Provider>
  );
}

// Drawer Trigger

export interface DrawerTriggerProps extends AriaButtonProps {}

export function DrawerTrigger({ className, ...props }: DrawerTriggerProps) {
  const { setOpen } = useDrawer();
  return (
    <AriaButton
      onPress={() => setOpen(true)}
      className={cn("outline-none", className)}
      {...props}
    />
  );
}

// Drawer Content

const drawerOverlayVariants = cva("fixed inset-0 z-50", {
  variants: {
    side: {
      bottom: "",
      top: "",
      right: "",
      left: ""
    }
  },
  defaultVariants: { side: "bottom" }
});

const drawerContentVariants = cva(
  "fixed z-50 flex flex-col bg-background-100 shadow-lg outline-none will-change-transform",
  {
    variants: {
      side: {
        bottom: "inset-x-0 bottom-0 rounded-t-xl border-t border-base-100",
        top: "inset-x-0 top-0 rounded-b-xl border-b border-base-100",
        right:
          "inset-y-0 right-0 h-full w-full max-w-sm rounded-l-xl border-l border-base-100",
        left: "inset-y-0 left-0 h-full w-full max-w-sm rounded-r-xl border-r border-base-100"
      }
    },
    defaultVariants: { side: "bottom" }
  }
);

export interface DrawerContentProps
  extends
    Omit<AriaDialogProps, "style">,
    VariantProps<typeof drawerContentVariants> {
  showCloseButton?: boolean;
  showHandle?: boolean;
  className?: string;
  snapThreshold?: number;
}

export function DrawerContent({
  children,
  className,
  side = "bottom",
  showCloseButton = true,
  snapThreshold,
  ...props
}: DrawerContentProps) {
  const { isOpen, setOpen } = useDrawer();
  const axis = getDragAxis(side!);

  // The motion value that tracks the drag position.
  const motionVal = useMotionValue(0);

  // The off-screen value used for enter/exit animation.
  const [offScreen, setOffScreen] = useState(() => getOffScreenValue(side!));

  useEffect(() => {
    setOffScreen(getOffScreenValue(side!));
  }, [side]);

  // Compute threshold: default to 30% of the viewport axis dimension.
  const threshold =
    snapThreshold ??
    (typeof window !== "undefined"
      ? (axis === "y" ? window.innerHeight : window.innerWidth) * 0.3
      : 200);

  // Background opacity for the overlay, based on drag position.
  const absOffScreen = Math.abs(offScreen) || 1;
  const bgOpacity = useTransform(
    motionVal,
    side === "top" || side === "left" ? [-absOffScreen, 0] : [0, absOffScreen],
    side === "top" || side === "left" ? [0, 0.5] : [0.5, 0]
  );
  const bg = useMotionTemplate`rgba(0, 0, 0, ${bgOpacity})`;

  // Determine initial & animate values based on axis.
  const initialStyle =
    axis === "y" ? { y: offScreen, x: 0 } : { x: offScreen, y: 0 };
  const animateStyle = axis === "y" ? { y: 0, x: 0 } : { x: 0, y: 0 };
  const exitStyle =
    axis === "y" ? { y: offScreen, x: 0 } : { x: offScreen, y: 0 };

  const handleDragEnd = (
    _e: MouseEvent | TouchEvent | PointerEvent,
    info: {
      offset: { x: number; y: number };
      velocity: { x: number; y: number };
    }
  ) => {
    if (shouldClose(side!, info.offset, info.velocity, threshold)) {
      setOpen(false);
    } else {
      animate(motionVal, getOpenValue(), {
        ...inertiaTransition,
        min: 0,
        max: 0
      });
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <MotionModalOverlay
          isOpen
          onOpenChange={setOpen}
          isDismissable={true}
          className={cn(drawerOverlayVariants({ side }))}
          style={{ backgroundColor: bg }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={staticTransition}
        >
          <MotionModal
            className={cn(drawerContentVariants({ side }), className)}
            initial={initialStyle}
            animate={animateStyle}
            exit={exitStyle}
            transition={staticTransition}
            style={axis === "y" ? { y: motionVal } : { x: motionVal }}
            drag={axis}
            dragConstraints={getDragConstraints(side!)}
            dragElastic={0.2}
            onDragEnd={handleDragEnd}
          >
            <DrawerHandle side={side} />

            <AriaDialog
              className="flex flex-1 flex-col gap-4 overflow-y-auto p-6 outline-none"
              {...props}
            >
              {({ close }) => (
                <>
                  {typeof children === "function"
                    ? children({ close })
                    : children}
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
          </MotionModal>
        </MotionModalOverlay>
      )}
    </AnimatePresence>
  );
}

// Drawer Handle

const handleVariants = cva(
  "shrink-0 rounded-full bg-foreground-soft-50 transition-colors hover:bg-base-300",
  {
    variants: {
      side: {
        bottom: "mx-auto mt-3 mb-1 h-1.5 w-12",
        top: "mx-auto mt-1 mb-3 h-1.5 w-12 order-last",
        right:
          "h-12 w-1.5 absolute top-1/2 left-1.5 -translate-y-1/2 order-last",
        left: "h-12 w-1.5 absolute top-1/2 right-1.5 -translate-y-1/2 order-last"
      }
    },
    defaultVariants: { side: "bottom" }
  }
);

interface DrawerHandleProps extends VariantProps<typeof handleVariants> {
  className?: string;
}

function DrawerHandle({ side = "bottom", className }: DrawerHandleProps) {
  return (
    <div
      data-slot="drawer-handle"
      className={cn(handleVariants({ side }), className)}
      aria-hidden="true"
    />
  );
}

// Drawer Header

export interface DrawerHeaderProps extends ComponentProps<"div"> {}

export function DrawerHeader({ className, ...props }: DrawerHeaderProps) {
  return (
    <div
      data-slot="drawer-header"
      className={cn("flex flex-col gap-1.5 text-left", className)}
      {...props}
    />
  );
}

// Drawer Title

export interface DrawerTitleProps extends HeadingProps {
  className?: string;
}

export function DrawerTitle({ className, ...props }: DrawerTitleProps) {
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

// Drawer Description

export interface DrawerDescriptionProps extends ComponentProps<"p"> {}

export function DrawerDescription({
  className,
  ...props
}: DrawerDescriptionProps) {
  return (
    <p
      data-slot="drawer-description"
      className={cn("text-sm text-text-100", className)}
      {...props}
    />
  );
}

// Drawer Body

export interface DrawerBodyProps extends ComponentProps<"div"> {}

export function DrawerBody({ className, ...props }: DrawerBodyProps) {
  return (
    <div
      data-slot="drawer-body"
      className={cn("flex-1 overflow-y-auto text-sm text-text-100", className)}
      {...props}
    />
  );
}

// Drawer Footer

export interface DrawerFooterProps extends ComponentProps<"div"> {
  showCloseButton?: boolean;
}

export function DrawerFooter({
  className,
  showCloseButton = false,
  children,
  ...props
}: DrawerFooterProps) {
  return (
    <div
      data-slot="drawer-footer"
      className={cn(
        "flex flex-col-reverse gap-2 sm:flex-row sm:justify-end",
        className
      )}
      {...props}
    >
      {showCloseButton && (
        <DrawerClose className="inline-flex h-10 items-center justify-center rounded-lg border border-base-100 bg-background-100 px-4 text-sm font-medium text-title-50 outline-none transition hover:bg-background-soft-50 focus-visible:ring-2 focus-visible:ring-primary-500">
          Close
        </DrawerClose>
      )}
      {children}
    </div>
  );
}

// ─── Drawer Close ────────────────────────────────────────────────────────────

export interface DrawerCloseProps extends AriaButtonProps {}

export function DrawerClose({ className, ...props }: DrawerCloseProps) {
  const { setOpen } = useDrawer();
  return (
    <AriaButton
      onPress={() => setOpen(false)}
      className={cn("outline-none", className)}
      {...props}
    />
  );
}
