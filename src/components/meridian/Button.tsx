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
        "flex h-[52px] w-full items-center justify-center rounded-full bg-[#0B2545] text-[15px] font-medium text-white shadow-md shadow-[#0B2545]/20 transition-shadow duration-200 hover:shadow-lg hover:shadow-[#0B2545]/30 disabled:cursor-not-allowed disabled:opacity-60 dark:bg-[#B08D2B] dark:text-[#0B2545] dark:shadow-[#B08D2B]/20 dark:hover:shadow-[#B08D2B]/30",
        className,
      )}
      {...props}
    >
      {loading ? <Loader2 className="h-5 w-5 animate-spin" /> : children}
    </motion.button>
  );
}
