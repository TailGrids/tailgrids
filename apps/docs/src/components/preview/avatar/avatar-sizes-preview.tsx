import { Avatar, AvatarFallback, AvatarImage } from "@/registry/core/avatar";
import { teamMembersWithSize } from "./data";

export default function AvatarSizesPreview() {
  return (
    <div className="flex items-center justify-center gap-10 w-full p-4">
      {teamMembersWithSize.map(member => (
        <Avatar key={member.id} size={member.size}>
          <AvatarImage src={member.src} alt={member.alt} />
          <AvatarFallback>{member.fallback}</AvatarFallback>
        </Avatar>
      ))}
    </div>
  );
}
