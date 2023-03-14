"use client";

import { GlobalStyles } from "@/styles/global";
import StyledComponentsRegistry from "../lib/registry";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <GlobalStyles />
        <StyledComponentsRegistry>{children}</StyledComponentsRegistry>
      </body>
    </html>
  );
}
