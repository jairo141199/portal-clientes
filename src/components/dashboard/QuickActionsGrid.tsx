"use client";

import { ArrowDownToLine, FileText, Lock, Receipt, Wallet } from "lucide-react";
import { QuickActionCard } from "./QuickActionCard";

const ACTIONS = [
  { icon: ArrowDownToLine, label: "Transferir a productos", accent: "#0A1F44" },
  { icon: Lock, label: "Editar topes", accent: "#8B5CF6" },
  { icon: Receipt, label: "Pagar facturas", accent: "#F97316" },
  { icon: Wallet, label: "Ir a bolsillos", accent: "#0EA5E9" },
  { icon: FileText, label: "Consultar extractos", accent: "#FACC15" },
];

export function QuickActionsGrid() {
  return (
    <section>
      <h2 className="mb-4 text-lg font-medium text-gray-700 dark:text-gray-300">
        Transacciones más usadas
      </h2>
      <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5">
        {ACTIONS.map((action) => (
          <QuickActionCard key={action.label} {...action} />
        ))}
      </div>
    </section>
  );
}
