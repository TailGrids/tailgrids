import {
  NativeSelect,
  NativeSelectOption
} from "@/registry/core/native-select";

export default function NativeSelectPreview() {
  return (
    <div className="max-w-sm w-full mx-auto">
      <label className="mb-2.5 block text-sm font-medium text-input-label-text">
        Label
      </label>
      <NativeSelect placeholder="Select an option">
        <NativeSelectOption value="option1">Option 1</NativeSelectOption>
        <NativeSelectOption value="option2">Option 2</NativeSelectOption>
        <NativeSelectOption value="option3">Option 3</NativeSelectOption>
      </NativeSelect>
    </div>
  );
}
