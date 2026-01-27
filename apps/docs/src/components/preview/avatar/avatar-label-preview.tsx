import { Avatar } from "@/registry/core/avatar";

export default function AvatarPreview() {
  return (
    <div className="flex justify-center items-center gap-10 w-full p-4">
      <Avatar
        src="/docs/images/avatar/avatar-1.webp"
        fallback="J"
        size="md"
        status="online"
      />
      <Avatar
        src="/docs/images/avatar/avatar-1.webp"
        fallback="J"
        size="md"
        status="online"
        label={{ name: "Johurul Haque", email: "johurul@pimjo.com" }}
      />
    </div>
  );
}
