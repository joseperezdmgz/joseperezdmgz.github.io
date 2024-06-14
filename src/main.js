import './assets/main.css'
import '@material-design-icons/font';

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'



const app = createApp(App)

app.use(router)

app.mount('#app')