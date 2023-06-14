"use client";

import { usePathname } from "next-intl/client";
import Link from "next-intl/link";
import { ComponentProps } from "react";

type Props = Omit<ComponentProps<typeof Link>, "href"> & {
  href: string;
  className?: string;
};

export default function NavigationLink({ href, className, ...rest }: Props) {
  const pathname = usePathname();
  const isActive = pathname === href;

  return (
    <Link aria-current={isActive} className={className} href={href} {...rest} />
  );
}
