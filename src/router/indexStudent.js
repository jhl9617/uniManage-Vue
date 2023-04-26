import EclassLectureMain from "@/views/student/Eclass/LectureMain.vue";
import EclassBoardList from '@/views/student/Eclass/BoardList.vue'
import EclassBoardDetail from '@/views/student/Eclass/BoardDetail.vue'
import EclassBoardWrite from '@/views/student/Eclass/BoardWrite.vue'
import EclassSourceList from "@/views/student/Eclass/SourceList.vue";
import EclassSourceDetail from "@/views/student/Eclass/SourceDetail.vue";
import EclassNoticeList from "@/views/student/Eclass/NoticeList.vue";
import EclassNoticeDetail from "@/views/student/Eclass/NoticeDetail.vue";
import EclassHomeworkList from "@/views/student/Eclass/HomeworkList.vue";
import EclassHomeworkWrite from "@/views/student/Eclass/HomeworkWrite.vue";
import EclassHomeworkDetail from "@/views/student/Eclass/HomeworkDetail.vue";
import EclassLectureInfo from "@/views/student/Eclass/LectureInfo.vue";
import EclassMain from "@/views/student/Eclass/EclassMain.vue";

import StudentStatus from "@/views/student/studentInfoSystem/StudentStatus.vue";
import StudentApplyTakeOff from "@/views/student/studentInfoSystem/ApplyTakeOff.vue";
import StudentApplyReturn from "@/views/student/studentInfoSystem/StudentApplyReturn.vue";
import StudentTimelineByDepart from "@/views/student/studentInfoSystem/TimelineByDepart.vue";
import StudentTimetable from "@/views/student/studentInfoSystem/StudentTimetable.vue";
import StudentCheckCourse from "@/views/student/studentInfoSystem/CheckCourse.vue";
import StudentPayReceipt from "@/views/student/studentInfoSystem/PayReceipt.vue";
import StudentPrintReceipt from "@/views/student/studentInfoSystem/PrintReceipt.vue";
import StudentSurveyCourse from "@/views/student/studentInfoSystem/SurveyCourse.vue";
import StudentCheckCredit from "@/views/student/studentInfoSystem/CheckCredit.vue";
import StudentCheckGrade from "@/views/student/studentInfoSystem/StudentCheckGrade.vue";
import StudentCheckScholarship from "@/views/student/studentInfoSystem/StudentCheckScholarship.vue";
import StudentCourseList from "@/views/student/studentInfoSystem/StudentCourseList.vue";
import StudentInfoMain from "@/views/student/studentInfoSystem/StudentInfoMain.vue";
import StudentMain from "@/views/student/StudentMain.vue";


const routesStudent = [

    {
        path: '/about',
        name: 'About',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import(/* webpackChunkName: "about" */ '@/views/student/Eclass/PageAbout.vue')
    },
    {

        path: '/student',
        name: 'StudentMain',
        component: StudentMain
    },
    {
        path: '/eclass',
        name: 'EclassMain',
        component: EclassMain

    },
    {
        path: '/eclass/1',
        name: 'EclassLectureMain',
        component: EclassLectureMain
    },

    {
        path: '/eclass/board/list',
        name: 'EclassBoardList',
        component: EclassBoardList
    },
    {
        path: '/eclass/board/detail',
        name: 'EclassBoardDetail',
        component: EclassBoardDetail
    },
    {
        path: '/eclass/board/write',
        name: 'EclassBoardWrite',
        component: EclassBoardWrite
    },
    {
        path: '/eclass/source/list',
        name: 'EclassSourceList',
        component: EclassSourceList
    },
    {
        path: '/eclass/source/detail',
        name: 'EclassSourceDetail',
        component: EclassSourceDetail
    },
    {
        path: '/eclass/notice/list',
        name: 'EclassNoticeList',
        component: EclassNoticeList
    },
    {
        path: '/eclass/notice/detail',
        name: 'EclassNoticeDetail',
        component: EclassNoticeDetail
    },
    {
        path: '/eclass/homework/list',
        name: 'EclassHomeworkList',
        component: EclassHomeworkList
    },
    {
        path: '/eclass/homework/detail',
        name: 'EclassHomeworkDetail',
        component: EclassHomeworkDetail
    },
    {
        path: '/eclass/homework/write',
        name: 'EclassHomeworkWrite',
        component: EclassHomeworkWrite
    },
    {
        path: '/eclass/lectureinfo',
        name: 'EclassLectureInfo',
        component: EclassLectureInfo

    },
    {
        path: '/student/status',
        name: 'StudentStatus',
        component: StudentStatus
    },
    {
        path: '/student/takeoff',
        name: 'StudentApplyTakeOff',
        component: StudentApplyTakeOff

    },
    {
        path: '/student/return',
        name: 'StudentApplyReturn',
        component: StudentApplyReturn
    },
    {
        path: '/student/timelinebydepart',
        name: 'StudentTimelineByDepart',
        component: StudentTimelineByDepart
    },
    {
        path: '/student/studenttimetable',
        name: 'StudentTimetable',
        component: StudentTimetable
    },
    {
        path: '/student/checkcourse',
        name: 'StudentCheckCourse',
        component: StudentCheckCourse
    },
    {
        path: '/student/payreceipt',
        name: 'StudentPayReceipt',
        component: StudentPayReceipt
    },
    {
        path: '/student/printreceipt',
        name: 'StudentPrintReceipt',
        component: StudentPrintReceipt
    },
    {
        path: '/student/printreceipt',
        name: 'StudentPrintReceipt',
        component: StudentPrintReceipt

    },
    {
        path: '/student/checkcredit',
        name: 'StudentCheckCredit',
        component: StudentCheckCredit
    },
    {
        path: '/student/checkgrade',
        name: 'StudentCheckGrade',
        component: StudentCheckGrade
    },
    {
        path: '/student/surveycourse',
        name: 'StudentSurveyCourse',
        component: StudentSurveyCourse
    },
    {
        path: '/student/checkscholarship',
        name: 'StudentCheckScholarship',
        component: StudentCheckScholarship
    },
    {
        path: '/student/courselist',
        name: 'StudentCourseList',
        component: StudentCourseList
    },
    {
        path: '/student/studentinfomain',
        name: 'StudentInfoMain',
        component: StudentInfoMain
    },

]

export default routesStudent
