"use client";
import { SpeedTestPhase } from "@/base/hooks/useSpeedTest";
import { motion } from "motion/react";

const CX = 150;
const CY = 135;
const RADIUS = 105;
const STROKE_WIDTH = 14;
const CIRCUMFERENCE = 2 * Math.PI * RADIUS; // ≈ 659.7
const ARC_FRACTION = 0.75; // 270°
const ARC_LENGTH = CIRCUMFERENCE * ARC_FRACTION; // ≈ 494.8
const GAP_LENGTH = CIRCUMFERENCE - ARC_LENGTH; // ≈ 164.9
const ROTATION = 135; // deg — positions gap at the bottom centre
const MAX_SPEED = 100;

const PHASE_LABELS: Record<SpeedTestPhase, string> = {
  idle: "—",
  latency: "Measuring latency…",
  download: "Download Speed",
  upload: "Download Speed",
  done: "Download Speed",
};

interface Props {
  speed: number;
  phase: SpeedTestPhase;
}

export const SpeedGauge = ({ speed, phase }: Props) => {
  const clamped = Math.min(speed, MAX_SPEED);
  const filled = (clamped / MAX_SPEED) * ARC_LENGTH;

  return (
    <div className="flex flex-col items-center">
      <svg
        viewBox="0 0 300 230"
        className="w-full max-w-[300px]"
        aria-label={`Speed: ${speed} Mbps`}
      >
        <defs>
          <linearGradient id="gaugeGradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#3b82f6" />
            <stop offset="100%" stopColor="#184b8c" />
          </linearGradient>
          <filter id="glow">
            <feGaussianBlur stdDeviation="3" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        {/* Background track */}
        <circle
          cx={CX}
          cy={CY}
          r={RADIUS}
          fill="none"
          stroke="#e5e7eb"
          strokeWidth={STROKE_WIDTH}
          strokeDasharray={`${ARC_LENGTH} ${GAP_LENGTH}`}
          strokeLinecap="round"
          transform={`rotate(${ROTATION}, ${CX}, ${CY})`}
        />

        {/* Speed arc */}
        <motion.circle
          cx={CX}
          cy={CY}
          r={RADIUS}
          fill="none"
          stroke="url(#gaugeGradient)"
          strokeWidth={STROKE_WIDTH}
          strokeLinecap="round"
          transform={`rotate(${ROTATION}, ${CX}, ${CY})`}
          filter="url(#glow)"
          initial={{ strokeDasharray: `0 ${CIRCUMFERENCE}` }}
          animate={{
            strokeDasharray: `${filled} ${CIRCUMFERENCE - filled}`,
          }}
          transition={{ duration: 0.4, ease: "easeOut" }}
        />

        {/* Speed number */}
        <text
          x={CX}
          y={CY - 8}
          textAnchor="middle"
          dominantBaseline="middle"
          fill="#184b8c"
          fontSize="44"
          fontWeight="800"
          fontFamily="inherit"
        >
          {speed > 0 ? speed.toFixed(1) : "—"}
        </text>

        {/* Unit */}
        <text
          x={CX}
          y={CY + 26}
          textAnchor="middle"
          dominantBaseline="middle"
          fill="#184b8c"
          fontSize="14"
          fontWeight="500"
          opacity="0.7"
          fontFamily="inherit"
        >
          Mbps
        </text>
      </svg>

      {/* Phase label */}
      <p className="text-sm text-gray-500 font-medium -mt-4">
        {PHASE_LABELS[phase]}
      </p>
    </div>
  );
};
