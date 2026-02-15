import {
  NativeSelect,
  NativeSelectOptGroup,
  NativeSelectOption
} from "@/registry/core/native-select";

export default function NativeSelectOptGroupPreview() {
  return (
    <div className="max-w-sm w-full mx-auto">
      <label className="mb-2.5 block text-sm font-medium text-input-label-text">
        Grouped Options
      </label>
      <NativeSelect>
        <NativeSelectOption value="">Select a fruit</NativeSelectOption>
        <NativeSelectOptGroup label="Citrus">
          <NativeSelectOption value="lemon">Lemon</NativeSelectOption>
          <NativeSelectOption value="orange">Orange</NativeSelectOption>
          <NativeSelectOption value="grapefruit">Grapefruit</NativeSelectOption>
        </NativeSelectOptGroup>
        <NativeSelectOptGroup label="Berries">
          <NativeSelectOption value="strawberry">Strawberry</NativeSelectOption>
          <NativeSelectOption value="blueberry">Blueberry</NativeSelectOption>
          <NativeSelectOption value="raspberry">Raspberry</NativeSelectOption>
        </NativeSelectOptGroup>
      </NativeSelect>
    </div>
  );
}
