import PageHome from "@/views/student/Eclass/PageHome.vue";
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
import ApplyTakeOff from "@/views/student/studentInfoSystem/ApplyTakeOff.vue";
import ApplyReturn from "@/views/student/studentInfoSystem/ApplyReturn.vue";
import TimelineByDepart from "@/views/student/studentInfoSystem/TimelineByDepart.vue";
import StudentTimetable from "@/views/student/studentInfoSystem/StudentTimetable.vue";
import CheckCourse from "@/views/student/studentInfoSystem/CheckCourse.vue";
import PayReceipt from "@/views/student/studentInfoSystem/PayReceipt.vue";
import PrintReceipt from "@/views/student/studentInfoSystem/PrintReceipt.vue";
import SurveyCourse from "@/views/student/studentInfoSystem/SurveyCourse.vue";


const routesStudent = [
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
    },{
        path: '/student/status',
        name: 'StudentStatus',
        component: StudentStatus
    },
    {
        path: '/student/takeoff',
        name: 'ApplyTakeOff',
        component: ApplyTakeOff
    },
    {
        path: '/student/return',
        name: 'ApplyReturn',
        component: ApplyReturn
    },
    {
        path: '/student/timelinebydepart',
        name: 'TimelineByDepart',
        component: TimelineByDepart
    },
    {
        path: '/student/studenttimetable',
        name: 'StudentTimetable',
        component: StudentTimetable
    },
    {
        path: '/student/checkcourse',
        name: 'CheckCourse',
        component: CheckCourse
    },
    {
        path: '/student/payreceipt',
        name: 'PayReceipt',
        component: PayReceipt
    },
    {
        path: '/student/printreceipt',
        name: 'PrintReceipt',
        component: PrintReceipt
    },
    {
        path: '/student/surveycourse',
        name: 'SurveyCourse',
        component: SurveyCourse
    }
]

export default routesStudent
