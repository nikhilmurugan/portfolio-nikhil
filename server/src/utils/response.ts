export function ok<T>(data: T, message?: string) {
  return {
    success: true as const,
    data,
    message,
  }
}
