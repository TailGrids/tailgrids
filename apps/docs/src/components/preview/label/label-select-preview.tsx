import { Label } from "@/registry/core/label";
import {
  NativeSelect,
  NativeSelectOption
} from "@/registry/core/native-select";

export default function LabelSelectPreview() {
  return (
    <div className="max-w-sm w-full mx-auto p-8">
      <div className="grid grid-cols-1 gap-2">
        <Label htmlFor="country">Country</Label>
        <NativeSelect id="country" defaultValue="">
          <NativeSelectOption value="" disabled>
            Select a country
          </NativeSelectOption>
          <NativeSelectOption value="us">United States</NativeSelectOption>
          <NativeSelectOption value="ca">Canada</NativeSelectOption>
          <NativeSelectOption value="uk">United Kingdom</NativeSelectOption>
        </NativeSelect>
      </div>
    </div>
  );
}
