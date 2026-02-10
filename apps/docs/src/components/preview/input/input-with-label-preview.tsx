import { Input } from "@/registry/core/input";

export default function InputWithLabelPreview() {
  return (
    <div className="max-w-sm w-full mx-auto">
      <Input label="Full Name" placeholder="John Doe" />
    </div>
  );
}
