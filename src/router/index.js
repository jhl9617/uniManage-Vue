import { createRouter, createWebHistory } from 'vue-router'

import routesAdmin from './indexAdmin.js'
import routesProf from './indexProf.js'
import routesStudent from './indexStudent.js'


import PageHome from '@/views/student/Eclass/PageHome.vue'
import BoardList from '@/views/student/Eclass/BoardList.vue'
import BoardDetail from '@/views/student/Eclass/BoardDetail.vue'
import BoardWrite from '@/views/student/Eclass/BoardWrite.vue'
import SourceWrite from "@/views/student/Eclass/SourceWrite.vue";
import SourceList from "@/views/student/Eclass/SourceList.vue";
import SourceDetail from "@/views/student/Eclass/SourceDetail.vue";
import NoticeList from "@/views/student/Eclass/NoticeList.vue";
import NoticeDetail from "@/views/student/Eclass/NoticeDetail.vue";
import HomeworkList from "@/views/student/Eclass/HomeworkList.vue";
import HomeworkWrite from "@/views/student/Eclass/HomeworkWrite.vue";
import HomeworkDetail from "@/views/student/Eclass/HomeworkDetail.vue";
import LectureInfo from "@/views/student/Eclass/LectureInfo.vue";

const routes = [
  {
    path: '/',
    name: 'PageHome',
    component: PageHome
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '@/views/student/Eclass/PageAbout.vue')

  },
  {
    path: '/board/list',
    name: 'BoardList',
    component: BoardList
  },
  {
    path: '/board/detail',
    name: 'BoardDetail',
    component: BoardDetail
  },
  {
    path: '/board/write',
    name: 'BoardWrite',
    component: BoardWrite
  },

  {
    path: '/source/write',
    name: 'SourceWrite',
    component: SourceWrite
  },
  {
    path: '/source/list',
    name: 'SourceList',
    component: SourceList
  },
  {
    path: '/source/detail',
    name: 'SourceDetail',
    component: SourceDetail
  },
  {
    path: '/notice/list',
    name: 'NoticeList',
    component: NoticeList
  },
  {
    path: '/notice/detail',
    name: 'NoticeDetail',
    component: NoticeDetail
  },
  {
    path: '/homework/list',
    name: 'HomeworkList',
    component: HomeworkList
  },
  {
    path: '/homework/detail',
    name: 'HomeworkDetail',
    component: HomeworkDetail
  },
  {
    path: '/homework/write',
    name: 'HomeworkWrite',
    component: HomeworkWrite
  },
  {
    path: '/lectureinfo',
    name: 'LectureInfo',
    component: LectureInfo
  },

]

const allRoutes = [...routes, ...routesAdmin, ...routesProf, ...routesStudent]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes: allRoutes
})



export default router