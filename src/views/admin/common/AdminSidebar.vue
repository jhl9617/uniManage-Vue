<!-- LectureSidebar.vue -->
<template>

  <ul id="accordionSidebar" class="navbar-nav sidebar sidebar-dark accordion">
    <li>&nbsp;</li>
    <li>
      <router-link to="/">
        <button class="btn btn-success" type="button">로그아웃</button>
      </router-link>
    </li>
    <li>&nbsp;</li>
    <li>&nbsp;</li>

    <!-- Nav Item - Dashboard -->
    <li class="nav-item active">
      <router-link class="nav-link" to="/admin/">
        <span><h5>Home</h5></span>
      </router-link>
    </li>
    <!-- Divider -->
    <hr class="sidebar-divider">

    <!-- 공지사항 관리 -->
    <li class="nav-item">
      <a aria-controls="collapseUtilities" aria-expanded="true" class="nav-link collapsed" data-bs-target="#notice-collapse"
         data-bs-toggle="collapse" href="#">
        <span><h6>공지 관리</h6></span>
      </a>
      <div id="notice-collapse" aria-labelledby="headingUtilities" class="collapse"
           data-parent="#accordionSidebar">
        <div class="bg-white py-2 collapse-inner rounded">
          <router-link class="link-body-emphasis d-inline-flex text-decoration-none rounded"
                       to="/admin/notice/list">공지사항 관리
          </router-link>
          <br>
          <router-link class="link-body-emphasis d-inline-flex text-decoration-none rounded"
                       to="/admin/schedule">학사일정 관리
          </router-link>
        </div>
      </div>
    </li>

    <!-- 학생 관리 -->
    <li class="nav-item">
      <a aria-controls="collapseUtilities" aria-expanded="true" class="nav-link collapsed" data-bs-target="#student-collapse"
         data-bs-toggle="collapse" href="#">
        <span><h6>학생관리</h6></span>
      </a>
      <div id="student-collapse" class="collapse" data-parent="#accordionSidebar">
        <div class="bg-white py-2 collapse-inner rounded">
          <router-link class="link-body-emphasis d-inline-flex text-decoration-none rounded"
                       to="/admin/manage/student">학생 명단
          </router-link>
        </div>
      </div>
    </li>

    <!-- 교수 관리 -->
    <li class="nav-item">
      <a aria-controls="collapseUtilities" aria-expanded="true" class="nav-link collapsed" data-bs-target="#prof-collapse"
         data-bs-toggle="collapse" href="#">
        <span><h6>교수관리</h6></span>
      </a>
      <div id="prof-collapse" class="collapse" data-parent="#accordionSidebar">
        <div class="bg-white py-2 collapse-inner rounded">
          <router-link class="link-body-emphasis d-inline-flex text-decoration-none rounded"
                       to="/admin/manage/professor">교수 명단
          </router-link>
        </div>
      </div>
    </li>

    <!-- 강의 관리 -->
    <li class="nav-item">
      <a aria-controls="collapseUtilities" aria-expanded="true" class="nav-link collapsed" data-bs-target="#lecture-collapse"
         data-bs-toggle="collapse" href="#">
        <span><h6>강의 관리</h6></span>
      </a>
      <div id="lecture-collapse" aria-labelledby="headingUtilities" class="collapse"
           data-parent="#accordionSidebar">
        <div class="bg-white py-2 collapse-inner rounded">
          <router-link class="link-body-emphasis d-inline-flex text-decoration-none rounded"
                       to="/admin/manage/lecture">개설 강의 리스트
          </router-link>
          <router-link class="link-body-emphasis d-inline-flex text-decoration-none rounded"
                       to="/admin/manage/appliedlecture">강의 개설 요청 리스트
          </router-link>
        </div>
      </div>
    </li>

    <!-- 강의실 관리 -->
    <li class="nav-item">
      <a aria-controls="collapseUtilities" aria-expanded="true" class="nav-link collapsed" data-bs-target="#classroom-collapse"
         data-bs-toggle="collapse" href="#">
        <span><h6>강의실관리</h6></span>
      </a>
      <div id="classroom-collapse" class="collapse" data-parent="#accordionSidebar">
        <div class="bg-white py-2 collapse-inner rounded">
          <router-link class="link-body-emphasis d-inline-flex text-decoration-none rounded"
                       to="/admin/manage/classroom">강의실 리스트
          </router-link>
        </div>
      </div>
    </li>

    <!-- 장학금 관리 -->
    <li class="nav-item">
      <a aria-controls="collapseUtilities" aria-expanded="true" class="nav-link collapsed" data-bs-target="#scho-collapse"
         data-bs-toggle="collapse" href="#">
        <span><h6>장학금관리</h6></span>
      </a>
      <div id="scho-collapse" class="collapse" data-parent="#accordionSidebar">
        <div class="bg-white py-2 collapse-inner rounded">
          <router-link class="link-body-emphasis d-inline-flex text-decoration-none rounded"
                       to="/admin/manage/scholarship">장학금 리스트
          </router-link>
        </div>
      </div>
    </li>

  </ul>
</template>

<script>
export default {
  methods: {}
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

