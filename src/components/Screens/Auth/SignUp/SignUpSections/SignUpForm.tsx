import { AnimatedButton } from "@/components/Global/AnimatedButton";
import { AppTextInput } from "@/components/Global/FormComponents/AppTextInput";
import { motion } from "motion/react";
import { useRouter } from "next/navigation";

export const SignUpForm = () => {
  const isLoading = false;
  const router = useRouter();
  // const { control, userSignUp, errors } = useUserSignUp();
  return (
    <div className="space-y-6">
      <div>
        <AppTextInput
          name="email"
          placeholder="Your email address"
          label="Email"
          keyboardType="email-address"
          textInputClassName=""
          // control={control}
          // error={String(errors.email?.message ?? "")}
        ></AppTextInput>
      </div>
      <div>
        <AppTextInput
          name="password"
          placeholder="6+ Characters, 1 Capital letter"
          label="Password"
          textInputClassName=""
          // control={control}
          textContentType="password"
          // error={String(errors.password?.message ?? "")}
        ></AppTextInput>
      </div>
      <div>
        <AppTextInput
          name="password_confirmation"
          placeholder="Must be the same with your password"
          label="Confirm Password"
          textInputClassName=""
          // control={control}
          textContentType="password"
          // error={String(errors.password_confirmation?.message ?? "")}
        ></AppTextInput>
      </div>
      <AnimatedButton
        onClick={() => router.push("/")}
        disabled={isLoading}
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
            Creating Account...
          </span>
        ) : (
          "Create Account"
        )}
      </AnimatedButton>
    </div>
  );
};
