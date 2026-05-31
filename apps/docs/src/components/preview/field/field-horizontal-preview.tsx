import { Field, FieldLabel } from "@/registry/core/field";
import { Input } from "@/registry/core/input";

export default function FieldHorizontalPreview() {
  return (
    <div>
      <Field className="w-full" orientation="horizontal">
        <FieldLabel htmlFor="company">Company:</FieldLabel>
        <Input id="company" placeholder="Acme Inc." />
      </Field>
    </div>
  );
}
