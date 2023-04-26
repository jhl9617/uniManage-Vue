<template>
    <div>
        <PageHeader/>

        <div class="container">
            <div class="row">
                <div class="col-md-3">
                    <AdminSidebar v-if="$route.name.startsWith('Admin')"/>
                    <StudenetSidebar v-if="$route.name.startsWith('Student')"/>
                    <ProfessorSidebar v-if="$route.name.startsWith('Prof')"/>
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
import StudenetSidebar from "@/views/student/studentInfoSystem/PageSidebar.vue";
import AdminSidebar from "@/views/admin/common/AdminSidebar.vue";
import ProfessorSidebar from "@/views/professor/common/PageSidebar.vue";

export default {
    name: 'App',
    components: {
        AdminSidebar,
        PageHeader,
        PageFooter,
        StudenetSidebar,
        ProfessorSidebar
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