"use client";

import React from "react";

import Link from "next/link";
import { cn } from "@/lib/utils";
import { useDashboard } from "./DashboardProvider";
import {
  LayoutGrid,
  Users,
  Settings,
  BarChart3,
  FileText,
  HelpCircle,
  LogOut,
} from "lucide-react";

const sidebarSections = [
  {
    label: "Main",
    links: [
      { href: "/dashboard", icon: LayoutGrid, label: "Dashboard" },
      { href: "/dashboard/users", icon: Users, label: "Users" },
      { href: "/dashboard/analytics", icon: BarChart3, label: "Analytics" },
    ],
  },
  {
    label: "Management",
    links: [
      { href: "/dashboard/reports", icon: FileText, label: "Reports" },
      { href: "/dashboard/settings", icon: Settings, label: "Settings" },
    ],
  },
];

const bottomLinks = [
  { href: "/help", icon: HelpCircle, label: "Help & Support" },
  { href: "/logout", icon: LogOut, label: "Logout" },
];

const NavItem = ({
  href,
  icon: Icon,
  label,
}: {
  href: string;
  icon: React.ElementType;
  label: string;
}) => {
  const { menuState, isMobile } = useDashboard();
  const showText = menuState === "full" || isMobile;

  return (
    <Link
      href={href}
      className={cn(
        "group flex items-center rounded-xl px-3 py-2.5 text-sm font-medium text-muted-foreground hover:text-foreground hover:bg-secondary transition-all duration-150",
      )}
    >
      <Icon className="h-5 w-5 shrink-0" />
      <span
        className={cn(
          "ml-3 whitespace-nowrap transition-opacity duration-150",
          showText ? "opacity-100" : "pointer-events-none opacity-0",
        )}
      >
        {label}
      </span>
    </Link>
  );
};

export function Sidebar() {
  const { menuState, isMobile, isMobileMenuOpen, toggleMobileMenu } =
    useDashboard();

  const sidebarWidth = menuState === "collapsed" ? "w-16" : "w-64";
  const showText = menuState === "full" || isMobile;

  return (
    <>
      <nav
        className={cn(
          "fixed inset-y-0 left-0 z-50 border-r border-border bg-card ease-in-out shadow-[2px_2px_6px_rgba(0,0,0,0.08),-2px_-2px_6px_rgba(255,255,255,0.4),inset_1px_1px_3px_rgba(255,255,255,0.3),inset_-1px_-1px_3px_rgba(0,0,0,0.08)] dark:shadow-[2px_2px_6px_rgba(0,0,0,0.3),-2px_-2px_6px_rgba(255,255,255,0.05),inset_1px_1px_3px_rgba(255,255,255,0.06),inset_-1px_-1px_3px_rgba(0,0,0,0.25)]",
          isMobile
            ? isMobileMenuOpen
              ? "w-64 translate-x-0"
              : "w-64 -translate-x-full"
            : sidebarWidth,
        )}
      >
        <div className="flex h-full flex-col">
          {/* Logo Header */}
          <div className="flex h-16 shrink-0 items-center border-b border-border px-3">
            <Link
              href="/dashboard"
              className="flex items-center gap-2 overflow-hidden"
            >
              <div className="h-8 w-8 rounded-lg bg-gradient-to-br from-primary to-primary/70 flex items-center justify-center text-white font-bold">
                N
              </div>
              <span
                className={cn(
                  "whitespace-nowrap text-lg font-bold",
                  !showText && "hidden",
                )}
              >
                Neomorph
              </span>
            </Link>
          </div>

          {/* Navigation Sections */}
          <div className="flex-1 overflow-y-auto p-2">
            {sidebarSections.map((section) => (
              <div key={section.label} className="mb-6">
                {showText && (
                  <h4 className="px-3 mb-2 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                    {section.label}
                  </h4>
                )}
                <div className="space-y-1">
                  {section.links.map((link) => (
                    <NavItem
                      key={link.href}
                      href={link.href}
                      icon={link.icon}
                      label={link.label}
                    />
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Bottom Links */}
          <div className="border-t border-border p-2">
            <div className="space-y-1">
              {bottomLinks.map((link) => (
                <NavItem key={link.href} {...link} />
              ))}
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Overlay */}
      {isMobile && isMobileMenuOpen && (
        <div
          className="fixed inset-0 z-40 bg-black/50"
          onClick={toggleMobileMenu}
        />
      )}
    </>
  );
}
