import ProfessorMain from '@/views/professor/common/ProfessorMain.vue'
import ProfessorInfo from '@/views/professor/PersonInfo.vue'
import ProfessorCreateNewLecture from '@/views/professor/newLecture/ProfessorCreateNewLecture.vue'
import LectureRoom from '@/views/professor/newLecture/LectureRoom.vue'
import ProfessorNewLectureDetails from "@/views/professor/newLecture/ProfessorNewLectureDetails.vue"
import ProfessorCheckLecture from "@/views/professor/lecture/ProfessorCheckLecture.vue"
import ProfessorStudentCheck from "@/views/professor/lecture/ProfessorStudentCheck.vue"
import ProfessorCreateNewHomework from "@/views/professor/lecture/ProfessorCreateNewHomework.vue"
import ProfessorCloseLecture from "@/views/professor/lecture/ProfessorCloseLecture.vue"
import ProfessorStudentAttendance from "@/views/professor/student/ProfesscorStudentAttendance.vue"
import ProfessorHomeworkCheck from "@/views/professor/student/ProfesscorHomeworkCheck.vue"
import ProfessorLectureEvaluation from "@/views/professor/lectureEvaluation/ProfessorLectureEvaluation.vue"
import ProfessorUniversityNotice from "@/views/professor/notice/ProfessorUniversityNotice.vue"
import ProfessorDepartmentNotice from "@/views/professor/notice/ProfessorDepartmentNotice.vue"
import ProfessorPayslip from "@/views/professor/payslip/ProfessorPayslip.vue"

import ProfessorLectureDetail from "@/views/professor/lecture/ProfessorLectureDetail.vue"
import ProfessorLectureNotice from "@/views/professor/lecture/ProfessorLectureNotice.vue"
import ProfessorLectureNoticeDetail from "@/views/professor/lecture/ProfessorLectureNoticeDetail.vue"

import ProfessorUniversityNoticeDetail from "@/views/professor/notice/ProfessorUniversityNoticeDetail.vue";
import ProfessorDepartmentNoticeDetail from "@/views/professor/notice/ProfessorDepartmentNoticeDetail.vue";


const routesProf = [
    {   //교수_기본(메인)
        path: '/prof/main',
        name: 'ProfessorMain',
        component: ProfessorMain
    },
    {   //개인정보_개인정보 조회
        path: '/prof/info',
        name: 'ProfessorInfo',
        component: ProfessorInfo
    },
    {   //개설강좌_신규강좌 개설
        path: '/prof/create',
        name: 'ProfessorCreateNewLecture',
        component: ProfessorCreateNewLecture
    },
    {   //개설강좌_신규강좌 개설(강의실 조회)
        path: '/prof/create/room',
        name: 'LectureRoom',
        component: LectureRoom
    },
    {   //개설강좌_신규강의 신청내역
        path: '/prof/create/list',
        name: 'ProfessorNewLectureDetails',
        component: ProfessorNewLectureDetails
    },
    {   //강의_강의정보 확인
        path: '/prof/lecture/list',
        name: 'ProfessorCheckLecture',
        component: ProfessorCheckLecture
    },
    {
        path: '/prof/student/check',
        name: 'ProfessorStudentCheck',
        component: ProfessorStudentCheck
    },
    {   //강의_과제
        path: '/prof/student/homework',
        name: 'ProfessorCreateNewHomework',
        component: ProfessorCreateNewHomework
    },
    {   //강의_휴강
        path: '/prof/lecture/closed',
        name: 'ProfessorCloseLecture',
        component: ProfessorCloseLecture
    },
    {   //학생관리_학생 출석관리
        path: '/prof/student/attendance',
        name: 'ProfessorStudentAttendance',
        component: ProfessorStudentAttendance
    },
    {   //학생관리_과제 제출현황
        path: '/prof/student/homework/list',
        name: 'ProfessorHomeworkCheck',
        component: ProfessorHomeworkCheck
    },
    {   //강의평가_강의 평가내역
        path: '/prof/lecture/rating',
        name : 'ProfessorLectureEvaluation',
        component: ProfessorLectureEvaluation
    },
    {   //공지사항_전체공지
        path: '/prof/notice/list',
        name: 'ProfessorUniversityNotice',
        component: ProfessorUniversityNotice
    },
    {   //공지사항_학과공지
        path: '/prof/dnotice/list',
        name: 'ProfessorDepartmentNotice',
        component: ProfessorDepartmentNotice
    },
    {   //급여_급여명세서
        path: '/prof/salary',
        name: 'ProfessorPayslip',
        component: ProfessorPayslip
    },
    {   //강의_강의정보 확인
        path: '/prof/lecture/detail',
        name: 'ProfessorLectureDetail',
        component: ProfessorLectureDetail
    },
    {   //강의_강의정보 확인_공지리스트(공지사항 + 강의자료실)
        path: '/prof/lecture/notice/list',
        name: 'ProfessorLectureNotice',
        component: ProfessorLectureNotice
    },
    {   //강의_강의정보 확인_공지사항_강의공지 상세보기
        path: '/prof/lecture/notice/deatil',
        name: 'ProfessorLectureNoticeDetail',
        component: ProfessorLectureNoticeDetail
    },
    {   //공지사항_전체공지_상세보기
        path: '/prof/notice/universityNoticeDetail',
        name: 'ProfessorUniversityNoticeDetail',
        component: ProfessorUniversityNoticeDetail
    },
    {   //공지사항_학과공지_상세보기
        path: '/prof/notice/DepartmentNoticeDetail',
        name: 'ProfessorDepartmentNoticeDetail',
        component: ProfessorDepartmentNoticeDetail
    },
    {},
]

export default routesProf
