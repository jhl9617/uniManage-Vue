<template>
    <h6>수강신청내역조회</h6>
    <table class="table table-bordered" align="center" width="505">
        <tr align="left">
            <th width="100">년도</th>
            <td width="200">
                <select v-model="search_value1">
                    <option value="">- 선택 -</option>
                    <option value="2023">2023</option>
                    <option value="2022">2022</option>
                    <option value="2021">2021</option>
                </select>
            </td>
            <th width="100">학기</th>
            <td width="200">
                <select v-model="search_value2">
                    <option value="">- 선택 -</option>
                    <option value="01">1학기</option>
                    <option value="02">2학기</option>
                </select>
            </td>
        </tr>
    </table>
    <button v-on:click="fnGetView">조회</button>
    <br><br>
    <div align="left">

    </div>
    <br><br>
    <table class="table table-bordered" align="center" width="505">
        <tr>
            <th width="100">강좌번호</th>
            <th width="100">교과목명</th>
            <th width="100">담당교수</th>
            <th width="100">학점</th>
            <th width="100">요일 및 시간</th>
            <th width="100">강의실</th>
        </tr>
      <tr v-for="(row, index) in list" :key="index">
        <td>{{ row.lecture_id }}</td>
        <td>{{ row.lecture_title }}</td>
        <td>{{ row.name }}</td>
        <td>{{ row.credit }}</td>
        <td>{{ row.timecode1 }} {{ row.timecode2 }} {{ row.timecode3 }}</td>
        <td>{{ row.roomcode1 }} {{ row.roomcode2 }} {{ row.roomcode3 }}</td>
      </tr>

    </table>
</template>

<script>
export default {
  data() { //변수생성
    return {
      member_id: this.$route.query.member_id ? this.$route.query.member_id : '',
      loginMember: null,
      requestBody: {},
      list: [],
      lecture_id: '',
      search_value1: this.$route.query.sv1 ? this.$route.query.sv1 : '',
      search_value2: this.$route.query.sv2 ? this.$route.query.sv2 : '',

    }
  },
  mounted() { // document.ready, window.onload와 같은 형태

  },

  created() {
    this.getSession();
  },
  methods: {
    fnGetView() {
      this.requestBody = { // 데이터 전송
        sv1: this.loginMember.member_id,
        sv2: this.search_value1,
        sv3: this.search_value2
      }

      this.$axios.get(this.$serverUrl + '/student/checkcourse/', {
        params: this.requestBody
      })
          .then((res) => {
            this.list = res.data;


          })
          .catch((err) => {
            if (err.message.indexOf('Network Error') > -1) {
              alert('네트워크가 원활하지 않습니다.\n잠시 후 다시 시도해주세요.');
            }
          });
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
  }
}
</script>

<style scoped>

</style>