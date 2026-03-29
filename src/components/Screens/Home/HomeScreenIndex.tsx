"use client";
import { ConnectSection } from "./HomeSections/ConnectSection";
import { useRouter } from "next/navigation";
import { useState } from "react";

export const HomeScreenIndex = () => {
  const router = useRouter();
  const [isConnecting, setIsConnecting] = useState(false);

  const handleConnect = async (_voucher: string) => {
    setIsConnecting(true);
    await new Promise((r) => setTimeout(r, 1200));
    setIsConnecting(false);
    router.push("/speed-test");
  };

  return (
    <div className="relative flex flex-col min-h-full">
      <ConnectSection onConnect={handleConnect} isConnecting={isConnecting} />
    </div>
  );
};
