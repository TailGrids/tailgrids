import { cn } from "@/utils/cn";
import { cva, type VariantProps } from "class-variance-authority";
import { DefaultSpinner } from "./default";
import { DottedSpinner } from "./dotted";
import { DottedRoundSpinner } from "./dotted-round";

type SpinnerType = "default" | "dotted" | "dotted-round";

const spinnerStyles = cva("animate-spin", {
  variants: {
    size: {
      sm: "size-5",
      md: "size-7",
      lg: "size-9",
      xl: "size-10",
      xxl: "size-12"
    }
  },
  defaultVariants: {
    size: "md"
  }
});

type PropsType = {
  className?: string;
  type?: SpinnerType;
} & VariantProps<typeof spinnerStyles>;

export function Spinner({
  className,
  size = "md",
  type = "default"
}: PropsType) {
  switch (type) {
    case "dotted":
      return (
        <DottedSpinner className={cn(spinnerStyles({ size }), className)} />
      );
    case "dotted-round":
      return (
        <DottedRoundSpinner
          className={cn(spinnerStyles({ size }), className)}
        />
      );
    default:
      return (
        <DefaultSpinner
          className={cn(spinnerStyles({ size }), className)}
          percentage={50}
        />
      );
  }
}
