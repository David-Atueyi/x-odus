import { LoadingInterface } from "@/components/Global/LoadingInterface";
import { IPurchase } from "@/interface/IPurchase";
import { useEffect, useState } from "react";
import { HistoryActionSection } from "./HistorySections/HistoryActionSection";
import { HistoryEmptyState } from "./HistorySections/HistoryEmptyState";
import { HistoryHeaderSection } from "./HistorySections/HistoryHeaderSection";
import { HistoryPurchaseList } from "./HistorySections/HistoryPurchaseList";
import { HistoryStatsSection } from "./HistorySections/HistoryStatsSection";

export const HistoryScreenIndex = () => {
  const purchases: IPurchase[] = [
    {
      id: "1",
      planId: "3h445xtpyl64",
      planName: "monthly",
      planType: "Monthly",
      price: "$9.99",
      email: "sadasfad@gmail.com",
      date: "2025-09-13",
      transactionId: "txn_001",
    },
    {
      id: "2",
      planId: "3h445xtpyl64",
      planName: "monthly",
      planType: "Monthly",
      price: "$9.99",
      email: "sadasfad@gmail.com",
      date: "2025-09-13",
      transactionId: "txn_002",
    },
  ];
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return <LoadingInterface />;
  }
  if (purchases.length === 0) {
    <HistoryEmptyState />;
  }
  return (
    <div className="min-h-screen py-8">
      {/* Header */}
      <HistoryHeaderSection />
      {/* Stats */}
      <HistoryStatsSection purchases={purchases} />
      {/* Purchase List */}
      <HistoryPurchaseList purchases={purchases} />
      {/* action */}
      <HistoryActionSection />
    </div>
  );
};
