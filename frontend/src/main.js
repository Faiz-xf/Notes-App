import { createApp } from 'vue'
import { createPinia } from 'pinia'
import router from './router'
import App from './App.vue'
import vuetify from './vuetify'

const pinia = createPinia()

createApp(App)
    .use(vuetify)
    .use(pinia)
    .use(router)
    .mount('#app')
