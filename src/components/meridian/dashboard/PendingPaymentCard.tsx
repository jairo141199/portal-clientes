import { AlertTriangle } from "lucide-react";
import { formatCurrency } from "@/lib/meridian-accounts";

interface PendingPaymentCardProps {
  amount: number;
}

export function PendingPaymentCard({ amount }: PendingPaymentCardProps) {
  return (
    <div className="mt-6 rounded-2xl border border-amber-200 bg-amber-50 p-8 dark:border-amber-400/30 dark:bg-amber-400/10">
      <div className="flex flex-wrap items-start justify-between gap-6">
        <div>
          <div className="flex flex-wrap items-center gap-3">
            <p className="text-3xl font-semibold text-gray-900 dark:text-gray-50">
              {formatCurrency(amount)}
            </p>
            <span className="flex items-center gap-1.5 rounded-full bg-amber-500/15 px-3 py-1 text-xs font-semibold text-amber-700 dark:text-amber-300">
              <AlertTriangle className="h-3 w-3" />
              Pending
            </span>
          </div>
          <p className="mt-2 text-sm text-gray-600 dark:text-gray-300">Pending payment on this account</p>
        </div>
      </div>
    </div>
  );
}
