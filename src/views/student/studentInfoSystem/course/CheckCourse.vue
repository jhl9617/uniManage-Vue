<template>
    <h6>수강신청내역조회</h6>
    <table class="table table-bordered" align="center" width="505">
        <tr align="left">
            <th width="100">년도</th>
            <td width="200">
                <select>
                    <option value="">- 선택 -</option>
                    <option value="year">2023</option>
                    <option value="year">2022</option>
                    <option value="year">2021</option>
                </select>
            </td>
            <th width="100">학기</th>
            <td width="200">
                <select>
                    <option value="">- 선택 -</option>
                    <option value="semester">1학기</option>
                    <option value="semester">2학기</option>
                </select>
            </td>
        </tr>
    </table>
    <button>조회</button>
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
      year: '',
      semester: ''

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
      this.$axios.get(this.$serverUrl + '/student/checkcourse/' + this.member_id, {
        params: this.requestBody
      })
          .then((res) => {
            this.list = res.data;
            this.lecture_id = res.data.lecture_id;
            console.log(this.list);
          })
          .catch((err) => {
            if (err.message.indexOf('Network Error') > -1) {
              alert('네트워크가 원활하지 않습니다.\n잠시 후 다시 시도해주세요.');
            }
          });
    },


    fnView(course_regi_term) {
      this.requestBody.course_regi_term = course_regi_term
      this.$router.push({
        path: '/student/studenttimetable',
        query: this.requestBody
      })
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