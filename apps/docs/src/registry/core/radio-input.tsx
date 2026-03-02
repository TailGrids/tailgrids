import { cn } from "@/utils/cn";
import { cva, type VariantProps } from "class-variance-authority";
import { type ComponentProps } from "react";

const radioStyles = cva(
  "bg-checkbox-background peer-focus:border-primary-300 group-hover:border-checkbox-checked-border peer-checked:border-checkbox-checked-border! peer-focus:ring-checkbox-checked-border/20 peer-checked:bg-checkbox-checked-background grid place-items-center rounded-full border border-base-300 transition peer-focus:ring-4 peer-disabled:bg-transparent peer-disabled:border-base-300!",
  {
    variants: {
      size: {
        sm: "size-4",
        md: "size-5"
      }
    },
    defaultVariants: {
      size: "sm"
    }
  }
);

const dotStyles = cva(
  "absolute top-1/2 left-1/2 -translate-1/2 rounded-full peer-checked:bg-checkbox-checked-icon-color peer-disabled:bg-(--border-color-base-300) hidden peer-checked:block",
  {
    variants: {
      size: {
        sm: "size-1.5",
        md: "size-[7.5px]"
      }
    },
    defaultVariants: {
      size: "sm"
    }
  }
);

type PropsType = Omit<ComponentProps<"input">, "size"> &
  VariantProps<typeof radioStyles>;

export function RadioInput({
  id: inputId,
  size,
  className,
  disabled,
  ...inputProps
}: PropsType) {
  return (
    <div className={cn("relative inline-block", className)}>
      <input
        type="radio"
        id={inputId}
        className="peer sr-only"
        disabled={disabled}
        {...inputProps}
      />

      <div className={radioStyles({ size })} />

      <div className={dotStyles({ size })} />
    </div>
  );
}
