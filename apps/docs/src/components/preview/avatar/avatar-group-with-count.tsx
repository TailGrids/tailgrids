import {
  Avatar,
  AvatarFallback,
  AvatarGroup,
  AvatarGroupCount,
  AvatarImage
} from "@/registry/core/avatar";
import { teamMembersGroup } from "./data";

export default function AvatarGroupWithCountPreview() {
  return (
    <AvatarGroup aria-label="Team members">
      {teamMembersGroup.map((member, index) => (
        <Avatar key={index} size="md">
          <AvatarImage src={member.src} alt={member.alt} />
          <AvatarFallback>
            {member.alt
              .split(" ")
              .map(name => name[0])
              .join("")}
          </AvatarFallback>
        </Avatar>
      ))}
      <AvatarGroupCount>5+</AvatarGroupCount>
    </AvatarGroup>
  );
}
