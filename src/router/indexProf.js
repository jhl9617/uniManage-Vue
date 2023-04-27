import ProfessorMain from '@/views/professor/common/ProfessorMain.vue'
import ProfessorInfo from '@/views/professor/PersonInfo.vue'
import ProfessorCreateNewLecture from '@/views/professor/newLecture/ProfessorCreateNewLecture.vue'
import LectureRoom from '@/views/professor/newLecture/LectureRoom.vue'
import ProfessorNewLectureDetails from "@/views/professor/newLecture/ProfessorNewLectureDetails.vue";
import ProfessorCheckLecture from "@/views/professor/lecture/ProfessorCheckLecture.vue";
import ProfessorStudentCheck from "@/views/professor/lecture/ProfessorStudentCheck.vue";
import ProfessorCreateNewHomework from "@/views/professor/lecture/ProfessorCreateNewHomework.vue";
import ProfessorCloseLecture from "@/views/professor/lecture/ProfessorCloseLecture.vue";
import ProfesscorStudentAttendance from "@/views/professor/student/ProfesscorStudentAttendance.vue";
import ProfesscorHomeworkCheck from "@/views/professor/student/ProfesscorHomeworkCheck.vue";
import ProfessorLectureEvaluation from "@/views/professor/lectureEvaluation/ProfessorLectureEvaluation.vue";
import ProfessorUniversityNotice from "@/views/professor/notice/ProfessorUniversityNotice.vue";
import ProfessorDepartmentNotice from "@/views/professor/notice/ProfessorDepartmentNotice.vue";
import ProfesscorPayslip from "@/views/professor/payslip/ProfesscorPayslip.vue";

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
        path: '/prof/createlist',
        name: 'ProfessorNewLectureDetails',
        component: ProfessorNewLectureDetails
    },
    {   //강의_강의정보 확인
        path: '/prof/lecturelist',
        name: 'ProfessorCheckLecture',
        component: ProfessorCheckLecture
    },
    {
        path: '/prof/Studentcheck',
        name: 'ProfessorStudentCheck',
        component: ProfessorStudentCheck
    },
    {   //강의_과제
        path: '/prof/homework',
        name: 'ProfessorCreateNewHomework',
        component: ProfessorCreateNewHomework
    },
    {   //강의_휴강
        path: '/prof/lectureclosed',
        name: 'ProfessorCloseLecture',
        component: ProfessorCloseLecture
    },
    {   //학생관리_학생 출석관리
        path: '/studentattendance',
        name: 'ProfesscorStudentAttendance',
        component: ProfesscorStudentAttendance
    },
    {   //학생관리_과제 제출현황
        path: '/homeworklist',
        name: 'ProfesscorHomeworkCheck',
        component: ProfesscorHomeworkCheck
    },
    {   //강의평가_강의 평가내역
        path: '/lecturerating',
        name : 'ProfessorLectureEvaluation',
        component: ProfessorLectureEvaluation
    },
    {   //공지사항_전체공지
        path: '/notice/list',
        name: 'ProfessorUniversityNotice',
        component: ProfessorUniversityNotice
    },
    {   //공지사항_학과공지
        path: '/dnotice/list',
        name: 'ProfessorDepartmentNotice',
        component: ProfessorDepartmentNotice
    },
    {   //급여_급여명세서
        path: '/salary',
        name: 'ProfesscorPayslip',
        component: ProfesscorPayslip
    }
]

export default routesProf
