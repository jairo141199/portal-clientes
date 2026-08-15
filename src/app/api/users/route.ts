import { NextResponse } from "next/server";
import { auth } from "@/auth";
import { addDemoUser, deleteDemoUserById, getAllDemoUsers } from "@/lib/demo-users";

async function ensureAdmin() {
  const session = await auth();
  if (!session?.user?.role || session.user.role !== "admin") {
    return NextResponse.json({ error: "Acceso denegado." }, { status: 403 });
  }
  return null;
}

export async function GET() {
  const forbidden = await ensureAdmin();
  if (forbidden) return forbidden;
  return NextResponse.json(getAllDemoUsers());
}

export async function POST(request: Request) {
  const forbidden = await ensureAdmin();
  if (forbidden) return forbidden;

  const body = await request.json();
  const { name, email, password, balance, pendingPayment } = body;

  if (!name || !email || !password || typeof balance !== "number") {
    return NextResponse.json({ error: "Datos inválidos." }, { status: 400 });
  }
  if (pendingPayment !== undefined && typeof pendingPayment !== "number") {
    return NextResponse.json({ error: "Pago pendiente inválido." }, { status: 400 });
  }

  const user = addDemoUser({ name, email, password, balance, pendingPayment });
  if (!user) {
    return NextResponse.json({ error: "Ya existe un usuario con ese correo." }, { status: 409 });
  }

  return NextResponse.json(user, { status: 201 });
}

export async function DELETE(request: Request) {
  const forbidden = await ensureAdmin();
  if (forbidden) return forbidden;

  const body = await request.json();
  const { id } = body;

  if (!id) {
    return NextResponse.json({ error: "Falta el id del usuario." }, { status: 400 });
  }

  const deleted = deleteDemoUserById(id);
  if (!deleted) {
    return NextResponse.json({ error: "Usuario no encontrado." }, { status: 404 });
  }

  return NextResponse.json({ success: true });
}
