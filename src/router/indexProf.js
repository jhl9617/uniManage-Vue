import ProfessorCreateLecture from '@/views/professor/lecture/CreateLecture.vue'
import LectureRoom from '@/views/professor/lecture/LectureRoom.vue'
import ProfessorInfo from '@/views/professor/PersonInfo.vue'
import ProfessorMain from '@/views/professor/common/ProfessorMain.vue'

const routesProf = [
    {
        path: '/prof/create',
        name: 'ProfessorCreateLecture',
        component: ProfessorCreateLecture
    },
    {
        path: '/prof/create/room',
        name: 'LectureRoom',
        component: LectureRoom
    },
    {
        path: '/prof/info',
        name: 'ProfessorInfo',
        component: ProfessorInfo
    },
    {
        path: '/prof/main',
        name: 'ProfessorMain',
        component: ProfessorMain
    }
]

export default routesProf
