"use client";

import {
  Combobox,
  ComboboxContent,
  ComboboxEmpty,
  ComboboxHeader,
  ComboboxInput,
  ComboboxInputWrapper,
  ComboboxItem,
  ComboboxList,
  ComboboxSection,
  ComboboxSeparator,
  ComboboxTrigger
} from "@/registry/core/combobox";

export default function ComboboxSectionsPreview() {
  return (
    <div className="w-full max-w-xs">
      <Combobox>
        <ComboboxInputWrapper>
          <ComboboxInput placeholder="Select a category" />
          <ComboboxTrigger />
        </ComboboxInputWrapper>
        <ComboboxContent>
          <ComboboxList>
            <ComboboxSection>
              <ComboboxHeader>Mammals</ComboboxHeader>
              <ComboboxItem id="dog">Dog</ComboboxItem>
              <ComboboxItem id="cat">Cat</ComboboxItem>
              <ComboboxItem id="elephant">Elephant</ComboboxItem>
            </ComboboxSection>
            <ComboboxSeparator />
            <ComboboxSection>
              <ComboboxHeader>Birds</ComboboxHeader>
              <ComboboxItem id="eagle">Eagle</ComboboxItem>
              <ComboboxItem id="parrot">Parrot</ComboboxItem>
              <ComboboxItem id="penguin">Penguin</ComboboxItem>
            </ComboboxSection>
          </ComboboxList>
          <ComboboxEmpty>No results found</ComboboxEmpty>
        </ComboboxContent>
      </Combobox>
    </div>
  );
}
