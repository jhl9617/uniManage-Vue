<!-- LectureSidebar.vue -->
<template>
    <ul class="navbar-nav sidebar sidebar-dark accordion" id="accordionSidebar">
        <li>&nbsp;</li>
        <li><button class="btn btn-primary" v-on:click="logout" type="button">로그아웃</button></li>
        <li class="nav-item active">
            <a class="nav-link" v-on:click="fnEclass">
                <span>학생정보시스템</span>
            </a>
        </li>
        <li class="nav-item active">
            <a class="nav-link" v-on:click="fnEclass">
                <span>E-Class</span>
            </a>
        </li>
        <li>&nbsp;</li>
        <!-- Nav Item - Dashboard -->
        <li class="nav-item active">
            <a class="nav-link" v-on:click="fnMain(`${lecture_id}`)">
                <span>Home</span>
            </a>
        </li>
        <!-- Divider -->
        <hr class="sidebar-divider">

        <!-- 강의정보 -->
        <li class="nav-item">
            <a class="nav-link collapsed" href="#" data-bs-toggle="collapse" data-bs-target="#lectureinfo-collapse"
               aria-expanded="true" aria-controls="info-collapse">
                <span>강의 정보</span>
            </a>
            <div id="lectureinfo-collapse" class="collapse" data-parent="#accordionSidebar">
                <div class="bg-white py-2 collapse-inner rounded">
                  <a v-on:click="fnLectureInfo(lecture_id)">
                        강의정보 조회
                  </a>
                </div>
            </div>
        </li>

        <!-- 과제관리 -->
        <li class="nav-item">
            <a class="nav-link collapsed" href="#" data-bs-toggle="collapse" data-bs-target="#homework-collapse"
               aria-expanded="true" aria-controls="collapseUtilities">
                <span>과제 관리</span>
            </a>
            <div id="homework-collapse" class="collapse" data-parent="#accordionSidebar">
                <div class="bg-white py-2 collapse-inner rounded">
                    <a v-on:click="fnHomework(lecture_id)"
                                 class="link-body-emphasis d-inline-flex text-decoration-none rounded">과제 목록
                    </a>
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
                    <a v-on:click="fnNotice(lecture_id)"
                                 class="link-body-emphasis d-inline-flex text-decoration-none rounded">강의 공지사항 조회
                    </a>
                </div>
            </div>
        </li>

        <!-- 강의 자료실 -->
        <li class="nav-item">
            <a class="nav-link collapsed" href="#" data-bs-toggle="collapse" data-bs-target="#source-collapse"
               aria-expanded="true" aria-controls="collapseUtilities">
                <span>강의 자료실</span>
            </a>
            <div id="source-collapse" class="collapse" data-parent="#accordionSidebar">
                <div class="bg-white py-2 collapse-inner rounded">
                    <a v-on:click="fnSource(lecture_id)"
                                 class="link-body-emphasis d-inline-flex text-decoration-none rounded">강의자료 조회
                    </a>
                </div>
            </div>
        </li>

        <!-- 자유게시판 -->
        <li class="nav-item">
            <a class="nav-link collapsed" href="#" data-bs-toggle="collapse" data-bs-target="#board-collapse"
               aria-expanded="true" aria-controls="collapseUtilities">
                <span>게시판</span>
            </a>
            <div id="board-collapse" class="collapse" data-parent="#accordionSidebar">
                <div class="bg-white py-2 collapse-inner rounded">
                    <router-link to="/eclass/lecture/board/list"
                                 class="link-body-emphasis d-inline-flex text-decoration-none rounded">자유게시판
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
      requestBody: this.$route.query,
      lecture_id : this.$route.query.lecture_id,
      member_id : '',
      classification : '',
      semester : '',
      department_id : '',
      lecture_title : '',
      number_of_student : '',
      credit : '',
      roomcode1 : '',
      roomcode2 : '',
      roomcode3 : '',
      timecode1 : '',
      timecode2 : '',
      timecode3 : '',
      syllabus_title : '',
      syllabus_rename : '',
      lecture_apply_status : '',
      name : '',
      department_name : ''
    }
  },
  mounted() { // document.ready, window.onload와 같은 형태
    this.fnGetView()
  },
  created() {
    this.getSession();
  },
  methods: {
    fnGetView() {

      this.$axios.get(this.$serverUrl + '/eclass/lecture/' + this.lecture_id , {
        params: this.requestBody
      }).then((res) => { //success
        console.log(this.requestBody);
        this.lecture = res.data.lecture_dto
        this.lecture_id = res.data.lecture_id
        this.member_id = res.data.member_id
        this.classification = res.data.classification
        this.semester = res.data.semester
        this.department_id = res.data.department_id
        this.lecture_title = res.data.lecture_title
        this.number_of_student = res.data.number_of_student
        this.credit = res.data.credit
        this.roomcode1 = res.data.roomcode1
        this.roomcode2 = res.data.roomcode2
        this.roomcode3 = res.data.roomcode3
        this.timecode1 = res.data.timecode1
        this.timecode2 = res.data.timecode2
        this.timecode3 = res.data.timecode3
        this.syllabus_title = res.data.syllabus_title
        this.syllabus_rename = res.data.syllabus_rename
        this.lecture_apply_status = res.data.lecture_apply_status
        this.name = res.data.name
        this.department_name = res.data.department_name

      }).catch((err) => { // error
        if (err.message.indexOf('Network Error') > -1) {
          alert('네트워크가 원활하지 않습니다.\n잠시 후 다시 시도해주세요.')
        }
      })
      this.requestBody = { // 데이터 전송
        lecture_id : this.lecture_id
      }
    },
    fnMain(lecture_id) {
      this.lecture_id = lecture_id
      this.$router.push({
        path: '/eclass/lecture',
        query: this.requestBody
      })
    },
    fnLectureInfo(lecture_id) {
      this.lecture_id = lecture_id
      this.$router.push({
        path: '/eclass/lecture/lectureinfo',
        query: this.requestBody
      })
    },
    fnHomework(lecture_id) {
      this.lecture_id = lecture_id
      this.$router.push({
        path: '/eclass/lecture/homework/list',
        query: this.requestBody
      })
    },
    fnNotice(lecture_id) {
      this.lecture_id = lecture_id
      this.$router.push({
        path: '/eclass/lecture/notice/list',
        query: this.requestBody
      })
    },
    fnSource(lecture_id) {
      this.lecture_id = lecture_id
      this.$router.push({
        path: '/eclass/lecture/source/list',
        query: this.requestBody
      })
    },
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

ul li a span {
    color: black;
}
</style>

