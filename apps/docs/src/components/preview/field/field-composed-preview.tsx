import { ComposedField } from "@/registry/core/field";
import { Input } from "@/registry/core/input";

export default function FieldComposedPreview() {
  return (
    <div className="flex flex-col items-center gap-10 w-full max-w-sm p-4">
      <ComposedField
        label="Email address"
        description="We'll use this to send you important updates."
        className="w-full"
      >
        <Input type="email" placeholder="you@example.com" />
      </ComposedField>

      <ComposedField
        label="Username"
        errorMessage="This username is already taken."
        className="w-full"
        isInvalid
      >
        <Input state="error" defaultValue="evilrabbit" />
      </ComposedField>
    </div>
  );
}
