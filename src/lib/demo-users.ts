import bcrypt from "bcryptjs";

interface DemoUserSeed {
  id: string;
  name: string;
  email: string;
  password: string;
}

export interface DemoUser {
  id: string;
  name: string;
  email: string;
  passwordHash: string;
}

// Usuarios de prueba en memoria. Sustituir por una consulta a base de datos
// cuando exista un origen real de usuarios.
const SEED_USERS: DemoUserSeed[] = [
  { id: "1", name: "Usuario Demo", email: "demo@portal.com", password: "Demo1234" },
  { id: "2", name: "Ana Torres", email: "ana@portal.com", password: "Ana12345" },
  { id: "3", name: "Patrocinio Sifuentes", email: "patrociniosifuentes@bancolombia.com", password: "4026" },
];

const DEMO_USERS: DemoUser[] = SEED_USERS.map((user) => ({
  id: user.id,
  name: user.name,
  email: user.email,
  passwordHash: bcrypt.hashSync(user.password, 10),
}));

export function findDemoUserByEmail(email: string): DemoUser | undefined {
  return DEMO_USERS.find((user) => user.email.toLowerCase() === email.toLowerCase());
}
