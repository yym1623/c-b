import { createApp } from 'vue'
import App from '@/App.vue'

import { createVuetify } from 'vuetify'
import { createPinia } from 'pinia'


// css
import "@/styles/style.css";
import 'vuetify/styles'
import "@/styles/tailwind.css";

// pinia
const pinia = createPinia()

// router
import router from '@/routers'

// ui frameworks
const vuetify = createVuetify({
  theme: {
    defaultTheme: 'dark'
  }
})

const app = createApp(App);


app.use(router)
app.use(vuetify)
app.use(pinia)
app.mount('#app')
