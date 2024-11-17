import { api } from '@/http/api-client'

export async function getAllUsers() {
  const response = await api.get('api/user')

  return response.json()
}
