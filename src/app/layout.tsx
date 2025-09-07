import type {Metadata} from "next";

import {Geist, Geist_Mono} from "next/font/google";
import {unstable_ViewTransition as ViewTransition} from "react";

import "./globals.css";
import Header from "@/components/layout/header/header";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Global Commerce",
  description: "Prueba tecnica Global Commerce",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <Header />
        <ViewTransition name="page">{children}</ViewTransition>
      </body>
    </html>
  );
}
