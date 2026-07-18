"use client";

import { AnimatePresence, motion } from "framer-motion";
import { X } from "lucide-react";
import type { MenuSection } from "@/lib/sidebar-menu";

interface SidebarPanelProps {
  section: MenuSection | null;
  onClose: () => void;
}

export function SidebarPanel({ section, onClose }: SidebarPanelProps) {
  return (
    <AnimatePresence>
      {section && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.15 }}
            onClick={onClose}
            className="fixed inset-0 left-[72px] top-16 z-30"
          />
          <motion.div
            initial={{ opacity: 0, x: -12 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -12 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className="fixed left-[72px] top-16 z-40 h-[calc(100vh-4rem)] w-full max-w-2xl overflow-y-auto bg-white p-8 shadow-2xl dark:bg-zinc-900"
          >
            <div className="mb-6 flex items-center justify-between">
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-gray-50">
                {section.label}
              </h2>
              <button
                onClick={onClose}
                aria-label="Cerrar"
                className="flex h-9 w-9 items-center justify-center rounded-full text-gray-400 transition-colors hover:bg-gray-100 hover:text-gray-700 dark:hover:bg-zinc-800 dark:hover:text-gray-200"
              >
                <X className="h-5 w-5" />
              </button>
            </div>
            <div className="h-px w-full bg-gray-100 dark:bg-zinc-800" />

            <div className="mt-6 grid grid-cols-2 gap-x-8 gap-y-8 sm:grid-cols-3">
              {section.columns.map((column) => (
                <div key={column.heading}>
                  <p className="mb-3 text-[15px] font-semibold text-gray-900 dark:text-gray-50">
                    {column.heading}
                  </p>
                  <ul className="space-y-3">
                    {column.links.map((link) => (
                      <li key={link}>
                        <a
                          href="#"
                          className="text-[15px] text-gray-600 transition-colors hover:text-[#0A1F44] dark:text-gray-400 dark:hover:text-blue-400"
                        >
                          {link}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
