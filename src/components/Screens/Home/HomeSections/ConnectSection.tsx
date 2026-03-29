"use client";
import { AnimatedButton } from "@/components/Global/AnimatedButton";
import { motion } from "motion/react";
import { useState } from "react";

interface Props {
  onConnect: (voucher: string) => void;
  isConnecting: boolean;
}

export const ConnectSection = ({ onConnect, isConnecting }: Props) => {
  const [voucher, setVoucher] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (voucher.trim()) onConnect(voucher.trim());
  };

  return (
    <motion.section
      className="flex flex-col items-center justify-center text-center px-6 py-16 gap-8"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.5 }}
    >
      <div>
        <motion.h1
          className="text-4xl md:text-5xl font-extrabold"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Welcome to{" "}
          <span className="text-[#184b8c]">X-odus</span>
        </motion.h1>
        <motion.p
          className="mt-3 text-base opacity-60 max-w-md mx-auto"
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.6 }}
          transition={{ delay: 0.3, duration: 0.6 }}
        >
          Enter your voucher code to connect and enjoy fast, reliable internet.
        </motion.p>
      </div>

      <motion.form
        onSubmit={handleSubmit}
        className="w-full max-w-sm flex flex-col gap-4"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4, duration: 0.5 }}
      >
        <input
          type="text"
          value={voucher}
          onChange={(e) => setVoucher(e.target.value)}
          placeholder="Enter your voucher code"
          className="w-full border border-[#184b8c] rounded-[14px] px-5 py-3.5 text-black/80 
            placeholder:text-[#184b8c]/50 focus:outline-none focus:border-[#184b8c]/60
            tracking-wider text-base"
          disabled={isConnecting}
        />
        <AnimatedButton
          type="submit"
          variant="primary"
          className="w-full"
          disabled={!voucher.trim() || isConnecting}
        >
          {isConnecting ? "Connecting…" : "Connect"}
        </AnimatedButton>
      </motion.form>
    </motion.section>
  );
};
