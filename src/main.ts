import { createApp } from 'vue'
import './styles/index.scss'
import App from './App.vue'
import router from './router'
import { createPinia } from 'pinia'
import { lazyPlugin } from './directives'

createApp(App).use(router).use(createPinia()).use(lazyPlugin).mount('#app')
