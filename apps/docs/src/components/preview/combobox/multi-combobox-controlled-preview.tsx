"use client";

import { Button } from "@/registry/core/button";
import {
  ComboboxContent,
  ComboboxEmpty,
  ComboboxInput,
  ComboboxInputWrapper,
  ComboboxItem,
  ComboboxList,
  ComboboxTrigger,
  MultiCombobox,
  MultiComboboxDisplay
} from "@/registry/core/combobox";
import { useState } from "react";
import type { Key } from "react-aria-components";

export default function MultiComboboxControlledPreview() {
  const [values, setValues] = useState<Key[]>(["apple", "banana"]);

  return (
    <div className="flex w-full max-w-md flex-col gap-4">
      <div className="w-full flex items-center justify-between">
        <p className="text-sm text-gray-500">Selected: {values.length} items</p>
        <Button
          variant="primary"
          appearance="outline"
          size="sm"
          onClick={() => setValues([])}
          disabled={values.length === 0}
        >
          Clear Selection
        </Button>
      </div>

      <MultiCombobox value={values} onChange={setValues}>
        <ComboboxInputWrapper>
          <ComboboxInput placeholder="Select fruits" />
          <ComboboxTrigger />
        </ComboboxInputWrapper>
        <MultiComboboxDisplay className="capitalize" />
        <ComboboxContent>
          <ComboboxList>
            <ComboboxItem id="apple">Apple</ComboboxItem>
            <ComboboxItem id="banana">Banana</ComboboxItem>
            <ComboboxItem id="orange">Orange</ComboboxItem>
            <ComboboxItem id="grape">Grape</ComboboxItem>
            <ComboboxItem id="strawberry">Strawberry</ComboboxItem>
          </ComboboxList>
          <ComboboxEmpty>No results found</ComboboxEmpty>
        </ComboboxContent>
      </MultiCombobox>
    </div>
  );
}
