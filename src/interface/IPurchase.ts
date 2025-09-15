export interface IPurchase {
  id: string;
  planId: string;
  planName: string;
  planType: "Daily" | "Weekly" | "Monthly";
  price: string;
  email: string;
  date: string;
  transactionId: string;
}