"use client";
import { AvatarToast } from "@/registry/core/toast";

export default function ToastAvatarPreview() {
  return (
    <AvatarToast
      name="Random User"
      description="Sent you a message"
      image="https://randomuser.me/api/portraits/men/40.jpg"
      status="online"
      time="Just now"
    />
  );
}
