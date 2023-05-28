<!-- PageSidebar.vue -->
<template>
    <ul class="navbar-nav sidebar sidebar-dark accordion" id="accordionSidebar">
<!--        <li><router-link to="/"> Home </router-link></li>-->
        <br>
        <li><ClockComponent/></li>
        <br>
<!--        <li><button class="w3-button w3-round w3-blue-gray" v-on:click="logout" type="button">로그아웃</button></li>-->
        <li><button class="w3-button w3-round w3-blue-gray" v-on:click="fnHome" type="button">Home</button></li>
        <br>
        <!-- Nav Item - Dashboard -->
        <li class="nav-item active">
            <router-link class="nav-link" to="/student">
                <span>학생정보시스템</span>
            </router-link>
        </li>
        <li class="nav-item active">
            <a class="nav-link" v-on:click="fnEclass" style="cursor: pointer;">
                <span>E-Class</span>
            </a>
        </li>
        <!-- Divider -->
        <hr class="sidebar-divider">

        <li class="nav-item">
            <a class="nav-link collapsed" href="#" data-bs-toggle="collapse" data-bs-target="#sugang-collapse"
               aria-expanded="true" aria-controls="collapseUtilities">
                <span>수강신청</span>
            </a>
            <div id="sugang-collapse" class="collapse" data-parent="#accordionSidebar">
                <div class="bg-white py-2 collapse-inner rounded">
                    <router-link to="/student/sugang"
                                 class="link-body-emphasis d-inline-flex text-decoration-none rounded">수강신청
                    </router-link>
                    <br>
                </div>
            </div>
        </li>

        <!-- 학적/장학 -->
        <li class="nav-item">
            <a class="nav-link collapsed" href="#" data-bs-toggle="collapse" data-bs-target="#info-collapse"
               aria-expanded="true" aria-controls="info-collapse">
                <span>학적/장학</span>
            </a>
            <div id="info-collapse" class="collapse" data-parent="#accordionSidebar">
                <div class="bg-white py-2 collapse-inner rounded">
                    <a v-on:click="fnStatus" style="cursor: pointer;">
                        <span>학적변동내역</span>
                    </a>
                    <br>
                    <router-link to="/student/takeoff" class="link-body-emphasis d-inline-flex text-decoration-none rounded">
                         <span>휴학신청</span>
                    </router-link>
                    <br>
                    <router-link to="/student/return" class="link-body-emphasis d-inline-flex text-decoration-none rounded">
                         <span>복학신청</span>
                    </router-link>
                    <br>
                    <a v-on:click="fnScho" style="cursor: pointer;">
                        <span>장학수혜내역조회</span>
                    </a>
                </div>
            </div>
        </li>

        <!-- 성적 -->
        <li class="nav-item">
            <a class="nav-link collapsed" href="#" data-bs-toggle="collapse" data-bs-target="#student-collapse"
               aria-expanded="true" aria-controls="collapseUtilities">
                <span>성적</span>
            </a>
            <div id="student-collapse" class="collapse" data-parent="#accordionSidebar">
                <div class="bg-white py-2 collapse-inner rounded">
                    <a v-on:click="fnScore" style="cursor: pointer;">
                        <span>수강성적조회</span>
                    </a>
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
                    <br>
                    <router-link to="/student/studenttimetable"
                                 class="link-body-emphasis d-inline-flex text-decoration-none rounded">수강과목시간표
                    </router-link>
                    <br>
                    <router-link to="/student/checkcourse"
                                 class="link-body-emphasis d-inline-flex text-decoration-none rounded">수강신청내역조회
                    </router-link>
                </div>
            </div>
        </li>

        <!-- 강의평가 -->
        <li class="nav-item">
            <a class="nav-link collapsed" href="#" data-bs-toggle="collapse" data-bs-target="#rating-collapse"
               aria-expanded="true" aria-controls="collapseUtilities">
                <span>강의평가</span>
            </a>
            <div id="rating-collapse" class="collapse" data-parent="#accordionSidebar">
                <div class="bg-white py-2 collapse-inner rounded">
                    <a v-on:click="fnSurvey"
                                 class="link-body-emphasis d-inline-flex text-decoration-none rounded" style="cursor: pointer;">강의평가 작성
                    </a>
                </div>
            </div>
        </li>
    </ul>
</template>

<script>
import ClockComponent from "@/components/common/ClockComponent.vue";

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
      fnHome() {
          if (this.loginMember) {
              this.$router.push({
                  path: '/',
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
      },
    components: {
        ClockComponent,
    },

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

