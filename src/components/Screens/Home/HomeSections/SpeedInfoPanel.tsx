"use client";
import { getSignalStrength, SpeedTestPhase } from "@/base/hooks/useSpeedTest";
import { motion } from "motion/react";

interface Props {
  downloadSpeed: number;
  uploadSpeed: number;
  latency: number;
  phase: SpeedTestPhase;
}

interface StatItemProps {
  label: string;
  value: string;
}

const StatItem = ({ label, value }: StatItemProps) => (
  <div className="flex flex-col gap-0.5">
    <p className="text-xs text-gray-400 uppercase tracking-wider">{label}</p>
    <p className="font-bold text-gray-800 text-sm">{value}</p>
  </div>
);

export const SpeedInfoPanel = ({
  downloadSpeed,
  uploadSpeed,
  latency,
  phase,
}: Props) => {
  const signalStrength = getSignalStrength(latency);
  const isUploadDone = phase === "done";

  return (
    <motion.div
      className="w-full max-w-sm mx-auto"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
    >
      <div className="bg-white rounded-2xl shadow-lg shadow-black/10 border border-gray-100 p-5">
        <div className="grid grid-cols-2 gap-y-5">
          <StatItem
            label="Latency"
            value={latency > 0 ? `${latency} ms` : "—"}
          />
          <StatItem label="Signal Strength" value={signalStrength} />
          <StatItem
            label="Download Speed"
            value={downloadSpeed > 0 ? `${downloadSpeed.toFixed(1)} Mbps` : "—"}
          />
          <StatItem
            label="Upload Speed"
            value={
              isUploadDone && uploadSpeed > 0
                ? `${uploadSpeed.toFixed(1)} Mbps`
                : phase === "upload"
                ? "Testing…"
                : "—"
            }
          />
        </div>
      </div>
    </motion.div>
  );
};
