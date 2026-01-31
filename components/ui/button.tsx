import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-xl text-sm font-medium transition-transform disabled:pointer-events-none disabled:opacity-40 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive active:shadow-[inset_3px_3px_7px_rgba(0,0,0,0.15),inset_-2px_-2px_5px_rgba(255,255,255,0.3)] active:scale-[0.97]",
  {
    variants: {
      variant: {
        default:
          "bg-primary text-primary-foreground shadow-[5px_5px_10px_rgba(0,0,0,0.1),-5px_-5px_10px_rgba(255,255,255,0.5),inset_2px_2px_5px_rgba(255,255,255,0.3),inset_-2px_-2px_5px_rgba(0,0,0,0.1)] hover:shadow-[7px_7px_12px_rgba(0,0,0,0.12),-7px_-7px_12px_rgba(255,255,255,0.6)] dark:shadow-[5px_5px_12px_rgba(0,0,0,0.4),-5px_-5px_12px_rgba(255,255,255,0.06),inset_2px_2px_5px_rgba(255,255,255,0.06),inset_-2px_-2px_5px_rgba(0,0,0,0.3)] dark:hover:shadow-[7px_7px_14px_rgba(0,0,0,0.5),-7px_-7px_14px_rgba(255,255,255,0.08)]",
        destructive:
          "bg-destructive text-destructive-foreground shadow-[5px_5px_10px_rgba(220,38,38,0.2),-5px_-5px_10px_rgba(255,255,255,0.4),inset_2px_2px_5px_rgba(255,255,255,0.2),inset_-2px_-2px_5px_rgba(0,0,0,0.15)] hover:shadow-[7px_7px_12px_rgba(220,38,38,0.25),-7px_-7px_12px_rgba(255,255,255,0.5)]",
        outline:
          "bg-card text-foreground shadow-[4px_4px_8px_rgba(0,0,0,0.08),-4px_-4px_8px_rgba(255,255,255,0.4),inset_1px_1px_3px_rgba(255,255,255,0.4),inset_-1px_-1px_3px_rgba(0,0,0,0.08)] hover:shadow-[5px_5px_10px_rgba(0,0,0,0.1),-5px_-5px_10px_rgba(255,255,255,0.5)] dark:bg-card dark:shadow-[4px_4px_8px_rgba(0,0,0,0.3),-4px_-4px_8px_rgba(255,255,255,0.05),inset_1px_1px_3px_rgba(255,255,255,0.08),inset_-1px_-1px_3px_rgba(0,0,0,0.25)]",
        secondary:
          "bg-secondary text-secondary-foreground shadow-[4px_4px_8px_rgba(0,0,0,0.08),-4px_-4px_8px_rgba(255,255,255,0.4),inset_2px_2px_4px_rgba(255,255,255,0.3)] hover:shadow-[5px_5px_10px_rgba(0,0,0,0.1),-5px_-5px_10px_rgba(255,255,255,0.5)]",
        ghost:
          "text-foreground hover:bg-accent/10 hover:shadow-[3px_3px_6px_rgba(0,0,0,0.06),-3px_-3px_6px_rgba(255,255,255,0.3)] dark:hover:bg-accent/20 dark:hover:shadow-[3px_3px_7px_rgba(0,0,0,0.25),-3px_-3px_7px_rgba(255,255,255,0.04)]",
        link: "text-primary underline-offset-4 hover:underline",
      },
      size: {
        default: "h-11 px-7 py-2.5 has-[>svg]:px-4",
        sm: "h-9 rounded-lg gap-1.5 px-5 has-[>svg]:px-3 text-sm",
        lg: "h-13 rounded-xl px-10 has-[>svg]:px-5 text-base",
        icon: "size-11",
        "icon-sm": "size-9 rounded-lg",
        "icon-lg": "size-13 rounded-xl",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  },
);

function Button({
  className,
  variant,
  size,
  asChild = false,
  ...props
}: React.ComponentProps<"button"> &
  VariantProps<typeof buttonVariants> & {
    asChild?: boolean;
  }) {
  const Comp = asChild ? Slot : "button";

  return (
    <Comp
      data-slot="button"
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    />
  );
}

export { Button, buttonVariants };
