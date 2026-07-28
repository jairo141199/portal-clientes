import type { DefaultSession } from "next-auth";

declare module "next-auth" {
  interface Session {
    user: {
      balance?: number;
    } & DefaultSession["user"];
  }

  interface User {
    balance?: number;
  }
}

declare module "next-auth/jwt" {
  interface JWT {
    balance?: number;
  }
}
