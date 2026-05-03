"use client";

import { ConfigProvider } from "antd";
import type { PropsWithChildren } from "react";

import "antd/dist/reset.css";

export function AppProvider({ children }: PropsWithChildren) {
  return (
    <ConfigProvider
      theme={{
        token: {
          colorPrimary: "#7c3aed",
          borderRadius: 12,
          fontFamily:
            "var(--font-geist-sans), system-ui, -apple-system, sans-serif",
          colorBgContainer: "#ffffff",
          colorBorderSecondary: "#e4e4e7",
        },
        components: {
          Card: { paddingLG: 24 },
          Button: { controlHeightLG: 48 },
        },
      }}
    >
      {children}
    </ConfigProvider>
  );
}
