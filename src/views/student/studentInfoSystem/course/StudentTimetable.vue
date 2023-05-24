<template>
    <h6>수강과목시간표</h6>
    <table class="table table-bordered" align="center" width="505">
    <tr align="left">
        <th width="100">년도</th>
        <td width="200">
            <select v-model="year" >
                <option value="">- 선택 -</option>
                <option value="2023">2023</option>
                <option value="2022">2022</option>
                <option value="2021">2021</option>
            </select>
        </td>
        <th width="100">학기</th>
        <td width="200">
            <select v-model="semester">
                <option value="">- 선택 -</option>
                <option value="01">1학기</option>
                <option value="02">2학기</option>
            </select>
        </td>
    </tr>
    </table>
    <button v-on:click="fnGetView">조회</button>
    <br><br>
  강의 시간표
  <br>
  <table class="w3-table-all table-bordered table-fixed">

    <thead>
    <tr>
      <th>시간</th>
      <th>월</th>
      <th>화</th>
      <th>수</th>
      <th>목</th>
      <th>금</th>
    </tr>
    </thead>
    <tbody>
    <tr v-for="time in times" :key="time">
      <td>{{ time }}</td>
      <td v-if="hasCourse(time, 'MON')" style="white-space: pre-line;">{{ getCourse(time, 'MON') }}</td>
      <td v-else></td>
      <td v-if="hasCourse(time, 'TUE')" style="white-space: pre-line;">{{ getCourse(time, 'TUE') }}</td>
      <td v-else></td>
      <td v-if="hasCourse(time, 'WED')" style="white-space: pre-line;">{{ getCourse(time, 'WED') }}</td>
      <td v-else></td>
      <td v-if="hasCourse(time, 'THU')" style="white-space: pre-line;">{{ getCourse(time, 'THU') }}</td>
      <td v-else></td>
      <td v-if="hasCourse(time, 'FRI')" style="white-space: pre-line;">{{ getCourse(time, 'FRI') }}</td>
      <td v-else></td>
    </tr>
    </tbody>
  </table>
</template>

<script>
export default {
  data() { //변수생성
    return {
      member_id: this.$route.query.member_id ? this.$route.query.member_id : '',
      loginMember: null,
      times: ['01', '02', '03', '04', '05', '06', '07', '08'], // 시간대 목록
      requestBody: {},
      list: [],
      lecture_id: '',
      course_regi_term : this.year + this.semester,
      year : '',
      semester : ''

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
      this.course_regi_term = this.year + this.semester;
      this.requestBody.course_regi_term = this.course_regi_term;

      this.$axios.get(this.$serverUrl + '/student/studenttimetable/' + this.member_id, {
        params: this.requestBody
      }).then((res) => {
        this.list = res.data;
        this.lecture_id = res.data.lecture_id;
        console.log(this.list);
      }).catch((err) => {
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

    // Check if a course exists at a specific time and day
    hasCourse(time, day) {
      return this.list.some(row => row.timecode1 === `${day}${time}` || row.timecode2 === `${day}${time}` || row.timecode3 === `${day}${time}`);
    },

    // Get the course title for a specific time and day
    getCourse(time, day) {
      const course = this.list.find(row => row.timecode1 === `${day}${time}` || row.timecode2 === `${day}${time}` || row.timecode3 === `${day}${time}`);
      if (course) {
        const lectureTitle = course.lecture_title || '';
        const roomCode1 = course.roomcode1 || '';
        const roomCode2 = course.roomcode2 || '';
        const roomCode3 = course.roomcode3 || '';
        return `${lectureTitle}\n ${roomCode1} ${roomCode2} ${roomCode3}`;
      } else {
        return '';
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
  }
}
</script>

<style scoped>
.table-fixed {
  table-layout: fixed;
}

.table-fixed th,
.table-fixed td {
  padding: 10px;
  text-align: center;
}
</style>