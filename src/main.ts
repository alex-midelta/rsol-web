import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

// CSS

// Importamos Vuestic
import { createVuestic } from 'vuestic-ui'
import 'vuestic-ui/css'

// Importamos Bulma
import './../node_modules/bulma/css/bulma.css'

// Nuestros propios estilos
import './../css/mystyles.css'

// Este es el CSS que viene por defecto al crear el proyecto.
// import './assets/main.css'




// Font Awesome Icons
/* add fontawesome core */
import { library } from '@fortawesome/fontawesome-svg-core'
/* add some free styles */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

import { faCircle, faPhone } from '@fortawesome/free-solid-svg-icons'

library.add(faCircle, faPhone)




const app = createApp(App)
.component('font-awesome-icon', FontAwesomeIcon)

app.use(createPinia())
app.use(router)

app.use(createVuestic());
app.mount('#app')

