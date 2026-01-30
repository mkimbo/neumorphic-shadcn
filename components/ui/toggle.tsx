"use client";

import * as React from "react";
import * as TogglePrimitive from "@radix-ui/react-toggle";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const toggleVariants = cva(
  "inline-flex items-center justify-center gap-2 rounded-xl text-sm font-medium disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 [&_svg]:shrink-0 focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[2.5px] outline-none aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive whitespace-nowrap",
  {
    variants: {
      variant: {
        default:
          "bg-card text-foreground shadow-[4px_4px_8px_rgba(0,0,0,0.08),-4px_-4px_8px_rgba(255,255,255,0.4),inset_1px_1px_3px_rgba(255,255,255,0.4),inset_-1px_-1px_3px_rgba(0,0,0,0.08)] data-[state=on]:bg-primary data-[state=on]:text-primary-foreground data-[state=on]:shadow-[4px_4px_8px_rgba(0,0,0,0.08),-4px_-4px_8px_rgba(255,255,255,0.4),inset_2px_2px_5px_rgba(255,255,255,0.3),inset_-2px_-2px_5px_rgba(0,0,0,0.1)] dark:shadow-[4px_4px_8px_rgba(0,0,0,0.3),-4px_-4px_8px_rgba(255,255,255,0.05),inset_1px_1px_3px_rgba(255,255,255,0.08),inset_-1px_-1px_3px_rgba(0,0,0,0.25)] dark:data-[state=on]:shadow-[4px_4px_8px_rgba(0,0,0,0.3),-4px_-4px_8px_rgba(255,255,255,0.05),inset_2px_2px_5px_rgba(255,255,255,0.06),inset_-2px_-2px_5px_rgba(0,0,0,0.3)]",
        outline:
          "border border-border bg-card text-foreground shadow-[4px_4px_8px_rgba(0,0,0,0.08),-4px_-4px_8px_rgba(255,255,255,0.4),inset_1px_1px_3px_rgba(255,255,255,0.4),inset_-1px_-1px_3px_rgba(0,0,0,0.08)] data-[state=on]:bg-accent data-[state=on]:text-accent-foreground dark:shadow-[4px_4px_8px_rgba(0,0,0,0.3),-4px_-4px_8px_rgba(255,255,255,0.05),inset_1px_1px_3px_rgba(255,255,255,0.08),inset_-1px_-1px_3px_rgba(0,0,0,0.25)]",
      },
      size: {
        default: "h-10 px-3 min-w-10",
        sm: "h-9 px-2.5 min-w-9",
        lg: "h-11 px-4 min-w-11",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  },
);

function Toggle({
  className,
  variant,
  size,
  ...props
}: React.ComponentProps<typeof TogglePrimitive.Root> &
  VariantProps<typeof toggleVariants>) {
  return (
    <TogglePrimitive.Root
      data-slot="toggle"
      className={cn(toggleVariants({ variant, size, className }))}
      {...props}
    />
  );
}

export { Toggle, toggleVariants };
