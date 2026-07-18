"use client";

import { useState } from "react";
import { signOut } from "next-auth/react";
import {
  CreditCard,
  Fingerprint,
  Home,
  LogOut,
  Receipt,
  Settings,
  Wallet,
} from "lucide-react";
import clsx from "clsx";

const NAV_ITEMS = [
  { icon: Home, label: "Inicio" },
  { icon: Wallet, label: "Productos" },
  { icon: CreditCard, label: "Tarjetas" },
  { icon: Fingerprint, label: "Seguridad" },
  { icon: Receipt, label: "Extractos" },
  { icon: Settings, label: "Configuración" },
];

export function Sidebar() {
  const [active, setActive] = useState(0);

  return (
    <aside className="sticky top-16 flex h-[calc(100vh-4rem)] w-[72px] shrink-0 flex-col items-center justify-between border-r border-gray-200 bg-white py-6 dark:border-gray-800 dark:bg-zinc-950">
      <nav className="flex flex-col items-center gap-2">
        {NAV_ITEMS.map(({ icon: Icon, label }, index) => (
          <button
            key={label}
            title={label}
            onClick={() => setActive(index)}
            className={clsx(
              "flex h-11 w-11 items-center justify-center rounded-xl transition-colors",
              active === index
                ? "bg-[#0A1F44] text-white dark:bg-blue-500"
                : "text-gray-400 hover:bg-gray-100 hover:text-gray-700 dark:text-gray-500 dark:hover:bg-zinc-800 dark:hover:text-gray-200",
            )}
          >
            <Icon className="h-5 w-5" />
          </button>
        ))}
      </nav>

      <button
        title="Cerrar sesión"
        onClick={() => signOut({ callbackUrl: "/" })}
        className="flex h-11 w-11 items-center justify-center rounded-xl text-gray-400 transition-colors hover:bg-red-50 hover:text-red-500 dark:text-gray-500 dark:hover:bg-red-500/10 dark:hover:text-red-400"
      >
        <LogOut className="h-5 w-5" />
      </button>
    </aside>
  );
}
