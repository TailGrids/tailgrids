import {
  NativeSelect,
  NativeSelectOption
} from "@/registry/core/native-select";

export default function NativeSelectPlaceholderPreview() {
  return (
    <div className="max-w-sm w-full mx-auto">
      <label className="mb-2.5 block text-sm font-medium text-input-label-text">
        Label
      </label>
      <NativeSelect placeholder="Select a country">
        <NativeSelectOption value="usa">USA</NativeSelectOption>
        <NativeSelectOption value="uk">UK</NativeSelectOption>
        <NativeSelectOption value="canada">Canada</NativeSelectOption>
      </NativeSelect>
    </div>
  );
}
