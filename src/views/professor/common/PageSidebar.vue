<!-- LectureSidebar.vue -->
<template>

    <ul class="navbar-nav sidebar sidebar-dark accordion" id="accordionSidebar">
        <li>&nbsp;</li>
        <li>&nbsp;</li>
        <li>&nbsp;</li>
        <li>&nbsp;</li>
        <li></li>
        <li>
            <router-link to="/">
                <button class="btn btn-primary" v-on:click="logout" type="button">로그아웃</button>
            </router-link>
        </li>
        <!-- Nav Item - Dashboard -->
        <li class="nav-item active">
            <router-link class="nav-link" to="/prof/main">
                <span>Home</span>
            </router-link>
        </li>
        <!-- Divider -->
        <hr class="sidebar-divider">

        <!-- 개인정보 -->
        <li class="nav-item">
            <a class="nav-link collapsed" href="#" data-bs-toggle="collapse" data-bs-target="#info-collapse"
               aria-expanded="true" aria-controls="info-collapse">
                <span>개인정보</span>
            </a>
            <div id="info-collapse" class="collapse" data-parent="#accordionSidebar">
                <div class="bg-white py-2 collapse-inner rounded">
                    <router-link to="/prof/info" class="link-body-emphasis d-inline-flex text-decoration-none rounded">
                        개인정보 조회
                    </router-link>
                </div>
            </div>
        </li>

        <!-- 개설강좌 -->
        <li class="nav-item">
            <a class="nav-link collapsed" href="#" data-bs-toggle="collapse" data-bs-target="#create-collapse"
               aria-expanded="true" aria-controls="collapseUtilities">
                <span>강좌개설</span>
            </a>
            <div id="create-collapse" class="collapse" data-parent="#accordionSidebar">
                <div class="bg-white py-2 collapse-inner rounded">
                    <router-link to="/prof/create/write"
                                 class="link-body-emphasis d-inline-flex text-decoration-none rounded">신규강좌 개설
                    </router-link>
                    <router-link to="/prof/create/list"
                                 class="link-body-emphasis d-inline-flex text-decoration-none rounded">신규강의 신청내역
                    </router-link>
                </div>
            </div>
        </li>

        <!-- 강의 -->
        <li class="nav-item">
            <a class="nav-link collapsed" href="#" data-bs-toggle="collapse" data-bs-target="#lecture-collapse"
               aria-expanded="true" aria-controls="collapseUtilities">
                <span>강의</span>
            </a>
            <div id="lecture-collapse" class="collapse" aria-labelledby="headingUtilities"
                 data-parent="#accordionSidebar">
                <div class="bg-white py-2 collapse-inner rounded">
                    <router-link to="/prof/lecture/list"
                                 class="link-body-emphasis d-inline-flex text-decoration-none rounded">강의정보 확인
                    </router-link>
                    <br>
                    <router-link to="/prof/lecture/cancelled/list"
                                 class="link-body-emphasis d-inline-flex text-decoration-none rounded">휴강
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
            <div id="notice-collapse" class="collapse" data-parent="#accordionSidebar">
                <div class="bg-white py-2 collapse-inner rounded">
                    <router-link to="/prof/notice/list"
                                 class="link-body-emphasis d-inline-flex text-decoration-none rounded">전체 공지
                    </router-link>
                    <br>
                    <router-link to="/prof/schedule/list"
                                 class="link-body-emphasis d-inline-flex text-decoration-none rounded">학사 일정
                    </router-link>
                </div>
            </div>
        </li>

    </ul>
</template>

<script>
export default {
    methods: {
        logout() {
            this.$axios.post('/logout')
                .then(response => {
                    console.log(response)
                    alert('로그아웃 되었습니다.')
                    this.$router.push({
                        path: '/'

                    })
                })
                .catch(error => {
                    alert('로그아웃에 실패했습니다.')
                    console.error(error);
                });
        }
    }
}
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

