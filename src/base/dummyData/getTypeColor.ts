export const getTypeColor = (type: string) => {
  switch (type) {
    case "Daily":
      return "bg-blue-100 text-blue-800";
    case "Weekly":
      return "bg-indigo-100 text-indigo-800";
    case "Monthly":
      return "bg-purple-100 text-purple-800";
    default:
      return "bg-gray-100 text-gray-800";
  }
};
