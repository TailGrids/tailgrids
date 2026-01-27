import { AvatarGroup } from "@/registry/core/avatar";

export default function AvatarSizesPreview() {
  const teamMembers = [
    {
      src: "/docs/images/avatar/avatar-1.webp",
      alt: "Johurul Haque"
    },
    {
      src: "/docs/images/avatar/avatar-2.webp",
      alt: "James Lue"
    },
    {
      src: "/docs/images/avatar/avatar-3.webp",
      alt: "David Lorin"
    }
  ];

  return (
    <div className="flex items-center justify-center gap-10 w-full p-4">
      <AvatarGroup data={teamMembers} size="md" />
    </div>
  );
}
