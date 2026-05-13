import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";
import "./globals.css";
import { Geist } from "next/font/google";
import { cn } from "@/lib/utils";

const geist = Geist({subsets:['latin'],variable:'--font-sans'});

export const metadata: Metadata = {
  title: "Shivraj — AI & Full-Stack Systems Engineer",
  description:
    "Premium AI-native full-stack engineering portfolio showcasing production-grade SaaS systems, scalable backend architecture, realtime collaboration, and security infrastructure.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={cn(GeistSans.className, "font-sans", geist.variable)}>
      <body>{children}</body>
    </html>
  );
}