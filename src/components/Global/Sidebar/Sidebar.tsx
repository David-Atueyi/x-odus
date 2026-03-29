"use client";
import { navLinks } from "@/base/dummyData/navLinks";
import { MenuBarIcon } from "@/components/Global/Icons/MenuBarIcon";
import Link from "next/link";
import { useState } from "react";

export const Sidebar = () => {
  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarCollapsed(!isSidebarCollapsed);
  };

  const textClass = `overflow-hidden whitespace-nowrap transition-opacity duration-150 ${
    isSidebarCollapsed ? "opacity-0 w-0" : "opacity-100 delay-200"
  }`;

  return (
    <div
      className={`shadow-black/40 shadow-lg h-full flex-shrink-0 flex-col justify-between pb-10 hidden lg:flex transition-all duration-300 ${
        isSidebarCollapsed ? "w-16" : "w-64"
      }`}
    >
      <div>
        <div
          className={`flex items-center p-4 ${
            isSidebarCollapsed ? "justify-center" : "justify-between"
          }`}
        >
          <p className={`font-semiBold ${textClass}`}>Menu</p>
          <button
            className="cursor-pointer p-2 hover:bg-gray-100 rounded-lg transition-colors flex-shrink-0"
            onClick={toggleSidebar}
          >
            <MenuBarIcon />
          </button>
        </div>
        <div>
          {navLinks.map((link) => {
            const IconComponent = link.icon;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`font-medium flex items-center mb-2 hover:bg-gray-100 transition-colors ${
                  isSidebarCollapsed ? "justify-center p-3" : "gap-3 p-4"
                }`}
                title={isSidebarCollapsed ? link.label : undefined}
              >
                <IconComponent />
                <span className={textClass}>{link.label}</span>
              </Link>
            );
          })}
        </div>
      </div>
      <div
        className={`flex items-center px-4 ${
          isSidebarCollapsed ? "justify-center" : "gap-2"
        }`}
      >
        <div className="h-12 w-12 bg-yellow-200 rounded-full flex-shrink-0"></div>
        <div className={textClass}>
          <p className="font-bold text-lg">EA-dav</p>
          <p className="truncate text-sm">atueyidavid2005@gmail.com</p>
        </div>
      </div>
    </div>
  );
};
