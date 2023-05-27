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


  </ul>
</template>

<script>
export default {
  data() { //변수생성
    return {
      loginMember: null,
    }
  },
  created() {
    this.getSession();
  },
  methods: {
    fnEclass() {
      if (this.loginMember) {
        const member_id = this.loginMember.member_id;
        this.$router.push({
          path: '/eclass',
          query: {member_id}
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
    // logout() {
    //   this.$axios.post('/logout')
    //       .then(response => {
    //         console.log(response)
    //         this.$router.push({
    //           path: '/'
    //
    //         })
    //       })
    //       .catch(error => {
    //         // 로그아웃 실패 시 처리할 로직 작성
    //         console.error(error);
    //       });
    // }

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

