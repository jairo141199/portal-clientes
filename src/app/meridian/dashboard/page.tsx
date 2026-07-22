import { Landmark } from "lucide-react";
import { auth } from "@/auth";
import { SignOutButton } from "@/components/meridian/SignOutButton";

export default async function MeridianDashboardPage() {
  const session = await auth();
  const firstName = session?.user?.name?.split(" ")[0] ?? "there";

  return (
    <div className="flex min-h-screen flex-1 items-center justify-center bg-[#F7F8FA] px-4 dark:bg-[#071627]">
      <div className="w-full max-w-[440px] rounded-2xl bg-white p-10 text-center shadow-[0_8px_40px_rgba(0,0,0,0.08)] dark:bg-[#0E2038] dark:shadow-[0_8px_40px_rgba(0,0,0,0.5)]">
        <span className="mx-auto mb-6 flex h-12 w-12 items-center justify-center rounded-full bg-[#0B2545] text-white dark:bg-[#B08D2B] dark:text-[#0B2545]">
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
