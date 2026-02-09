import { cn } from "@/utils/cn";
import { cva, type VariantProps } from "class-variance-authority";
import { useId, type ComponentProps } from "react";

const radioStyles = cva(
  "peer-focus:border-primary-300 group-hover:border-primary-500 peer-checked:border-primary-500 peer-focus:ring-primary-100 peer-checked:bg-primary-500 grid place-items-center rounded-full border border-base-300 transition peer-focus:ring-4 peer-disabled:bg-transparent peer-disabled:border-base-300",
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
  VariantProps<typeof radioStyles> & {
    label?: string;
  };

export function RadioInput({
  label,
  id: inputId,
  size,
  className,
  disabled,
  ...inputProps
}: PropsType) {
  const id = useId();

  return (
    <label
      htmlFor={id}
      className={cn(
        "group flex cursor-pointer items-center gap-3 select-none aria-disabled:pointer-events-none",
        className
      )}
      aria-disabled={disabled}
    >
      <div className="relative">
        <input
          type="radio"
          id={id}
          className="peer sr-only"
          disabled={disabled}
          {...inputProps}
        />

        <div className={radioStyles({ size })} />

        <div className={dotStyles({ size })} />
      </div>

      {label && (
        <span
          className={cn("text-sm text-text-50", disabled && "text-text-200")}
        >
          {label}
        </span>
      )}
    </label>
  );
}
