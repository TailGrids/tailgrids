import { Input } from "@/registry/core/input";
import { TextArea } from "@/registry/core/text-area";
import { cn } from "@/utils/cn";
import { cva, type VariantProps } from "class-variance-authority";
import * as React from "react";

const InputGroup = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    data-slot="input-group"
    className={cn(
      "group flex w-full items-center rounded-lg border border-base-300 bg-input-background focus-within:border-input-primary-focus-border focus-within:ring-4 focus-within:ring-input-primary-focus-border/20 transition-all",
      className
    )}
    {...props}
  />
));
InputGroup.displayName = "InputGroup";

const InputGroupInput = React.forwardRef<
  React.ElementRef<typeof Input>,
  React.ComponentPropsWithoutRef<typeof Input>
>(({ className, ...props }, ref) => (
  <Input
    ref={ref}
    data-slot="input-group-control"
    className={cn(
      "flex-1 border-none bg-transparent shadow-none focus:ring-0 focus:border-none rounded-none w-full min-w-0 px-3",
      className
    )}
    {...props}
  />
));
InputGroupInput.displayName = "InputGroupInput";

const inputGroupAddonStyles = cva(
  "flex items-center justify-center px-3 text-sm text-base-500 shrink-0",
  {
    variants: {
      align: {
        "inline-start": "order-first",
        "inline-end": "order-last",
        "block-start": "order-first",
        "block-end": "order-last"
      }
    },
    defaultVariants: {
      align: "inline-start"
    }
  }
);

interface InputGroupAddonProps
  extends
    React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof inputGroupAddonStyles> {}

const InputGroupAddon = React.forwardRef<HTMLDivElement, InputGroupAddonProps>(
  ({ className, align, ...props }, ref) => (
    <div
      ref={ref}
      data-slot="input-group-addon"
      data-align={align}
      className={cn(inputGroupAddonStyles({ align }), className)}
      {...props}
    />
  )
);
InputGroupAddon.displayName = "InputGroupAddon";

const inputGroupButtonStyles = cva(
  "inline-flex items-center justify-center rounded-md font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-input-primary-focus-border disabled:pointer-events-none disabled:opacity-50 text-title-50",
  {
    variants: {
      size: {
        xs: "h-7 px-3 text-xs",
        "icon-xs": "size-7",
        sm: "h-8 px-3 text-sm",
        "icon-sm": "size-8"
      }
    },
    defaultVariants: {
      size: "xs"
    }
  }
);

interface InputGroupButtonProps
  extends
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof inputGroupButtonStyles> {}

const InputGroupButton = React.forwardRef<
  HTMLButtonElement,
  InputGroupButtonProps
>(({ className, size, ...props }, ref) => (
  <button
    ref={ref}
    type="button"
    data-slot="input-group-button"
    className={cn(inputGroupButtonStyles({ size }), className)}
    {...props}
  />
));
InputGroupButton.displayName = "InputGroupButton";

const InputGroupTextarea = React.forwardRef<
  React.ElementRef<typeof TextArea>,
  React.ComponentPropsWithoutRef<typeof TextArea>
>(({ className, ...props }, ref) => (
  <TextArea
    ref={ref}
    data-slot="input-group-control"
    className={cn(
      "flex-1 border-none bg-transparent shadow-none focus:ring-0 focus:border-none rounded-none w-full min-w-0 px-3 py-2.5 resize-none",
      className
    )}
    {...props}
  />
));
InputGroupTextarea.displayName = "InputGroupTextarea";

export {
  InputGroup,
  InputGroupAddon,
  InputGroupButton,
  InputGroupInput,
  InputGroupTextarea
};
