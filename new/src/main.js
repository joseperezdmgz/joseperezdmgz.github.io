import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import CookieConsentVue from '@/plugins/CookieConsentVue';


const app = createApp(App)

app.use(router)
app.use(CookieConsentVue)

app.mount('#app')