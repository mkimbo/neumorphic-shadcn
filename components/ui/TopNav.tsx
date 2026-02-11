"use client";

import { Bell, ChevronDown, Menu, User as UserIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useDashboard } from "./DashboardProvider";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { ThemeToggle } from "./theme-toggle";
import { ThemeSwitcher } from "./theme-switcher";

export function TopNav() {
  const { toggleMenuState, toggleMobileMenu, isMobile } = useDashboard();

  const handleToggle = isMobile ? toggleMobileMenu : toggleMenuState;

  const dummyUser = {
    name: "Alex Johnson",
    email: "alex@example.com",
    firstName: "Alex",
    lastName: "Johnson",
    role: "Administrator",
  };

  return (
    <div className="flex h-full items-center justify-between px-4 sticky top-0 bg-card z-10">
      <Button variant="ghost" size="icon" onClick={handleToggle}>
        <Menu className="h-5 w-5" />
      </Button>
      <div className="flex items-center gap-2 sm:gap-4">
        <ThemeSwitcher />

        <Button variant="ghost" size="icon">
          <Bell className="h-5 w-5" />
        </Button>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button
              variant="ghost"
              className="flex items-center space-x-2 p-2 h-auto"
            >
              <Avatar className="h-8 w-8">
                <AvatarImage
                  src="https://api.dicebear.com/7.x/avataaars/svg?seed=Alex"
                  alt="User"
                />
                <AvatarFallback>
                  <UserIcon className="h-4 w-4" />
                </AvatarFallback>
              </Avatar>
              <div className="hidden lg:flex flex-col items-start">
                <span className="text-sm font-medium">{dummyUser.name}</span>
                <span className="text-xs text-muted-foreground">
                  {dummyUser.role}
                </span>
              </div>
              <ChevronDown className="hidden lg:block h-4 w-4 text-muted-foreground" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuLabel>
              <p className="font-medium">
                {dummyUser.firstName} {dummyUser.lastName}
              </p>
              <p className="text-xs font-normal text-muted-foreground">
                {dummyUser.email}
              </p>
            </DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem>Account Settings</DropdownMenuItem>
            <DropdownMenuItem>Preferences</DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem className="text-destructive">
              Logout
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </div>
  );
}
