"use client";
import { useIsMobileMenuOpenStore } from "@/base/store/zustand/useIsMobileMenuOpenStore";
import { motion } from "motion/react";
import Link from "next/link";
import { ComponentType } from "react";

export const MobileNavigation = ({
  navLinks,
  logout,
}: {
  navLinks: { href: string; label: string; icon: ComponentType }[];
  logout: () => void;
}) => {
  const { closeMobileMenu } = useIsMobileMenuOpenStore();

  return (
      <motion.div
      className="md:hidden absolute top-full left-0 right-0 z-50 bg-white border-t border-[#184b8c]/10 flex flex-col justify-between shadow-lg"
      initial={{ opacity: 0, y: -8 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -8 }}
      transition={{ duration: 0.2, ease: "easeInOut" }}
    >
      {/* Nav links with icons */}
      <motion.div
        initial="hidden"
        animate="visible"
        variants={{
          hidden: { opacity: 0 },
          visible: {
            opacity: 1,
            transition: { delayChildren: 0.1, staggerChildren: 0.05 },
          },
        }}
      >
        {navLinks.map((link) => {
          const IconComponent = link.icon;
          return (
            <motion.div
              key={link.href}
              variants={{
                hidden: { opacity: 0, x: -20 },
                visible: { opacity: 1, x: 0 },
              }}
            >
              <Link
                href={link.href}
                className="flex items-center gap-3 p-4 font-medium hover:bg-gray-100 transition-colors"
                onClick={() => closeMobileMenu()}
              >
                <IconComponent />
                {link.label}
              </Link>
            </motion.div>
          );
        })}
      </motion.div>

      {/* User profile + logout at the bottom */}
      <motion.div
        className="border-t border-black/10 mt-2"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.3 }}
      >
        <div className="flex gap-2 items-center p-4">
          <div className="h-12 w-12 bg-yellow-200 rounded-full flex-shrink-0"></div>
          <div>
            <p className="font-bold text-lg">EA-dav</p>
            <p className="truncate text-sm text-gray-500">atueyidavid2005@gmail.com</p>
          </div>
        </div>
        <button
          onClick={() => {
            logout();
            closeMobileMenu();
          }}
          className=" text-red-500 hover:underline border-t border-black/10 w-full text-left p-4"
        >
          Logout
        </button>
      </motion.div>
    </motion.div>
  );
};
