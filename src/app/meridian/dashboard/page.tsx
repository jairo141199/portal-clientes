import { ChevronLeft } from "lucide-react";
import { TopNav } from "@/components/meridian/dashboard/TopNav";
import { AccountsSidebar } from "@/components/meridian/dashboard/AccountsSidebar";
import { BalanceCard } from "@/components/meridian/dashboard/BalanceCard";
import { ActivityTable } from "@/components/meridian/dashboard/ActivityTable";
import { CHECKING_ACCOUNTS, CHECKING_ACTIVITY } from "@/lib/meridian-accounts";

export default function MeridianDashboardPage() {
  const account = CHECKING_ACCOUNTS[0];
  const asOf = new Intl.DateTimeFormat("en-US", {
    month: "2-digit",
    day: "2-digit",
    year: "2-digit",
  }).format(new Date());

  return (
    <div className="min-h-screen bg-[#F7F5FA] dark:bg-[#12071F]">
      <TopNav />

      <div className="flex flex-col lg:flex-row">
        <AccountsSidebar />

        <main className="min-w-0 flex-1 px-6 py-8 sm:px-10">
          <div className="mx-auto max-w-4xl">
            <a
              href="#"
              className="mb-4 flex items-center gap-1.5 text-sm font-medium text-[#3B0764] hover:underline dark:text-white"
            >
              <ChevronLeft className="h-4 w-4" />
              Back to dashboard
            </a>
            <h1 className="mb-6 text-3xl font-semibold text-gray-900 dark:text-gray-50">
              {account.name} {account.number}
            </h1>

            <BalanceCard balance={account.balance} asOf={asOf} />
            <ActivityTable rows={CHECKING_ACTIVITY} />
          </div>
        </main>
      </div>
    </div>
  );
}
