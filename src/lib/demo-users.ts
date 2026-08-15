import bcrypt from "bcryptjs";
import fs from "fs";
import path from "path";

interface DemoUserSeed {
  id: string;
  name: string;
  email: string;
  password: string;
  balance: number;
  role?: "admin" | "user";
}

export interface DemoUser {
  id: string;
  name: string;
  email: string;
  passwordHash: string;
  balance: number;
  role: "admin" | "user";
  pendingPayment?: number;
}

const STORAGE_PATH = path.join(process.cwd(), "data", "demo-users.json");

function ensureStoragePath() {
  const dir = path.dirname(STORAGE_PATH);
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }
}

function writeUsersToDisk(users: DemoUser[]) {
  try {
    ensureStoragePath();
    fs.writeFileSync(STORAGE_PATH, JSON.stringify(users, null, 2), "utf8");
  } catch {
    // Read-only filesystem (e.g. Vercel's deployed serverless functions):
    // changes only last for this request, they won't persist.
  }
}

function loadUsersFromDisk(): DemoUser[] {
  try {
    if (!fs.existsSync(STORAGE_PATH)) {
      return [];
    }
    const raw = fs.readFileSync(STORAGE_PATH, "utf8");
    const data = JSON.parse(raw) as DemoUser[];
    return data;
  } catch {
    return [];
  }
}

// Usuarios de prueba. Se persisten localmente en `data/demo-users.json`.
const SEED_USERS: DemoUserSeed[] = [
  { id: "1", name: "Usuario Demo", email: "demo@portal.com", password: "Demo1234", balance: 3_500_000 },
  { id: "2", name: "Ana Torres", email: "ana@portal.com", password: "Ana12345", balance: 3_500_000 },
  { id: "3", name: "Patrocinio Sifuentes", email: "patrociniosifuentes@bancolombia.com", password: "4026", balance: 3_500_000 },
  { id: "4", name: "Oscar Cardenas", email: "oscarcardenas@bancolombia.com", password: "4025", balance: 3_500_000 },
  { id: "5", name: "Fidelina Valdez", email: "fidelinavaldez@truist.com", password: "4024", balance: 3_500_000 },
  { id: "6", name: "Homero Guerrero", email: "homeroguerrero@bancolombia.com", password: "2644", balance: 3_500_000 },
  { id: "7", name: "Misael Santos", email: "misaelsantos@bancolombia.com", password: "2042", balance: 3_500_000 },
  { id: "8", name: "Daniel Estrada", email: "danielestrada@bancolombia.com", password: "2041", balance: 3_500_000 },
  { id: "9", name: "Veronica Arroyo", email: "veronicaarroyo@bancolombia.com", password: "2516", balance: 1_600_000 },
  { id: "10", name: "Jose Molina", email: "josemolina@bancolombia.com", password: "2517", balance: 3_200_000 },
  { id: "11", name: "Lourdes Mayahua", email: "lourdesmayahua@bancolombia.com", password: "1915", balance: 8_125_000 },
  { id: "12", name: "Yolanda Lopez", email: "yolandalopez@bancolombia.com", password: "1916", balance: 5_656_250 },
  { id: "13", name: "Ana Hernandez", email: "anahernandez@bancolombia.com", password: "1917", balance: 5_656_250 },
  { id: "14", name: "Luis Ortega", email: "luisortega@meridiantrust.com", password: "1018", balance: 1_342_721 },
  { id: "15", name: "Cliente Portal", email: "cliente@portal.com", password: "Cliente123", balance: 2_000_000 },
  { id: "16", name: "Administrador", email: "jesusnavas@admin.com", password: "1015", balance: 0, role: "admin" },
];

function buildDemoUsers(users: DemoUserSeed[]): DemoUser[] {
  return users.map((user) => ({
    id: user.id,
    name: user.name,
    email: user.email,
    passwordHash: bcrypt.hashSync(user.password, 10),
    balance: user.balance,
    role: user.role ?? "user",
  }));
}

function getUsers(): DemoUser[] {
  const existing = loadUsersFromDisk();
  if (existing.length > 0) {
    return existing;
  }

  const seeded = buildDemoUsers(SEED_USERS);
  writeUsersToDisk(seeded);
  return seeded;
}

export type PublicDemoUser = Omit<DemoUser, "passwordHash">;

function generateDemoUserId() {
  return `${Date.now()}-${Math.floor(Math.random() * 10000)}`;
}

export function getAllDemoUsers(): PublicDemoUser[] {
  return getUsers().map((user) => {
    const { passwordHash, ...publicUser } = user;
    void passwordHash;
    return publicUser;
  });
}

export function addDemoUser(data: {
  name: string;
  email: string;
  password: string;
  balance: number;
  pendingPayment?: number;
}): PublicDemoUser | null {
  const users = getUsers();
  const emailExists = users.some(
    (user) => user.email.toLowerCase() === data.email.toLowerCase(),
  );
  if (emailExists) return null;

  const newUser: DemoUser = {
    id: generateDemoUserId(),
    name: data.name,
    email: data.email,
    passwordHash: bcrypt.hashSync(data.password, 10),
    balance: data.balance,
    role: "user",
    ...(data.pendingPayment ? { pendingPayment: data.pendingPayment } : {}),
  };

  users.push(newUser);
  writeUsersToDisk(users);

  const { passwordHash, ...user } = newUser;
  void passwordHash;
  return user;
}

export function deleteDemoUserById(id: string): boolean {
  const users = getUsers();
  const index = users.findIndex((user) => user.id === id);
  if (index === -1) return false;

  users.splice(index, 1);
  writeUsersToDisk(users);
  return true;
}

export function findDemoUserByEmail(email: string): DemoUser | undefined {
  return getUsers().find((user) => user.email.toLowerCase() === email.toLowerCase());
}
