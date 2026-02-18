"use client";

import {
  Combobox,
  ComboboxContent,
  ComboboxErrorMessage,
  ComboboxInput,
  ComboboxInputWrapper,
  ComboboxItem,
  ComboboxLabel,
  ComboboxList,
  ComboboxTrigger
} from "@/registry/core/combobox/combobox";

export default function ComboboxValidationPreview() {
  return (
    <div className="w-full max-w-xs">
      <Combobox isInvalid isRequired>
        <ComboboxLabel>Required Selection</ComboboxLabel>
        <ComboboxInputWrapper>
          <ComboboxInput placeholder="Select a framework" />
          <ComboboxTrigger />
        </ComboboxInputWrapper>
        <ComboboxErrorMessage>
          Please select a framework to continue.
        </ComboboxErrorMessage>
        <ComboboxContent>
          <ComboboxList>
            <ComboboxItem id="nextjs">Next.js</ComboboxItem>
            <ComboboxItem id="react">React</ComboboxItem>
            <ComboboxItem id="remix">Remix</ComboboxItem>
          </ComboboxList>
        </ComboboxContent>
      </Combobox>
    </div>
  );
}
