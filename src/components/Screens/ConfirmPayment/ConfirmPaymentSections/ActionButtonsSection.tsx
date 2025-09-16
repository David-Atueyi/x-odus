import { AnimatedButton } from "@/components/Global/AnimatedButton";
import { motion } from "motion/react";
import { useRouter } from "next/navigation";

export const ActionButtonsSection = () => {
  const router = useRouter();
  return (
    <motion.div
      className="space-y-3"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.5, duration: 0.5 }}
    >
      <AnimatedButton
        onClick={() => router.push("/plans")}
        className="w-full"
        variant="primary"
      >
        Buy Another Plan
      </AnimatedButton>

      <AnimatedButton
        onClick={() => router.push("/")}
        className="w-full"
        variant="secondary"
      >
        Back to Home
      </AnimatedButton>
    </motion.div>
  );
};
