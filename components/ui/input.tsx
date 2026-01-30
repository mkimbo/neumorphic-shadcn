import * as React from "react";

import { cn } from "@/lib/utils";

function Input({ className, type, ...props }: React.ComponentProps<"input">) {
  return (
    <input
      type={type}
      data-slot="input"
      className={cn(
        "file:text-foreground placeholder:text-muted-foreground selection:bg-primary selection:text-primary-foreground bg-card border border-border h-11 w-full min-w-0 rounded-2xl px-5 py-3 text-base shadow-[inset_2px_2px_5px_rgba(255,255,255,0.4),inset_-3px_-3px_7px_rgba(0,0,0,0.15)] dark:shadow-[inset_2px_2px_5px_rgba(255,255,255,0.1),inset_-3px_-3px_7px_rgba(0,0,0,0.5)] outline-none file:inline-flex file:h-9 file:border-0 file:bg-transparent file:text-sm file:font-medium disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 md:text-base",
        "focus-visible:border-ring focus-visible:ring-ring/40 focus-visible:ring-[2.5px] focus-visible:shadow-[inset_2px_2px_5px_rgba(255,255,255,0.4),inset_-3px_-3px_7px_rgba(0,0,0,0.15),0_0_0_4px_var(--ring)/0.15] dark:focus-visible:shadow-[inset_2px_2px_5px_rgba(255,255,255,0.1),inset_-3px_-3px_7px_rgba(0,0,0,0.5),0_0_0_4px_var(--ring)/0.25]",
        "aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive",
        className,
      )}
      {...props}
    />
  );
}

export { Input };
