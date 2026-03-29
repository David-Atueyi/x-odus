"use client";
import { navLinks } from "@/base/dummyData/navLinks";
import { useIsMobileMenuOpenStore } from "@/base/store/zustand/useIsMobileMenuOpenStore";
import { MenuBarIcon } from "@/components/Global/Icons/MenuBarIcon";
import { AnimatePresence, motion } from "motion/react";
import { useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";
import { Logo } from "./Logo";
import { MobileNavigation } from "./MobileNavigation";
import { ProfileDropdown } from "./ProfileDropdown";

const AUTH_PATHS = ["/signin", "/signup"];

export const Navbar = () => {
  const pathname = usePathname();
  const isAuthPage = AUTH_PATHS.includes(pathname);
  const { isMobileMenuOpen, openMobileMenu, closeMobileMenu } =
    useIsMobileMenuOpenStore();
  const mobileTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const navRef = useRef<HTMLElement>(null);
  const [navHeight, setNavHeight] = useState(0);

  useEffect(() => {
    const updateHeight = () => {
      if (navRef.current) setNavHeight(navRef.current.offsetHeight);
    };
    updateHeight();
    window.addEventListener("resize", updateHeight);
    return () => window.removeEventListener("resize", updateHeight);
  }, []);

  const logout = () => {
    console.log("hello");
  };

  const toggleMobileMenu = () => {
    if (isMobileMenuOpen) {
      closeMobileMenu();
      if (mobileTimerRef.current) clearTimeout(mobileTimerRef.current);
    } else {
      openMobileMenu();
      if (mobileTimerRef.current) clearTimeout(mobileTimerRef.current);
      mobileTimerRef.current = setTimeout(() => closeMobileMenu(), 4000);
    }
  };

  useEffect(() => {
    return () => {
      if (mobileTimerRef.current) clearTimeout(mobileTimerRef.current);
    };
  }, []);

  return (
    <>
      <nav ref={navRef} className="sticky top-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-white/80 bg-white/90 border-b border-[#184b8c]/10 shadow-sm">
        <div className="px-4 py-7">
          <div className="relative flex items-center justify-between">
            {/* Left: hamburger on mobile (hidden on auth), logo on desktop */}
            <div className="flex items-center">
              {!isAuthPage && (
                <button
                  onClick={toggleMobileMenu}
                  className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors cursor-pointer"
                  aria-label="Toggle mobile menu"
                >
                  <MenuBarIcon />
                </button>
              )}
              <div className="hidden md:block">
                <Logo />
              </div>
            </div>

            {/* Center: logo on mobile only */}
            <div className="absolute left-1/2 -translate-x-1/2 md:hidden">
              <Logo />
            </div>

            {/* Right: profile dropdown (hidden on auth) */}
            {!isAuthPage && <ProfileDropdown logout={logout} />}
          </div>
        </div>

        {/* Mobile menu dropdown (inside nav for correct positioning) */}
        {!isAuthPage && (
          <AnimatePresence>
            {isMobileMenuOpen && (
              <MobileNavigation navLinks={navLinks} logout={logout} />
            )}
          </AnimatePresence>
        )}
      </nav>

      {/* Backdrop — outside <nav> to escape its stacking context */}
      <AnimatePresence>
        {!isAuthPage && isMobileMenuOpen && (
          <motion.div
            className="md:hidden fixed inset-x-0 bottom-0 bg-black/40 z-40"
            style={{ top: navHeight }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            onClick={closeMobileMenu}
          />
        )}
      </AnimatePresence>
    </>
  );
};
