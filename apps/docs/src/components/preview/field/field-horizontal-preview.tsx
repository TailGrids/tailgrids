import { Field, FieldContent, FieldLabel } from "@/registry/core/field";
import { Input } from "@/registry/core/input";

export default function FieldHorizontalPreview() {
  return (
    <div>
      <Field orientation="horizontal" className="w-full items-center">
        <FieldContent>
          <FieldLabel htmlFor="company">Company:</FieldLabel>
        </FieldContent>
        <Input id="company" placeholder="Acme Inc." />
      </Field>
    </div>
  );
}
