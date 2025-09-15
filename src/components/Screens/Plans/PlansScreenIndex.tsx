import { plans } from "@/base/dummyData/plans";
import { PlansFooterSection } from "./PlansSections/PlansFooterSection";
import { PlansHeaderSection } from "./PlansSections/PlansHeaderSection";
import { PlansSection } from "./PlansSections/PlansSection";

export const PlansScreenIndex = () => {
  const dailyPlans = plans.filter((p) => p.type === "Daily");
  const weeklyPlans = plans.filter((p) => p.type === "Weekly");
  const monthlyPlans = plans.filter((p) => p.type === "Monthly");

  return (
    <div className="min-h-screen py-8">
      {/* Header Section */}
      <PlansHeaderSection />

      {/* Plans Grid */}
      <div className="space-y-16">
        <PlansSection title="Daily" planList={dailyPlans} delay={0} />
        <PlansSection title="Weekly" planList={weeklyPlans} delay={200} />
        <PlansSection title="Monthly" planList={monthlyPlans} delay={400} />
      </div>

      {/* Footer CTA */}
      <PlansFooterSection />
    </div>
  );
};
