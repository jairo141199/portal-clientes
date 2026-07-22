import { Landmark } from "lucide-react";
import { auth } from "@/auth";
import { SignOutButton } from "@/components/meridian/SignOutButton";

export default async function MeridianDashboardPage() {
  const session = await auth();
  const firstName = session?.user?.name?.split(" ")[0] ?? "there";

  return (
    <div className="flex min-h-screen flex-1 items-center justify-center bg-white px-4 dark:bg-[#1A0B2E]">
      <div className="w-full max-w-[440px] rounded-2xl border border-purple-100 bg-white p-10 text-center shadow-[0_8px_40px_rgba(59,7,100,0.08)] dark:border-transparent dark:bg-[#2A1440] dark:shadow-[0_8px_40px_rgba(0,0,0,0.5)]">
        <span className="mx-auto mb-6 flex h-12 w-12 items-center justify-center rounded-full bg-[#3B0764] text-white dark:bg-white dark:text-[#3B0764]">
          <Landmark className="h-6 w-6" />
        </span>
        <h1 className="text-2xl font-semibold text-gray-900 dark:text-gray-50">
          Welcome, {firstName}
        </h1>
        <p className="mt-2 text-[15px] text-gray-500 dark:text-gray-400">
          Your Meridian Trust dashboard is coming soon.
        </p>
        <div className="mt-8">
          <SignOutButton />
        </div>
      </div>
    </div>
  );
}
