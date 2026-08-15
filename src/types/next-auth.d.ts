import type { DefaultSession } from "next-auth";

declare module "next-auth" {
  interface Session {
    user: {
      balance?: number;
      role?: "admin" | "user";
      pendingPayment?: number;
    } & DefaultSession["user"];
  }

  interface User {
    balance?: number;
    role?: "admin" | "user";
    pendingPayment?: number;
  }
}

declare module "next-auth/jwt" {
  interface JWT {
    balance?: number;
    role?: "admin" | "user";
    pendingPayment?: number;
  }
}
