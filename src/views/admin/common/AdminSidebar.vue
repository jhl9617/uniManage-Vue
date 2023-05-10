<!-- LectureSidebar.vue -->
<template>
    <ul class="navbar-nav sidebar sidebar-dark accordion" id="accordionSidebar">
        <li>&nbsp;</li>
        <li>&nbsp;</li>
        <li>&nbsp;</li>
        <li>&nbsp;</li>
        <li>&nbsp;</li>
        <!-- Nav Item - Dashboard -->
        <li class="nav-item active">
            <router-link class="nav-link" to="/admin/">
                <span>Home</span>
            </router-link>
        </li>
        <!-- Divider -->
        <hr class="sidebar-divider">

        <!-- 공지사항 관리 -->
        <li class="nav-item">
            <a class="nav-link collapsed" href="#" data-bs-toggle="collapse" data-bs-target="#notice-collapse"
               aria-expanded="true" aria-controls="info-collapse">
                <span>공지사항 관리</span>
            </a>
            <div id="notice-collapse" class="collapse" data-parent="#accordionSidebar">
                <div class="bg-white py-2 collapse-inner rounded">
                    <router-link to="/admin/notice/list" class="link-body-emphasis d-inline-flex text-decoration-none rounded">
                        공지사항 목록
                    </router-link>
                </div>
            </div>
        </li>

        <!-- 학생 관리 -->
        <li class="nav-item">
            <a class="nav-link collapsed" href="#" data-bs-toggle="collapse" data-bs-target="#student-collapse"
               aria-expanded="true" aria-controls="collapseUtilities">
                <span>학생 관리</span>
            </a>
            <div id="student-collapse" class="collapse" data-parent="#accordionSidebar">
                <div class="bg-white py-2 collapse-inner rounded">
                    <router-link to="/admin/manage/student"
                                 class="link-body-emphasis d-inline-flex text-decoration-none rounded">학생 명부
                    </router-link>
                </div>
            </div>
        </li>

        <!-- 강의 관리 -->
        <li class="nav-item">
            <a class="nav-link collapsed" href="#" data-bs-toggle="collapse" data-bs-target="#lecture-collapse"
               aria-expanded="true" aria-controls="collapseUtilities">
                <span>강의 관리</span>
            </a>
            <div id="lecture-collapse" class="collapse" aria-labelledby="headingUtilities"
                 data-parent="#accordionSidebar">
                <div class="bg-white py-2 collapse-inner rounded">
                    <router-link to="/admin/manage/class"
                                 class="link-body-emphasis d-inline-flex text-decoration-none rounded">개설 강의 리스트
                    </router-link>
                    <router-link to="/admin/manage/appliedclass"
                                 class="link-body-emphasis d-inline-flex text-decoration-none rounded">강의 개설 요청 리스트
                    </router-link>
                    <br>
                    <router-link to="/admin/manage/closelecture"
                                 class="link-body-emphasis d-inline-flex text-decoration-none rounded">휴강 관리
                    </router-link>
                </div>
            </div>
        </li>

        <!-- 강의실 관리 -->
        <li class="nav-item">
            <a class="nav-link collapsed" href="#" data-bs-toggle="collapse" data-bs-target="#classroom-collapse"
               aria-expanded="true" aria-controls="collapseUtilities">
                <span>강의실 관리</span>
            </a>
            <div id="classroom-collapse" class="collapse" data-parent="#accordionSidebar">
                <div class="bg-white py-2 collapse-inner rounded">
                    <router-link to="/admin/manage/classroom"
                                 class="link-body-emphasis d-inline-flex text-decoration-none rounded">강의실 리스트
                    </router-link>
                </div>
            </div>
        </li>

        <!-- 교수 관리 -->
        <li class="nav-item">
            <a class="nav-link collapsed" href="#" data-bs-toggle="collapse" data-bs-target="#professor-collapse"
               aria-expanded="true" aria-controls="collapseUtilities">
                <span>교수 관리</span>
            </a>
            <div id="professor-collapse" class="collapse" data-parent="#accordionSidebar">
                <div class="bg-white py-2 collapse-inner rounded">
                    <router-link to="/admin/manage/professor"
                                 class="link-body-emphasis d-inline-flex text-decoration-none rounded">교수 명부
                    </router-link>
                </div>
            </div>
        </li>

        <!-- 장학금 관리 -->
        <li class="nav-item">
            <a class="nav-link collapsed" href="#" data-bs-toggle="collapse" data-bs-target="#scholarship-collapse"
               aria-expanded="true" aria-controls="collapseUtilities">
                <span>장학금 관리</span>
            </a>
            <div id="scholarship-collapse" class="collapse" data-parent="#accordionSidebar">
                <div class="bg-white py-2 collapse-inner rounded">
                    <router-link to="/admin/manage/scholarship"
                                 class="link-body-emphasis d-inline-flex text-decoration-none rounded">장학금 리스트
                    </router-link>
                </div>
            </div>
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

