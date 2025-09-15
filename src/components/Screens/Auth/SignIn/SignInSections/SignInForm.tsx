import { useUserSignIn } from "@/base/hooks/auth/userSignIn/useUserSignIn";
import { AppTextInput } from "@/components/Global/FormComponents/AppTextInput";
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

      <button
        type="submit"
        disabled={isLoading}
        onClick={() => router.push("/")}
        className={`
                  w-full py-3 px-4 rounded-xl font-semibold text-white
                  bg-[#184b8c]
                  hover:bg-[#184b8c]/90
                  hover:scale-105 active:scale-95
                  transition-all duration-200
                  disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none
                  ${isLoading ? "animate-pulse" : ""}
                `}
      >
        {isLoading ? (
          <span className="flex items-center justify-center gap-2">
            <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
            Signing In...
          </span>
        ) : (
          "Sign In"
        )}
      </button>
    </div>
  );
};
