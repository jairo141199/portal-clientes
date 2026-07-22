"use client";

import { useState, type FormEvent } from "react";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { signIn } from "next-auth/react";
import { ArrowRight, Landmark, Mail } from "lucide-react";
import { BackgroundPattern } from "@/components/meridian/BackgroundPattern";
import { Button } from "@/components/meridian/Button";
import { PasswordField } from "@/components/meridian/PasswordField";
import { TextField } from "@/components/meridian/TextField";
import { validateEmail, validatePassword } from "@/lib/meridian-validators";

interface FormErrors {
  email?: string;
  password?: string;
}

export default function MeridianLoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState<FormErrors>({});
  const [loading, setLoading] = useState(false);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const nextErrors: FormErrors = {
      email: validateEmail(email),
      password: validatePassword(password),
    };
    setErrors(nextErrors);
    if (nextErrors.email || nextErrors.password) return;

    setLoading(true);
    const result = await signIn("credentials", {
      email,
      password,
      redirect: false,
    });
    setLoading(false);

    if (result?.error) {
      setErrors({ password: "Invalid email or password." });
      return;
    }

    router.push("/meridian/dashboard");
    router.refresh();
  }

  return (
    <div className="relative flex min-h-screen flex-1 flex-col items-center justify-center overflow-hidden bg-white px-4 py-16 dark:bg-[#1A0B2E]">
      <BackgroundPattern />

      <motion.div
        initial={{ opacity: 0, y: -12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="relative z-10 mb-8 flex items-center gap-3"
      >
        <span className="flex h-11 w-11 items-center justify-center rounded-full bg-[#3B0764] text-white dark:bg-white dark:text-[#3B0764]">
          <Landmark className="h-5 w-5" />
        </span>
        <h1 className="text-3xl font-semibold tracking-tight text-gray-900 dark:text-gray-50">
          Meridian Trust
        </h1>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 24, scale: 0.98 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.6, delay: 0.15, ease: "easeOut" }}
        className="relative z-10 w-full max-w-[440px] rounded-2xl border border-purple-100 bg-white p-8 shadow-[0_8px_40px_rgba(59,7,100,0.08)] dark:border-transparent dark:bg-[#2A1440] dark:shadow-[0_8px_40px_rgba(0,0,0,0.5)] sm:p-10"
      >
        <div className="mb-8 text-center">
          <h2 className="text-2xl font-semibold text-gray-900 dark:text-gray-50">Welcome back</h2>
          <p className="mt-2 text-[15px] text-gray-500 dark:text-gray-400">
            Sign in to manage your accounts.
          </p>
        </div>

        <form onSubmit={handleSubmit} noValidate className="space-y-7">
          <TextField
            icon={Mail}
            type="email"
            placeholder="Email address"
            autoComplete="email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            error={errors.email}
          />

          <div>
            <PasswordField
              placeholder="Password"
              autoComplete="current-password"
              value={password}
              onChange={(event) => setPassword(event.target.value)}
              error={errors.password}
            />
            <div className="mt-3 text-right">
              <a
                href="#"
                className="text-sm font-medium text-[#3B0764] transition-colors hover:underline dark:text-white"
              >
                Forgot your password?
              </a>
            </div>
          </div>

          <Button type="submit" loading={loading} className="mt-2">
            <span className="flex items-center gap-2">
              Sign In
              <ArrowRight className="h-4 w-4" />
            </span>
          </Button>
        </form>

        <p className="mt-6 text-center text-sm text-gray-500 dark:text-gray-400">
          New to Meridian Trust?{" "}
          <a
            href="#"
            className="font-medium text-[#3B0764] transition-colors hover:underline dark:text-white"
          >
            Create an account
          </a>
        </p>
      </motion.div>

      <motion.footer
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        className="relative z-10 mt-10 flex items-center gap-3 text-sm text-gray-500 dark:text-gray-500"
      >
        <a href="#" className="transition-colors hover:text-gray-700 dark:hover:text-gray-300">
          Help
        </a>
        <span className="text-gray-300 dark:text-gray-700">•</span>
        <a href="#" className="transition-colors hover:text-gray-700 dark:hover:text-gray-300">
          Security
        </a>
        <span className="text-gray-300 dark:text-gray-700">•</span>
        <a href="#" className="transition-colors hover:text-gray-700 dark:hover:text-gray-300">
          Privacy Policy
        </a>
      </motion.footer>
    </div>
  );
}
