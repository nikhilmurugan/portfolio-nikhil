const API_BASE = import.meta.env.VITE_API_URL ?? '/api'

async function request<T>(path: string, init?: RequestInit): Promise<T> {
  const response = await fetch(`${API_BASE}${path}`, {
    headers: {
      'Content-Type': 'application/json',
      ...(init?.headers ?? {}),
    },
    ...init,
  })

  if (!response.ok) {
    throw new Error(`Request failed: ${response.status}`)
  }

  return response.json() as Promise<T>
}

export const api = {
  health: () => request('/health'),
  projects: () => request('/projects'),
  resume: () => request('/resume'),
  contact: (payload: Record<string, string>) =>
    request('/contact', {
      method: 'POST',
      body: JSON.stringify(payload),
    }),
}
