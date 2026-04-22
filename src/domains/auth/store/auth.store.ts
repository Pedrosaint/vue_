import { defineStore } from 'pinia'
import type { User } from '../models/user.model'

export const useAuthStore = defineStore('auth', {
  state: () => ({
    user: null as User | null,
    token: localStorage.getItem('token'),
    isAuthenticated: false
  }),
  actions: {
    setCredentials(user: User, token: string) {
      this.user = user
      this.token = token
      this.isAuthenticated = true
      localStorage.setItem('token', token)
    },
    logout() {
      this.user = null
      this.token = null
      this.isAuthenticated = false
      localStorage.removeItem('token')
    }
  }
})
