import React from "react";
import type { Metadata } from "next";
import { Inter, Poppins } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";

import "./globals.css";
import { ThemeProvider } from "@/context/theme-provider";

import { GlobalDialog } from "@/components/ui/global-dialog/GlobalDialog";
import { DashboardProvider } from "@/components/ui/DashboardProvider";

const fontSans = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  weight: ["400", "500", "600", "700"],
});

const fontHeading = Poppins({
  subsets: ["latin"],
  variable: "--font-heading",
  weight: ["700", "800", "900"], // Poppins looks great when bold
});

export const metadata: Metadata = {
  title: "Neumorphic Design System",
  description: "Custom neumorphic design based on shadcn components",
  generator: "v0.app",
  icons: {
    icon: [
      {
        url: "/icon-light-32x32.png",
        media: "(prefers-color-scheme: light)",
      },
      {
        url: "/icon-dark-32x32.png",
        media: "(prefers-color-scheme: dark)",
      },
      {
        url: "/icon.svg",
        type: "image/svg+xml",
      },
    ],
    apple: "/apple-icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`font-sans antialiased ${fontSans.variable} ${fontHeading.variable}`}
      >
        <ThemeProvider>
          <DashboardProvider>{children}</DashboardProvider>
        </ThemeProvider>
        <GlobalDialog />
        <Analytics />
      </body>
    </html>
  );
}
