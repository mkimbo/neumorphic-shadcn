"use client";

import * as React from "react";
import * as TabsPrimitive from "@radix-ui/react-tabs";

import { cn } from "@/lib/utils";

function Tabs({
  className,
  ...props
}: React.ComponentProps<typeof TabsPrimitive.Root>) {
  return (
    <TabsPrimitive.Root
      data-slot="tabs"
      className={cn("flex flex-col gap-2", className)}
      {...props}
    />
  );
}

function TabsList({
  className,
  ...props
}: React.ComponentProps<typeof TabsPrimitive.List>) {
  return (
    <TabsPrimitive.List
      data-slot="tabs-list"
      className={cn(
        "bg-card text-muted-foreground inline-flex h-10 w-fit items-center justify-center rounded-xl p-1.5 shadow-[4px_4px_8px_rgba(0,0,0,0.08),-4px_-4px_8px_rgba(255,255,255,0.4),inset_1px_1px_3px_rgba(255,255,255,0.4),inset_-1px_-1px_3px_rgba(0,0,0,0.08)] dark:shadow-[4px_4px_8px_rgba(0,0,0,0.3),-4px_-4px_8px_rgba(255,255,255,0.05),inset_1px_1px_3px_rgba(255,255,255,0.08),inset_-1px_-1px_3px_rgba(0,0,0,0.25)]",
        className,
      )}
      {...props}
    />
  );
}

function TabsTrigger({
  className,
  ...props
}: React.ComponentProps<typeof TabsPrimitive.Trigger>) {
  return (
    <TabsPrimitive.Trigger
      data-slot="tabs-trigger"
      className={cn(
        "data-[state=active]:bg-primary data-[state=active]:text-primary-foreground data-[state=active]:shadow-[4px_4px_8px_rgba(0,0,0,0.08),-4px_-4px_8px_rgba(255,255,255,0.4),inset_2px_2px_5px_rgba(255,255,255,0.3),inset_-2px_-2px_5px_rgba(0,0,0,0.1)] dark:data-[state=active]:shadow-[4px_4px_8px_rgba(0,0,0,0.3),-4px_-4px_8px_rgba(255,255,255,0.05),inset_2px_2px_5px_rgba(255,255,255,0.06),inset_-2px_-2px_5px_rgba(0,0,0,0.3)] focus-visible:border-ring focus-visible:ring-ring/50 text-muted-foreground inline-flex h-[calc(100%-8px)] flex-1 items-center justify-center gap-1.5 rounded-lg border border-transparent px-3 py-1 text-sm font-medium whitespace-nowrap focus-visible:ring-[2.5px] disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
        className,
      )}
      {...props}
    />
  );
}

function TabsContent({
  className,
  ...props
}: React.ComponentProps<typeof TabsPrimitive.Content>) {
  return (
    <TabsPrimitive.Content
      data-slot="tabs-content"
      className={cn("flex-1 outline-none", className)}
      {...props}
    />
  );
}

export { Tabs, TabsList, TabsTrigger, TabsContent };
