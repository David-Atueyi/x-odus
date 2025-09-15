import Link from "next/link";

export const HistoryActionSection = () => {
  return (
    <div
      className="flex flex-col sm:flex-row gap-4 justify-center mt-12"
    >
      <Link
        href="/plans"
        className="px-6 py-3 bg-[#184b8c] text-white rounded-xl font-semibold text-center"
      >
        Buy More Plans
      </Link>
      <button
        onClick={() => {}}
        className="px-6 py-3 border border-red-300 text-red-600 rounded-xl font-semibold"
      >
        Clear History
      </button>
    </div>
  );
};
