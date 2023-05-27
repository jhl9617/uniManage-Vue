import { createRouter, createWebHistory } from 'vue-router'

import routesAdmin from './indexAdmin.js'
import routesProf from './indexProf.js'
import routesStudent from './indexStudent.js'
// import PageHome from "@/views/home/PageHome.vue";
import Login from "@/views/home/MemberLoginPage.vue";
import FindID from "@/views/home/MemberFindID.vue";
import FindPassword from "@/views/home/MemberFindPassword.vue";
import ResetPassword from "@/views/home/MemberResetPassword.vue";



const routes = [
  {
    path: '/',
    name: 'MemberLogin',
    component: Login
  },
  {
    path: '/findid',
    name: 'MemberFindID',
    component: FindID
  },
  {
    path: '/findpassword',
    name: 'MemberFindPassword',
    component: FindPassword
  },
  {
    path: '/resetpassword',
    name: 'MemberResetPassword',
    component: ResetPassword
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '@/views/student/Eclass/common/PageAbout.vue')
  },
]

const allRoutes = [...routes, ...routesAdmin, ...routesProf, ...routesStudent]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes: allRoutes
})



export default router