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
            <a class="nav-link" v-on:click="fnEclass">
                <span>E-Class</span>
            </a>
        </li>
        <!-- Divider -->
        <hr class="sidebar-divider">

        <!--  -->
        <li class="nav-item">
            <router-link class="nav-link collapsed" to="/student/sugang">
                <span>수강신청</span>
            </router-link>
        </li>

        <!-- 학적/장학 -->
        <li class="nav-item">
            <a class="nav-link collapsed" href="#" data-bs-toggle="collapse" data-bs-target="#info-collapse"
               aria-expanded="true" aria-controls="info-collapse">
                <span>학적/장학</span>
            </a>
            <div id="info-collapse" class="collapse" data-parent="#accordionSidebar">
                <div class="bg-white py-2 collapse-inner rounded">
                    <router-link to="/student/status" class="link-body-emphasis d-inline-flex text-decoration-none rounded">
                         <span>학적변동내역</span>
                    </router-link>
                    <br>
                    <router-link to="/student/takeoff" class="link-body-emphasis d-inline-flex text-decoration-none rounded">
                         <span>휴학신청</span>
                    </router-link>
                    <br>
                    <router-link to="/student/return" class="link-body-emphasis d-inline-flex text-decoration-none rounded">
                         <span>복학신청</span>
                    </router-link>
                    <br>
                    <router-link to="/student/checkscholarship" class="link-body-emphasis d-inline-flex text-decoration-none rounded">
                         <span>장학수혜내역조회</span>
                    </router-link>
                </div>
            </div>
        </li>

        <!-- 교과/수강 -->
        <li class="nav-item">
            <a class="nav-link collapsed" href="#" data-bs-toggle="collapse" data-bs-target="#create-collapse"
               aria-expanded="true" aria-controls="collapseUtilities">
                <span>교과/수강</span>
            </a>
            <div id="create-collapse" class="collapse" data-parent="#accordionSidebar">
                <div class="bg-white py-2 collapse-inner rounded">
                    <router-link to="/student/timelinebydepart"
                                 class="link-body-emphasis d-inline-flex text-decoration-none rounded">학과별강의시간표
                    </router-link>
                    <router-link to="/student/studenttimetable"
                                 class="link-body-emphasis d-inline-flex text-decoration-none rounded">수강과목시간표
                    </router-link>
                    <router-link to="/student/checkcourse"
                                 class="link-body-emphasis d-inline-flex text-decoration-none rounded">수강신청내역조회
                    </router-link>
                </div>
            </div>
        </li>

        <!-- 등록 -->
        <li class="nav-item">
            <a class="nav-link collapsed" href="#" data-bs-toggle="collapse" data-bs-target="#lecture-collapse"
               aria-expanded="true" aria-controls="collapseUtilities">
                <span>등록</span>
            </a>
            <div id="lecture-collapse" class="collapse" aria-labelledby="headingUtilities"
                 data-parent="#accordionSidebar">
                <div class="bg-white py-2 collapse-inner rounded">
                    <router-link to="/student/payreceipt"
                                 class="link-body-emphasis d-inline-flex text-decoration-none rounded">등록금납입증명서
                    </router-link>
                    <router-link to="/student/printreceipt"
                                 class="link-body-emphasis d-inline-flex text-decoration-none rounded">등록금고지서출력
                    </router-link>
                </div>
            </div>
        </li>

        <!-- 성적/졸업 -->
        <li class="nav-item">
            <a class="nav-link collapsed" href="#" data-bs-toggle="collapse" data-bs-target="#student-collapse"
               aria-expanded="true" aria-controls="collapseUtilities">
                <span>성적/졸업</span>
            </a>
            <div id="student-collapse" class="collapse" data-parent="#accordionSidebar">
                <div class="bg-white py-2 collapse-inner rounded">
                    <router-link to="/student/checkcredit"
                                 class="link-body-emphasis d-inline-flex text-decoration-none rounded">
                        <span>졸업학점조회</span>
                    </router-link>
                    <br>
                    <router-link to="/student/checkgrade"
                                 class="link-body-emphasis d-inline-flex text-decoration-none rounded">
                        <span>수강성적조회</span>
                    </router-link>
                </div>
            </div>
        </li>

        <!-- 자유게시판 -->
        <li class="nav-item">
            <a class="nav-link collapsed" href="#" data-bs-toggle="collapse" data-bs-target="#rating-collapse"
               aria-expanded="true" aria-controls="collapseUtilities">
                <span>강의평가</span>
            </a>
            <div id="rating-collapse" class="collapse" data-parent="#accordionSidebar">
                <div class="bg-white py-2 collapse-inner rounded">
                    <router-link to="/student/surveycourse"
                                 class="link-body-emphasis d-inline-flex text-decoration-none rounded">강의평가 작성
                    </router-link>
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
        member_id : this.member_id
      }
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

.collapse{
    background-color: #c6dddc;

}

ul li a span {
    color: black;
}
</style>

