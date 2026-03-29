"use client";
import { useSpeedTest } from "@/base/hooks/useSpeedTest";
import { SpeedGauge } from "@/components/Screens/Home/HomeSections/SpeedGauge";
import { SpeedInfoPanel } from "@/components/Screens/Home/HomeSections/SpeedInfoPanel";
import { motion } from "motion/react";
import { useEffect, useRef } from "react";

export const SpeedTestScreenIndex = () => {
  const { downloadSpeed, uploadSpeed, latency, phase, runSpeedTest } =
    useSpeedTest();
  const startedRef = useRef(false);

  useEffect(() => {
    if (startedRef.current) return;
    startedRef.current = true;
    runSpeedTest();
  }, [runSpeedTest]);

  return (
    <div className="relative flex flex-col min-h-full">
      <motion.div
        className="flex flex-col min-h-[85vh] justify-between"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.4 }}
      >
        <div className="flex justify-center pt-8 pb-2">
          <div className="flex items-center gap-2 bg-[#184b8c]/10 text-[#184b8c] px-4 py-1.5 rounded-full text-sm font-semibold">
            <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
            X-Odus Speed Test
          </div>
        </div>

        <div className="flex-1 flex flex-col items-center justify-center px-6 py-4">
          <SpeedGauge speed={downloadSpeed} phase={phase} />
        </div>

        <div className="px-4 pb-6">
          <SpeedInfoPanel
            downloadSpeed={downloadSpeed}
            uploadSpeed={uploadSpeed}
            latency={latency}
            phase={phase}
          />
        </div>
      </motion.div>
    </div>
  );
};
