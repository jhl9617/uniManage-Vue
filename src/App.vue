<template>
    <div>
        <div class="myheader">
        <PageHeader/>
        </div>
        <EclassHeader v-if="$route.name && $route.name.startsWith('Lecture')"/>
        <div class="container-fluid">
            <div class="row">
                <div class="col-md-2">
                    <AdminSidebar v-if="$route.name && $route.name.startsWith('Admin')"/>
                    <StudentSidebar v-if="$route.name && $route.name.startsWith('Student')"/>
                    <ProfessorSidebar v-if="$route.name && $route.name.startsWith('Prof')"/>
                    <LectureSidebar v-if="$route.name && $route.name.startsWith('Lecture')"/>
                    <EclassSidebar v-if="$route.name && $route.name.startsWith('Eclass')"/>
                </div>
                <div class="col-md-2">
                </div>
                <div class="col-md-8 position-absolute top-50 start-50 translate-middle">
                    <router-view/>
                </div>
            </div>
        </div>
        <PageFooter/>
    </div>
</template>

<script>
import PageHeader from './components/common/PageHeader.vue';
import PageFooter from './components/common/PageFooter.vue';
import StudentSidebar from "@/views/student/studentInfoSystem/PageSidebar.vue";
import LectureSidebar from "@/views/student/Eclass/lecture/LectureSidebar.vue";
import EclassSidebar from "@/views/student/Eclass/common/EClassSidebar.vue";
import AdminSidebar from "@/views/admin/common/AdminSidebar.vue";
import ProfessorSidebar from "@/views/professor/common/PageSidebar.vue";
import EclassHeader from "@/views/student/Eclass/common/PageHeader.vue"

export default {
    name: 'App',
    components: {
        AdminSidebar,
        PageHeader,
        EclassHeader,
        PageFooter,
        StudentSidebar,
        ProfessorSidebar,
        EclassSidebar,
        LectureSidebar
    }
}

</script>

<style>
#app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
}
.myheader {
    position: absolute;

    left: 200px; /* 왼쪽으로 250px 이동 */
    width: calc(100% - 250px); /* 페이지 전체 폭에서 250px를 빼서 너비를 설정 */
    /* 다른 요소보다 위에 표시 */
}
</style>
