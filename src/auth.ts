import NextAuth from "next-auth";
import Credentials from "next-auth/providers/credentials";
import bcrypt from "bcryptjs";
import { findDemoUserByEmail } from "@/lib/demo-users";

export const { handlers, signIn, signOut, auth } = NextAuth({
  pages: {
    signIn: "/",
  },
  session: { strategy: "jwt" },
  providers: [
    Credentials({
      credentials: {
        email: { label: "Correo electrónico", type: "email" },
        password: { label: "Contraseña", type: "password" },
      },
      authorize: async (credentials) => {
        const email = credentials?.email as string | undefined;
        const password = credentials?.password as string | undefined;
        if (!email || !password) return null;

        const user = findDemoUserByEmail(email);
        if (!user) return null;

        const isValid = await bcrypt.compare(password, user.passwordHash);
        if (!isValid) return null;

        return {
          id: user.id,
          name: user.name,
          email: user.email,
          balance: user.balance,
          role: user.role,
          pendingPayment: user.pendingPayment,
        };
      },
    }),
  ],
  callbacks: {
    jwt({ token, user }) {
      if (user) {
        token.balance = user.balance;
        token.role = user.role;
        token.pendingPayment = user.pendingPayment;
      }
      return token;
    },
    session({ session, token }) {
      if (session.user) {
        session.user.balance = token.balance as number | undefined;
        session.user.role = token.role as "admin" | "user" | undefined;
        session.user.pendingPayment = token.pendingPayment as number | undefined;
      }
      return session;
    },
  },
});
