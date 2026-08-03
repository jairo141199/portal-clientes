"use client";

import { useState, type FormEvent } from "react";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { signIn } from "next-auth/react";
import { ArrowRight, User } from "lucide-react";
import { BackgroundCurves } from "@/components/ui/BackgroundCurves";
import { Button } from "@/components/ui/Button";
import { Logo } from "@/components/ui/Logo";
import { PasswordField } from "@/components/ui/PasswordField";
import { TextField } from "@/components/ui/TextField";
import { validateEmail, validatePassword } from "@/lib/validators";

interface FormErrors {
  email?: string;
  password?: string;
}

export default function LoginPage() {
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
      setErrors({ password: "Correo o contraseña incorrectos." });
      return;
    }

    router.push("/dashboard");
    router.refresh();
  }

  return (
    <div className="relative flex min-h-screen flex-1 flex-col items-center justify-center overflow-hidden bg-[#F5F5F5] px-4 py-16 dark:bg-[#0B0B0D]">
      <BackgroundCurves />

      <motion.div
        initial={{ opacity: 0, y: -12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="relative z-10 mb-8 flex flex-col items-center gap-4"
      >
        <Logo className="h-14 w-14" />
        <h1 className="text-center text-4xl font-extralight tracking-tight text-gray-900 dark:text-gray-100 sm:text-5xl">
          Portal de Clientes
        </h1>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 24, scale: 0.98 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.6, delay: 0.15, ease: "easeOut" }}
        className="relative z-10 w-full max-w-[520px] rounded-2xl bg-white p-8 shadow-[0_8px_40px_rgba(0,0,0,0.08)] dark:bg-zinc-900 dark:shadow-[0_8px_40px_rgba(0,0,0,0.5)] sm:p-10"
      >
        <div className="mb-8 text-center">
          <h2 className="text-2xl font-semibold text-gray-900 dark:text-gray-50">¡Bienvenido!</h2>
          <p className="mt-2 text-[15px] text-gray-500 dark:text-gray-400">
            Inicia sesión para acceder a tu información.
          </p>
        </div>

        <form onSubmit={handleSubmit} noValidate className="space-y-7">
          <TextField
            icon={User}
            type="email"
            placeholder="Correo electrónico"
            autoComplete="email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            error={errors.email}
          />

          <div>
            <PasswordField
              placeholder="Contraseña"
              autoComplete="current-password"
              value={password}
              onChange={(event) => setPassword(event.target.value)}
              error={errors.password}
            />
            <div className="mt-3 text-right">
              <a
                href="#"
                className="text-sm font-medium text-[#0A1F44] transition-colors hover:underline dark:text-blue-400"
              >
                ¿Olvidaste tu contraseña?
              </a>
            </div>
          </div>

          <Button type="submit" loading={loading} className="mt-2">
            <span className="flex items-center gap-2">
              Iniciar sesión
              <ArrowRight className="h-4 w-4" />
            </span>
          </Button>
        </form>

        <p className="mt-6 text-center text-sm text-gray-500 dark:text-gray-400">
          ¿No tienes cuenta?{" "}
          <a
            href="#"
            className="font-medium text-[#0A1F44] transition-colors hover:underline dark:text-blue-400"
          >
            Crear una cuenta
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
          Ayuda
        </a>
        <span className="text-gray-300 dark:text-gray-700">•</span>
        <a href="#" className="transition-colors hover:text-gray-700 dark:hover:text-gray-300">
          Seguridad
        </a>
        <span className="text-gray-300 dark:text-gray-700">•</span>
        <a href="#" className="transition-colors hover:text-gray-700 dark:hover:text-gray-300">
          Política de privacidad
        </a>
      </motion.footer>
    </div>
  );
}
