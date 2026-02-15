import { cn } from "@/utils/cn";
import { ChevronDown } from "@tailgrids/icons";
import { cva, type VariantProps } from "class-variance-authority";
import * as React from "react";

const nativeSelectStyles = cva(
  "bg-input-background peer w-full appearance-none rounded-lg border border-base-300 px-4 py-2.5 pr-11 text-title-50 outline-none focus:border-input-primary-focus-border focus:ring-4 focus:ring-input-primary-focus-border/20 disabled:border-base-100 disabled:text-input-disabled-text disabled:placeholder:text-input-disabled-text",
  {
    variants: {
      variant: {
        default: "",
        error:
          "border-input-error-focus-border focus:ring-input-error-focus-border/20",
        success:
          "border-input-success-focus-border focus:ring-input-success-focus-border/20"
      }
    },
    defaultVariants: {
      variant: "default"
    }
  }
);

type NativeSelectProps = React.ComponentProps<"select"> &
  VariantProps<typeof nativeSelectStyles>;

const NativeSelect = React.forwardRef<HTMLSelectElement, NativeSelectProps>(
  ({ className, children, variant, ...props }, ref) => {
    return (
      <div className="relative w-full">
        <select
          ref={ref}
          className={cn(nativeSelectStyles({ variant }), className)}
          {...props}
        >
          {children}
        </select>
        <div className="pointer-events-none absolute inset-y-0 right-4 flex items-center text-title-50">
          <ChevronDown className="h-5 w-5" aria-hidden="true" />
        </div>
      </div>
    );
  }
);
NativeSelect.displayName = "NativeSelect";

const NativeSelectOption = React.forwardRef<
  HTMLOptionElement,
  React.ComponentProps<"option">
>(({ className, ...props }, ref) => {
  return <option ref={ref} className={cn(className)} {...props} />;
});
NativeSelectOption.displayName = "NativeSelectOption";

const NativeSelectOptGroup = React.forwardRef<
  HTMLOptGroupElement,
  React.ComponentProps<"optgroup">
>(({ className, ...props }, ref) => {
  return <optgroup ref={ref} className={cn(className)} {...props} />;
});
NativeSelectOptGroup.displayName = "NativeSelectOptGroup";

export { NativeSelect, NativeSelectOptGroup, NativeSelectOption };
