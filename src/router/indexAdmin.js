import AdminNoticeList from '@/views/admin/notice/NoticeList.vue'
import AdminNoticeDetailView from '@/views/admin/notice/NoticeDetailView.vue'
import AdminNoticewrite from '@/views/admin/notice/NoticeWrite.vue'
import AdminManageStudent from '@/views/admin/manage/student/StudentList.vue'
import AdminMain from "@/views/admin/AdminMain.vue";

import AdminManageScholarship from "@/views/admin/manage/scholarship/ScholarshipList.vue";
import AdminWriteScholarship from "@/views/admin/manage/scholarship/ScholarshipWrite.vue";
import AdminCheckScholarship from "@/views/admin/manage/scholarship/ScholarshipCheck.vue";
import AdminManageProfessor from "@/views/admin/manage/professor/ManageProfessor.vue";
import AdminAddProfessor from "@/views/admin/manage/professor/AddProfessor.vue";
import AdminModifyProfessor from "@/views/admin/manage/professor/ModifyProfessor.vue";
import AdminManageClassroom from "@/views/admin/manage/classroom/ClassroomList.vue";
import AdminAddClassroom from "@/views/admin/manage/classroom/ClassroomWrite.vue";
import AdminDetailClassroom from "@/views/admin/manage/classroom/ClassroomDetail.vue";
import AdminManageAppliedLecture from "@/views/admin/manage/lecture/AppliedLectureList.vue";
import AdminDetailAppliedLecture from "@/views/admin/manage/lecture/AppliedLectureDetail.vue";
import AdminManageLecture from "@/views/admin/manage/lecture/LectureList.vue";
import AdminDetailLecture from "@/views/admin/manage/lecture/LectureDetail.vue";
import AdminAddStudent from '@/views/admin/manage/student/StudentWrite.vue'
import AdminModifyStudent from '@/views/admin/manage/student/ModifyStudent.vue'
import AdminDetailStudent from "@/views/admin/manage/student/StudentDetail.vue";
import AdminDetailGrade from "@/views/admin/manage/student/DetailGrade.vue";
import AdminDetailScholarship from "@/views/admin/manage/student/DetailScholarship.vue";
import AdminDetailProfessor from "@/views/admin/manage/professor/DetailProfessor.vue";
import AdminCloseLecture from "@/views/admin/manage/lecture/ManageCloseLecture.vue";

import AdminChatbot from "@/views/admin/common/ChatbotPage.vue";



const routesAdmin = [
  {
    path: '/admin',
    name: 'AdminMain',
    component: AdminMain
  },
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
    path: '/admin/manage/student',
    name: 'AdminManageStudent',
    component: AdminManageStudent
  },

  {
    path: '/admin/manage/scholarship',
    name: 'AdminManageScholarship',
    component: AdminManageScholarship
  },
  {
    path: '/admin/manage/scholarship/write',
    name: 'AdminWriteScholarship',
    component: AdminWriteScholarship
  },
  {
    path: '/admin/manage/scholarship/check',
    name: 'AdminCheckScholarship',
    component: AdminCheckScholarship
  },

  {
    path: '/admin/manage/professor',
    name: 'AdminManageProfessor',
    component: AdminManageProfessor
  },
  {
    path: '/admin/manage/addprofessor',
    name: 'AdminAddProfessor',
    component: AdminAddProfessor
  },
  {
    path: '/admin/manage/modifyprofessor',
    name: 'AdminModifyProfessor',
    component: AdminModifyProfessor
  },
  {
    path: '/admin/manage/classroom',
    name: 'AdminManageClassroom',
    component: AdminManageClassroom
  },
  {
    path: '/admin/manage/classroom/write',
    name: 'AdminAddClassroom',
    component: AdminAddClassroom
  },
  {
    path: '/admin/manage/classroom/detail',
    name: 'AdminDetailClassroom',
    component: AdminDetailClassroom
  },
  {
    path: '/admin/manage/appliedlecture',
    name: 'AdminManageAppliedLecture',
    component: AdminManageAppliedLecture
  },
  {
    path: '/admin/manage/appliedlecture/detail',
    name: 'AdminDetailAppliedLecture',
    component: AdminDetailAppliedLecture
  },
  {
    path: '/admin/manage/lecture',
    name: 'AdminManageLecture',
    component: AdminManageLecture
  },
  {
    path: '/admin/manage/lecture/detail',
    name: 'AdminDetailLecture',
    component: AdminDetailLecture
  },
  // {
  //   path: '/admin/manage/lecture/write',
  //   name: 'AdminWriteLecture',
  //   component: AdminWriteLecture
  // },
  {
    path: '/admin/manage/addstudent',
    name: 'AdminAddStudent',
    component: AdminAddStudent
  },
  {
    path: '/admin/manage/modifystudent',
    name: 'AdminModifyStudent',
    component: AdminModifyStudent
  },
  {
    path: '/admin/manage/detailstudent',
    name: 'AdminDetailStudent',
    component: AdminDetailStudent
  },
  {
    path: '/admin/manage/detailgrade',
    name: 'AdminDetailGrade',
    component: AdminDetailGrade
  },
  {
    path: '/admin/manage/detailscholarship',
    name: 'AdminDetailScholarship',
    component: AdminDetailScholarship
  },
  {
    path: '/admin/manage/detailprofessor',
    name: 'AdminDetailProfessor',
    component: AdminDetailProfessor
  },
  {
    path: '/admin/manage/closelecture',
    name: 'AdminCloseLecture',
    component: AdminCloseLecture
  },
  {
    path: '/chatbot',
    name: 'AdminChatbot',
    component: AdminChatbot
  },

]

export default routesAdmin
