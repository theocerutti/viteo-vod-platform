import type { Metadata } from "next";
import { Inter } from "next/font/google";
import React from "react";
import GlobalStyles from "@/styles/GlobalStyles";
import Providers from "@/app/Providers";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Viteo",
  description: "Streaming video platform"
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Providers>
          <GlobalStyles />
          {children}
        </Providers>
      </body>
    </html>
  );
}
