import "./globals.css";

import { Inter } from "next/font/google";

import { css } from "@kuma-ui/core";
import { KumaRegistry } from "@kuma-ui/next-plugin/registry";

import type { Metadata } from "next";
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={css`
          display: flex;
          align-items: center;
          justify-content: center;
          width: 100%;
          min-height: 100vh;
          margin: 0;
        `}
      >
        <KumaRegistry>{children}</KumaRegistry>
      </body>
    </html>
  );
}
