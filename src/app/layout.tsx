import { Navbar } from "@/components/Global/Nav/Navbar";
import { PageTransition } from "@/components/Global/PageTransition";
import { Toaster } from "sonner";
import "../../public/style/globals.css";

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
      <body
        className="min-h-dvh text-black/80 bg-white"
        suppressHydrationWarning={true}
      >
        <Navbar />
        <main className="container mx-auto px-4 py-8">
          <PageTransition>{children}</PageTransition>
        </main>
        <Toaster richColors />
      </body>
    </html>
  );
}
