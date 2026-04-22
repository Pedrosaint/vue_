<script setup lang="ts">
</script>

<template>
  <header class="w-full border-b border-gray-200 bg-white">
    <div class="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
      
      <!-- Logo -->
      <div class="flex items-center">
        <img src="" alt="logo" class="h-10 w-auto" />
      </div>

      <!-- Nav -->
      <nav class="hidden md:flex">
        <ul class="flex items-center gap-6">
          <li>
            <a href="#" class="text-gray-600 hover:text-gray-900 transition font-medium">
              Home
            </a>
          </li>
          <li>
            <a href="#" class="text-gray-600 hover:text-gray-900 transition font-medium">
              About
            </a>
          </li>
          <li>
            <a href="#" class="text-gray-600 hover:text-gray-900 transition font-medium">
              Contact
            </a>
          </li>
        </ul>
      </nav>

      <!-- Button -->
      <button
        @click="$router.push('/login')"
        class="bg-gray-900 text-white px-4 cursor-pointer py-2 rounded-md text-sm font-medium hover:bg-gray-800 transition"
      >
        Login
      </button>

    </div>
  </header>
</template>