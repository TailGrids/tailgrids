import { cn } from "@/utils/cn";
import { cva, type VariantProps } from "class-variance-authority";
import { useId, type ComponentProps } from "react";

const inputStyles = cva(
  "bg-input-background peer max-w-full rounded-lg border px-4 py-2.5 text-title-50 placeholder:text-input-placeholder-text focus:ring-4 disabled:border-base-100 disabled:text-input-disabled-text disabled:placeholder:text-input-disabled-text outline-none",
  {
    variants: {
      state: {
        default:
          "focus:border-input-primary-focus-border focus:ring-input-primary-focus-border/20 border-base-300",
        error:
          "border-input-error-focus-border focus:ring-input-error-focus-border/20",
        success:
          "border-input-success-focus-border focus:ring-input-success-focus-border/20"
      }
    }
  }
);

type PropsType = ComponentProps<"input"> &
  VariantProps<typeof inputStyles> & {
    label?: string;
    hint?: string;
  };

export function Input({
  state = "default",
  className,
  ...inputProps
}: PropsType) {
  const id = useId();

  return (
    <input
      id={id}
      className={cn(inputStyles({ state }), className)}
      {...inputProps}
    />
  );
}
