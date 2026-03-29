"use client";
import { useCallback, useState } from "react";

export type SpeedTestPhase = "idle" | "latency" | "download" | "upload" | "done";

export interface SpeedTestResult {
  downloadSpeed: number;
  uploadSpeed: number;
  latency: number;
  networkName: string;
  phase: SpeedTestPhase;
  isRunning: boolean;
}

const CLOUDFLARE_BASE = "https://speed.cloudflare.com";

function getSignalStrength(latency: number): string {
  if (latency === 0) return "—";
  if (latency < 20) return "Excellent";
  if (latency < 50) return "Good";
  if (latency < 100) return "Fair";
  return "Poor";
}

export { getSignalStrength };

export const useSpeedTest = () => {
  const [downloadSpeed, setDownloadSpeed] = useState(0);
  const [uploadSpeed, setUploadSpeed] = useState(0);
  const [latency, setLatency] = useState(0);
  const [networkName, setNetworkName] = useState("—");
  const [phase, setPhase] = useState<SpeedTestPhase>("idle");
  const [isRunning, setIsRunning] = useState(false);

  const runSpeedTest = useCallback(async () => {
    setIsRunning(true);
    setDownloadSpeed(0);
    setUploadSpeed(0);
    setLatency(0);

    // 1. Fetch ISP/network info
    try {
      const meta = await fetch(`${CLOUDFLARE_BASE}/meta`).then((r) => r.json());
      setNetworkName(meta?.isp ?? "Unknown");
    } catch {
      setNetworkName("Unknown");
    }

    // 2. Measure latency (5 pings, take median)
    setPhase("latency");
    try {
      const timings: number[] = [];
      for (let i = 0; i < 5; i++) {
        const t0 = performance.now();
        await fetch(`${CLOUDFLARE_BASE}/__down?bytes=0`, { cache: "no-store" });
        timings.push(performance.now() - t0);
      }
      timings.sort((a, b) => a - b);
      const median = timings[Math.floor(timings.length / 2)];
      setLatency(Math.round(median));
    } catch {}

    // 3. Download speed (stream 3 increasing payloads, update live)
    setPhase("download");
    try {
      const downloadSizes = [1_000_000, 10_000_000, 25_000_000];
      for (const size of downloadSizes) {
        const url = `${CLOUDFLARE_BASE}/__down?bytes=${size}`;
        const t0 = performance.now();
        const response = await fetch(url, { cache: "no-store" });
        const reader = response.body?.getReader();
        if (!reader) continue;
        let received = 0;
        while (true) {
          const { done, value } = await reader.read();
          if (done) break;
          received += value.length;
          const elapsed = (performance.now() - t0) / 1000;
          if (elapsed > 0.1) {
            const mbps = (received * 8) / elapsed / 1_000_000;
            setDownloadSpeed(Math.round(mbps * 10) / 10);
          }
        }
      }
    } catch {}

    // 4. Upload speed — same-origin API proxy (Cloudflare __up rejects browser CORS preflight)
    setPhase("upload");
    try {
      const size = 4_000_000;
      const data = new Uint8Array(size);
      for (let i = 0; i < size; i += 4) data[i] = i & 0xff;

      const t0 = performance.now();
      const res = await fetch("/api/speed-test/up", {
        method: "POST",
        body: data,
        headers: { "Content-Type": "application/octet-stream" },
      });
      if (!res.ok) throw new Error("Upload proxy failed");
      const elapsed = (performance.now() - t0) / 1000;
      const mbps = (size * 8) / elapsed / 1_000_000;
      setUploadSpeed(Math.round(mbps * 10) / 10);
    } catch {}

    setPhase("done");
    setIsRunning(false);
  }, []);

  return {
    downloadSpeed,
    uploadSpeed,
    latency,
    networkName,
    phase,
    isRunning,
    runSpeedTest,
  };
};
