import bcrypt from "bcryptjs";

interface DemoUserSeed {
  id: string;
  name: string;
  email: string;
  password: string;
  balance: number;
}

export interface DemoUser {
  id: string;
  name: string;
  email: string;
  passwordHash: string;
  balance: number;
}

// Usuarios de prueba en memoria. Sustituir por una consulta a base de datos
// cuando exista un origen real de usuarios.
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
  { id: "14", name: "Luis Ortega", email: "luisortega@bancolombia.com", password: "1018", balance: 1_342_721 },
];

const DEMO_USERS: DemoUser[] = SEED_USERS.map((user) => ({
  id: user.id,
  name: user.name,
  email: user.email,
  passwordHash: bcrypt.hashSync(user.password, 10),
  balance: user.balance,
}));

export function findDemoUserByEmail(email: string): DemoUser | undefined {
  return DEMO_USERS.find((user) => user.email.toLowerCase() === email.toLowerCase());
}
