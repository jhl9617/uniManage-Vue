import AdminNoticeList from '@/views/admin/notice/NoticeList.vue'
import AdminNoticeDetailView from '@/views/admin/notice/NoticeDetailView.vue'
import AdminNoticewrite from '@/views/admin/notice/NoticeWrite.vue'
import AdminManageStudent from '@/views/admin/manage/ManageStudent.vue'
import AdminAddStudent from '@/views/admin/manage/AddStudent.vue'
import Adminmodifystudent from '@/views/admin/manage/ModifyStudent.vue'

const routesAdmin = [
  {
    path: '/admin/notice/list',
    name: 'AdminNoticeList',
    component: AdminNoticeList
  },
  {
    path: '/admin/notice/view',
    name: 'AdminNoticeDetailView',
    component: AdminNoticeDetailView
  },
  {
    path: '/admin/notice/write',
    name: 'AdminNoticewrite',
    component: AdminNoticewrite
  },
  {
    path: '/admin/notice/write',
    name: 'AdminNoticewrite',
    component: AdminNoticewrite
  },
  {
    path: '/admin/mange/student',
    name: 'AdminManageStudent',
    component: AdminManageStudent
  },
  {
    path: '/admin/mange/addstudent',
    name: 'AdminAddStudent',
    component: AdminAddStudent
  },
  {
    path: '/admin/mange/modifystudent',
    name: 'Adminmodifystudent',
    component: Adminmodifystudent
  },
]

export default routesAdmin
