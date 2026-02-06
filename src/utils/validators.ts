export function isValidEmail(email: string): boolean {
  return email.includes("@") && email.includes(".");
}

export function isValidUsername(username: string): boolean {
  return username.length >= 3 && username.length <= 20;
}