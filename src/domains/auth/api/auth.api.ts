import { useMutation, useQuery } from '@tanstack/vue-query'
import api from '@/shared/api/axios'
import type { AuthResponse } from '../models/user.model'

// Pure Axios calls
const loginRequest = async (credentials: any): Promise<AuthResponse> => {
  const { data } = await api.post<AuthResponse>('/auth/login', credentials)
  return data
}

const getMeRequest = async (): Promise<AuthResponse> => {
  const { data } = await api.get<AuthResponse>('/auth/me')
  return data
}

// Vue Query hooks
export const useLoginMutation = () => {
  return useMutation({
    mutationFn: loginRequest,
  })
}

export const useGetMeQuery = () => {
  return useQuery({
    queryKey: ['user', 'me'],
    queryFn: getMeRequest,
  })
}
