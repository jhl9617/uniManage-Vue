import '@/assets/css/common.css'

import { createApp } from 'vue'
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import App from './App.vue'
import router from './router'
import axios from 'axios'
import VueCookies from "vue-cookies";
import Vue from "@bundled-es-modules/axios/axios";

const app = createApp(App)

app.config.globalProperties.$axios = axios;
app.config.globalProperties.$serverUrl = 'http://localhost:9090';
app.use(router).mount('#app')

Vue.use(VueCookies);

Vue.$cookies.config("100"); // 100초(?)간 쿠키 보관