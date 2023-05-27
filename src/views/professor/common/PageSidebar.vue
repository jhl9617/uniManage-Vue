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
      <router-link class="nav-link" to="/prof/main">
        <span><h4>Home</h4></span>
      </router-link>
    </li>
    <!-- Divider -->
    <hr class="sidebar-divider">

    <!-- 개인정보 -->
    <li class="nav-item">
      <a aria-controls="info-collapse" aria-expanded="true" class="nav-link collapsed" data-bs-target="#info-collapse"
         data-bs-toggle="collapse" href="#">
        <span><h6>개인정보</h6></span>
      </a>
      <div id="info-collapse" class="collapse" data-parent="#accordionSidebar">
        <div class="bg-white py-2 collapse-inner rounded">
          <router-link class="link-body-emphasis d-inline-flex text-decoration-none rounded" to="/prof/info">
            개인정보 조회
          </router-link>
        </div>
      </div>
    </li>

    <!-- 개설강좌 -->
    <li class="nav-item">
      <a aria-controls="collapseUtilities" aria-expanded="true" class="nav-link collapsed" data-bs-target="#create-collapse"
         data-bs-toggle="collapse" href="#">
        <span><h6>강좌개설</h6></span>
      </a>
      <div id="create-collapse" class="collapse" data-parent="#accordionSidebar">
        <div class="bg-white py-2 collapse-inner rounded">
          <router-link class="link-body-emphasis d-inline-flex text-decoration-none rounded"
                       to="/prof/create/write">신규강좌 개설
          </router-link>
          <router-link class="link-body-emphasis d-inline-flex text-decoration-none rounded"
                       to="/prof/create/list">신규강의 신청내역
          </router-link>
        </div>
      </div>
    </li>

    <!-- 강의 -->
    <li class="nav-item">
      <a aria-controls="collapseUtilities" aria-expanded="true" class="nav-link collapsed" data-bs-target="#lecture-collapse"
         data-bs-toggle="collapse" href="#">
        <span><h6>강의</h6></span>
      </a>
      <div id="lecture-collapse" aria-labelledby="headingUtilities" class="collapse"
           data-parent="#accordionSidebar">
        <div class="bg-white py-2 collapse-inner rounded">
          <router-link class="link-body-emphasis d-inline-flex text-decoration-none rounded"
                       to="/prof/lecture/list">강의정보 확인
          </router-link>
          <br>
          <router-link class="link-body-emphasis d-inline-flex text-decoration-none rounded"
                       to="/prof/student/homework/write">새로운 과제생성
          </router-link>
          <br>
          <router-link class="link-body-emphasis d-inline-flex text-decoration-none rounded"
                       to="/prof/lecture/cancelled/list">휴강
          </router-link>
        </div>
      </div>
    </li>

    <!-- 학생관리 -->
    <li class="nav-item">
      <a aria-controls="collapseUtilities" aria-expanded="true" class="nav-link collapsed" data-bs-target="#student-collapse"
         data-bs-toggle="collapse" href="#">
        <span><h6>학생관리</h6></span>
      </a>
      <div id="student-collapse" class="collapse" data-parent="#accordionSidebar">
        <div class="bg-white py-2 collapse-inner rounded">
          <router-link class="link-body-emphasis d-inline-flex text-decoration-none rounded"
                       to="/prof/student/attendance">학생 출석관리
          </router-link>
          <br>
          <router-link class="link-body-emphasis d-inline-flex text-decoration-none rounded"
                       to="/prof/student/homework/check">과제 제출현황
          </router-link>
        </div>
      </div>
    </li>

    <!-- 강의평가 -->
    <li class="nav-item">
      <a aria-controls="collapseUtilities" aria-expanded="true" class="nav-link collapsed" data-bs-target="#rating-collapse"
         data-bs-toggle="collapse" href="#">
        <span><h6>강의평가</h6></span>
      </a>
      <div id="rating-collapse" class="collapse" data-parent="#accordionSidebar">
        <div class="bg-white py-2 collapse-inner rounded">
          <router-link class="link-body-emphasis d-inline-flex text-decoration-none rounded"
                       to="/prof/lecture/rating">강의 평가내역
          </router-link>
        </div>
      </div>
    </li>

    <!-- 공지사항 -->
    <li class="nav-item">
      <a aria-controls="collapseUtilities" aria-expanded="true" class="nav-link collapsed" data-bs-target="#notice-collapse"
         data-bs-toggle="collapse" href="#">
        <span><h6>공지사항</h6></span>
      </a>
      <div id="notice-collapse" class="collapse" data-parent="#accordionSidebar">
        <div class="bg-white py-2 collapse-inner rounded">
          <router-link class="link-body-emphasis d-inline-flex text-decoration-none rounded"
                       to="/prof/notice/list">전체 공지
          </router-link>
          <br>
          <router-link class="link-body-emphasis d-inline-flex text-decoration-none rounded"
                       to="/prof/schedule/list">학사 일정
          </router-link>
        </div>
      </div>
    </li>

    <!-- 급여 -->
    <li class="nav-item">
      <a aria-controls="collapseUtilities" aria-expanded="true" class="nav-link collapsed" data-bs-target="#salary-collapse"
         data-bs-toggle="collapse" href="#">
        <span><h6>급여</h6></span>
      </a>
      <div id="salary-collapse" class="collapse" data-parent="#accordionSidebar">
        <div class="bg-white py-2 collapse-inner rounded">
          <router-link class="link-body-emphasis d-inline-flex text-decoration-none rounded"
                       to="/prof/salary">급여명세서
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

