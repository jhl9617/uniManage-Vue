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