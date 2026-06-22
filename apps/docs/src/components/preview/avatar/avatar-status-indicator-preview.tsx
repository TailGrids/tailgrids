import {
  Avatar,
  AvatarBadge,
  AvatarFallback,
  AvatarImage
} from "@/registry/core/avatar";
import { teamMembersWithStatus } from "./data";

export default function AvatarStatusIndicatorPreview() {
  return (
    <div className="flex items-center justify-center gap-10 w-full p-4">
      {teamMembersWithStatus.map(member => (
        <Avatar key={member.id} size="lg">
          <AvatarImage src={member.src} alt={member.alt} />
          <AvatarFallback>{member.fallback}</AvatarFallback>
          {member.status !== "none" && <AvatarBadge status={member.status} />}
        </Avatar>
      ))}
    </div>
  );
}
