"use client";

import { useState } from "react";
import { signOut } from "next-auth/react";
import {
  ArrowLeftRight,
  FileText,
  Home,
  LogOut,
  Settings,
  ShoppingBag,
  Wallet,
} from "lucide-react";
import clsx from "clsx";
import { SIDEBAR_MENUS } from "@/lib/sidebar-menu";
import { SidebarPanel } from "./SidebarPanel";

const ICONS: Record<string, typeof Home> = {
  inicio: Home,
  transacciones: ArrowLeftRight,
  productos: Wallet,
  "solicitud-productos": ShoppingBag,
  documentos: FileText,
  ajustes: Settings,
};

const NAV_ITEMS = [
  { key: "inicio", label: "Inicio" },
  ...SIDEBAR_MENUS.map((section) => ({ key: section.key, label: section.label })),
];

export function Sidebar() {
  const [active, setActive] = useState("inicio");

  const activeSection = SIDEBAR_MENUS.find((section) => section.key === active) ?? null;

  return (
    <>
      <aside className="sticky top-16 z-20 flex h-[calc(100vh-4rem)] w-[72px] shrink-0 flex-col items-center justify-between border-r border-gray-200 bg-white py-6 dark:border-gray-800 dark:bg-zinc-950">
        <nav className="flex flex-col items-center gap-2">
          {NAV_ITEMS.map(({ key, label }) => {
            const Icon = ICONS[key];
            return (
              <button
                key={key}
                title={label}
                onClick={() => setActive((current) => (current === key ? "inicio" : key))}
                className={clsx(
                  "flex h-11 w-11 items-center justify-center rounded-xl transition-colors",
                  active === key
                    ? "bg-[#0A1F44] text-white dark:bg-blue-500"
                    : "text-gray-400 hover:bg-gray-100 hover:text-gray-700 dark:text-gray-500 dark:hover:bg-zinc-800 dark:hover:text-gray-200",
                )}
              >
                <Icon className="h-5 w-5" />
              </button>
            );
          })}
        </nav>

        <button
          title="Cerrar sesión"
          onClick={() => signOut({ callbackUrl: "/" })}
          className="flex h-11 w-11 items-center justify-center rounded-xl text-gray-400 transition-colors hover:bg-red-50 hover:text-red-500 dark:text-gray-500 dark:hover:bg-red-500/10 dark:hover:text-red-400"
        >
          <LogOut className="h-5 w-5" />
        </button>
      </aside>

      <SidebarPanel section={activeSection} onClose={() => setActive("inicio")} />
    </>
  );
}
