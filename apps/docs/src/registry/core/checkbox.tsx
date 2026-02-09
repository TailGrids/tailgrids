import { cn } from "@/utils/cn";
import { cva, type VariantProps } from "class-variance-authority";
import { SVGProps, useId, type ComponentProps } from "react";

const checkboxStyles = cva(
  "peer-focus:border-primary-300 group-hover:border-primary-500 peer-checked:bg-primary-500 peer-checked:border-primary-500! peer-focus:ring-primary-100 grid place-items-center border border-base-200 transition peer-focus:ring-4 peer-disabled:border-base-50 [&>svg]:hidden [&>svg]:text-white peer-checked:[&>svg]:block peer-disabled:[&>svg]:text-(--border-color-base-50)",
  {
    variants: {
      size: {
        sm: "size-4 rounded [&>svg]:size-3",
        md: "size-5 rounded-md [&>svg]:size-3.5"
      }
    },
    defaultVariants: {
      size: "sm"
    }
  }
);

type PropsType = Omit<ComponentProps<"input">, "size"> &
  VariantProps<typeof checkboxStyles> & {
    label?: string;
  };

export function Checkbox({
  label,
  id: inputId,
  size,
  disabled,
  className,
  ...inputProps
}: PropsType) {
  const id = useId();

  return (
    <label
      htmlFor={id}
      className={cn(
        "group flex cursor-pointer items-center gap-3 select-none aria-disabled:cursor-not-allowed w-full",
        className
      )}
      aria-disabled={disabled}
    >
      <div>
        <input
          type="checkbox"
          id={id}
          className="peer sr-only"
          disabled={disabled}
          {...inputProps}
        />

        <div className={checkboxStyles({ size })}>
          <CheckIcon />
        </div>
      </div>

      {label && (
        <span
          className={cn(
            "text-sm text-text-50",
            disabled && "text-(--border-color-base-200)"
          )}
        >
          {label}
        </span>
      )}
    </label>
  );
}

function CheckIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={14}
      height={14}
      viewBox="0 0 14 14"
      fill="none"
      className="stroke-checkbox-checked-icon-color"
      {...props}
    >
      <path
        d="M11.667 3.5L5.25 9.917 2.333 7"
        stroke="currentColor"
        strokeWidth={1.94437}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
