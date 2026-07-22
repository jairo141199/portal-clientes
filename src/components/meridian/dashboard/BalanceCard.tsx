import { CreditCard, FileText, Info, MoreHorizontal } from "lucide-react";
import { formatCurrency } from "@/lib/meridian-accounts";

interface BalanceCardProps {
  balance: number;
  asOf: string;
}

export function BalanceCard({ balance, asOf }: BalanceCardProps) {
  return (
    <div className="rounded-2xl border border-purple-100 bg-white p-8 dark:border-white/10 dark:bg-[#1A0B2E]">
      <div className="flex flex-wrap items-start justify-between gap-6">
        <div>
          <div className="flex items-center gap-2">
            <p className="text-4xl font-semibold text-gray-900 dark:text-gray-50">
              {formatCurrency(balance)}
            </p>
            <Info className="h-4 w-4 text-gray-400" />
          </div>
          <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">Available Balance as of {asOf}</p>
        </div>

        <button className="rounded-full border border-[#3B0764] px-5 py-2.5 text-sm font-medium text-[#3B0764] transition-colors hover:bg-purple-50 dark:border-white dark:text-white dark:hover:bg-white/10">
          View account details
        </button>
      </div>

      <div className="mt-6 flex flex-wrap gap-3">
        {[
          { icon: FileText, label: "View statements" },
          { icon: CreditCard, label: "Card controls" },
          { icon: MoreHorizontal, label: "More" },
        ].map(({ icon: Icon, label }) => (
          <button
            key={label}
            className="flex items-center gap-2 rounded-full border border-purple-200 px-5 py-2.5 text-sm font-medium text-[#3B0764] transition-colors hover:bg-purple-50 dark:border-white/20 dark:text-white dark:hover:bg-white/10"
          >
            <Icon className="h-4 w-4" />
            {label}
          </button>
        ))}
      </div>
    </div>
  );
}
