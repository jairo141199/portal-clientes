"use client";

import { signOut } from "next-auth/react";
import { LogOut } from "lucide-react";

export function SignOutButton() {
  return (
    <button
      type="button"
      onClick={() => signOut({ callbackUrl: "/meridian" })}
      className="flex items-center gap-2 rounded-full border border-purple-100 px-4 py-2 text-sm font-medium text-gray-700 transition-colors hover:bg-purple-50 dark:border-white/20 dark:text-gray-200 dark:hover:bg-white/10"
    >
      <LogOut className="h-4 w-4" />
      Sign Out
    </button>
  );
}
