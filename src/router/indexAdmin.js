import AdminLayout from "@/views/Layout/AdminLayout.vue";
import AdminNoticeList from "@/views/admin/notice/NoticeList.vue";
import AdminNoticeDetailView from "@/views/admin/notice/NoticeDetailView.vue";
import AdminNoticewrite from "@/views/admin/notice/NoticeWrite.vue";
import AdminManageStudent from "@/views/admin/manage/ManageStudent.vue";
import AdminMain from "@/views/admin/AdminMain.vue";
import AdminManageScholarship from "@/views/admin/manage/ManageScholarship.vue";
import AdminAddScholarship from "@/views/admin/manage/AddScholarship.vue";
import AdminModifyScholarship from "@/views/admin/manage/ModifyScholarship.vue";
import AdminManageProfessor from "@/views/admin/manage/ManageProfessor.vue";
import AdminAddProfessor from "@/views/admin/manage/AddProfessor.vue";
import AdminModifyProfessor from "@/views/admin/manage/ModifyProfessor.vue";
import AdminManageClassroom from "@/views/admin/manage/ManageClassroom.vue";
import AdminAddClassroom from "@/views/admin/manage/AddClassroom.vue";
import AdminModifyClassroom from "@/views/admin/manage/ModifyClassroom.vue";
import AdminManageAppliedClass from "@/views/admin/manage/ManageAppliedClass.vue";
import AdminManageClass from "@/views/admin/manage/ManageClass.vue";
import AdminAddStudent from "@/views/admin/manage/AddStudent.vue";
import AdminModifyStudent from "@/views/admin/manage/ModifyStudent.vue";
import AdminDetailStudent from "@/views/admin/manage/DetailStudent.vue";
import AdminDetailGrade from "@/views/admin/manage/DetailGrade.vue";
import AdminDetailScholarship from "@/views/admin/manage/DetailScholarship.vue";
import AdminDetailProfessor from "@/views/admin/manage/DetailProfessor.vue";

const routesAdmin = [
  {
    path: "/admin",
    component: AdminLayout,
    children: [
      {
        path: "",
        name: "AdminMain",
        component: AdminMain,
      },
      {
        path: "notice/list",
        name: "AdminNoticeList",
        component: AdminNoticeList,
      },
      {
        path: "notice/view",
        name: "AdminNoticeDetailView",
        component: AdminNoticeDetailView,
      },
      {
        path: "notice/write",
        name: "AdminNoticewrite",
        component: AdminNoticewrite,
      },
      {
        path: "manage/student",
        name: "AdminManageStudent",
        component: AdminManageStudent,
      },
      {
        path: "manage/scholarship",
        name: "AdminManageScholarship",
        component: AdminManageScholarship,
      },
      {
        path: "manage/addscholarship",
        name: "AdminAddScholarship",
        component: AdminAddScholarship,
      },
      {
        path: "manage/modifyscholarship",
        name: "AdminModifyScholarship",
        component: AdminModifyScholarship,
      },
      {
        path: "manage/professor",
        name: "AdminManageProfessor",
        component: AdminManageProfessor,
      },
      {
        path: "manage/addprofessor",
        name: "AdminAddProfessor",
        component: AdminAddProfessor,
      },
      {
        path: "manage/modifyprofessor",
        name: "AdminModifyProfessor",
        component: AdminModifyProfessor,
      },
      {
        path: "manage/classroom",
        name: "AdminManageClassroom",
        component: AdminManageClassroom,
      },
      {
        path: "manage/addclassroom",
        name: "AdminAddClassroom",
        component: AdminAddClassroom,
      },
      {
        path: "manage/modifyclassroom",
        name: "AdminModifyClassroom",
        component: AdminModifyClassroom,
      },
      {
        path: "manage/appliedclass",
        name: "AdminManageAppliedClass",
        component: AdminManageAppliedClass,
      },
      {
        path: "manage/class",
        name: "AdminManageClass",
        component: AdminManageClass,
      },
      {
        path: "manage/addstudent",
        name: "AdminAddStudent",
        component: AdminAddStudent,
      },
      {
        path: "manage/modifystudent",
        name: "AdminModifyStudent",
        component: AdminModifyStudent,
      },
      {
        path: "manage/detailstudent",
        name: "AdminDetailStudent",
        component: AdminDetailStudent,
      },
      {
        path: "manage/detailgrade",
        name: "AdminDetailGrade",
        component: AdminDetailGrade,
      },
      {
        path: "manage/detailscholarship",
        name: "AdminDetailScholarship",
        component: AdminDetailScholarship,
      },
      {
        path: "manage/detailprofessor",
        name: "AdminDetailProfessor",
        component: AdminDetailProfessor,
      },
    ],
  },
];

export default routesAdmin;
