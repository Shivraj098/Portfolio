import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";

import { Providers } from "@/providers";

import "./globals.css";

export const metadata: Metadata = {
  title: {
    default:
      "Shivraj — AI & Full-Stack Systems Engineer",

    template: "%s | Shivraj",
  },

  description:
    "Premium AI-native full-stack engineering portfolio showcasing scalable SaaS systems, realtime collaboration platforms, authentication infrastructure, and cinematic digital experiences.",

  keywords: [
    "Full Stack Developer",
    "AI Engineer",
    "Next.js",
    "TypeScript",
    "React",
    "Portfolio",
    "SaaS",
  ],

  openGraph: {
    title:
      "Shivraj — AI & Full-Stack Systems Engineer",

    description:
      "Premium engineering portfolio focused on scalable systems, AI-native products, authentication infrastructure, and realtime collaboration.",

    type: "website",
  },
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