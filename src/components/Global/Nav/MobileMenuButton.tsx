import { useIsMobileMenuOpenStore } from "@/base/store/zustand/useIsMobileMenuOpenStore";

export const MobileMenuButton = () => {
  const { isMobileMenuOpen, setIsMobileMenuOpen } = useIsMobileMenuOpenStore();
  return (
    <div className="md:hidden flex items-center gap-3">
      <button
        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        className="p-2 rounded-lg text-[#184b8c] hover:bg-[#184b8c]/10 transition-colors"
        aria-label="Toggle mobile menu"
      >
        <svg
          className={`w-6 h-6 transition-transform duration-200 ${
            isMobileMenuOpen ? "rotate-90" : ""
          }`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          {isMobileMenuOpen ? (
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          ) : (
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          )}
        </svg>
      </button>
    </div>
  );
};
