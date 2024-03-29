import type { Metadata } from "next";
// import { Inter } from "next/font/google";
import "./globals.css";

import React from "react";

// const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Nidec Force",
  description: "Your AI companion for productivity and sales",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
