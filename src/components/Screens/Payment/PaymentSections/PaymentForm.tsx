import { AppTextInput } from "@/components/Global/FormComponents/AppTextInput";
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
      <div className="space-y-4">
        <button
          onClick={() => router.push("/confirm-payment")}
          disabled={isLoading}
          className={`w-full py-4 px-6 rounded-xl font-semibold text-lg bg-[#184b8c] text-white hover:bg-[#184b8c]/90 hover:scale-105 active:scale-95 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none ${
            isLoading ? "animate-pulse" : ""
          }`}
        >
          {isLoading ? (
            <span className="flex items-center justify-center gap-3">
              <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
              Processing Payment...
            </span>
          ) : (
            `Pay ₦500`
          )}
        </button>

        <button
          type="button"
          onClick={() => router.push("/plans")}
          className="w-full py-3 px-4 rounded-xl border border-[#184b8c]/30 text-[#184b8c] hover:bg-[#184b8c]/5 transition-colors"
          disabled={isLoading}
        >
          Back to Plans
        </button>
      </div>
    </div>
  );
};
