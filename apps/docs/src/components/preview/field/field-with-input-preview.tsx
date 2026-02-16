import {
  Field,
  FieldDescription,
  FieldError,
  FieldLabel
} from "@/registry/core/field";
import { Input } from "@/registry/core/input";

export default function FieldWithInputPreview() {
  return (
    <div className="flex flex-col items-center gap-10 w-full max-w-sm p-4">
      <Field className="w-full">
        <FieldLabel htmlFor="full-name">Full name</FieldLabel>
        <Input id="full-name" placeholder="Evil Rabbit" />
        <FieldDescription>
          This appears on invoices and emails.
        </FieldDescription>
      </Field>

      <Field className="w-full">
        <FieldLabel htmlFor="username">Username</FieldLabel>
        <Input id="username" state="error" placeholder="Evil Rabbit" />
        <FieldError>This username is already taken.</FieldError>
      </Field>
    </div>
  );
}
