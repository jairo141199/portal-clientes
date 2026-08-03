"use client";

import { useState } from "react";
import { signOut } from "next-auth/react";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronDown, HelpCircle, LogOut, Menu, Search } from "lucide-react";
import { Logo } from "@/components/ui/Logo";

interface TopNavbarProps {
  userName: string;
  userEmail: string;
}

export function TopNavbar({ userName, userEmail }: TopNavbarProps) {
  const [helpOpen, setHelpOpen] = useState(false);
  const [userMenuOpen, setUserMenuOpen] = useState(false);

  return (
    <header className="relative z-20 flex h-16 items-center justify-between gap-4 bg-[#0B0E14] px-4 text-white sm:px-6">
      <div className="flex items-center gap-4 sm:gap-6">
        <button className="flex items-center gap-2 text-sm font-medium text-gray-300 transition-colors hover:text-white">
          <Menu className="h-5 w-5" />
          <span className="hidden sm:inline">Menú</span>
        </button>
        <div className="flex items-center gap-3">
          <Logo className="h-8 w-8" />
          <span className="hidden text-[15px] font-medium sm:inline">Sucursal Virtual Personas</span>
        </div>
      </div>

      <div className="hidden max-w-md flex-1 items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-sm text-gray-300 md:flex">
        <Search className="h-4 w-4 shrink-0" />
        <input
          type="text"
          placeholder="Buscar"
          className="w-full bg-transparent text-white placeholder:text-gray-400 outline-none"
        />
      </div>

      <div className="flex items-center gap-3 sm:gap-5">
        <div className="relative">
          <button
            onClick={() => {
              setHelpOpen((v) => !v);
              setUserMenuOpen(false);
            }}
            className="flex items-center gap-1.5 text-sm font-medium text-gray-300 transition-colors hover:text-white"
          >
            <HelpCircle className="h-4 w-4" />
            <span className="hidden sm:inline">Ayuda</span>
            <ChevronDown className="h-3.5 w-3.5" />
          </button>
          <AnimatePresence>
            {helpOpen && (
              <motion.div
                initial={{ opacity: 0, y: -6 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -6 }}
                transition={{ duration: 0.15 }}
                className="absolute right-0 mt-3 w-56 rounded-xl bg-white p-2 text-sm text-gray-700 shadow-lg dark:bg-zinc-800 dark:text-gray-200"
              >
                <a href="#" className="block rounded-lg px-3 py-2 hover:bg-gray-50 dark:hover:bg-zinc-700">
                  Centro de ayuda
                </a>
                <a href="#" className="block rounded-lg px-3 py-2 hover:bg-gray-50 dark:hover:bg-zinc-700">
                  Aprende sobre seguridad
                </a>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        <div className="relative">
          <button
            onClick={() => {
              setUserMenuOpen((v) => !v);
              setHelpOpen(false);
            }}
            className="flex items-center gap-2 text-sm font-medium text-gray-200 transition-colors hover:text-white"
          >
            <span className="hidden max-w-[160px] truncate sm:inline">{userName}</span>
            <ChevronDown className="h-3.5 w-3.5" />
          </button>
          <AnimatePresence>
            {userMenuOpen && (
              <motion.div
                initial={{ opacity: 0, y: -6 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -6 }}
                transition={{ duration: 0.15 }}
                className="absolute right-0 mt-3 w-64 rounded-xl bg-white p-2 text-sm text-gray-700 shadow-lg dark:bg-zinc-800 dark:text-gray-200"
              >
                <div className="px-3 py-2">
                  <p className="font-medium text-gray-900 dark:text-gray-50">{userName}</p>
                  <p className="truncate text-xs text-gray-500 dark:text-gray-400">{userEmail}</p>
                </div>
                <div className="my-1 h-px bg-gray-100 dark:bg-zinc-700" />
                <button
                  onClick={() => signOut({ callbackUrl: "/" })}
                  className="flex w-full items-center gap-2 rounded-lg px-3 py-2 text-left text-red-500 hover:bg-gray-50 dark:hover:bg-zinc-700"
                >
                  <LogOut className="h-4 w-4" />
                  Cerrar sesión
                </button>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>

      <div className="absolute inset-x-0 bottom-0 h-[3px] bg-gradient-to-r from-[#FACC15] via-[#F97316] to-[#8B5CF6]" />
    </header>
  );
}
