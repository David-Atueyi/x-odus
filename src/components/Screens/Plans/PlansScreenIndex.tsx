import { plans } from "@/base/dummyData/plans";
import { PlanCard } from "@/components/Global/PlanCard";
import { motion } from "motion/react";
import { PlansFooterSection } from "./PlansSections/PlansFooterSection";
import { PlansHeaderSection } from "./PlansSections/PlansHeaderSection";

export const PlansScreenIndex = () => {
  const dailyPlans = plans.filter((p) => p.type === "Daily");
  const weeklyPlans = plans.filter((p) => p.type === "Weekly");
  const monthlyPlans = plans.filter((p) => p.type === "Monthly");

  return (
    <div className="min-h-screen py-8 ">
      {/* Header Section */}
      <PlansHeaderSection />

      <motion.div className="w-full flex flex-col lg:flex-row justify-evenly mt-16 gap-6 items-center">
        <PlanCard plan={dailyPlans[0]} />
        <PlanCard plan={weeklyPlans[0]} />
        <PlanCard plan={monthlyPlans[0]} />
      </motion.div>

      {/* Footer CTA */}
      <PlansFooterSection />
    </div>
  );
};
