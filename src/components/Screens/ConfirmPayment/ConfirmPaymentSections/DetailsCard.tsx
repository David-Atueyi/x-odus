export const DetailsCard = ({
  planName,
  planId,
  email,
}: {
  planName: string | null;
  planId: string | null;
  email: string | null;
}) => {
  return (
    <div className="bg-gradient-to-br from-[#184b8c]/5 to-[#184b8c]/10 rounded-2xl p-6 border border-gray-200/50 mb-8">
      <h2 className="text-lg font-semibold text-[#184b8c] mb-4">
        Purchase Details
      </h2>

      <div className="space-y-3">
        {planName && (
          <div className="flex justify-between items-center">
            <span className="text-[#184b8c]/70">Plan:</span>
            <span className="font-semibold text-[#184b8c]">{planName}</span>
          </div>
        )}

        <div className="flex justify-between items-center">
          <span className="text-[#184b8c]/70">Voucher sent to:</span>
          <span className="font-semibold text-[#184b8c] break-all">
            {email}
          </span>
        </div>

        <div className="flex justify-between items-center">
          <span className="text-[#184b8c]/70">Transaction ID:</span>
          <span className="font-mono text-sm text-[#184b8c]">
            {planId}-{planId ? planId.slice(-6).toUpperCase() : "TXN001"}
          </span>
        </div>
      </div>
    </div>
  );
};
