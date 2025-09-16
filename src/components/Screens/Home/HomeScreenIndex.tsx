import { motion } from "motion/react";
import Link from "next/link";

export const HomeScreenIndex = () => {
  return (
    <section className="py-16 text-center">
      <motion.h1
        className="text-4xl md:text-5xl font-extrabold"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        Welcome to{" "}
        <motion.span
          className="text-[#184b8c]"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.3, duration: 0.5, ease: "easeOut" }}
        >
          X-odus
        </motion.span>
      </motion.h1>
      <motion.p
        className="mt-4 text-lg opacity-80 max-w-2xl mx-auto"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 0.6, ease: "easeOut" }}
      >
        Fast, flexible, and reliable data plans — choose from Daily, Weekly, or
        Monthly options. Sign in to your account to access secure purchasing and
        manage your data plans.
      </motion.p>
      <motion.div
        className="mt-10 flex flex-col sm:flex-row gap-4 justify-center"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.7, duration: 0.6, ease: "easeOut" }}
      >
        <motion.div
          whileHover={{ scale: 1.05, y: -2 }}
          whileTap={{ scale: 0.95 }}
          transition={{ duration: 0.2 }}
        >
          <Link
            href="/plans"
            className="block px-6 py-3 rounded-xl bg-[#184b8c] text-white transition-colors duration-200 hover:bg-[#184b8c]/90"
          >
            View Plans
          </Link>
        </motion.div>
        <motion.div
          whileHover={{ scale: 1.05, y: -2 }}
          whileTap={{ scale: 0.95 }}
          transition={{ duration: 0.2 }}
        >
          <Link
            href="/signin"
            className="block px-6 py-3 rounded-xl border border-[#184b8c]/30 transition-all duration-200 hover:border-[#184b8c]/50 hover:bg-[#184b8c]/5"
          >
            Sign In
          </Link>
        </motion.div>
      </motion.div>
    </section>
  );
};
