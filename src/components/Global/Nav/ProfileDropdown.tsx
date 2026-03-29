"use client";
import { useIsMobileMenuOpenStore } from "@/base/store/zustand/useIsMobileMenuOpenStore";
import { useEffect, useRef } from "react";
import { ChevronDownIcon } from "../Icons/ChevronDownIcon";

export const ProfileDropdown = ({ logout }: { logout: () => void }) => {
  const { isProfileOpen, openProfile, closeProfile } =
    useIsMobileMenuOpenStore();
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const toggleDropdown = () => {
    if (isProfileOpen) {
      closeProfile();
      if (timerRef.current) clearTimeout(timerRef.current);
    } else {
      openProfile();
      if (timerRef.current) clearTimeout(timerRef.current);
      timerRef.current = setTimeout(() => closeProfile(), 4000);
    }
  };

  useEffect(() => {
    return () => {
      if (timerRef.current) clearTimeout(timerRef.current);
    };
  }, []);

  return (
    <div className="flex items-center gap-6">
      <button
        onClick={toggleDropdown}
        className="flex flex-row items-center gap-2 relative cursor-pointer"
      >
        <div className="w-10 h-10 rounded-full bg-red-200"></div>
        <span className="hidden md:block">
          <ChevronDownIcon />
        </span>
      </button>

      <div
        className={`rounded-lg lg:w-96 w-64 shadow-lg shadow-black/20 absolute bg-white top-16 right-3 transition-all duration-200 ${
          isProfileOpen
            ? "opacity-100 translate-y-0 pointer-events-auto"
            : "opacity-0 -translate-y-2 pointer-events-none"
        }`}
      >
        <div className="px-3 py-4 flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-red-200"></div>
          <div>
            <p className="font-bold">EA-dav</p>
            <p className="text-sm text-gray-500">helloJohn@gmail.com</p>
          </div>
        </div>
        <button
          onClick={() => {
            logout();
            closeProfile();
          }}
          className="text-sm text-red-500 hover:underline border-t-2 border-black/20 mt-1 pt-1 w-full text-left p-3"
        >
          Logout
        </button>
      </div>
    </div>
  );
};
