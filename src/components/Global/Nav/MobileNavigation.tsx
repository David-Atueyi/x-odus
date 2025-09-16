import { useIsMobileMenuOpenStore } from "@/base/store/zustand/useIsMobileMenuOpenStore";
import { motion } from "motion/react";
import Link from "next/link";

export const MobileNavigation = ({
  navLinks,
  userEmail,
  logout,
}: {
  navLinks: { href: string; label: string }[];
  userEmail: string | null;
  logout: () => void;
}) => {
  const { setIsMobileMenuOpen } = useIsMobileMenuOpenStore();
  return (
    <motion.div
      className="md:hidden mt-4 pb-4 border-t border-[#184b8c]/10"
      initial={{ opacity: 0, height: 0 }}
      animate={{ opacity: 1, height: "auto" }}
      exit={{ opacity: 0, height: 0 }}
      transition={{ duration: 0.3, ease: "easeInOut" }}
    >
      <motion.div
        className="flex flex-col gap-3 pt-4"
        initial="hidden"
        animate="visible"
        variants={{
          hidden: { opacity: 0 },
          visible: {
            opacity: 1,
            transition: {
              delayChildren: 0.1,
              staggerChildren: 0.05,
            },
          },
        }}
      >
        {navLinks.map((link, index) => (
          <motion.div
            key={link.href}
            variants={{
              hidden: { opacity: 0, x: -20 },
              visible: { opacity: 1, x: 0 },
            }}
            whileHover={{ x: 4 }}
            transition={{ duration: 0.2 }}
          >
            <Link
              href={link.href}
              className="text-[#184b8c] font-medium py-2 block transition-colors duration-200 hover:text-[#184b8c]/70"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {link.label}
            </Link>
          </motion.div>
        ))}

        {userEmail && (
          <motion.div
            className="pt-2 border-t border-[#184b8c]/10"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.3 }}
          >
            <div className="text-sm text-[#184b8c]/70 mb-2">
              Signed in as: {userEmail}
            </div>
            <motion.button
              onClick={() => {
                logout();
                setIsMobileMenuOpen(false);
              }}
              className="w-full text-left px-3 py-2 rounded-lg bg-red-500 text-white text-sm font-medium"
              whileHover={{ scale: 1.02, backgroundColor: "#dc2626" }}
              whileTap={{ scale: 0.98 }}
              transition={{ duration: 0.2 }}
            >
              Logout
            </motion.button>
          </motion.div>
        )}
      </motion.div>
    </motion.div>
  );
};
