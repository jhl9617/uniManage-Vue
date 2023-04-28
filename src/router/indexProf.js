import ProfessorMain from '@/views/professor/common/ProfessorMain.vue'
import ProfessorInfo from '@/views/professor/PersonInfo.vue'
import ProfessorCreateNewLecture from '@/views/professor/newLecture/ProfessorCreateNewLecture.vue'
import LectureRoom from '@/views/professor/newLecture/LectureRoom.vue'
import ProfessorNewLectureDetails from "@/views/professor/newLecture/ProfessorNewLectureDetails.vue"
import ProfessorCheckLecture from "@/views/professor/lecture/ProfessorCheckLecture.vue"
import ProfessorCreateNewHomework from "@/views/professor/lecture/ProfessorCreateNewHomework.vue"
import ProfessorCloseLecture from "@/views/professor/lecture/ProfessorCloseLecture.vue"
import ProfessorStudentAttendance from "@/views/professor/student/ProfesscorStudentAttendance.vue"
import ProfessorHomeworkCheck from "@/views/professor/student/ProfesscorHomeworkCheck.vue"
import ProfessorLectureEvaluation from "@/views/professor/lectureEvaluation/ProfessorLectureEvaluation.vue"
import ProfessorUniversityNotice from "@/views/professor/notice/ProfessorUniversityNotice.vue"
import ProfessorDepartmentNotice from "@/views/professor/notice/ProfessorDepartmentNotice.vue"
import ProfessorPayslip from "@/views/professor/payslip/ProfessorPayslip.vue"
import ProfessorLectureDetail from "@/views/professor/lecture/ProfessorLectureDetail.vue"
import ProfessorLectureNoticeWrite from "@/views/professor/notice/ProfessorLectureNoticeWrite.vue"
import ProfessorLectureNoticeUpdate from "@/views/professor/notice/ProfessorLectureNoticeUpdate.vue"
import ProfessorReferenceList from "@/views/professor/reference/ProfessorReferenceList.vue"
import ProfessorReferenceDetail from "@/views/professor/reference/ProfessorReferenceDetail.vue"
import ProfessorReferenceUpdate from "@/views/professor/reference/ProfessorReferenceUpdate.vue"
import ProfessorReferenceWrite from "@/views/professor/reference/ProfessorReferenceWrite.vue"
import ProfessorLectureNotice from "@/views/professor/lecture/ProfessorLectureNotice.vue"
import ProfessorLectureNoticeDetail from "@/views/professor/lecture/ProfessorLectureNoticeDetail.vue"
import ProfessorStudentAtList from "@/views/professor/student/ProfessorStudentAtList.vue"
import ProfessorUniversityNoticeDetail from "@/views/professor/notice/ProfessorUniversityNoticeDetail.vue"
import ProfessorDepartmentNoticeDetail from "@/views/professor/notice/ProfessorDepartmentNoticeDetail.vue"
import ProfessorStudentAtDetail from "@/views/professor/student/ProfessorStudentAtDetail.vue"
import ProfessorCloseLectureWrite from "@/views/professor/lecture/ProfessorCloseLectureWrite.vue"
import ProfessorHomeworkList from "@/views/professor/student/ProfessorHomeworkList.vue"
import ProfessorHomeworkDetail from "@/views/professor/student/ProfessorHomeworkDetail.vue"


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
    {   //강의_과제
        path: '/prof/student/homework/write',
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
        path: '/prof/student/homework/check',
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
    {
        //강의공지 작성하기
        path: '/prof/lecture/notice/write',
        name: 'ProfessorLectureNoticeWrite',
        component: ProfessorLectureNoticeWrite
    },
    {
        //강의공지 수정하기
        path: '/prof/lecture/notice/update',
        name: 'ProfessorLectureNoticeUpdate',
        component: ProfessorLectureNoticeUpdate
    },
    {
        //강의자료실 리스트
        path: '/prof/lecture/reference/list',
        name: 'ProfessorReferenceList',
        component: ProfessorReferenceList
    },
    {
        //강의자료실 상세보기
        path: '/prof/lecture/reference/detail',
        name: 'ProfessorReferenceDetail',
        component: ProfessorReferenceDetail
    },
    {
        //강의자료실 수정
        path: '/prof/lecture/reference/update',
        name: 'ProfessorReferenceUpdate',
        component: ProfessorReferenceUpdate
    },
    {
        //강의자료실 작성
        path: '/prof/lecture/reference/write',
        name: 'ProfessorReferenceWrite',
        component: ProfessorReferenceWrite
    },
    {   //강의평가_추가 답변내용
        path: '/prof/lectureEvaluation/lectureEvaluationAnswer',
        name: 'ProfessorLectureEvaluationAnswer',
        component: ProfessorLectureEvaluationAnswer

    {
        //휴강사유 작성
        path: '/prof/lecture/closed/write',
        name: 'ProfessorCloseLectureWrite',
        component: ProfessorCloseLectureWrite
    },
    {
        //출결조회
        path: '/prof/student/attendance/list',
        name: 'ProfessorStudentAtList',
        component: ProfessorStudentAtList
    },
    {
        //출결조회 상세
        path: '/prof/student/attendance/detail',
        name: 'ProfessorStudentAtDetail',
        component: ProfessorStudentAtDetail
    },
    {   //학생관리_과제 제출현황
        path: '/prof/student/homework/list',
        name: 'ProfessorHomeworkList',
        component: ProfessorHomeworkList
    },
    {   //학생관리_과제 제출상세
        path: '/prof/student/homework/detail',
        name: 'ProfessorHomeworkDetail',
        component: ProfessorHomeworkDetail
    }
]

export default routesProf