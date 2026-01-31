"use client";

import React from "react";
import {
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";

import { useGlobalDialog } from "@/hooks/useGlobalDialog";
import { useDevice } from "@/hooks/useDevice";

function NeumorphicDialogDemo() {
  return (
    <>
      <DialogHeader>
        <DialogTitle>Extend Stay</DialogTitle>
        <DialogDescription>
          Extend the current booking. Availability will be checked for the new
          dates.
        </DialogDescription>
      </DialogHeader>

      <div className="space-y-4 py-4">
        <p className="text-sm text-muted-foreground">
          Dialogs overlay the page and require user interaction to dismiss.
        </p>
        <Button className="w-full">Confirm</Button>
      </div>
    </>
  );
}

type Props = {
  children: React.ReactElement;
};

export function NeumorphicDialog({ children }: Props) {
  const { open, close } = useGlobalDialog();
  const isDesktop = useDevice();

  const handleOpen = () => {
    open(<NeumorphicDialogDemo />, {
      variant: isDesktop ? "fullscreen" : "scrollUp",
      maxWidth: "sm:max-w-[425px]",
    });
  };

  return React.cloneElement(
    children as React.ReactElement<any>,
    {
      onClick: (e: React.MouseEvent) => {
        (children as React.ReactElement<any>).props.onClick?.(e);
        handleOpen();
      },
    } as any,
  );
}
