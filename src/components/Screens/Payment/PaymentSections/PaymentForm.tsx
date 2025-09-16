import { AnimatedButton } from "@/components/Global/AnimatedButton";
import { AppTextInput } from "@/components/Global/FormComponents/AppTextInput";
import { motion } from "motion/react";
import { useRouter } from "next/navigation";

export const PaymentForm = () => {
  const router = useRouter();
  const isLoading = false;
  return (
    <div className="space-y-6 bg-gradient-to-br from-[#184b8c]/5 to-[#184b8c]/10 rounded-2xl p-6 border border-gray-200/50">
      <AppTextInput
        name="email"
        placeholder="Your email address"
        label="varchar would be sent to email, You can buy for a friend too! Enter their email"
        keyboardType="email-address"
        textInputClassName=""
        labelClassName="text-[#184b8c] text-sm font-medium mb-1"
        // control={control}
        // error={String(errors.email?.message ?? "")}
      ></AppTextInput>
      <motion.div
        className="space-y-4"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.5 }}
      >
        <AnimatedButton
          onClick={() => router.push("/confirm-payment")}
          disabled={isLoading}
          className="w-full py-4 text-lg"
          variant="primary"
        >
          {isLoading ? (
            <span className="flex items-center justify-center gap-3">
              <motion.div
                className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full"
                animate={{ rotate: 360 }}
                transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
              />
              Processing Payment...
            </span>
          ) : (
            `Pay ₦500`
          )}
        </AnimatedButton>

        <AnimatedButton
          onClick={() => router.push("/plans")}
          disabled={isLoading}
          className="w-full"
          variant="secondary"
        >
          Back to Plans
        </AnimatedButton>
      </motion.div>
    </div>
  );
};
