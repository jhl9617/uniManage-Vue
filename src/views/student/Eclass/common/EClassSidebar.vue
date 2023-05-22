<!-- PageSidebar.vue -->
<template>
    <ul class="navbar-nav sidebar sidebar-dark accordion" id="accordionSidebar">
        <li>&nbsp;</li>
        <li>&nbsp;</li>
        <li>&nbsp;</li>

        <!-- Nav Item - Dashboard -->
        <li class="nav-item active">
            <router-link class="nav-link" to="/student">
                <span>학생정보시스템</span>
            </router-link>
        </li>
        <li class="nav-item active">
            <router-link class="nav-link" to="/eclass">
                <span>E-Class</span>
            </router-link>
        </li>
        <!-- Divider -->
        <hr class="sidebar-divider">



        <!-- 과제 현황 -->
        <li class="nav-item">
            <router-link class="nav-link collapsed" to="/eclass/totalhomework/list">
                <span>과제현황</span>
            </router-link>
        </li>


    </ul>
</template>

<script>

</script>

<style scoped>
@import "@/assets/css/sb-admin-2.min.css";
@import "@/assets/vendor/fontawesome-free/css/all.min.css";
@import "https://fonts.googleapis.com/css?family=Nunito:200,200i,300,300i,400,400i,600,600i,700,700i,800,800i,900,900i";

#accordionSidebar {
    background-color: #c6dddc;
}

ul li a span {
    color: black;
}
</style>

