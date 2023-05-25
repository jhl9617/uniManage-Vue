import EclassHomeworkList from "@/views/student/Eclass/lecture/homework/TotalHomeworkList.vue";
import LectureMain from "@/views/student/Eclass/lecture/LectureMain.vue";

import LectureBoardList from '@/views/student/Eclass/lecture/freeboard/BoardList.vue'
import LectureBoardDetail from '@/views/student/Eclass/lecture/freeboard/BoardDetail.vue'
import LectureBoardWrite from '@/views/student/Eclass/lecture/freeboard/BoardWrite.vue'

import LectureSourceList from "@/views/student/Eclass/lecture/source/SourceList.vue";
import LectureSourceDetail from "@/views/student/Eclass/lecture/source/SourceDetail.vue";
import LectureNoticeList from "@/views/student/Eclass/lecture/notice/NoticeList.vue";
import LectureNoticeDetail from "@/views/student/Eclass/lecture/notice/NoticeDetail.vue";
import LectureHomeworkList from "@/views/student/Eclass/lecture/homework/HomeworkList.vue";
import LectureHomeworkWrite from "@/views/student/Eclass/lecture/homework/HomeworkWrite.vue";
import LectureHomeworkDetail from "@/views/student/Eclass/lecture/homework/HomeworkDetail.vue";
import LectureInfo from "@/views/student/Eclass/lecture/LectureInfo.vue";
import EclassMain from "@/views/student/Eclass/common/EclassMain.vue";

import StudentStatus from "@/views/student/studentInfoSystem/status/StudentStatus.vue";
import StudentApplyTakeOff from "@/views/student/studentInfoSystem/status/StudentApplyTakeOff.vue";
import StudentApplyReturn from "@/views/student/studentInfoSystem/status/StudentApplyReturn.vue";
import StudentTimelineByDepart from "@/views/student/studentInfoSystem/course/TimelineByDepart.vue";
import StudentTimetable from "@/views/student/studentInfoSystem/course/StudentTimetable.vue";
import StudentCheckCourse from "@/views/student/studentInfoSystem/course/CheckCourse.vue";
import StudentSurveyCourse from "@/views/student/studentInfoSystem/survey/SurveyCourse.vue";
import StudentCheckCredit from "@/views/student/studentInfoSystem/score/CheckCredit.vue";
import StudentCheckScore from "@/views/student/studentInfoSystem/score/StudentCheckScore.vue";
import StudentCheckScholarship from "@/views/student/studentInfoSystem/scholarship/StudentCheckScholarship.vue";
import StudentCourseList from "@/views/student/studentInfoSystem/sugang/StudentCourseList.vue";
import StudentInfoMain from "@/views/student/studentInfoSystem/common/StudentInfoMain.vue";
import StudentMain from "@/views/student/studentInfoSystem/sugang/StudentSugang.vue";
import StudentNoticeList from "@/views/student/studentInfoSystem/notice/NoticeList.vue";
import StudentScheduleList from "@/views/student/studentInfoSystem/notice/ScheduleList.vue";
import StudentNoticeDetail from "@/views/student/studentInfoSystem/notice/NoticeDetail.vue";
import StudentTakeoffAppliedView from "@/views/student/studentInfoSystem/status/TakeoffAppliedView.vue";
import StudentReturnAppliedView from "@/views/student/studentInfoSystem/status/ReturnAppliedView.vue";

const routesStudent = [

    {
        path: '/about',
        name: 'About',
        component: () => import(/* webpackChunkName: "about" */ '@/views/student/Eclass/common/PageAbout.vue')
    },
    {
        //학생
        path: '/student/sugang',
        name: 'StudentMain',
        component: StudentMain
    },
    {
        path: '/eclass',
        name: 'EclassMain',
        component: EclassMain

    },
    {
        path: '/eclass/lecture',
        name: 'LectureMain',
        component: LectureMain
    },

    {
        path: '/eclass/lecture/board/list',
        name: 'LectureBoardList',
        component: LectureBoardList
    },
    {
        path: '/eclass/lecture/board/detail',
        name: 'LectureBoardDetail',
        component: LectureBoardDetail
    },
    {
        path: '/eclass/lecture/board/write',
        name: 'LectureBoardWrite',
        component: LectureBoardWrite
    },
    {
        path: '/eclass/lecture/source/list',
        name: 'LectureSourceList',
        component: LectureSourceList
    },
    {
        path: '/eclass/lecture/source/detail',
        name: 'LectureSourceDetail',
        component: LectureSourceDetail
    },
    {
        path: '/eclass/lecture/notice/list',
        name: 'LectureNoticeList',
        component: LectureNoticeList
    },
    {
        path: '/eclass/lecture/notice/detail',
        name: 'LectureNoticeDetail',
        component: LectureNoticeDetail
    },
    {
        path: '/eclass/lecture/homework/list',
        name: 'LectureHomeworkList',
        component: LectureHomeworkList
    },
    {
        path: '/eclass/totalhomework/list',
        name: 'EclassHomeworkList',
        component: EclassHomeworkList
    },
    {
        path: '/eclass/lecture/homework/detail',
        name: 'LectureHomeworkDetail',
        component: LectureHomeworkDetail
    },
    {
        path: '/eclass/lecture/homework/write',
        name: 'LectureHomeworkWrite',
        component: LectureHomeworkWrite
    },
    {
        path: '/eclass/lecture/lectureinfo',
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
        path: '/student/checkcredit',
        name: 'StudentCheckCredit',
        component: StudentCheckCredit
    },
    {
        path: '/student/score',
        name: 'StudentCheckScore',
        component: StudentCheckScore
    },
    {
        path: '/student/surveycourse',
        name: 'StudentSurveyCourse',
        component: StudentSurveyCourse
    },
    {
        path: '/student/scholarship',
        name: 'StudentCheckScholarship',
        component: StudentCheckScholarship
    },
    {
        path: '/student/courselist',
        name: 'StudentCourseList',
        component: StudentCourseList
    },
    {
        path: '/student',
        name: 'StudentInfoMain',
        component: StudentInfoMain
    },
    {
        path: '/student/notice',
        name: 'StudentNoticeList',
        component: StudentNoticeList
    },
    {
        path: '/student/notice/detail',
        name: 'StudentNoticeDetail',
        component: StudentNoticeDetail
    },
    {
        path: '/student/schedule',
        name: 'StudentScheduleList',
        component: StudentScheduleList
    },
    {
        path: '/student/takeoff/detail',
        name: 'StudentTakeoffAppliedView',
        component: StudentTakeoffAppliedView
    },
    {
        path: '/student/return/detail',
        name: 'StudentReturnAppliedView',
        component: StudentReturnAppliedView
    },
]

export default routesStudent
