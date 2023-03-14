"use client";

import StyledComponentsRegistry from "../lib/registry";
import { GlobalStyles } from "@/styles/global";

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
