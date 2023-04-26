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
import StudentStatus from "@/views/student/studentInfoSystem/StudentStatus.vue";
import StudentApplyTakeOff from "@/views/student/studentInfoSystem/StudentApplyTakeOff.vue";
import StudentApplyReturn from "@/views/student/studentInfoSystem/StudentApplyReturn.vue";
import StudentTimelineByDepart from "@/views/student/studentInfoSystem/StudentTimelineByDepart.vue";
import StudentTimetable from "@/views/student/studentInfoSystem/StudentTimetable.vue";
import StudentCheckCourse from "@/views/student/studentInfoSystem/StudentCheckCourse.vue";
import StudentPayReceipt from "@/views/student/studentInfoSystem/StudentPayReceipt.vue";
import StudentPrintReceipt from "@/views/student/studentInfoSystem/StudentPrintReceipt.vue";
import StudentSurveyCourse from "@/views/student/studentInfoSystem/StudentSurveyCourse.vue";
import StudentCheckCredit from "@/views/student/studentInfoSystem/StudentCheckCredit.vue";
import StudentCheckGrade from "@/views/student/studentInfoSystem/StudentCheckGrade.vue";
import StudentCheckScholarship from "@/views/student/studentInfoSystem/StudentCheckScholarship.vue";
import StudentCourseList from "@/views/student/studentInfoSystem/StudentCourseList.vue";
import StudentInfoMain from "@/views/student/studentInfoSystem/StudentInfoMain.vue";


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
    },{
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
