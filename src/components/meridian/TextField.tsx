"use client";

import { forwardRef, useState, type InputHTMLAttributes } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { AlertCircle, type LucideIcon } from "lucide-react";
import clsx from "clsx";

interface TextFieldProps extends InputHTMLAttributes<HTMLInputElement> {
  icon: LucideIcon;
  error?: string;
}

export const TextField = forwardRef<HTMLInputElement, TextFieldProps>(
  ({ icon: Icon, error, className, onFocus, onBlur, ...props }, ref) => {
    const [focused, setFocused] = useState(false);

    return (
      <div className="w-full">
        <div className="flex items-center gap-3 pb-2.5">
          <Icon
            className={clsx(
              "h-5 w-5 shrink-0 transition-colors duration-200",
              focused ? "text-[#3B0764] dark:text-white" : "text-gray-400 dark:text-gray-500",
            )}
          />
          <input
            ref={ref}
            className={clsx(
              "w-full bg-transparent text-[15px] text-gray-900 outline-none placeholder:text-gray-400 dark:text-gray-100 dark:placeholder:text-gray-500",
              className,
            )}
            onFocus={(e) => {
              setFocused(true);
              onFocus?.(e);
            }}
            onBlur={(e) => {
              setFocused(false);
              onBlur?.(e);
            }}
            {...props}
          />
        </div>

        <div className="relative h-px w-full bg-gray-200 dark:bg-gray-700">
          <motion.div
            className={clsx(
              "absolute inset-y-0 left-0 h-px",
              error ? "bg-red-500" : "bg-[#3B0764] dark:bg-white",
            )}
            initial={false}
            animate={{ width: focused || error ? "100%" : "0%" }}
            transition={{ duration: 0.3, ease: "easeOut" }}
          />
        </div>

        <AnimatePresence>
          {error && (
            <motion.p
              initial={{ opacity: 0, y: -4, height: 0 }}
              animate={{ opacity: 1, y: 0, height: "auto" }}
              exit={{ opacity: 0, y: -4, height: 0 }}
              transition={{ duration: 0.2 }}
              className="mt-1.5 flex items-center gap-1 text-xs text-red-500"
            >
              <AlertCircle className="h-3.5 w-3.5 shrink-0" />
              {error}
            </motion.p>
          )}
        </AnimatePresence>
      </div>
    );
  },
);

TextField.displayName = "TextField";
