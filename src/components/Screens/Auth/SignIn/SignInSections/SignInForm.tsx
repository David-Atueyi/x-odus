import { AnimatedButton } from "@/components/Global/AnimatedButton";
import { AppTextInput } from "@/components/Global/FormComponents/AppTextInput";
import { motion } from "motion/react";
import { useRouter } from "next/navigation";

export const SignInForm = () => {
  const router = useRouter();
  const isLoading = false;

  // const { userSignIn, control, errors, isLoading } = useUserSignIn();
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

      <AnimatedButton
        type="submit"
        disabled={isLoading}
        onClick={() => router.push("/")}
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
            Signing In...
          </span>
        ) : (
          "Sign In"
        )}
      </AnimatedButton>
    </div>
  );
};
