"use client";

import { useState } from "react";
import { ChevronRight, Download, Printer, Search } from "lucide-react";
import clsx from "clsx";
import { formatCurrency, type ActivityRow } from "@/lib/meridian-accounts";

interface ActivityTableProps {
  rows: ActivityRow[];
  upcomingRows?: ActivityRow[];
}

function ActivityRows({ rows }: { rows: ActivityRow[] }) {
  return (
    <>
      {rows.map((row, index) =>
        row.type === "balance" ? (
          <tr key={index} className="bg-purple-50/60 dark:bg-white/5">
            <td className="py-2.5 pl-3 text-gray-500 dark:text-gray-400">{row.date}</td>
            <td colSpan={2} className="py-2.5 pr-3 text-right text-gray-500 dark:text-gray-400">
              Posted Balance: {formatCurrency(row.balanceAfter ?? 0)}
            </td>
          </tr>
        ) : (
          <tr key={index} className="border-b border-gray-50 last:border-0 dark:border-white/5">
            <td className="py-3 pl-3 text-gray-600 dark:text-gray-300">{row.date}</td>
            <td className="py-3 text-gray-900 dark:text-gray-100">{row.description}</td>
            <td className="py-3 pr-3 text-right">
              <div className="flex items-center justify-end gap-3">
                <span
                  className={
                    (row.amount ?? 0) < 0
                      ? "text-gray-900 dark:text-gray-100"
                      : "text-emerald-600 dark:text-emerald-400"
                  }
                >
                  {(row.amount ?? 0) < 0 ? "-" : "+"}
                  {formatCurrency(Math.abs(row.amount ?? 0))}
                </span>
                <ChevronRight className="h-4 w-4 text-gray-300" />
              </div>
            </td>
          </tr>
        ),
      )}
    </>
  );
}

export function ActivityTable({ rows, upcomingRows = [] }: ActivityTableProps) {
  const [tab, setTab] = useState<"recent" | "upcoming">("recent");

  return (
    <div className="mt-6 rounded-2xl border border-purple-100 bg-white p-8 dark:border-white/10 dark:bg-[#1A0B2E]">
      <div className="flex flex-wrap items-center justify-between gap-4">
        <h2 className="text-xl font-semibold text-gray-900 dark:text-gray-50">Activity</h2>
        <div className="flex gap-2">
          {[Search, Download, Printer].map((Icon, index) => (
            <button
              key={index}
              className="flex h-9 w-9 items-center justify-center rounded-full border border-purple-200 text-[#3B0764] transition-colors hover:bg-purple-50 dark:border-white/20 dark:text-white dark:hover:bg-white/10"
            >
              <Icon className="h-4 w-4" />
            </button>
          ))}
        </div>
      </div>

      <div className="mt-6 flex gap-6 border-b border-gray-100 text-[15px] font-medium dark:border-white/10">
        <button
          onClick={() => setTab("recent")}
          className={clsx(
            "border-b-2 pb-2",
            tab === "recent"
              ? "border-[#3B0764] text-[#3B0764] dark:border-white dark:text-white"
              : "border-transparent text-gray-400",
          )}
        >
          Recent
        </button>
        <button
          onClick={() => setTab("upcoming")}
          className={clsx(
            "border-b-2 pb-2",
            tab === "upcoming"
              ? "border-[#3B0764] text-[#3B0764] dark:border-white dark:text-white"
              : "border-transparent text-gray-400",
          )}
        >
          Upcoming
        </button>
      </div>

      {tab === "recent" ? (
        <table className="mt-4 w-full text-left text-sm">
          <thead>
            <tr className="text-gray-500 dark:text-gray-400">
              <th className="pb-3 font-normal">Date</th>
              <th className="pb-3 font-normal">Description</th>
              <th className="pb-3 text-right font-normal">Amount</th>
            </tr>
          </thead>
          <tbody>
            <ActivityRows rows={rows} />
          </tbody>
        </table>
      ) : upcomingRows.length > 0 ? (
        <table className="mt-4 w-full text-left text-sm">
          <thead>
            <tr className="text-gray-500 dark:text-gray-400">
              <th className="pb-3 font-normal">Date</th>
              <th className="pb-3 font-normal">Description</th>
              <th className="pb-3 text-right font-normal">Amount</th>
            </tr>
          </thead>
          <tbody>
            <ActivityRows rows={upcomingRows} />
          </tbody>
        </table>
      ) : (
        <p className="mt-6 text-sm text-gray-500 dark:text-gray-400">No upcoming activity.</p>
      )}
    </div>
  );
}
