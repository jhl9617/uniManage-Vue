<template>
  <div v-if="$route.name && !$route.name.startsWith('Member')">
    <div>
      <CommonHeader/>
      <EclassHeader v-if="$route.name && $route.name.startsWith('Lecture')"/>
    </div>
    <div class="container-fluid">
      <div class="row">
        <div class="col-md-2">
          <AdminSidebar v-if="$route.name && $route.name.startsWith('Admin')"/>
          <StudentSidebar v-if="$route.name && $route.name.startsWith('Student')"/>
          <ProfessorSidebar v-if="$route.name && $route.name.startsWith('Prof')"/>
          <LectureSidebar v-if="$route.name && $route.name.startsWith('Lecture')"/>
          <EclassSidebar v-if="$route.name && $route.name.startsWith('Eclass')"/>
        </div>
        <div class="col-md-10" >
          <router-view/>
        </div>
      </div>
    </div>
  </div>
  <div v-if="$route.name && $route.name.startsWith('Member')">
    <router-view/>
  </div>
</template>

<script>
import StudentSidebar from "@/views/student/studentInfoSystem/common/PageSidebar.vue";
import LectureSidebar from "@/views/student/Eclass/lecture/LectureSidebar.vue";
import EclassSidebar from "@/views/student/Eclass/common/EClassSidebar.vue";
import AdminSidebar from "@/views/admin/common/AdminSidebar.vue";
import ProfessorSidebar from "@/views/professor/common/PageSidebar.vue";
import EclassHeader from "@/views/student/Eclass/common/PageHeader.vue";
import CommonHeader from "@/components/common/CommonHeader.vue"

export default {
  name: 'App',
  components: {
    AdminSidebar,
    EclassHeader,
    CommonHeader,
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
}
</style>
