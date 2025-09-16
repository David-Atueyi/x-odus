import { useIsMobileMenuOpenStore } from "@/base/store/zustand/useIsMobileMenuOpenStore";
import { motion } from "motion/react";

export const MobileMenuButton = () => {
  const { isMobileMenuOpen, setIsMobileMenuOpen } = useIsMobileMenuOpenStore();
  return (
    <div className="md:hidden flex items-center gap-3">
      <motion.button
        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        className="p-2 rounded-lg text-[#184b8c]"
        aria-label="Toggle mobile menu"
        whileHover={{ scale: 1.1, backgroundColor: "rgba(24, 75, 140, 0.1)" }}
        whileTap={{ scale: 0.95 }}
        transition={{ duration: 0.2 }}
      >
        <motion.svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          animate={{ rotate: isMobileMenuOpen ? 90 : 0 }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
        >
          <motion.path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            animate={{
              d: isMobileMenuOpen
                ? "M6 18L18 6M6 6l12 12"
                : "M4 6h16M4 12h16M4 18h16",
            }}
            transition={{ duration: 0.2 }}
          />
        </motion.svg>
      </motion.button>
    </div>
  );
};
