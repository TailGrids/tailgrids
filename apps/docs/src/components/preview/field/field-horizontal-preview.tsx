import { Field, FieldContent, FieldLabel } from "@/registry/core/field";
import { Input } from "@/registry/core/input";

export default function FieldHorizontalPreview() {
  return (
    <div className="flex flex-col items-center gap-10 w-full max-w-lg p-4">
      <Field orientation="horizontal" className="w-full items-center">
        <FieldContent>
          <FieldLabel htmlFor="company">Company:</FieldLabel>
        </FieldContent>
        <Input id="company" placeholder="Acme Inc." />
      </Field>
    </div>
  );
}
