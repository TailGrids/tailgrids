import {
  NativeSelect,
  NativeSelectOption
} from "@/registry/core/native-select";

export default function NativeSelectStatesPreview() {
  return (
    <div className="max-w-sm w-full mx-auto flex flex-col gap-6">
      <div>
        <label className="mb-2.5 block text-sm font-medium text-input-label-text">
          Success State
        </label>
        <NativeSelect variant="success">
          <NativeSelectOption value="">Select an option</NativeSelectOption>
          <NativeSelectOption value="option1">Option 1</NativeSelectOption>
          <NativeSelectOption value="option2">Option 2</NativeSelectOption>
        </NativeSelect>
        <p className="mt-2 text-sm text-input-success">Success message</p>
      </div>

      <div>
        <label className="mb-2.5 block text-sm font-medium text-input-label-text">
          Error State
        </label>
        <NativeSelect variant="error">
          <NativeSelectOption value="">Select an option</NativeSelectOption>
          <NativeSelectOption value="option1">Option 1</NativeSelectOption>
          <NativeSelectOption value="option2">Option 2</NativeSelectOption>
        </NativeSelect>
        <p className="mt-2 text-sm text-input-error">Error message</p>
      </div>
    </div>
  );
}
