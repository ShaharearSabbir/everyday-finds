"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const ActiveLink = ({ href, children, className }) => {
  const pathname = usePathname();
  const isActive = href === "/" ? pathname === href : pathname.startsWith(href);
  return (
    <Link
      className={`${isActive && "bg-base-200"} ${className && className}`}
      href={href}
    >
      {children}
    </Link>
  );
};

export default ActiveLink;
