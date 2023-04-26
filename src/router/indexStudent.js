
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
import ApplyTakeOff from "@/views/student/studentInfoSystem/ApplyTakeOff.vue";
import ApplyReturn from "@/views/student/studentInfoSystem/ApplyReturn.vue";
import TimelineByDepart from "@/views/student/studentInfoSystem/TimelineByDepart.vue";
import StudentTimetable from "@/views/student/studentInfoSystem/StudentTimetable.vue";
import CheckCourse from "@/views/student/studentInfoSystem/CheckCourse.vue";
import PayReceipt from "@/views/student/studentInfoSystem/PayReceipt.vue";
import PrintReceipt from "@/views/student/studentInfoSystem/PrintReceipt.vue";
import SurveyCourse from "@/views/student/studentInfoSystem/SurveyCourse.vue";

import StudentMain from "@/views/student/StudentMain.vue";

import CheckCredit from "@/views/student/studentInfoSystem/CheckCredit.vue";
import CheckGrade from "@/views/student/studentInfoSystem/CheckGrade.vue";
import CheckScholarship from "@/views/student/studentInfoSystem/CheckScholarship.vue";

const routesStudent = [

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
