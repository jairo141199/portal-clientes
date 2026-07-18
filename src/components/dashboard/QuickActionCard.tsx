"use client";

import type { LucideIcon } from "lucide-react";
import { motion } from "framer-motion";

interface QuickActionCardProps {
  icon: LucideIcon;
  label: string;
  accent: string;
}

export function QuickActionCard({ icon: Icon, label, accent }: QuickActionCardProps) {
  return (
    <motion.button
      whileHover={{ y: -3 }}
      transition={{ type: "spring", stiffness: 400, damping: 25 }}
      className="flex flex-col items-start gap-4 rounded-2xl bg-white p-5 text-left shadow-[0_2px_12px_rgba(0,0,0,0.05)] transition-shadow hover:shadow-[0_8px_24px_rgba(0,0,0,0.08)] dark:bg-zinc-900 dark:shadow-none dark:ring-1 dark:ring-zinc-800"
    >
      <span
        className="flex h-11 w-11 items-center justify-center rounded-xl"
        style={{ backgroundColor: `${accent}1A`, color: accent }}
      >
        <Icon className="h-5 w-5" />
      </span>
      <span className="text-[15px] font-medium leading-snug text-gray-900 dark:text-gray-100">
        {label}
      </span>
    </motion.button>
  );
}
