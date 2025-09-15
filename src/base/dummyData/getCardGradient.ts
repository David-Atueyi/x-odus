import { Plan } from "@/interface/IPlan";

export const getCardGradient = (type: Plan["type"]) => {
  switch (type) {
    case "Daily":
      return "from-blue-50 to-blue-100";
    case "Weekly":
      return "from-indigo-50 to-indigo-100";
    case "Monthly":
      return "from-purple-50 to-purple-100";
    default:
      return "from-gray-50 to-gray-100";
  }
};


