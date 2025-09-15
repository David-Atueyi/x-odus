export const PlanSummarySection = () => {
  return (
    <div className="rounded-2xl">
      <div className="bg-gradient-to-br from-[#184b8c]/5 to-[#184b8c]/10 rounded-2xl p-6 border border-gray-200/50">
        <h2 className="text-xl font-semibold text-[#184b8c] mb-4">
          Plan Summary
        </h2>

        <div className="space-y-3">
          <div className="flex justify-between items-center">
            <span className="text-[#184b8c]/70">Plan:</span>
            <span className="font-semibold text-[#184b8c]">Daily Lite</span>
          </div>

          <div className="flex justify-between items-center">
            <span className="text-[#184b8c]/70">Type:</span>
            <span className="text-[#184b8c]">Daily</span>
          </div>

          <div className="flex justify-between items-baseline">
            <span className="text-[#184b8c]/70">Description:</span>
            <span className="text-[#184b8c] text-xs">
              Unlimited • valid 24 hours
            </span>
          </div>

          <hr className="border-[#184b8c]/10" />

          <div className="flex justify-between items-center">
            <span className="text-lg font-semibold text-[#184b8c]">Total:</span>
            <span className="text-2xl font-bold text-[#184b8c]">₦500</span>
          </div>
        </div>

        <div className="mt-6 p-4 bg-[#184b8c]/5 rounded-xl">
          <div className="flex items-center gap-2 text-sm text-[#184b8c]/70">
            <span>✓</span>
            <span>Instant voucher delivery</span>
          </div>
          <div className="flex items-center gap-2 text-sm text-[#184b8c]/70">
            <span>✓</span>
            <span>No additional fees</span>
          </div>
          <div className="flex items-center gap-2 text-sm text-[#184b8c]/70">
            <span>✓</span>
            <span>24/7 support included</span>
          </div>
        </div>
      </div>
    </div>
  );
};
