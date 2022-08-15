import { createApp } from 'vue'
import App from './App.vue'

import './assets/css/global.css'
import './assets/fonts/iconfont.css'

import ElementUI from 'element-plus'
import 'element-plus/dist/index.css'
import locale from 'element-plus/lib/locale/lang/zh-cn'
import * as ElementPlusIconsVue from '@element-plus/icons-vue'

import router from './router'
import axios from 'axios'

const app = createApp(App)
axios.defaults.baseURL = 'http://127.0.0.1:8888/api/private/v1/'
axios.interceptors.request.use(config => {
  config.headers.Authorization = window.sessionStorage.getItem('token')
  return config
})
app.config.globalProperties.$http = axios

for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
  app.component(key, component)
}

app.use(ElementUI,{locale})
app.use(router)

app.mount('#app')
