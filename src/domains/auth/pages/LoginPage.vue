<script setup lang="ts">
/**
 * REFACTORED LOGIN PAGE
 * We now delegate the form logic to separate components for Sign In and Sign Up.
 */
import { ref, onMounted, onUnmounted } from 'vue'
import { LayoutGrid } from 'lucide-vue-next'
import hero1 from '@/assets/hero-1.png'
import hero2 from '@/assets/hero-2.png'
import hero3 from '@/assets/hero-3.png'
import hero4 from '@/assets/hero-4.png'

// Import our new specialized components
import SignIn from '../components/sign_in.vue'
import SignUp from '../components/sign_up.vue'
import { Icon } from '@iconify/vue'

// activeTab controls which component is visible
const activeTab = ref<'signin' | 'signup'>('signin')

// Carousel state and logic
const currentSlide = ref(0)
const slides = [
  {
    image: hero1,
    title: 'A Unified Hub for building your dream business',
    description: 'Techprenuere empowers you with a unified financial command center—delivering deep insights and a 360° view of your entire economic world.'
  },
  {
    image: hero2,
    title: 'Insightful Analytics to drive your growth',
    description: 'Track every metric that matters. Our advanced analytics engine provides real-time data to help you make informed strategic decisions.'
  },
  {
    image: hero3,
    title: 'Global Connectivity at your fingertips',
    description: 'Connect with partners and markets worldwide. Our platform breaks down borders, making global business as simple as local trade.'
  },
  {
    image: hero4,
    title: 'Secure & Seamless Financial Ecosystem',
    description: 'Experience peace of mind with enterprise-grade security. Manage payments, assets, and investments in one protected environment.'
  }
]

let timer: any = null

onMounted(() => {
  timer = setInterval(() => {
    currentSlide.value = (currentSlide.value + 1) % slides.length
  }, 5000)
})

onUnmounted(() => {
  if (timer) clearInterval(timer)
})

// Social icons configuration
const socialProviders = [
  { id: 'google', icon: 'logos:google-icon' },
  { id: 'apple', icon: 'logos:apple' },
  { id: 'facebook', icon: 'logos:facebook' },
  { id: 'x', icon: 'ri:twitter-x-fill' }
]

</script>

<template>
  <!-- Main Container: Split into two sides. We use 'h-screen' to take full height -->
  <div class="min-h-screen grid grid-cols-1 md:grid-cols-2 bg-gray-50 font-sans">
    
    <!-- LEFT SIDE: The Auth Container -->
    <div class="flex flex-col p-8 md:p-12 lg:p-20 justify-between bg-white leading-normal">
      
      <!-- Branding Logo -->
      <div class="flex items-center gap-2 text-[#2D6A7E] font-bold text-xl uppercase tracking-wider">
        <LayoutGrid class="w-6 h-6" />
        <span>Tech</span>
      </div>

      <!-- Content Area -->
      <div class="max-w-md w-full mx-auto space-y-8">
        <div class="text-center space-y-2">
          <h1 class="text-3xl font-bold text-gray-900 leading-tight">Welcome to Techprenuer</h1>
          <p class="text-gray-500">Start your experience with Techprenuer by signing in or signing up.</p>
        </div>

        <!-- Toggle Tabs: Sign In / Sign Up -->
        <div class="flex p-1 border border-gray-200 rounded-xl relative overflow-hidden">
          <button 
            @click="activeTab = 'signin'"
            :class="activeTab === 'signin' ? 'bg-[#38839d] text-white' : 'text-gray-500'"
            class="flex-1 py-3 text-sm font-medium rounded-lg transition-all z-10"
          >
            Sign In
          </button>
          <button 
            @click="activeTab = 'signup'"
            :class="activeTab === 'signup' ? 'bg-[#38839d] text-white' : 'text-gray-500'"
            class="flex-1 py-3 text-sm font-medium rounded-lg transition-all z-10"
          >
            Sign Up
          </button>
        </div>

        <!-- Dynamic Form Component: We switch between SignIn and SignUp -->
        <div class="mt-8 transition-all duration-300">
           <SignIn v-if="activeTab === 'signin'" />
           <SignUp v-else />
        </div>

        <!-- Divider with Text -->
        <div class="relative flex items-center py-4">
          <div class="grow border-t border-gray-200"></div>
          <span class="shrink mx-4 text-sm text-gray-400">Or continue with</span>
          <div class="grow border-t border-gray-200"></div>
        </div>

        <!-- Social Icons (Real Brand Icons) -->
        <div class="grid grid-cols-4 gap-4">
          <button 
            v-for="social in socialProviders" 
            :key="social.id" 
            class="flex justify-center py-3 border border-gray-200 rounded hover:bg-gray-50 transition-all hover:scale-105 active:scale-95"
          >
            <Icon :icon="social.icon" class="w-6 h-6" :class="social.id === 'x' ? 'text-black' : ''" />
          </button>
        </div>
      </div>

      <!-- Footer Info -->
      <div class="mt-auto pt-8 text-center md:text-left text-xs text-gray-400">
        <div class="flex flex-wrap justify-center md:justify-start gap-4">
          <span>Copyright : Techprenuer, All Rights Reserved</span>
          <a href="#" class="hover:text-[#2D6A7E]">Term & Condition</a>
          <a href="#" class="hover:text-[#2D6A7E]">Privacy & Policy</a>
        </div>
      </div>
    </div>

    <!-- RIGHT SIDE: The Hero Section with Graphics -->
    <div class="hidden md:flex relative overflow-hidden bg-[#1D353F] p-12 lg:p-20 items-center justify-center">
      <!-- Background Graphic with Transition -->
      <transition-group name="fade">
        <img 
          v-for="(slide, index) in slides" 
          :key="index"
          v-show="currentSlide === index"
          :src="slide.image" 
          alt="Hero Graphics" 
          class="absolute inset-0 w-full h-full object-cover opacity-30 mix-blend-overlay transition-opacity duration-1000" 
        />
      </transition-group>
      
      <!-- Content Overlay -->
      <div class="relative z-10 text-center space-y-8 max-w-lg">
        <!-- Dashboard Icon Card -->
        <div class="inline-flex items-center justify-center w-20 h-20 bg-white/10 backdrop-blur-xl rounded-2xl border border-white/20 shadow-2xl mb-8">
           <LayoutGrid class="w-10 h-10 text-white" />
        </div>
        
        <transition name="slide-up" mode="out-in">
          <div :key="currentSlide" class="space-y-6">
            <h2 class="text-4xl lg:text-5xl font-bold text-white leading-tight">
              {{ slides[currentSlide].title }}
            </h2>
            
            <p class="text-lg text-gray-300 leading-relaxed">
              {{ slides[currentSlide].description }}
            </p>
          </div>
        </transition>

        <!-- Dynamic slider indicator -->
        <div class="flex gap-2 justify-center mt-12">
          <button 
            v-for="(slide, index) in slides" 
            :key="index"
            @click="currentSlide = index"
            class="h-1.5 w-12 rounded-full transition-all duration-300"
            :class="currentSlide === index ? 'bg-white' : 'bg-white/20 hover:bg-white/40'"
          ></button>
        </div>
      </div>
    </div>

  </div>
</template>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 1s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

.slide-up-enter-active,
.slide-up-leave-active {
  transition: all 0.6s ease-out;
}

.slide-up-enter-from {
  opacity: 0;
  transform: translateY(20px);
}

.slide-up-leave-to {
  opacity: 0;
  transform: translateY(-20px);
}
</style>