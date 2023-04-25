import { createApp } from 'vue'
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import App from './App.vue'
import router from './router'
import axios from 'axios'

const app = createApp(App)

app.config.globalProperties.$axios = axios;
app.config.globalProperties.$serverUrl = 'http://localhost:9090';
app.use(router).mount('#app')