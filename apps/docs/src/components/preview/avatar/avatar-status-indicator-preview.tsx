import { Avatar } from "@/registry/core/avatar";

export default function AvatarStatusIndicatorPreview() {
  const teamMembers = [
    {
      id: 1,
      src: "/docs/images/avatar/avatar-1.webp",
      alt: "Johurul Haque",
      fallback: "JH",
      status: "none"
    },
    {
      id: 2,
      src: "/docs/images/avatar/avatar-1.webp",
      alt: "Johurul Haque",
      fallback: "JH",
      status: "online"
    },
    {
      id: 3,
      src: "/docs/images/avatar/avatar-1.webp",
      alt: "Johurul Haque",
      fallback: "JH",
      status: "offline"
    },
    {
      id: 4,
      src: "/docs/images/avatar/avatar-1.webp",
      alt: "Johurul Haque",
      fallback: "JH",
      status: "busy"
    }
  ] as const;

  return (
    <div className="flex items-center justify-center gap-10 w-full p-4">
      {teamMembers.map(member => (
        <Avatar
          key={member.id}
          size="lg"
          src={member.src}
          alt={member.alt}
          fallback={member.fallback}
          status={member.status}
        />
      ))}
    </div>
  );
}
