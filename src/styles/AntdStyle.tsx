"use client";
import React, { PropsWithChildren } from "react";
import { ConfigProvider } from "antd";

export function AntStyle({ children }: PropsWithChildren) {
  return (
    <ConfigProvider
      theme={{
        components: {
          Input: {
            borderRadius: 4,
            borderRadiusLG: 4,
            controlPaddingHorizontal: 12,

            controlPaddingHorizontalSM: 12,
            controlHeight: 40,
          },
        },
        token: {
          colorPrimary: "#F9B217",
        },
      }}
    >
      {children}
    </ConfigProvider>
  );
}
