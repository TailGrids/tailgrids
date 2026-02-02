"use client";
import { AvatarToast } from "@/registry/core/toast";

export default function ToastAvatarPreview() {
  return (
    <AvatarToast
      name="Emily Stone"
      description="Sent you a message"
      image="https://randomuser.me/api/portraits/women/40.jpg"
      status="online"
      time="Just now"
    />
  );
}
