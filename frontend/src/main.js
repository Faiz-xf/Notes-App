import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { createVuetify } from 'vuetify'
import 'vuetify/styles'
import * as directives from 'vuetify/directives'
import * as components from 'vuetify/components'
import '@mdi/font/css/materialdesignicons.css'
import router from './router'
import App from './App.vue'

const pinia = createPinia()
const vuetify = createVuetify({
    directives,
    components,
    theme:{
        defaultTheme:'dark',
    }
})

createApp(App)
.use(vuetify)
.use(pinia)
.use(router)
.mount('#app')
