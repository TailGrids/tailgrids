"use client";

import { FieldDescription, FieldLabel } from "@/registry/core/field";
import { Input } from "@/registry/core/input";
import {
  NumberField,
  NumberFieldAction,
  NumberFieldGroup
} from "@/registry/core/number-field";
import { Minus, Plus } from "@tailgrids/icons";

export default function NumberFieldWithStep() {
  return (
    <div className="mx-auto flex w-full max-w-2xs flex-col gap-2">
      <NumberField
        className="w-full"
        defaultValue={2.5}
        step={0.5}
        minValue={0}
        maxValue={5}
      >
        <FieldLabel>Product rating</FieldLabel>

        <NumberFieldGroup>
          <Input placeholder="0" className="px-13" />
          <NumberFieldAction slot="decrement">
            <Minus />
          </NumberFieldAction>
          <NumberFieldAction slot="increment">
            <Plus />
          </NumberFieldAction>
        </NumberFieldGroup>

        <FieldDescription>Rate in steps of 0.5 stars.</FieldDescription>
      </NumberField>
    </div>
  );
}
