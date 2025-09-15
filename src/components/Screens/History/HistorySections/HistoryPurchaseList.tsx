import { getTypeColor } from "@/base/dummyData/getTypeColor";
import { getTypeIcon } from "@/base/dummyData/getTypeIcon";
import { formatDate } from "@/base/lib/formatDate";
import { IPurchase } from "@/interface/IPurchase";

export const HistoryPurchaseList = ({
  purchases,
}: {
  purchases: IPurchase[];
}) => {
  return (
    <div
      className="space-y-4"
    >
      {purchases.map((purchase, index) => (
        <div
          key={purchase.id}
          className="bg-white rounded-2xl p-6 border border-gray-200/50"
        >
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
            {/* Purchase Info */}
            <div className="flex items-start gap-4">
              <div className="text-2xl">{getTypeIcon(purchase.planType)}</div>
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-2">
                  <h3 className="text-lg font-semibold text-[#184b8c]">
                    {purchase.planName}
                  </h3>
                  <span
                    className={`px-2 py-1 rounded-full text-xs font-medium ${getTypeColor(
                      purchase.planType
                    )}`}
                  >
                    {purchase.planType}
                  </span>
                </div>
                <p className="text-sm text-[#184b8c]/70 mb-1">
                  Voucher sent to:{" "}
                  <span className="font-medium">{purchase.email}</span>
                </p>
                <p className="text-xs text-[#184b8c]/50">
                  Transaction ID: {purchase.transactionId}
                </p>
              </div>
            </div>

            {/* Price and Date */}
            <div className="text-right">
              <div className="text-2xl font-bold text-[#184b8c] mb-1">
                {purchase.price}
              </div>
              <div className="text-sm text-[#184b8c]/70">
                {formatDate(purchase.date)}
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};
