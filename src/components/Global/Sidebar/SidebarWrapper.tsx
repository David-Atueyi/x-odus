"use client";
import { usePathname } from "next/navigation";
import { Sidebar } from "./Sidebar";

const AUTH_PATHS = ["/signin", "/signup"];

export const SidebarWrapper = () => {
  const pathname = usePathname();
  if (AUTH_PATHS.includes(pathname)) return null;
  return <Sidebar />;
};
