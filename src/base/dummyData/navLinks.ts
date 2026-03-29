import { CardIcon } from "@/components/Global/Icons/CardIcon";
import { HistoryIcon } from "@/components/Global/Icons/HistoryIcon";
import { SpeedTestIcon } from "@/components/Global/Icons/SpeedTestIcon";
import { WifiIcon } from "@/components/Global/Icons/WifiIcon";

export const navLinks = [
  { href: "/", label: "Connect To X-Odus", icon: WifiIcon },
  { href: "/speed-test", label: "Speed test", icon: SpeedTestIcon },
  { href: "/plans", label: "Plans", icon: CardIcon },
  { href: "/history", label: "History", icon: HistoryIcon },
];
