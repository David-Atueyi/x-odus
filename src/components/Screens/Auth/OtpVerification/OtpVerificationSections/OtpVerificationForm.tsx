import { AnimatedButton } from "@/components/Global/AnimatedButton";
import { AppTextInput } from "@/components/Global/FormComponents/AppTextInput";
import { motion } from "motion/react";
import { useRouter } from "next/navigation";

export const OtpVerificationForm = () => {
  const router = useRouter();
  const isLoading = false;

  return (
    <div className="space-y-6">
      <div>
        <AppTextInput
          name="code"
          placeholder="Enter 6-digit code"
          label="Verification code"
          keyboardType="numeric"
          textInputClassName="text-center text-lg"
          maxLength={6}
          autoComplete="one-time-code"
        />
      </div>

      <AnimatedButton
        type="button"
        disabled={isLoading}
        onClick={() => router.push("/reset-password")}
        className="w-full"
        variant="primary"
      >
        {isLoading ? (
          <span className="flex items-center justify-center gap-2">
            <motion.div
              className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full"
              animate={{ rotate: 360 }}
              transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
            />
            Verifying...
          </span>
        ) : (
          "Continue"
        )}
      </AnimatedButton>
    </div>
  );
};
