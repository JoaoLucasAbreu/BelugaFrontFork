import { api } from '@/http/api-client'

export async function getAllAccessKeysByUser(userId) {
  const response = await api.get(`api/access_key/user/${userId}`)

  const data = await response.json()

  return data.result
}

export async function addAccessKey(userId) {
  const response = await api.post(`api/access_key`, {
    headers: {
      'Content-Type': 'application/json',
    },
    json: {
      userId,
    },
  })

  return response.json()
}
