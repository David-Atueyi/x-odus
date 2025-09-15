export interface Plan {
  id: string;
  type: "Daily" | "Weekly" | "Monthly";
  name: string;
  price: string;
  desc: string;
}

export interface PlanCardProps {
  plan: Plan;
}
