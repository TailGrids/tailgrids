"use client";

import Alert from "@/registry/core/alert";
import { Xmark2x } from "@tailgrids/icons";
export default function AlertActionsPreview() {
  return (
    <div className="flex flex-col gap-6 w-full">
      <Alert
        variant="danger"
        title="Delete Account"
        message="This action cannot be undone. This will permanently delete your account."
        icon={<Xmark2x />}
        actions={{
          primary: {
            label: "Delete",
            onClick: () => console.log("Deleted")
          },
          secondary: {
            label: "Cancel"
          }
        }}
      />
    </div>
  );
}
