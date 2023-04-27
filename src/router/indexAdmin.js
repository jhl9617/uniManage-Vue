import AdminNoticeList from '@/views/admin/notice/NoticeList.vue'
import AdminNoticeDetailView from '@/views/admin/notice/NoticeDetailView.vue'
import AdminNoticewrite from '@/views/admin/notice/NoticeWrite.vue'
import AdminManageStudent from '@/views/admin/manage/ManageStudent.vue'
import AdminMain from "@/views/admin/AdminMain.vue";
import ManageScholarship from "@/views/admin/manage/ManageScholarship.vue";
import AddScholarship from "@/views/admin/manage/AddScholarship.vue";
import ModifyScholarship from "@/views/admin/manage/ModifyScholarship.vue";
import ManageProfessor from "@/views/admin/manage/ManageProfessor.vue";
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
    path: '/admin',
    name: 'AdminMain',
    component: AdminMain
  },
  {
    path: '/admin/manage/scholarship',
    name: 'ManageScholarship',
    component: ManageScholarship
  },
  {
    path: '/admin/manage/addscholarship',
    name: 'AddScholarship',
    component: AddScholarship
  },
  {
    path: '/admin/manage/modifyscholarship',
    name: 'ModifyScholarship',
    component: ModifyScholarship
  },
  {
    path: '/admin/manage/professor',
    name: 'ManageProfessor',
    component: ManageProfessor
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
