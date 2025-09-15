import { useRouter } from "next/navigation";

export const ActionButtonsSection = () => {
  const router = useRouter();
  return (
    <div className="space-y-3">
      <button
        onClick={() => router.push("/plans")}
        className="w-full py-3 px-4 rounded-xl bg-[#184b8c] text-white font-semibold hover:scale-105 active:scale-95 transition-transform"
      >
        Buy Another Plan
      </button>

      <button
        onClick={() => router.push("/")}
        className="w-full py-3 px-4 rounded-xl border border-[#184b8c]/30 text-[#184b8c] hover:bg-[#184b8c]/5 transition-colors"
      >
        Back to Home
      </button>
    </div>
  );
};
