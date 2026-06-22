import {
  Avatar,
  AvatarBadge,
  AvatarFallback,
  AvatarImage
} from "@/registry/core/avatar";

export default function AvatarPreview() {
  return (
    <div className="flex flex-col items-center gap-10 w-full p-4">
      <Avatar size="lg">
        <AvatarImage
          src="/docs/images/avatar/avatar-1.webp"
          alt="Johurul Haque"
        />
        <AvatarFallback>J</AvatarFallback>
        <AvatarBadge status="online" size="lg" ping />
      </Avatar>
    </div>
  );
}
