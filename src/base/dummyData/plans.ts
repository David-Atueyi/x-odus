export type PlanType = "Daily" | "Weekly" | "Monthly";

export const plans = [
  {
    id: "d1",
    type: "Daily" as const,
    name: "Daily Lite",
    price: "₦500",
    desc: "Unlimited • valid 24 hours",
  },

  {
    id: "w2",
    type: "Weekly" as const,
    name: "Weekly Plus",
    price: "₦3,500",
    desc: "Unlimited • valid 2 weeks",
  },

  {
    id: "m1",
    type: "Monthly" as const,
    name: "Monthly Standard",
    price: "₦7,000",
    desc: "Unlimited • valid 30 days",
  },
];
