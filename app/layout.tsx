import type { Metadata } from "next";
import {Inter, Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { cn } from "@/utils/helpers";
import './assets/icomoon/style.css'

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "call cleaner",
  description: "call cleaner app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={cn(inter.variable,geistSans.variable, geistMono.variable, "antialiased")}
      >
          <div className="container mx-auto py-4 px-4 md:px-12 lg:px-16 min-h-screen bg-[url(/images/wallpaper/bg.png)] bg-cover bg-fixed bg-center">
            {children}
          </div>
      </body>
    </html>
  );
}
