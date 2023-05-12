<!-- LectureSidebar.vue -->
<template>
    <ul class="navbar-nav sidebar sidebar-dark accordion" id="accordionSidebar">
        <li>&nbsp;</li>
        <li>&nbsp;</li>
        <li class="nav-item active">
            <router-link class="nav-link" to="/student/studentinfomain">
                <span>학생정보시스템</span>
            </router-link>
        </li>
        <li class="nav-item active">
            <router-link class="nav-link" to="/eclass">
                <span>E-Class</span>
            </router-link>
        </li>
        <li>&nbsp;</li>
        <!-- Nav Item - Dashboard -->
        <li class="nav-item active">
            <router-link class="nav-link" to="/eclass/1">
                <span>Home</span>
            </router-link>
        </li>
        <!-- Divider -->
        <hr class="sidebar-divider">

        <!-- 강의정보 -->
        <li class="nav-item">
            <a class="nav-link collapsed" href="#" data-bs-toggle="collapse" data-bs-target="#lectureinfo-collapse"
               aria-expanded="true" aria-controls="info-collapse">
                <span>강의정보</span>
            </a>
            <div id="lectureinfo-collapse" class="collapse" data-parent="#accordionSidebar">
                <div class="bg-white py-2 collapse-inner rounded">
                    <router-link to="/Eclass/lectureinfo" class="link-body-emphasis d-inline-flex text-decoration-none rounded">
                        강의정보 조회
                    </router-link>
                </div>
            </div>
        </li>

        <!-- 과제제출 -->
        <li class="nav-item">
            <a class="nav-link collapsed" href="#" data-bs-toggle="collapse" data-bs-target="#homework-collapse"
               aria-expanded="true" aria-controls="collapseUtilities">
                <span>과제제출</span>
            </a>
            <div id="homework-collapse" class="collapse" data-parent="#accordionSidebar">
                <div class="bg-white py-2 collapse-inner rounded">
                    <router-link to="/eclass/homework/list"
                                 class="link-body-emphasis d-inline-flex text-decoration-none rounded">과제 목록
                    </router-link>
                </div>
            </div>
        </li>

        <!-- 공지사항 -->
        <li class="nav-item">
            <a class="nav-link collapsed" href="#" data-bs-toggle="collapse" data-bs-target="#notice-collapse"
               aria-expanded="true" aria-controls="collapseUtilities">
                <span>공지사항</span>
            </a>
            <div id="notice-collapse" class="collapse" aria-labelledby="headingUtilities"
                 data-parent="#accordionSidebar">
                <div class="bg-white py-2 collapse-inner rounded">
                    <router-link to="/eclass/notice/list"
                                 class="link-body-emphasis d-inline-flex text-decoration-none rounded">공지사항 조회
                    </router-link>
                </div>
            </div>
        </li>

        <!-- 강의자료실 -->
        <li class="nav-item">
            <a class="nav-link collapsed" href="#" data-bs-toggle="collapse" data-bs-target="#source-collapse"
               aria-expanded="true" aria-controls="collapseUtilities">
                <span>강의자료실</span>
            </a>
            <div id="source-collapse" class="collapse" data-parent="#accordionSidebar">
                <div class="bg-white py-2 collapse-inner rounded">
                    <router-link to="/eclass/source/list"
                                 class="link-body-emphasis d-inline-flex text-decoration-none rounded">강의자료실
                    </router-link>
                </div>
            </div>
        </li>

        <!-- 자유게시판 -->
        <li class="nav-item">
            <a class="nav-link collapsed" href="#" data-bs-toggle="collapse" data-bs-target="#board-collapse"
               aria-expanded="true" aria-controls="collapseUtilities">
                <span>자유게시판</span>
            </a>
            <div id="board-collapse" class="collapse" data-parent="#accordionSidebar">
                <div class="bg-white py-2 collapse-inner rounded">
                    <router-link to="/eclass/board/list"
                                 class="link-body-emphasis d-inline-flex text-decoration-none rounded">자유게시판
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

