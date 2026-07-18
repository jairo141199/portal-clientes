const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export function validateEmail(value: string): string | undefined {
  if (!value.trim()) return "Ingresa tu correo electrónico.";
  if (!EMAIL_REGEX.test(value)) return "Ingresa un correo electrónico válido.";
  return undefined;
}

export function validatePassword(value: string): string | undefined {
  if (!value) return "Ingresa tu contraseña.";
  if (value.length < 4) return "Debe tener al menos 4 caracteres.";
  return undefined;
}
