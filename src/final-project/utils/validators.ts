export function isValidTitle(title: string): boolean {
  return title.trim().length >= 3 && title.trim().length <= 100;
}

export function isValidDescription(description: string): boolean {
  return description.trim().length >= 0 && description.trim().length <= 500;
}

export function isNonEmptyString(value: string): boolean {
  return value.trim().length > 0;
}
