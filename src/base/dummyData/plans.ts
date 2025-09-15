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
    id: "d2",
    type: "Daily" as const,
    name: "Daily Max",
    price: "₦900",
    desc: "Unlimited • valid 2 days",
  },

  {
    id: "w1",
    type: "Weekly" as const,
    name: "Weekly Basic",
    price: "₦1,250",
    desc: "Unlimited • valid 7 days",
  },
  {
    id: "w2",
    type: "Weekly" as const,
    name: "Weekly Plus",
    price: "₦2,500",
    desc: "Unlimited • valid 2 weeks",
  },

  {
    id: "m1",
    type: "Monthly" as const,
    name: "Monthly Standard",
    price: "₦5,000",
    desc: "Unlimited • valid 30 days",
  },
  {
    id: "m2",
    type: "Monthly" as const,
    name: "Quarterly Pro",
    price: "₦14,900",
    desc: "Unlimited • valid 3 months",
  },
  {
    id: "m3",
    type: "Monthly" as const,
    name: "Half-Year Pro",
    price: "₦29,700",
    desc: "Unlimited • valid 6 months",
  },
  {
    id: "m4",
    type: "Monthly" as const,
    name: "Annual Pro",
    price: "₦59,500",
    desc: "Unlimited • valid 12 months",
  },
];
