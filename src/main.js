import { createApp } from 'vue'
import App from './App.vue'

import router from './router'
import './assets/css/global.css'
import ElementUI from 'element-plus'
import 'element-plus/dist/index.css'
import './assets/fonts/iconfont.css'
import axios from 'axios'

const app = createApp(App)
axios.defaults.baseURL = 'http://127.0.0.1:8888/api/private/v1/'
app.config.globalProperties.$http = axios

app.use(ElementUI)
app.use(router)

app.mount('#app')
