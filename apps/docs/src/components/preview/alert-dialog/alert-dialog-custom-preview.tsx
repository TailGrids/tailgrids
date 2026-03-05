"use client";

import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger
} from "@/registry/core/alert-dialog";
import { buttonStyles } from "@/registry/core/button";

export default function AlertDialogCustomPreview() {
  return (
    <AlertDialog>
      <AlertDialogTrigger className={buttonStyles({ appearance: "outline" })}>
        Logout
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>You are logging out</AlertDialogTitle>
          <AlertDialogDescription>
            You will be redirected to the login page. Do you want to proceed?
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel
            className={buttonStyles({ variant: "ghost", size: "sm" })}
          >
            Stay Logged In
          </AlertDialogCancel>
          <AlertDialogAction
            className={buttonStyles({ variant: "primary", size: "sm" })}
          >
            Logout Now
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}
