<template>

  <div class="container-fluid">
    <div class="row">
      <div class="col-md-2">
        <div class="col">
          <div class="d-flex flex-column align-items-center text-center">
            <img alt="Admin" class="rounded-circle" src="https://bootdey.com/img/Content/avatar/avatar7.png"
                 width="150">
            <div class="mt-3">
              <h4 v-if="loginMember">{{ loginMember.name }} 학생</h4>
              <p class="text-secondary mb-1"> {{ loginMember.department_name }}</p>

            </div>
          </div>
        </div>
      </div>
      <div class="col-md-1">

      </div>
      <div class="col-md-9">
        내 강의실
        <br><br>
        <div class="container-fluid">
          <table class="w3-table-all">
            <tr>
              <td>번호</td>
              <td>강의명</td>
              <td>강의시간</td>
              <td>바로가기</td>
            </tr>
            <tr>
              <td>번호</td>
              <td>강의명</td>
              <td>강의시간</td>
              <td>
                <router-link to="/eclass/lecture">
                  <button class="btn btn-outline-info" type="button">바로가기</button>
                </router-link>
              </td>
            </tr>
            <tr v-for="(row, index) in list" :key="index">
              <td>{{ row.course_regi_id }}</td>
              <td>{{ row.lecture_title }}</td>
              <td>{{ row.timecode1 }} {{ row.timecode2 }} {{ row.timecode3 }}</td>
              <td>
                <a v-on:click="fnView(`${row.lecture_id}`)"><button class="btn btn-outline-info" type="button">바로가기</button>
                </a>
              </td>
            </tr>
       </table><br><br>
        </div>강의 시간표
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
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() { //변수생성
    return {
      member_id : this.$route.query.member_id ? this.$route.query.member_id : '',
      loginMember: null,
      times: ['01', '02', '03', '04', '05', '06', '07', '08'], // 시간대 목록
      requestBody: {},
      list: [],
      lecture_id : ''
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

      this.$axios.get(this.$serverUrl + '/eclass/' + this.member_id , {
        params : this.requestBody
      }).
      then((res) => { //success

        this.list = res.data
        this.lecture_id = res.data.lecture_id
        console.log(this.list);
        }).catch((err) => { // error
        if (err.message.indexOf('Network Error') > -1) {
          alert('네트워크가 원활하지 않습니다.\n잠시 후 다시 시도해주세요.')
        }
      })
      this.requestBody = { // 데이터 전송
        lecture_id : this.lecture_id
      }
    },

    fnView(lecture_id) {
      this.requestBody.lecture_id = lecture_id
      this.$router.push({
        path: 'eclass/lecture',
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
<style>
.table-fixed {
  table-layout: fixed;
}

.table-fixed th,
.table-fixed td {
  padding: 10px;
  text-align: center;
}
</style>