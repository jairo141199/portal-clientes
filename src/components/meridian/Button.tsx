"use client";

import { motion, type HTMLMotionProps } from "framer-motion";
import { Loader2 } from "lucide-react";
import clsx from "clsx";

interface ButtonProps extends HTMLMotionProps<"button"> {
  loading?: boolean;
}

export function Button({ children, loading, className, disabled, ...props }: ButtonProps) {
  return (
    <motion.button
      whileHover={{ y: -2 }}
      whileTap={{ y: 0, scale: 0.98 }}
      transition={{ type: "spring", stiffness: 400, damping: 25 }}
      disabled={disabled || loading}
      className={clsx(
        "flex h-[52px] w-full items-center justify-center rounded-full bg-[#3B0764] text-[15px] font-medium text-white shadow-md shadow-[#3B0764]/20 transition-shadow duration-200 hover:shadow-lg hover:shadow-[#3B0764]/30 disabled:cursor-not-allowed disabled:opacity-60 dark:bg-white dark:text-[#3B0764] dark:shadow-white/10 dark:hover:shadow-white/20",
        className,
      )}
      {...props}
    >
      {loading ? <Loader2 className="h-5 w-5 animate-spin" /> : children}
    </motion.button>
  );
}
