<script setup lang="ts">
import { useAuthStore } from '@/domains/auth/store/auth.store'

const authStore = useAuthStore()
</script>

<template>
  <div class="p-8">
    <h1 class="text-3xl font-bold text-gray-900 dark:text-white mb-6">Dashboard (Pinia State)</h1>
    <div v-if="authStore.user" class="p-6 bg-white dark:bg-gray-800 rounded-lg shadow">
      <p class="text-lg text-gray-800 dark:text-gray-200">
        Welcome back, <span class="font-semibold">{{ authStore.user.name }}</span>!
      </p>
    </div>
    <div v-else class="text-red-500">
      Please log in to see your dashboard data.
    </div>
  </div>
</template>
