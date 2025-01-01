import AudioProvider from "@/providers/AudioProvider";
import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import ConvexClerkProvider from "../providers/ConvexClerkProvider";
import "./globals.css";

const manrope = Manrope({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Devcast",
  description: "Generate your podcasts using AI",
  icons: {
    icon: "/icons/logo.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ConvexClerkProvider>
      <html lang="en">
        <AudioProvider>
          <body className={`${manrope.className} antialiased`}>{children}</body>
        </AudioProvider>
      </html>
    </ConvexClerkProvider>
  );
}
