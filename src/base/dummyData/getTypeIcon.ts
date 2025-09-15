import { Plan } from "@/interface/IPlan";

export const getTypeIcon = (type: Plan["type"]) => {
  switch (type) {
    case "Daily":
      return "📱";
    case "Weekly":
      return "📅";
    case "Monthly":
      return "🗓️";
    default:
      return "📊";
  }
};
