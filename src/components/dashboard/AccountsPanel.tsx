"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronUp, Eye, EyeOff, MoreVertical, PiggyBank } from "lucide-react";

interface Account {
  name: string;
  number: string;
  balance: string;
}

const ACCOUNTS: Account[] = [{ name: "Cuenta de Ahorros", number: "Ahorros 314 - 778215 - 09", balance: "USD 3.500.000.000,00" }];

export function AccountsPanel() {
  const [expanded, setExpanded] = useState(true);
  const [balancesHidden, setBalancesHidden] = useState(false);

  return (
    <section>
      <div className="mb-4 flex items-center justify-between">
        <h2 className="text-lg font-medium text-gray-700 dark:text-gray-300">Tus productos</h2>
        <button
          onClick={() => setBalancesHidden((v) => !v)}
          className="flex items-center gap-1.5 text-sm font-medium text-gray-500 transition-colors hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
        >
          {balancesHidden ? <Eye className="h-4 w-4" /> : <EyeOff className="h-4 w-4" />}
          {balancesHidden ? "Mostrar saldos" : "Ocultar saldos"}
        </button>
      </div>

      <div className="overflow-hidden rounded-2xl shadow-[0_2px_12px_rgba(0,0,0,0.05)] dark:shadow-none dark:ring-1 dark:ring-zinc-800">
        <button
          onClick={() => setExpanded((v) => !v)}
          className="flex w-full items-center justify-between bg-[#0B0E14] px-5 py-4 text-white"
        >
          <span className="flex items-center gap-2.5 text-[15px] font-medium">
            <PiggyBank className="h-5 w-5" />
            Cuentas ({ACCOUNTS.length})
          </span>
          <motion.span animate={{ rotate: expanded ? 0 : 180 }} transition={{ duration: 0.2 }}>
            <ChevronUp className="h-5 w-5" />
          </motion.span>
        </button>

        <AnimatePresence initial={false}>
          {expanded && (
            <motion.div
              initial={{ height: 0 }}
              animate={{ height: "auto" }}
              exit={{ height: 0 }}
              transition={{ duration: 0.25, ease: "easeInOut" }}
              className="overflow-hidden bg-white dark:bg-zinc-900"
            >
              {ACCOUNTS.map((account) => (
                <div
                  key={account.number}
                  className="flex items-center justify-between px-5 py-5"
                >
                  <div>
                    <p className="font-medium text-gray-900 dark:text-gray-50">{account.name}</p>
                    <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">{account.number}</p>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="text-right">
                      <p className="text-xs text-gray-500 dark:text-gray-400">Saldo disponible</p>
                      <p className="text-lg font-semibold text-gray-900 dark:text-gray-50">
                        {balancesHidden ? "••••••••" : account.balance}
                      </p>
                    </div>
                    <button className="text-gray-400 hover:text-gray-600 dark:hover:text-gray-300">
                      <MoreVertical className="h-4.5 w-4.5" />
                    </button>
                  </div>
                </div>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
