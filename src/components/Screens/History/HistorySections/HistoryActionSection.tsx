import Link from "next/link";

export const HistoryActionSection = () => {
  return (
    <div
      className="flex flex-col sm:flex-row gap-4 justify-center mt-12 animate-fadeInUp"
      style={{ animationDelay: "800ms" }}
    >
      <Link
        href="/plans"
        className="px-6 py-3 bg-[#184b8c] text-white rounded-xl font-semibold hover:scale-105 active:scale-95 transition-transform text-center"
      >
        Buy More Plans
      </Link>
      <button
        onClick={() => {}}
        className="px-6 py-3 border border-red-300 text-red-600 rounded-xl font-semibold hover:bg-red-50 transition-colors"
      >
        Clear History
      </button>
    </div>
  );
};
