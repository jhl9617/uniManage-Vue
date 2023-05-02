import EclassHomeworkList from "@/views/student/Eclass/TotalHomeworkList.vue";
import LectureMain from "@/views/student/Eclass/LectureMain.vue";
import LectureBoardList from '@/views/student/Eclass/BoardList.vue'
import LectureBoardDetail from '@/views/student/Eclass/BoardDetail.vue'
import LectureBoardWrite from '@/views/student/Eclass/BoardWrite.vue'
import LectureSourceList from "@/views/student/Eclass/SourceList.vue";
import LectureSourceDetail from "@/views/student/Eclass/SourceDetail.vue";
import LectureNoticeList from "@/views/student/Eclass/NoticeList.vue";
import LectureNoticeDetail from "@/views/student/Eclass/NoticeDetail.vue";
import LectureHomeworkList from "@/views/student/Eclass/HomeworkList.vue";
import LectureHomeworkWrite from "@/views/student/Eclass/HomeworkWrite.vue";
import LectureHomeworkDetail from "@/views/student/Eclass/HomeworkDetail.vue";
import LectureInfo from "@/views/student/Eclass/LectureInfo.vue";
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
import StudentMain from "@/views/student/studentInfoSystem/StudentSugang.vue";


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
        //학생
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
        name: 'LectureMain',
        component: LectureMain
    },

    {
        path: '/eclass/board/list',
        name: 'LectureBoardList',
        component: LectureBoardList
    },
    {
        path: '/eclass/board/detail',
        name: 'LectureBoardDetail',
        component: LectureBoardDetail
    },
    {
        path: '/eclass/board/write',
        name: 'LectureBoardWrite',
        component: LectureBoardWrite
    },
    {
        path: '/eclass/source/list',
        name: 'LectureSourceList',
        component: LectureSourceList
    },
    {
        path: '/eclass/source/detail',
        name: 'LectureSourceDetail',
        component: LectureSourceDetail
    },
    {
        path: '/eclass/notice/list',
        name: 'LectureNoticeList',
        component: LectureNoticeList
    },
    {
        path: '/eclass/notice/detail',
        name: 'LectureNoticeDetail',
        component: LectureNoticeDetail
    },
    {
        path: '/eclass/homework/list',
        name: 'LectureHomeworkList',
        component: LectureHomeworkList
    },
    {
        path: '/eclass/totalhomework/list',
        name: 'EclassHomeworkList',
        component: EclassHomeworkList
    },
    {
        path: '/eclass/homework/detail',
        name: 'LectureHomeworkDetail',
        component: LectureHomeworkDetail
    },
    {
        path: '/eclass/homework/write',
        name: 'LectureHomeworkWrite',
        component: LectureHomeworkWrite
    },
    {
        path: '/eclass/lectureinfo',
        name: 'LectureInfo',
        component: LectureInfo

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
