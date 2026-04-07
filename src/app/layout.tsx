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
      <body className="bg-black text-white overflow-x-hidden min-h-screen selection:bg-yellow-400/30">
        {/* Global Cinematic Background */}
        <div className="fixed inset-0 z-[-2] w-full h-full">
           <div className="absolute inset-0 bg-black/60 z-10" /> {/* Darkening overlay */}
           <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/50 to-black z-20" />
           <img 
             src="/batman_epic_bg.png" 
             alt="Gotham Background" 
             className="w-full h-full object-cover opacity-60 scale-105 animate-[pulse_10s_ease-in-out_infinite]"
           />
        </div>
        
        <div className="noise-overlay z-[-1]" />
        <RainOverlay />
        <CustomCursor />
        <main className="relative z-10">{children}</main>
      </body>
    </html>
  );
}
