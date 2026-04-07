import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import CustomCursor from "@/components/layout/CustomCursor";
import RainOverlay from "@/components/effects/RainOverlay";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Batman: I Am The Night | Gotham Cinematic Experience",
  description: "A cinematic, highly interactive 3D animated website inspired by Batman. Explore Gotham, the gadgets, and the villains.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} antialiased selection:bg-yellow-400/30`}>
      <body className="bg-black text-white overflow-x-hidden">
        <div className="noise-overlay" />
        <RainOverlay />
        <CustomCursor />
        <main className="relative z-10">{children}</main>
      </body>
    </html>
  );
}
