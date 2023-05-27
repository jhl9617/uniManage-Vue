<!-- PageSidebar.vue -->
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
      <router-link class="nav-link" to="/student">
        <span><h4>학생정보시스템</h4></span>
      </router-link>
    </li>
    <li class="nav-item active">
      <a class="nav-link" style="cursor: pointer;" v-on:click="fnEclass">
        <span><h4>E-Class</h4></span>
      </a>
    </li>
    <!-- Divider -->
    <hr class="sidebar-divider">

    <li class="nav-item">
      <a aria-controls="collapseUtilities" aria-expanded="true" class="nav-link collapsed"
         data-bs-target="#sugang-collapse"
         data-bs-toggle="collapse" href="#">
        <span><h6>수강신청</h6></span>
      </a>
      <div id="sugang-collapse" class="collapse" data-parent="#accordionSidebar">
        <div class="bg-white py-2 collapse-inner rounded">
          <router-link class="link-body-emphasis d-inline-flex text-decoration-none rounded"
                       to="/student/sugang">수강신청
          </router-link>
          <br>
          <!--                    <router-link to="/student/courselist"-->
          <!--                                 class="link-body-emphasis d-inline-flex text-decoration-none rounded">수강신청내역-->
          <!--                    </router-link>-->
        </div>
      </div>
    </li>

    <!-- 학적/장학 -->
    <li class="nav-item">
      <a aria-controls="info-collapse" aria-expanded="true" class="nav-link collapsed" data-bs-target="#info-collapse"
         data-bs-toggle="collapse" href="#">
        <span><h6>학적/장학</h6></span>
      </a>
      <div id="info-collapse" class="collapse" data-parent="#accordionSidebar">
        <div class="bg-white py-2 collapse-inner rounded">
          <a style="cursor: pointer;" v-on:click="fnStatus">
            <span>학적변동내역</span>
          </a>
          <br>
          <router-link class="link-body-emphasis d-inline-flex text-decoration-none rounded" to="/student/takeoff">
            <span>휴학신청</span>
          </router-link>
          <br>
          <router-link class="link-body-emphasis d-inline-flex text-decoration-none rounded" to="/student/return">
            <span>복학신청</span>
          </router-link>
          <br>
          <a style="cursor: pointer;" v-on:click="fnScho">
            <span>장학수혜내역조회</span>
          </a>
        </div>
      </div>
    </li>

    <!-- 성적/졸업 -->
    <li class="nav-item">
      <a aria-controls="collapseUtilities" aria-expanded="true" class="nav-link collapsed"
         data-bs-target="#student-collapse"
         data-bs-toggle="collapse" href="#">
        <span><h6>성적/졸업</h6></span>
      </a>
      <div id="student-collapse" class="collapse" data-parent="#accordionSidebar">
        <div class="bg-white py-2 collapse-inner rounded">
          <router-link class="link-body-emphasis d-inline-flex text-decoration-none rounded"
                       to="/student/checkcredit">
            <span>졸업학점조회</span>
          </router-link>
          <br>
          <a style="cursor: pointer;" v-on:click="fnScore">
            <span>수강성적조회</span>
          </a>
        </div>
      </div>
    </li>

    <!-- 교과/수강 -->
    <li class="nav-item">
      <a aria-controls="collapseUtilities" aria-expanded="true" class="nav-link collapsed"
         data-bs-target="#create-collapse"
         data-bs-toggle="collapse" href="#">
        <span><h6>교과/수강</h6></span>
      </a>
      <div id="create-collapse" class="collapse" data-parent="#accordionSidebar">
        <div class="bg-white py-2 collapse-inner rounded">
          <router-link class="link-body-emphasis d-inline-flex text-decoration-none rounded"
                       to="/student/timelinebydepart">학과별강의시간표
          </router-link>
          <br>
          <router-link class="link-body-emphasis d-inline-flex text-decoration-none rounded"
                       to="/student/studenttimetable">수강과목시간표
          </router-link>
          <br>
          <router-link class="link-body-emphasis d-inline-flex text-decoration-none rounded"
                       to="/student/checkcourse">수강신청내역조회
          </router-link>
        </div>
      </div>
    </li>


    <!-- 강의평가 -->
    <li class="nav-item">
      <a aria-controls="collapseUtilities" aria-expanded="true" class="nav-link collapsed"
         data-bs-target="#rating-collapse"
         data-bs-toggle="collapse" href="#">
        <span><h6>강의평가</h6></span>
      </a>
      <div id="rating-collapse" class="collapse" data-parent="#accordionSidebar">
        <div class="bg-white py-2 collapse-inner rounded">
          <a class="link-body-emphasis d-inline-flex text-decoration-none rounded"
             style="cursor: pointer;" v-on:click="fnSurvey">강의평가 작성
          </a>
        </div>
      </div>
    </li>
  </ul>
</template>

<script>
export default {
  data() { //변수생성
    return {
      loginMember: null,
      requestBody: '',
    }
  },
  created() {
    this.getSession();
  },
  methods: {
    fnEclass() {
      if (this.loginMember) {
        this.requestBody = {
          member_id: this.loginMember.member_id
        };
        this.$router.push({
          path: '/eclass',
          query: this.requestBody
        });
      }
    },
    fnScho() {
      if (this.loginMember) {
        this.requestBody = {
          member_id: this.loginMember.member_id
        };
        this.$router.push({
          path: '/student/scholarship',
          query: this.requestBody
        });
      }
    },
    fnStatus() {
      if (this.loginMember) {
        this.requestBody = {
          member_id: this.loginMember.member_id
        };
        this.$router.push({
          path: '/student/status',
          query: this.requestBody
        });
      }
    },
    fnScore() {
      if (this.loginMember) {
        this.requestBody = {
          member_id: this.loginMember.member_id
        };
        this.$router.push({
          path: '/student/score',
          query: this.requestBody
        });
      }
    },
    fnSurvey() {
      if (this.loginMember) {
        this.requestBody = {
          member_id: this.loginMember.member_id
        };
        this.$router.push({
          path: '/student/surveycourse',
          query: this.requestBody
        });
      }
    },
    async getSession() {
      try {
        const response = await fetch("/sessionCheck");
        if (response.status === 200) {
          const data = await response.json();
          console.log("Session data:", data);
          this.loginMember = data;
        } else {
          console.error("Error fetching session data");
        }
      } catch (error) {
        console.error("Error fetching session data:", error);
      }
      this.requestBody = { // 데이터 전송
        member_id: this.member_id
      }
    },
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

.collapse {
  background-color: #c6dddc;

}

ul li a span {
  color: black;
}
</style>

