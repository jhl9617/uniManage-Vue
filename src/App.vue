<template>
    <div>
        <PageHeader/>
        <EclassHeader v-if="$route.name && $route.name.startsWith('Eclass')"/>
        <div class="container-fluid">
            <div class="row">
                <div class="col-md-4">
                    <AdminSidebar v-if="$route.name && $route.name.startsWith('Admin')"/>
                    <StudentSidebar v-if="$route.name && $route.name.startsWith('Student')"/>
                    <ProfessorSidebar v-if="$route.name && $route.name.startsWith('Prof')"/>
                    <EclassSidebar v-if="$route.name && $route.name.startsWith('Eclass')"/>

                </div>
                <div class="col-md-8">
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
import EclassSidebar from "@/views/student/Eclass/PageSidebar.vue";
import AdminSidebar from "@/views/admin/common/AdminSidebar.vue";
import ProfessorSidebar from "@/views/professor/common/PageSidebar.vue";
import EclassHeader from "@/views/student/Eclass/PageHeader.vue"

export default {
    name: 'App',
    components: {
        AdminSidebar,
        PageHeader,
        EclassHeader,
        PageFooter,
        StudentSidebar,
        ProfessorSidebar,
        EclassSidebar
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
    margin-top: 60px;
}
</style>
