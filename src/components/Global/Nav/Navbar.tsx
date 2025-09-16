"use client";
import { navLinks } from "@/base/dummyData/navLinks";
import { useIsMobileMenuOpenStore } from "@/base/store/zustand/useIsMobileMenuOpenStore";
import { AnimatePresence } from "motion/react";
import { DesktopNavigation } from "./DesktopNavigation";
import { Logo } from "./Logo";
import { MobileMenuButton } from "./MobileMenuButton";
import { MobileNavigation } from "./MobileNavigation";

export const Navbar = () => {
  const userEmail = "helloJohn@gmail.com";
  const logout = () => {
    console.log("hello");
  };
  const { isMobileMenuOpen } = useIsMobileMenuOpenStore();

  return (
    <nav className="sticky top-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-white/80 bg-white/90 border-b border-[#184b8c]/10 shadow-sm">
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Logo />

          {/* Desktop Navigation */}
          <DesktopNavigation
            navLinks={navLinks}
            userEmail={userEmail}
            logout={logout}
          />

          {/* Mobile menu button */}
          <MobileMenuButton />
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <MobileNavigation
              navLinks={navLinks}
              userEmail={userEmail}
              logout={logout}
            />
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
};
