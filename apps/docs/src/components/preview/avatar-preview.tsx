import { Avatar } from "@/registry/core/avatar";

export default function AvatarPreview() {
  const teamMembers = [
    { src: "/placeholder/img-avatar-1.jpg", alt: "Chris Evans" },
    { src: "/placeholder/img-avatar-2.jpg", alt: "Scarlett Johanssen" },
    { src: "/placeholder/img-avatar-3.jpg", alt: "Mark Ruffalo" },
    { src: "/placeholder/img-avatar-4.jpg", alt: "Robert Downey Jr" }
  ];

  return (
    <div className="flex flex-col items-center gap-10 w-full p-4">
      <Avatar
        src=""
        fallback="J"
        size="md"
        status="online"
        label={{ name: "Johurul Haque", email: "johurul@pimjo.com" }}
      />
    </div>
  );
}
