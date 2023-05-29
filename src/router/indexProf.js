import ProfessorMain from '@/views/professor/common/ProfessorMain.vue'
import ProfessorInfo from '@/views/professor/PersonInfo.vue'
import ProfessorCreateNewLecture from '@/views/professor/lectureClass/ProfessorCreateNewLecture.vue'
import LectureRoom from '@/views/professor/lectureClass/LectureRoom.vue'
import ProfessorNewLectureList from "@/views/professor/lectureClass/ProfessorNewLectureList.vue"
import ProfessorCheckLecture from "@/views/professor/lecture/ProfessorCheckLecture.vue"
import ProfessorCreateNewHomework from "@/views/professor/lecture/ProfessorCreateNewHomework.vue"
import ProfessorStudentAttendance from "@/views/professor/attendance/ProfesscorStudentAttendance.vue"
import ProfessorHomeworkCheck from "@/views/professor/homework/ProfesscorHomeworkCheck.vue"
import ProfessorLectureEvaluation from "@/views/professor/lectureEvaluation/ProfessorLectureEvaluation.vue"
import ProfessorUniversityNotice from "@/views/professor/notice/ProfessorUniversityNotice.vue"
import ProfessorPayslip from "@/views/professor/payslip/ProfessorPayslip.vue"
import ProfessorLectureDetail from "@/views/professor/lecture/ProfessorLectureDetail.vue"
import ProfessorLectureNoticeWrite from "@/views/professor/lectureNotice/ProfessorLectureNoticeWrite.vue"
import ProfessorReferenceList from "@/views/professor/lectureRoom/ProfessorReferenceList.vue"
import ProfessorReferenceDetail from "@/views/professor/lectureRoom/ProfessorReferenceDetail.vue"
import ProfessorReferenceWrite from "@/views/professor/lectureRoom/ProfessorReferenceWrite.vue"
import ProfessorLectureNotice from "@/views/professor/lectureNotice/ProfessorLectureNotice.vue"
import ProfessorLectureNoticeDetail from "@/views/professor/lectureNotice/ProfessorLectureNoticeDetail.vue"
import ProfessorStudentAtList from "@/views/professor/attendance/ProfessorStudentAtList.vue"
import ProfessorUniversityNoticeDetail from "@/views/professor/notice/ProfessorUniversityNoticeDetail.vue"
import ProfessorStudentAtDetail from "@/views/professor/attendance/ProfessorStudentAtDetail.vue"
import ProfessorHomeworkList from "@/views/professor/homework/ProfessorHomeworkList.vue"
import ProfessorHomeworkDetail from "@/views/professor/homework/ProfessorHomeworkDetail.vue"
import ProfessorLectureEvaluationAnswer from "@/views/professor/lectureEvaluation/ProfessorLectureEvaluationAnswer.vue";
import ProfessorCancelledLectureList from "@/views/professor/cancelledLecture/ProfessorCancelledLectureList.vue";
import ProfessorCancelledLectureWrite from "@/views/professor/cancelledLecture/ProfessorCancelledLectureWrite.vue";
import ProfessorCancelledLecture from "@/views/professor/cancelledLecture/ProfessorCancelledLecture.vue";
import NewLectureDetail from "@/views/professor/lectureClass/NewLectureDetail.vue";
import ProfessorScheduleList from "@/views/professor/notice/ProfessorScheduleList.vue";


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
        path: '/prof/create/write',
        name: 'ProfessorCreateNewLecture',
        component: ProfessorCreateNewLecture
    },
    {   //개설강좌_신규강좌 개설(강의실 조회)
        path: '/prof/create/room',
        name: 'ProfessorLectureRoom',
        component: LectureRoom
    },
    {   //개설강좌_신규강의 신청내역
        path: '/prof/create/list',
        name: 'ProfessorNewLectureList',
        component: ProfessorNewLectureList
    },
    {   //개설강좌_신규강의 신청내역
        path: '/prof/create/view',
        name: 'ProfessorNewLectureDetail',
        component: NewLectureDetail
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
    {   //휴강 게시글 리스트
        path: '/prof/lecture/cancelled/list',
        name: 'ProfessorCancelledLectureList',
        component: ProfessorCancelledLectureList
    },
    {   //휴강 게시글 작성하기
        path: '/prof/lecture/cancelled/write',
        name: 'ProfessorCancelledLectureWrite',
        component: ProfessorCancelledLectureWrite
    },
    {   // 휴강 게시글 상세보기
        path: '/prof/lecture/cancelled',
        name: 'ProfessorCancelledLecture',
        component: ProfessorCancelledLecture
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
        name: 'ProfessorLectureEvaluation',
        component: ProfessorLectureEvaluation
    },
    {   //공지사항_전체공지
        path: '/prof/notice/list',
        name: 'ProfessorUniversityNotice',
        component: ProfessorUniversityNotice
    },
    {   //공지사항_학사일정
        path: '/prof/schedule/list',
        name: 'ProfessorScheduleList',
        component: ProfessorScheduleList
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
        path: '/prof/lecture/notice/detail',
        name: 'ProfessorLectureNoticeDetail',
        component: ProfessorLectureNoticeDetail
    },
    {   //공지사항_전체공지_상세보기
        path: '/prof/notice/detail',
        name: 'ProfessorUniversityNoticeDetail',
        component: ProfessorUniversityNoticeDetail
    },
    {//강의공지 작성하기
        path: '/prof/lecture/notice/write',
        name: 'ProfessorLectureNoticeWrite',
        component: ProfessorLectureNoticeWrite
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
        //강의자료실 작성
        path: '/prof/lecture/reference/write',
        name: 'ProfessorReferenceWrite',
        component: ProfessorReferenceWrite
    },
    {   //강의평가_추가 답변내용
        path: '/prof/lectureEvaluation/lectureEvaluationAnswer',
        name: 'ProfessorLectureEvaluationAnswer',
        component: ProfessorLectureEvaluationAnswer
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
        path: '/prof/lecture/homework/list',
        name: 'ProfessorHomeworkList',
        component: ProfessorHomeworkList
    },
    {   //학생관리_과제 제출상세
        path: '/prof/lecture/homework/detail',
        name: 'ProfessorHomeworkDetail',
        component: ProfessorHomeworkDetail
    }
]

export default routesProf