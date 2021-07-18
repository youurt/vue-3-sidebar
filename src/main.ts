import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import bootstrapVue from 'bootstrap-vue-3-wrappers'
import Sidebar from '@/plugins/Sidebar'

import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap'

createApp(App)
  .use(store)
  .use(bootstrapVue)
  .use(Sidebar)
  .use(router)
  .mount('#app')
