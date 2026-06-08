"use client";

import { cn } from "@/utils/cn";
import { Button, type ButtonProps } from "./button";

export function SocialButton({ className, ...props }: ButtonProps) {
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
