import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

// Importamos Bulma
// import './../node_modules/bulma/css/bulma.css'
import './../css/mystyles.css'

// Este es el CSS que viene por defecto al crear el proyecto.
// import './assets/main.css'

const app = createApp(App)

app.use(createPinia())
app.use(router)

app.mount('#app')
