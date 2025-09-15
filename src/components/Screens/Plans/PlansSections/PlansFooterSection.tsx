export const PlansFooterSection = () => {
  return (
    <div
      className="text-center mt-16 animate-fadeInUp"
      style={{ animationDelay: "600ms" }}
    >
      <div className="bg-gradient-to-r from-[#184b8c]/5 to-[#184b8c]/10 rounded-2xl p-8 max-w-2xl mx-auto">
        <h3 className="text-xl font-semibold text-[#184b8c] mb-2">
          Need Help Choosing?
        </h3>
        <p className="text-[#184b8c]/70 mb-4">
          All plans come with instant activation and 24/7 customer support.
        </p>
        <div className="flex flex-wrap gap-2 justify-center text-sm text-[#184b8c]/60">
          <span className="bg-[#184b8c]/10 px-3 py-1 rounded-full">
            ✓ No contracts
          </span>
          <span className="bg-[#184b8c]/10 px-3 py-1 rounded-full">
            ✓ Instant delivery
          </span>
          <span className="bg-[#184b8c]/10 px-3 py-1 rounded-full">
            ✓ 24/7 support
          </span>
        </div>
      </div>
    </div>
  );
};
