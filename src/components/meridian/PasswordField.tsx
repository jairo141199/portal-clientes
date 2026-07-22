"use client";

import { forwardRef, useState, type InputHTMLAttributes } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { AlertCircle, Eye, EyeOff, Lock } from "lucide-react";
import clsx from "clsx";

interface PasswordFieldProps extends InputHTMLAttributes<HTMLInputElement> {
  error?: string;
}

export const PasswordField = forwardRef<HTMLInputElement, PasswordFieldProps>(
  ({ error, className, onFocus, onBlur, ...props }, ref) => {
    const [focused, setFocused] = useState(false);
    const [visible, setVisible] = useState(false);

    return (
      <div className="w-full">
        <div className="flex items-center gap-3 pb-2.5">
          <Lock
            className={clsx(
              "h-5 w-5 shrink-0 transition-colors duration-200",
              focused ? "text-[#B08D2B] dark:text-[#D4AF6A]" : "text-gray-400 dark:text-gray-500",
            )}
          />
          <input
            ref={ref}
            type={visible ? "text" : "password"}
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
          <button
            type="button"
            tabIndex={-1}
            onClick={() => setVisible((v) => !v)}
            aria-label={visible ? "Hide password" : "Show password"}
            className="shrink-0 text-gray-400 transition-colors duration-200 hover:text-gray-600 dark:text-gray-500 dark:hover:text-gray-300"
          >
            {visible ? <EyeOff className="h-[18px] w-[18px]" /> : <Eye className="h-[18px] w-[18px]" />}
          </button>
        </div>

        <div className="relative h-px w-full bg-gray-200 dark:bg-gray-700">
          <motion.div
            className={clsx(
              "absolute inset-y-0 left-0 h-px",
              error ? "bg-red-500" : "bg-[#B08D2B] dark:bg-[#D4AF6A]",
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

PasswordField.displayName = "PasswordField";
