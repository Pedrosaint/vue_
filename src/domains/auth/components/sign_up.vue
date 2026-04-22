<script setup lang="ts">
import { ref } from 'vue'
import { Mail, Lock, User, Eye, EyeOff } from 'lucide-vue-next'

// Local state for the register form
const name = ref('')
const email = ref('')
const password = ref('')
const showPassword = ref(false)
const isLoading = ref(false)

const handleRegister = () => {
  isLoading.value = true
  console.log('Registering user:', { name: name.value, email: email.value })
  // Simulate delay
  setTimeout(() => {
    isLoading.value = false
    alert('Registration successful! Please sign in.')
  }, 1500)
}
</script>

<template>
  <form @submit.prevent="handleRegister" class="space-y-6">
    <!-- Full Name Field -->
    <div class="space-y-2">
      <label class="text-sm font-semibold text-gray-700 flex items-center">
        Full Name <span class="text-blue-500 ml-1">*</span>
      </label>
      <div class="relative group">
        <User class="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400 group-focus-within:text-[#2D6A7E] transition-colors" />
        <input 
          v-model="name"
          type="text" 
          placeholder="Enter your full name"
          required
          class="w-full pl-10 pr-4 py-3 bg-white border border-gray-200 rounded-xl outline-none focus:border-[#2D6A7E] focus:ring-4 focus:ring-[#2D6A7E]/5 transition-all text-gray-900"
        />
      </div>
    </div>

    <!-- Email Field -->
    <div class="space-y-2">
      <label class="text-sm font-semibold text-gray-700 flex items-center">
        Email Address <span class="text-blue-500 ml-1">*</span>
      </label>
      <div class="relative group">
        <Mail class="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400 group-focus-within:text-[#2D6A7E] transition-colors" />
        <input 
          v-model="email"
          type="email" 
          placeholder="Enter your email address"
          required
          class="w-full pl-10 pr-4 py-3 bg-white border border-gray-200 rounded-xl outline-none focus:border-[#2D6A7E] focus:ring-4 focus:ring-[#2D6A7E]/5 transition-all text-gray-900"
        />
      </div>
    </div>

    <!-- Password Field -->
    <div class="space-y-2">
      <label class="text-sm font-semibold text-gray-700 flex items-center">
        Create Password <span class="text-blue-500 ml-1">*</span>
      </label>
      <div class="relative group">
        <Lock class="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400 group-focus-within:text-[#2D6A7E] transition-colors" />
        <input 
          v-model="password"
          :type="showPassword ? 'text' : 'password'" 
          placeholder="Create a strong password"
          required
          class="w-full pl-10 pr-12 py-3 bg-white border border-gray-200 rounded-xl outline-none focus:border-[#2D6A7E] focus:ring-4 focus:ring-[#2D6A7E]/5 transition-all text-gray-900"
        />
        <button 
          type="button"
          @click="showPassword = !showPassword"
          class="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-[#2D6A7E]"
        >
          <Eye v-if="!showPassword" class="w-5 h-5" />
          <EyeOff v-else class="w-5 h-5" />
        </button>
      </div>
    </div>

    <!-- Sign Up Button -->
    <button 
      type="submit"
      :disabled="isLoading"
      class="w-full py-4 bg-[#2D6A7E] hover:bg-[#235363] text-white font-bold rounded-xl transition-all active:scale-[0.98] disabled:opacity-50"
    >
      {{ isLoading ? 'Creating Account...' : 'Sign Up' }}
    </button>
  </form>
</template>