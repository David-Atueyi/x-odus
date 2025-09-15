import { Navbar } from "@/components/Global/Nav/Navbar";
import "../../public/style/globals.css";
import { Toaster } from "sonner";

export const metadata = {
  title: "X-odus",
  description: "Networking company web app for data plans",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="bg-white">
      <head />
      <body className="min-h-dvh text-black/80 bg-white">
        <Navbar />
        <main className="container mx-auto px-4 py-8">{children}</main>
        <Toaster richColors />
      </body>
    </html>
  );
}
