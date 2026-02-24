import type { ComponentProps } from "react";
import { Button } from "./button";
import { cn } from "@/utils/cn";

export function SocialButton({
  className,
  ...props
}: ComponentProps<"button">) {
  return (
    <Button
      appearance="outline"
      className={cn(
        "w-full max-w-84 py-3 disabled:[&>svg]:opacity-60",
        className
      )}
      {...props}
    />
  );
}
