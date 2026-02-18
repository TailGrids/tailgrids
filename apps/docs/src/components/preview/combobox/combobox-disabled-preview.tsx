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

export default function ComboboxDisabledPreview() {
  return (
    <div className="flex flex-col gap-8 w-full max-w-xs">
      <Combobox isDisabled>
        <ComboboxInputWrapper>
          <ComboboxInput placeholder="Disabled combobox" />
          <ComboboxTrigger />
        </ComboboxInputWrapper>
        <ComboboxContent>
          <ComboboxList>
            <ComboboxItem id="apple">Apple</ComboboxItem>
          </ComboboxList>
          <ComboboxEmpty>No results found</ComboboxEmpty>
        </ComboboxContent>
      </Combobox>

      <Combobox>
        <ComboboxInputWrapper>
          <ComboboxInput placeholder="Select an option" />
          <ComboboxTrigger />
        </ComboboxInputWrapper>
        <ComboboxContent>
          <ComboboxList>
            <ComboboxItem id="1">Available Option</ComboboxItem>
            <ComboboxItem id="2" isDisabled>
              Disabled Option
            </ComboboxItem>
            <ComboboxItem id="3">Another Option</ComboboxItem>
          </ComboboxList>
        </ComboboxContent>
      </Combobox>
    </div>
  );
}
