"use client";

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

export default function MultiComboboxPreview() {
  const [values, setValues] = useState<Key[]>(["apple"]);

  return (
    <div className="w-full max-w-xs">
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
