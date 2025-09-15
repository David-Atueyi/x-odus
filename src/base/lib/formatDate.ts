export const formatDate = (dateString: string) => {
  // Use a consistent format that works on both server and client
  const date = new Date(dateString);
  const year = date.getFullYear();
  const month = date.toLocaleDateString("en-US", { month: "short" });
  const day = date.getDate();
  const hours = date.getHours().toString().padStart(2, "0");
  const minutes = date.getMinutes().toString().padStart(2, "0");

  return `${month} ${day}, ${year} at ${hours}:${minutes}`;
};
