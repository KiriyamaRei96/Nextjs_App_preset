"use client";
import React from "react";
import { useRouter } from "next/navigation";
import { useLocale, useTranslations } from "next-intl";
import { usePathname } from "next-intl/client";
import { Button, Select } from "antd";
export interface LangSwitcherProps {}

export function LangSwitcher(props: LangSwitcherProps) {
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();
  return (
    <>
      <Select
        onChange={(value) => {
          router.replace(`/${value}${pathname}`);
        }}
        value={locale}
        defaultValue="vi"
      >
        <Select.Option value="vi">vi</Select.Option>
        <Select.Option value="en">en</Select.Option>
      </Select>
      <Button type="primary">btn</Button>
      <Button>btn</Button>
    </>
  );
}
