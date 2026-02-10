import { Input } from "@/registry/core/input";

export default function InputPreview() {
  return (
    <div className="max-w-sm w-full mx-auto">
      <Input label="Email" placeholder="Enter your email" />
    </div>
  );
}
