import { Avatar } from "@/registry/core/avatar";

export default function AvatarSizesPreview() {
  const teamMembers = [
    {
      id: 1,
      src: "/docs/images/avatar/avatar-1.webp",
      alt: "Johurul Haque",
      fallback: "JH",
      size: "xs"
    },
    {
      id: 2,
      src: "/docs/images/avatar/avatar-1.webp",
      alt: "Johurul Haque",
      fallback: "JH",
      size: "sm"
    },
    {
      id: 3,
      src: "/docs/images/avatar/avatar-1.webp",
      alt: "Johurul Haque",
      fallback: "JH",
      size: "md"
    },
    {
      id: 4,
      src: "/docs/images/avatar/avatar-1.webp",
      alt: "Johurul Haque",
      fallback: "JH",
      size: "lg"
    },
    {
      id: 5,
      src: "/docs/images/avatar/avatar-1.webp",
      alt: "Johurul Haque",
      fallback: "JH",
      size: "xl"
    },
    {
      id: 6,
      src: "/docs/images/avatar/avatar-1.webp",
      alt: "Johurul Haque",
      fallback: "JH",
      size: "xxl"
    }
  ] as const;

  return (
    <div className="flex items-center justify-center gap-10 w-full p-4">
      {teamMembers.map(member => (
        <Avatar
          key={member.id}
          src={member.src}
          alt={member.alt}
          fallback={member.fallback}
          size={member.size}
        />
      ))}
    </div>
  );
}
