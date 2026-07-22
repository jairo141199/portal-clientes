"use client";

import { useState } from "react";
import { CreditCard, Printer, Sprout, Wallet } from "lucide-react";
import clsx from "clsx";
import {
  CARDS_AND_LOANS_TOTAL,
  CASH_AND_SAVINGS_TOTAL,
  CHECKING_ACCOUNTS,
  INVESTMENTS_TOTAL,
  LOAN_ACCOUNTS,
  SAVINGS_ACCOUNTS,
  formatCurrency,
} from "@/lib/meridian-accounts";

export function AccountsSidebar() {
  const [tab, setTab] = useState<"personal" | "business">("personal");

  return (
    <aside className="w-full shrink-0 border-r border-purple-100 bg-white p-6 dark:border-white/10 dark:bg-[#1A0B2E] lg:w-[280px]">
      <div className="mb-6 flex items-center justify-between">
        <div className="flex gap-6 text-[15px] font-medium">
          <button
            onClick={() => setTab("personal")}
            className={clsx(
              "border-b-2 pb-2",
              tab === "personal"
                ? "border-[#3B0764] text-[#3B0764] dark:border-white dark:text-white"
                : "border-transparent text-gray-400",
            )}
          >
            Personal
          </button>
          <button
            onClick={() => setTab("business")}
            className={clsx(
              "border-b-2 pb-2",
              tab === "business"
                ? "border-[#3B0764] text-[#3B0764] dark:border-white dark:text-white"
                : "border-transparent text-gray-400",
            )}
          >
            Business
          </button>
        </div>
        <button className="text-gray-400 hover:text-gray-600 dark:hover:text-gray-200">
          <Printer className="h-4 w-4" />
        </button>
      </div>

      <div className="space-y-8">
        <div>
          <div className="mb-3 flex items-center gap-2 text-[13px] font-semibold tracking-wide text-gray-700 dark:text-gray-300">
            <Wallet className="h-4 w-4" />
            CASH &amp; SAVINGS
            <span className="ml-auto font-normal text-gray-500 dark:text-gray-400">
              {formatCurrency(CASH_AND_SAVINGS_TOTAL)}
            </span>
          </div>
          <div className="space-y-1">
            {CHECKING_ACCOUNTS.map((account) => (
              <div key={account.id} className="rounded-lg bg-purple-50 px-3 py-2 dark:bg-white/10">
                <p className="text-sm font-medium text-gray-900 dark:text-gray-50">
                  {account.name} {account.number}
                </p>
                <p className="text-sm font-semibold text-gray-900 dark:text-gray-50">
                  {formatCurrency(account.balance)}
                </p>
              </div>
            ))}
            {SAVINGS_ACCOUNTS.map((account) => (
              <div key={account.id} className="px-3 py-2">
                <p className="text-sm font-medium text-gray-700 dark:text-gray-300">
                  {account.name} {account.number}
                </p>
                <p className="text-sm text-gray-500 dark:text-gray-400">{formatCurrency(account.balance)}</p>
              </div>
            ))}
          </div>
        </div>

        <div>
          <div className="mb-3 flex items-center gap-2 text-[13px] font-semibold tracking-wide text-gray-700 dark:text-gray-300">
            <CreditCard className="h-4 w-4" />
            CARDS &amp; LOANS
            <span className="ml-auto font-normal text-gray-500 dark:text-gray-400">
              {formatCurrency(CARDS_AND_LOANS_TOTAL)}
            </span>
          </div>
          <div className="space-y-1">
            {LOAN_ACCOUNTS.map((account) => (
              <div key={account.id} className="px-3 py-2">
                <p className="text-sm font-medium text-gray-700 dark:text-gray-300">
                  {account.name} {account.number}
                </p>
                <p className="text-sm text-gray-500 dark:text-gray-400">{formatCurrency(account.balance)}</p>
              </div>
            ))}
          </div>
        </div>

        <div>
          <div className="mb-3 flex items-center gap-2 text-[13px] font-semibold tracking-wide text-gray-700 dark:text-gray-300">
            <Sprout className="h-4 w-4" />
            INVESTMENTS
            <span className="ml-auto font-normal text-gray-500 dark:text-gray-400">
              {formatCurrency(INVESTMENTS_TOTAL)}
            </span>
          </div>
        </div>
      </div>

      <button className="mt-8 w-full rounded-full bg-[#3B0764] px-4 py-2.5 text-sm font-medium text-white transition-opacity hover:opacity-90">
        Link External Accounts
      </button>
    </aside>
  );
}
