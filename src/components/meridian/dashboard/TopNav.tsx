"use client";

import { signOut } from "next-auth/react";
import { Landmark, LogOut, MessageSquare, User } from "lucide-react";

const NAV_LINKS = ["Home", "Accounts", "Transfer & pay", "Planning & tools", "Help & support"];

interface TopNavProps {
  userName?: string;
}

export function TopNav({ userName }: TopNavProps) {
  return (
    <header className="flex h-16 items-center justify-between gap-6 bg-[#3B0764] px-6 text-white">
      <div className="flex items-center gap-8">
        <span className="flex h-8 w-8 items-center justify-center rounded-md bg-white/10">
          <Landmark className="h-4 w-4" />
        </span>
        <nav className="hidden items-center gap-7 text-[15px] lg:flex">
          {NAV_LINKS.map((link, index) => (
            <a
              key={link}
              href="#"
              className={
                index === 1
                  ? "border-b-2 border-white pb-1 font-medium text-white"
                  : "text-white/80 transition-colors hover:text-white"
              }
            >
              {link}
            </a>
          ))}
        </nav>
      </div>

      <div className="flex items-center gap-6 text-[15px]">
        <a href="#" className="hidden items-center gap-2 text-white/80 transition-colors hover:text-white sm:flex">
          <MessageSquare className="h-4 w-4" />
          Assist
        </a>
        {userName ? (
          <span className="flex items-center gap-2 font-medium text-white">
            <User className="h-4 w-4" />
            {userName}
          </span>
        ) : (
          <a href="#" className="hidden items-center gap-2 text-white/80 transition-colors hover:text-white sm:flex">
            <User className="h-4 w-4" />
            Profile
          </a>
        )}
        <button
          onClick={() => signOut({ callbackUrl: "/meridian" })}
          className="flex items-center gap-2 text-white/80 transition-colors hover:text-white"
        >
          <LogOut className="h-4 w-4" />
          Sign Out
        </button>
      </div>
    </header>
  );
}
