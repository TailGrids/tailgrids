"use client";

import { FieldLabel } from "@/registry/core/field";
import { Input } from "@/registry/core/input";
import {
  NumberField,
  NumberFieldAction,
  NumberFieldGroup
} from "@/registry/core/number-field";
import { Minus, Plus } from "@tailgrids/icons";

export default function NumberFieldFormatOptions() {
  return (
    <div className="space-y-6">
      <div className="mx-auto flex w-full max-w-2xs flex-col gap-2">
        <NumberField
          className="w-full"
          defaultValue={299.99}
          formatOptions={{
            style: "currency",
            currency: "USD",
            minimumFractionDigits: 2,
            maximumFractionDigits: 2
          }}
        >
          <FieldLabel>Price (currency)</FieldLabel>
          <NumberFieldGroup>
            <Input placeholder="0" className="px-13" />
            <NumberFieldAction slot="decrement">
              <Minus />
            </NumberFieldAction>
            <NumberFieldAction slot="increment">
              <Plus />
            </NumberFieldAction>
          </NumberFieldGroup>
        </NumberField>
      </div>

      <div className="mx-auto flex w-full max-w-2xs flex-col gap-2">
        <NumberField
          className="w-full"
          defaultValue={85}
          formatOptions={{
            style: "percent"
          }}
        >
          <FieldLabel>Discount (percentage)</FieldLabel>
          <NumberFieldGroup>
            <Input placeholder="0" className="px-13" />
            <NumberFieldAction slot="decrement">
              <Minus />
            </NumberFieldAction>
            <NumberFieldAction slot="increment">
              <Plus />
            </NumberFieldAction>
          </NumberFieldGroup>
        </NumberField>
      </div>

      <div className="mx-auto flex w-full max-w-2xs flex-col gap-2">
        <NumberField
          className="w-full"
          defaultValue={45000}
          formatOptions={{
            style: "decimal",
            useGrouping: true,
            minimumFractionDigits: 2,
            maximumFractionDigits: 2
          }}
        >
          <FieldLabel>Annual salary (decimal)</FieldLabel>
          <NumberFieldGroup>
            <Input placeholder="0" className="px-13" />
            <NumberFieldAction slot="decrement">
              <Minus />
            </NumberFieldAction>
            <NumberFieldAction slot="increment">
              <Plus />
            </NumberFieldAction>
          </NumberFieldGroup>
        </NumberField>
      </div>
    </div>
  );
}
