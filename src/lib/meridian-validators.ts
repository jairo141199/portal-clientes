const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export function validateEmail(value: string): string | undefined {
  if (!value.trim()) return "Please enter your email address.";
  if (!EMAIL_REGEX.test(value)) return "Please enter a valid email address.";
  return undefined;
}

export function validatePassword(value: string): string | undefined {
  if (!value) return "Please enter your password.";
  if (value.length < 4) return "Must be at least 4 characters.";
  return undefined;
}
