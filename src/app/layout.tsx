import type { Metadata } from "next";
import { Inter, Geist, Geist_Mono } from "next/font/google";
import "@/styles/globals.scss";
import "../modules/common/icons/icomoon/style.css";
import { getBaseUrl } from "@/utils/env";
import { cn } from "@/_lib/utils/helpers";

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
  metadataBase: new URL(getBaseUrl()),
};

export default function RootLayout({
  children,
}: Readonly<{
  //In React, props should never be modified directly. Readonly enforces this at the type level:
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={cn(
          inter.variable,
          geistSans.variable,
          geistMono.variable,
          "antialiased",
        )}
      >
        <div className="container py-6 md:py-8 px-4 md:px-6 lg:px-8 min-h-screen bg-[url(/images/wallpaper/bg.png)] bg-cover bg-fixed bg-center">
          {" "}
          {children}
        </div>
      </body>
    </html>
  );
}
