import AdminNoticeList from '@/views/admin/notice/NoticeList.vue'
import AdminNoticeDetailView from '@/views/admin/notice/NoticeDetailView.vue'
import AdminNoticewrite from '@/views/admin/notice/NoticeWrite.vue'
import AdminManageStudent from '@/views/admin/manage/student/StudentList.vue'
import AdminMain from "@/views/admin/AdminMain.vue";
import AdminMyPage from "@/views/admin/AdminMyPage.vue";

import AdminManageScholarship from "@/views/admin/manage/scholarship/ScholarshipList.vue";
import AdminWriteScholarship from "@/views/admin/manage/scholarship/ScholarshipWrite.vue";
import AdminCheckScholarship from "@/views/admin/manage/scholarship/ScholarshipCheck.vue";
import AdminManageProfessor from "@/views/admin/manage/professor/ProfessorList.vue";
import AdminWriteProfessor from "@/views/admin/manage/professor/ProfessorWrite.vue";
import AdminManageClassroom from "@/views/admin/manage/classroom/ClassroomList.vue";
import AdminAddClassroom from "@/views/admin/manage/classroom/ClassroomWrite.vue";
import AdminDetailClassroom from "@/views/admin/manage/classroom/ClassroomDetail.vue";
import AdminManageAppliedLecture from "@/views/admin/manage/lecture/AppliedLectureList.vue";
import AdminDetailAppliedLecture from "@/views/admin/manage/lecture/AppliedLectureDetail.vue";
import AdminManageLecture from "@/views/admin/manage/lecture/LectureList.vue";
import AdminDetailLecture from "@/views/admin/manage/lecture/LectureDetail.vue";
import AdminWriteStudent from '@/views/admin/manage/student/StudentWrite.vue'
import AdminDetailStudent from "@/views/admin/manage/student/StudentDetail.vue";
import AdminScoreDetail from "@/views/admin/manage/student/ScoreDetail.vue";
import AdminScholarshipDetail from "@/views/admin/manage/student/ScholarshipDetail.vue";
import AdminDetailProfessor from "@/views/admin/manage/professor/ProfessorDetail.vue";
import AdminScheduleList from "@/views/admin/notice/ScheduleList.vue";
import AdminScheduleWrite from "@/views/admin/notice/ScheduleWrite.vue";
import AdminChatbot from "@/views/admin/common/ChatbotPage.vue";



const routesAdmin = [
  {
    path: '/admin',
    name: 'AdminMain',
    component: AdminMain
  },
  {
    path: '/admin/mypage',
    name: 'AdminMyPage',
    component: AdminMyPage
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
    path: '/admin/manage/professor/write',
    name: 'AdminWriteProfessor',
    component: AdminWriteProfessor
  },
  {
    path: '/admin/manage/professor/detail',
    name: 'AdminDetailProfessor',
    component: AdminDetailProfessor
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
  {
    path: '/admin/manage/student/write',
    name: 'AdminWriteStudent',
    component: AdminWriteStudent
  },
  {
    path: '/admin/manage/student/detail',
    name: 'AdminDetailStudent',
    component: AdminDetailStudent
  },
  {
    path: '/admin/manage/student/score',
    name: 'AdminScoreDetail',
    component: AdminScoreDetail
  },
  {
    path: '/admin/manage/student/scholarship',
    name: 'AdminScholarshipDetail',
    component: AdminScholarshipDetail
  },
  {
    path: '/chatbot',
    name: 'AdminChatbot',
    component: AdminChatbot
  },
  {
    path: '/admin/schedule',
    name: 'AdminScheduleList',
    component: AdminScheduleList
  },
  {
    path: '/admin/schedule/write',
    name: 'AdminScheduleWrite',
    component: AdminScheduleWrite
  },

]

export default routesAdmin
