import { Field, FieldDescription, FieldLabel } from "@/registry/core/field";
import { TextArea } from "@/registry/core/text-area";

export default function FieldWithTextareaPreview() {
  return (
    <div className="flex flex-col items-center gap-10 w-full max-w-sm p-4">
      <Field className="w-full">
        <FieldLabel htmlFor="bio">Bio</FieldLabel>
        <TextArea id="bio" placeholder="Tell us about yourself..." />
        <FieldDescription>
          Brief description for your profile. Maximum 280 characters.
        </FieldDescription>
      </Field>
    </div>
  );
}
