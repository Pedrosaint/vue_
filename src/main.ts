import { createApp } from 'vue'
import { VueQueryPlugin } from '@tanstack/vue-query'
import './style.css'
import App from './App.vue'
import router from './app/router'
import pinia from './app/store'

const app = createApp(App)

app.use(router)
app.use(pinia)
app.use(VueQueryPlugin)

app.mount('#app')
