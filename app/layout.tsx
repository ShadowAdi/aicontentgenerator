// This is the root layout component for your Next.js app.
// Learn more: https://nextjs.org/docs/app/building-your-application/routing/pages-and-layouts#root-layout-required
import { Inter } from "next/font/google";
import { cn } from "@/lib/utils";
import React from "react";
import "./globals.css";
import { ClerkProvider } from "@clerk/nextjs";

type Props = {
  children: string | JSX.Element | JSX.Element[] | React.ReactNode;
};

const fontHeading = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-heading",
});

const fontBody = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-body",
});

export default function Layout({ children }: Props) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body
          className={cn("antialiased", fontHeading.variable, fontBody.variable)}
        >
          {children}
        </body>
      </html>
    </ClerkProvider>
  );
}
