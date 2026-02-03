"use client";
import { AvatarToast } from "@/registry/core/toast";
import { useEffect, useState } from "react";

export default function ToastAvatarPreview() {
  const [show, setShow] = useState(true);

  useEffect(() => {
    if (!show) {
      const timer = setTimeout(() => setShow(true), 2000);
      return () => clearTimeout(timer);
    }
  }, [show]);

  if (!show) return null;

  return (
    <AvatarToast
      name="Emily Stone"
      description="Sent you a message"
      image="https://randomuser.me/api/portraits/women/40.jpg"
      status="online"
      time="Just now"
      dismiss={() => setShow(false)}
    />
  );
}
