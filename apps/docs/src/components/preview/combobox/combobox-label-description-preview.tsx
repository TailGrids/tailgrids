"use client";

import {
  Combobox,
  ComboboxContent,
  ComboboxDescription,
  ComboboxEmpty,
  ComboboxInput,
  ComboboxInputWrapper,
  ComboboxItem,
  ComboboxLabel,
  ComboboxList,
  ComboboxTrigger
} from "@/registry/core/combobox/combobox";

export default function ComboboxLabelDescriptionPreview() {
  return (
    <div className="w-full max-w-xs">
      <Combobox>
        <ComboboxLabel>Favorite Language</ComboboxLabel>
        <ComboboxInputWrapper>
          <ComboboxInput placeholder="Select a language" />
          <ComboboxTrigger />
        </ComboboxInputWrapper>
        <ComboboxDescription>
          Choose the language you use most often.
        </ComboboxDescription>
        <ComboboxContent>
          <ComboboxList>
            <ComboboxItem id="js">JavaScript</ComboboxItem>
            <ComboboxItem id="ts">TypeScript</ComboboxItem>
            <ComboboxItem id="python">Python</ComboboxItem>
            <ComboboxItem id="rust">Rust</ComboboxItem>
            <ComboboxItem id="go">Go</ComboboxItem>
          </ComboboxList>
          <ComboboxEmpty>No results found</ComboboxEmpty>
        </ComboboxContent>
      </Combobox>
    </div>
  );
}
