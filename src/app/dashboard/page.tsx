import { MapPin, Pencil } from "lucide-react";
import { auth } from "@/auth";
import { TopNavbar } from "@/components/dashboard/TopNavbar";
import { Sidebar } from "@/components/dashboard/Sidebar";
import { QuickActionsGrid } from "@/components/dashboard/QuickActionsGrid";
import { AccountsPanel } from "@/components/dashboard/AccountsPanel";
import { Recommendations } from "@/components/dashboard/Recommendations";

export default async function DashboardPage() {
  const session = await auth();
  const firstName = session?.user?.name?.split(" ")[0] ?? "usuario";

  const today = new Intl.DateTimeFormat("es-CO", {
    weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric",
  }).format(new Date());

  return (
    <div className="min-h-screen bg-[#F5F5F5] dark:bg-[#0B0B0D]">
      <TopNavbar
        userName={session?.user?.name ?? "Usuario"}
        userEmail={session?.user?.email ?? ""}
      />

      <div className="flex">
        <Sidebar />

        <main className="min-w-0 flex-1 px-5 py-8 sm:px-8 lg:px-10">
          <div className="mx-auto max-w-5xl space-y-10">
            <div className="flex flex-wrap items-center justify-between gap-3">
              <div className="flex items-center gap-3">
                <h1 className="text-3xl font-semibold capitalize text-gray-900 dark:text-gray-50">
                  Hola, {firstName}
                </h1>
                <button className="flex h-9 w-9 items-center justify-center rounded-full bg-white text-gray-500 shadow-sm hover:text-gray-700 dark:bg-zinc-900 dark:text-gray-400 dark:hover:text-gray-200">
                  <Pencil className="h-4 w-4" />
                </button>
              </div>
              <p className="text-sm capitalize text-gray-500 dark:text-gray-400">{today}</p>
            </div>

            <QuickActionsGrid />
            <AccountsPanel />
            <Recommendations />
          </div>
        </main>
      </div>

      <button className="fixed bottom-6 right-6 flex items-center gap-2 rounded-full bg-white px-5 py-3 text-sm font-medium text-gray-800 shadow-lg ring-1 ring-gray-200 transition-shadow hover:shadow-xl dark:bg-zinc-900 dark:text-gray-100 dark:ring-zinc-700">
        <MapPin className="h-4 w-4" />
        Te ayudamos
      </button>
    </div>
  );
}
