import { createApp } from 'vue'
import './styles/index.scss'
import App from './App.vue'
import router from './router'
import { createPinia } from 'pinia'
import { lazyPlugin } from './directives'

import piniaPluginPersistedstate from 'pinia-plugin-persistedstate'
const pinia = createPinia()
pinia.use(piniaPluginPersistedstate)

createApp(App).use(router).use(pinia).use(lazyPlugin).mount('#app')
