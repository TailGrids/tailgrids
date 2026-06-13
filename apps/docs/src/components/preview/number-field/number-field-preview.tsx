"use client";

import { FieldDescription, FieldLabel } from "@/registry/core/field";
import { Input } from "@/registry/core/input";
import {
  NumberField,
  NumberFieldAction,
  NumberFieldGroup
} from "@/registry/core/number-field";
import { Minus, Plus } from "@tailgrids/icons";

export default function FieldWithNumberFieldPreview() {
  return (
    <div className="mx-auto">
      <NumberField defaultValue={1000}>
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

        <FieldDescription>Enter a quantity between 0 and 100.</FieldDescription>
      </NumberField>
    </div>
  );
}
