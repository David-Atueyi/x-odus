import { IPurchase } from "@/interface/IPurchase";

export const HistoryStatsSection = ({
  purchases,
}: {
  purchases: IPurchase[];
}) => {
  return (
    <div
      className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8 animate-fadeInUp"
      style={{ animationDelay: "200ms" }}
    >
      <div className="bg-gradient-to-br from-[#184b8c]/5 to-[#184b8c]/10 rounded-2xl p-6 border border-gray-200/50">
        <div className="text-2xl font-bold text-[#184b8c]">
          {purchases.length}
        </div>
        <div className="text-[#184b8c]/70">Total Purchases</div>
      </div>
      <div className="bg-gradient-to-br from-[#184b8c]/5 to-[#184b8c]/10 rounded-2xl p-6 border border-gray-200/50">
        <div className="text-2xl font-bold text-[#184b8c]">
          $
          {purchases
            .reduce((sum, p) => sum + parseFloat(p.price.replace("$", "")), 0)
            .toFixed(2)}
        </div>
        <div className="text-[#184b8c]/70">Total Spent</div>
      </div>
      <div className="bg-gradient-to-br from-[#184b8c]/5 to-[#184b8c]/10 rounded-2xl p-6 border border-gray-200/50">
        <div className="text-2xl font-bold text-[#184b8c]">
          {purchases[0] ? purchases[0].planType : "N/A"}
        </div>
        <div className="text-[#184b8c]/70">Latest Purchase</div>
      </div>
    </div>
  );
};
