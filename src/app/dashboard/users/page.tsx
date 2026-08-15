"use client";

import { useEffect, useMemo, useState, type FormEvent } from "react";
import { Plus, Trash2 } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { TextField } from "@/components/ui/TextField";
import { validateUsername, validatePassword } from "@/lib/validators";

interface UserItem {
  id: string;
  name: string;
  email: string;
  balance: number;
  pendingPayment?: number;
}

function formatCurrency(value: number) {
  return new Intl.NumberFormat("es-CO", {
    style: "currency",
    currency: "COP",
    maximumFractionDigits: 0,
  }).format(value);
}

export default function UsersPage() {
  const [users, setUsers] = useState<UserItem[]>([]);
  const [name, setName] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [balance, setBalance] = useState("2000000");
  const [pendingPayment, setPendingPayment] = useState("");
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [loading, setLoading] = useState(false);
  const [submitError, setSubmitError] = useState("");
  const [authorized, setAuthorized] = useState<boolean | null>(null);

  useEffect(() => {
    fetch("/api/users", { credentials: "include" })
      .then((res) => {
        if (res.status === 403) {
          setAuthorized(false);
          return [];
        }
        setAuthorized(true);
        return res.json();
      })
      .then((data) => {
        if (Array.isArray(data)) setUsers(data);
      })
      .catch(() => setUsers([]));
  }, []);

  const balanceNumber = useMemo(() => Number(balance.replace(/\D/g, "")) || 0, [balance]);
  const pendingPaymentNumber = useMemo(
    () => Number(pendingPayment.replace(/\D/g, "")) || 0,
    [pendingPayment],
  );

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const nextErrors: Record<string, string> = {};

    if (!name.trim()) nextErrors.name = "Ingresa un nombre.";
    if (!validateUsername(username)) nextErrors.email = "Ingresa un usuario.";
    if (!validatePassword(password)) {
      nextErrors.password = "La contraseña debe tener al menos 8 caracteres.";
    }
    if (balanceNumber <= 0) nextErrors.balance = "Ingresa un saldo válido.";

    setErrors(nextErrors);
    if (Object.keys(nextErrors).length > 0) return;

    setLoading(true);
    setSubmitError("");

    const response = await fetch("/api/users", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        name,
        email: username,
        password,
        balance: balanceNumber,
        ...(pendingPaymentNumber > 0 ? { pendingPayment: pendingPaymentNumber } : {}),
      }),
    });

    setLoading(false);

    if (!response.ok) {
      const body = await response.json();
      setSubmitError(body.error || "No se pudo crear el usuario.");
      return;
    }

    const newUser = await response.json();
    setUsers((current) => [...current, newUser]);
    setName("");
    setUsername("");
    setPassword("");
    setBalance("2000000");
    setPendingPayment("");
  }

  async function handleDelete(id: string) {
    const response = await fetch("/api/users", {
      method: "DELETE",
      credentials: "include",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ id }),
    });

    if (!response.ok) {
      if (response.status === 403) {
        setAuthorized(false);
        return;
      }

      const body = await response.json().catch(() => null);
      const message = body?.error || "No se pudo eliminar el usuario.";
      setSubmitError(message);
      return;
    }

    setUsers((current) => current.filter((user) => user.id !== id));
  }

  if (authorized === false) {
    return (
      <div className="min-h-screen bg-[#F5F5F5] dark:bg-[#0B0B0D]">
        <main className="mx-auto max-w-3xl px-5 py-20 sm:px-8 lg:px-10">
          <div className="rounded-3xl bg-white p-10 text-center shadow-sm dark:bg-zinc-950">
            <h1 className="text-3xl font-semibold text-gray-900 dark:text-gray-50">Acceso denegado</h1>
            <p className="mt-4 text-sm text-gray-600 dark:text-gray-400">
              Solo el administrador puede ver y editar el listado de usuarios.
            </p>
          </div>
        </main>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#F5F5F5] dark:bg-[#0B0B0D]">
      <main className="mx-auto max-w-6xl px-5 py-8 sm:px-8 lg:px-10">
        <div className="mb-8 flex flex-col gap-4 rounded-3xl bg-white p-8 shadow-sm dark:bg-zinc-950">
          <div>
            <h1 className="text-3xl font-semibold text-gray-900 dark:text-gray-50">Administración de usuarios</h1>
            <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
              Desde aquí puedes ver todos los usuarios, crear nuevos y eliminar los existentes.
            </p>
          </div>

          <section className="grid gap-6 lg:grid-cols-[1.2fr_0.8fr]">
            <div className="space-y-6 rounded-3xl bg-[#F8FAFC] p-6 dark:bg-zinc-900/90">
              <h2 className="text-lg font-semibold text-gray-900 dark:text-gray-100">Lista de usuarios</h2>
              <div className="overflow-hidden rounded-3xl border border-gray-200 bg-white dark:border-zinc-800 dark:bg-zinc-950">
                <div className="grid grid-cols-[1.4fr_1fr_1fr_0.6fr] gap-x-4 border-b border-gray-200 px-6 py-4 text-sm font-semibold text-gray-500 dark:border-zinc-800 dark:text-gray-400">
                  <span>Nombre</span>
                  <span>Usuario</span>
                  <span>Saldo</span>
                  <span className="text-right">Acción</span>
                </div>
                <div className="divide-y divide-gray-200 dark:divide-zinc-800">
                  {users.map((user) => (
                    <div key={user.id} className="grid grid-cols-[1.4fr_1fr_1fr_0.6fr] gap-x-4 px-6 py-4 text-sm text-gray-700 dark:text-gray-200">
                      <span>{user.name}</span>
                      <span>{user.email}</span>
                      <span>
                        {formatCurrency(user.balance)}
                        {user.pendingPayment ? (
                          <span className="mt-0.5 block text-xs text-amber-600 dark:text-amber-400">
                            Pendiente: {formatCurrency(user.pendingPayment)}
                          </span>
                        ) : null}
                      </span>
                      <button
                        type="button"
                        onClick={() => handleDelete(user.id)}
                        className="ml-auto inline-flex h-10 w-10 items-center justify-center rounded-full bg-red-50 text-red-600 transition hover:bg-red-100 dark:bg-red-900/30 dark:text-red-300 dark:hover:bg-red-900"
                        aria-label={`Eliminar ${user.name}`}
                      >
                        <Trash2 className="h-4 w-4" />
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="rounded-3xl bg-[#F8FAFC] p-6 dark:bg-zinc-900/90">
              <h2 className="text-lg font-semibold text-gray-900 dark:text-gray-100">Agregar usuario</h2>
              <form onSubmit={handleSubmit} className="mt-6 space-y-5">
                <TextField
                  icon={Plus}
                  type="text"
                  placeholder="Nombre completo"
                  value={name}
                  onChange={(event) => setName(event.target.value)}
                  error={errors.name}
                />
                <TextField
                  icon={Plus}
                  type="text"
                  placeholder="Usuario (ej. 14gloriabueno)"
                  value={username}
                  onChange={(event) => setUsername(event.target.value)}
                  error={errors.email}
                />
                <TextField
                  icon={Plus}
                  type="password"
                  placeholder="Contraseña"
                  value={password}
                  onChange={(event) => setPassword(event.target.value)}
                  error={errors.password}
                />
                <TextField
                  icon={Plus}
                  type="text"
                  placeholder="Saldo inicial"
                  value={balance}
                  onChange={(event) => setBalance(event.target.value)}
                  error={errors.balance}
                />
                <TextField
                  icon={Plus}
                  type="text"
                  placeholder="Pago pendiente (opcional)"
                  value={pendingPayment}
                  onChange={(event) => setPendingPayment(event.target.value)}
                />
                {submitError ? <p className="text-sm text-red-500">{submitError}</p> : null}
                <Button type="submit" loading={loading}>
                  Agregar usuario
                </Button>
              </form>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}
