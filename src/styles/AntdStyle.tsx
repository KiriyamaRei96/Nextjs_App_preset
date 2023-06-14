"use client";
import React, { PropsWithChildren } from "react";
import { ConfigProvider } from "antd";

export function AntStyle({ children }: PropsWithChildren) {
  return (
    <ConfigProvider
      theme={{
        token: {
          colorPrimary: "#fb8500",
        },
      }}
    >
      {children}
    </ConfigProvider>
  );
}
