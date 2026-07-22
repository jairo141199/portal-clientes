import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Meridian Trust | Sign In",
  description: "Sign in to manage your accounts.",
};

export default function MeridianLayout({ children }: { children: React.ReactNode }) {
  return children;
}
