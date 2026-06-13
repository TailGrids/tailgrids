"use client";

import { FieldDescription, FieldLabel } from "@/registry/core/field";
import { Input } from "@/registry/core/input";
import {
  NumberField,
  NumberFieldAction,
  NumberFieldGroup
} from "@/registry/core/number-field";
import { Minus, Plus } from "@tailgrids/icons";

export default function NumberFieldBasicPreview() {
  return (
    <div className="mx-auto flex w-full max-w-2xs flex-col gap-2">
      <NumberField className="w-full" defaultValue={1} minValue={0} maxValue={99}>
        <FieldLabel>Quantity</FieldLabel>

        <NumberFieldGroup>
          <Input placeholder="0" className="px-13" />
          <NumberFieldAction slot="decrement">
            <Minus />
          </NumberFieldAction>
          <NumberFieldAction slot="increment">
            <Plus />
          </NumberFieldAction>
        </NumberFieldGroup>

        <FieldDescription>Choose the number of items to purchase.</FieldDescription>
      </NumberField>
    </div>
  );
}
