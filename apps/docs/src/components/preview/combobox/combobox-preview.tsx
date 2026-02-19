"use client";

import {
  Combobox,
  ComboboxContent,
  ComboboxEmpty,
  ComboboxInput,
  ComboboxInputWrapper,
  ComboboxItem,
  ComboboxList,
  ComboboxTrigger
} from "@/registry/core/combobox";

export default function ComboboxPreview() {
  return (
    <div className="w-full max-w-xs">
      <Combobox>
        <ComboboxInputWrapper>
          <ComboboxInput placeholder="Select a fruit" />
          <ComboboxTrigger />
        </ComboboxInputWrapper>
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
      </Combobox>
    </div>
  );
}
