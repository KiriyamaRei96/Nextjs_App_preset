"use client";
import React from "react";
import { PropsWithChildren } from "react";
import { Provider as ReduxProvider } from "react-redux";
import { store } from ".";

export function Provider({ children, ...rest }: PropsWithChildren) {
  return <ReduxProvider store={store}>{children}</ReduxProvider>;
}
