"use client";

import { FieldDescription, FieldLabel } from "@/registry/core/field";
import { Input } from "@/registry/core/input";
import {
  NumberField,
  NumberFieldAction,
  NumberFieldGroup
} from "@/registry/core/number-field";
import { cn } from "@/utils/cn";
import { ChevronDown, ChevronUp } from "@tailgrids/icons";

export default function NumberFieldChevronRight() {
  return (
    <div className="mx-auto flex w-full max-w-2xs flex-col gap-2">
      <NumberField
        className="w-full"
        defaultValue={4}
        minValue={0}
        maxValue={10}
      >
        <FieldLabel>Rating</FieldLabel>

        <NumberFieldGroup>
          <Input
            placeholder="0"
            data-slot="number-field-input"
            className="px-4"
          />
          <div className="absolute border-l top-px right-px bottom-px flex flex-col gap-y-px rounded-r-[7px] overflow-hidden">
            <NumberFieldAction
              slot="increment"
              aria-label="Increase"
              className={cn(
                "h-1/2 w-full p-0 border-0! relative inset-auto! flex items-center justify-center translate-y-0 rounded-none! rounded-tr-lg after:absolute after:-bottom-px after:h-px after:w-[calc(100%+2px)] after:bg-button-outline-border after:content-['']"
              )}
            >
              <ChevronUp className="size-4" />
            </NumberFieldAction>
            <NumberFieldAction
              slot="decrement"
              aria-label="Decrease"
              className={cn(
                "flex-1 w-6 p-0 border-0! relative inset-auto! flex items-center justify-center translate-y-0 rounded-none! rounded-br-lg"
              )}
            >
              <ChevronDown className="size-4" />
            </NumberFieldAction>
          </div>
        </NumberFieldGroup>

        <FieldDescription>Rate this product from 0 to 10.</FieldDescription>
      </NumberField>
    </div>
  );
}
