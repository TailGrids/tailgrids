import {
  NativeSelect,
  NativeSelectOption
} from "@/registry/core/native-select";

export default function NativeSelectDisabledPreview() {
  return (
    <div className="max-w-sm w-full mx-auto">
      <label className="mb-2.5 block text-sm font-medium text-input-label-text">
        Disabled Select
      </label>
      <NativeSelect disabled>
        <NativeSelectOption value="">Select an option</NativeSelectOption>
        <NativeSelectOption value="option1">Option 1</NativeSelectOption>
        <NativeSelectOption value="option2">Option 2</NativeSelectOption>
      </NativeSelect>
    </div>
  );
}
