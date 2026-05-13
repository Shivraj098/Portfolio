import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";

import { Providers } from "@/providers";

import "./globals.css";

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
    <html lang="en" className={GeistSans.className}>
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}