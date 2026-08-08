export function validateUsername(value: string): string | undefined {
  if (!value.trim()) return "Ingresa tu usuario.";
  return undefined;
}

export function validatePassword(value: string): string | undefined {
  if (!value) return "Ingresa tu contraseña.";
  if (value.length < 4) return "Debe tener al menos 4 caracteres.";
  return undefined;
}
