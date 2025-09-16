"use client";
import { getCardGradient } from "@/base/dummyData/getCardGradient";
import { getTypeIcon } from "@/base/dummyData/getTypeIcon";
import { PlanCardProps } from "@/interface/IPlan";
import { motion } from "motion/react";
import Link from "next/link";

export const PlanCard = ({ plan }: PlanCardProps) => {
  return (
    <motion.div
      className="group relative"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      whileHover={{
        y: -8,
        transition: { duration: 0.2, ease: "easeOut" },
      }}
    >
      <motion.div
        className={`
 relative p-6 rounded-2xl border border-gray-200/50
 bg-gradient-to-br ${getCardGradient(plan.type)}
 backdrop-blur-sm
 `}
        whileHover={{
          boxShadow: "0 20px 40px rgba(24, 75, 140, 0.15)",
          scale: 1.02,
          transition: { duration: 0.2 },
        }}
      >
        {/* Plan Type Badge */}
        <motion.div
          className="flex items-center gap-2 mb-4"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.1, duration: 0.3 }}
        >
          <motion.span
            className="text-lg"
            animate={{ rotate: [0, 10, -10, 0] }}
            transition={{ delay: 0.5, duration: 0.6, ease: "easeInOut" }}
          >
            {getTypeIcon(plan.type)}
          </motion.span>
          <span className="text-xs font-semibold text-[#184b8c]/70 uppercase tracking-wide">
            {plan.type}
          </span>
        </motion.div>

        {/* Plan Name */}
        <motion.h3
          className="text-xl font-bold text-[#184b8c] mb-2 group-hover:text-[#184b8c]/80"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.3 }}
        >
          {plan.name}
        </motion.h3>

        {/* Price */}
        <motion.div
          className="mb-4"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.3, duration: 0.4, ease: "easeOut" }}
        >
          <span className="text-3xl font-extrabold text-[#184b8c]">
            {plan.price}
          </span>
          <span className="text-sm text-[#184b8c]/60 ml-1">
            /{plan.type.toLowerCase()}
          </span>
        </motion.div>

        {/* Description */}
        <motion.p
          className="text-[#184b8c]/70 mb-6 text-sm leading-relaxed"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.3 }}
        >
          {plan.desc}
        </motion.p>

        {/* Buy Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.3 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <Link
            href={`/payment?planId=${plan.id}`}
            className={`
 block w-full py-3 px-4 rounded-xl text-center font-semibold
 bg-[#184b8c] text-white
 hover:bg-[#184b8c]/90 transition-colors duration-200
 
 `}
          >
            Buy Now
          </Link>
        </motion.div>

        {/* Hover Glow Effect */}
        <motion.div
          className="absolute inset-0 rounded-2xl bg-gradient-to-r from-[#184b8c]/5 to-transparent pointer-events-none"
          initial={{ opacity: 0 }}
          whileHover={{ opacity: 1 }}
          transition={{ duration: 0.2 }}
        />
      </motion.div>
    </motion.div>
  );
};
