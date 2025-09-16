"use client";
import { motion } from "motion/react";
import { ReactNode } from "react";

interface AnimatedButtonProps {
  children: ReactNode;
  onClick?: () => void;
  className?: string;
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
  variant?: "primary" | "secondary" | "danger";
}

export const AnimatedButton = ({
  children,
  onClick,
  className = "",
  type = "button",
  disabled = false,
  variant = "primary",
}: AnimatedButtonProps) => {
  const getVariantStyles = () => {
    switch (variant) {
      case "primary":
        return "bg-[#184b8c] text-white hover:bg-[#184b8c]/90";
      case "secondary":
        return "border border-[#184b8c]/30 text-[#184b8c] hover:border-[#184b8c]/50 hover:bg-[#184b8c]/5";
      case "danger":
        return "bg-red-500 text-white hover:bg-red-600";
      default:
        return "bg-[#184b8c] text-white hover:bg-[#184b8c]/90";
    }
  };

  return (
    <motion.button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`
        px-6 py-3 rounded-xl font-semibold transition-all duration-200
        ${getVariantStyles()}
        ${disabled ? "opacity-50 cursor-not-allowed" : ""}
        ${className}
      `}
      whileHover={
        !disabled
          ? {
              scale: 1.02,
              y: -1,
              boxShadow: "0 8px 20px rgba(24, 75, 140, 0.2)",
            }
          : {}
      }
      whileTap={
        !disabled
          ? {
              scale: 0.98,
              y: 0,
            }
          : {}
      }
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3, ease: "easeOut" }}
    >
      <motion.span
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.1, duration: 0.2 }}
      >
        {children}
      </motion.span>
    </motion.button>
  );
};
