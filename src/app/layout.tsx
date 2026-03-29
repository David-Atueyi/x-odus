import { Navbar } from "@/components/Global/Nav/Navbar";
import { PageTransition } from "@/components/Global/PageTransition";
import { SidebarWrapper } from "@/components/Global/Sidebar/SidebarWrapper";
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
        className="h-dvh overflow-hidden flex flex-col text-black/80 bg-white"
        suppressHydrationWarning={true}
      >
        <Navbar />
        <main className="flex flex-1 min-h-0">
          <SidebarWrapper />
          <div className="flex-1 overflow-y-auto px-6">
            <PageTransition>{children}</PageTransition>
          </div>
        </main>
        <Toaster richColors />
      </body>
    </html>
  );
}
