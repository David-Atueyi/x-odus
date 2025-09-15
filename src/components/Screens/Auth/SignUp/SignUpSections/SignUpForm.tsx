import { useUserSignUp } from "@/base/hooks/auth/userSignUp/useUserSignUp";
import { AppTextInput } from "@/components/Global/FormComponents/AppTextInput";
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
      <button
        onClick={() => router.push("/")}
        disabled={isLoading}
        className={`
w-full py-3 px-4 rounded-xl font-semibold text-white
bg-[#184b8c]
disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none
 
`}
      >
        {isLoading ? (
          <span className="flex items-center justify-center gap-2">
            <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
            Creating Account...
          </span>
        ) : (
          "Create Account"
        )}
      </button>
    </div>
  );
};
