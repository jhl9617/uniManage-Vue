<template>
  <div class="col-md-12">
    <div class="container">
      <div class="row">
        <div class="col-md-6">
          <div class="d-flex flex-column align-items-center text-center">
            <fieldset>
              <legend>개인정보
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              </legend>
              <table>
                <tr>
                  <td>
                    <img src="https://bootdey.com/img/Content/avatar/avatar7.png" alt="Admin"
                         class="rounded-circle" width="150">
                  </td>
                  <td>
                    <div class="mt-3">
                      <h4 v-if="loginMember">{{ loginMember.name }} 교수님</h4>
                      <div align="left" class="text-secondary mb-1">
                        <h6 v-if="loginMember">소속 : {{ loginMember.department_name }}</h6>
                        <h6>구분 : 재직</h6>
                      </div>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td>
                    <button class="btn btn-primary">비밀번호변경</button>
                  </td>
                </tr>
              </table>
            </fieldset>
          </div>

        </div>
        <div class="col-md-6">
          <fieldset>
            <legend>공지사항 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              <button v-on:click="fnNoticeList(notice_id)" class="btn btn-outline-dark" type="button">전체보기</button>
            </legend>

            <table class="w3-table-all">
              <tr>
                <td>No</td>
                <td>글제목</td>
                <td>작성일</td>
              </tr>
              <tr v-for="notice in sortedNotice" :key="notice.notice_id">
                <td>{{ notice.notice_id }}</td>
                <td><a v-on:click="fnNotice(`${notice.notice_id}`)">{{ notice.notice_title }}</a></td>
                <td>{{ notice.created_date }}</td>
              </tr>
            </table>
          </fieldset>
        </div>
      </div>
      <br>
      <div class="row">
        <div class="col-md-6">
          <fieldset>
            <legend>시간표</legend>
            <table class="w3-table-all">
              <tr>
                <td></td>
                <td>월</td>
                <td>화</td>
                <td>수</td>
                <td>목</td>
                <td>금</td>
              </tr>
              <tr>
                <td>1</td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
              </tr>
              <tr>
                <td>2</td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
              </tr>
              <tr>
                <td>3</td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
              </tr>
              <tr>
                <td>4</td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
              </tr>
              <tr>
                <td>5</td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
              </tr>
              <tr>
                <td>6</td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
              </tr>
              <tr>
                <td>7</td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
              </tr>
              <tr>
                <td>8</td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
              </tr>
              <tr>
                <td>9</td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
              </tr>
            </table>
          </fieldset>
        </div>
        <div class="col-md-6">
          <fieldset>
            <legend>학사일정&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              <button v-on:click="fnScheList(sche_id)" class="btn btn-outline-dark" type="button">전체보기</button>
            </legend>

            <table class="w3-table-all">
              <tr>
                <td>No</td>
                <td>글제목</td>
                <td>시작일</td>
                <td>끝일</td>
              </tr>
              <tr v-for="sche in sortedSche" :key="sche.sche_id">
                <td>{{ sche.sche_id }}</td>
                <td><a v-on:click="fnSche(`${sche.sche_id}`)">{{ sche.sche_title }}</a></td>
                <td>{{ sche.start_date }}</td>
                <td>{{ sche.end_date }}</td>
              </tr>
            </table>
          </fieldset>
        </div>
      </div>
    </div>
  </div>
</template>
<script>

export default {
  data() {
    return {
      loginMember: null,
      notice: [],
      sche: [],
    };
  },
  mounted() { // document.ready, window.onload와 같은 형태
    this.fnGetView()
  },
  methods: {
    fnGetView() {

      this.$axios.get(this.$serverUrl + '/prof/main', {
        params: this.requestBody
      }).then((res) => { //success
        console.log(res.data);
        this.notice = res.data.notice_dto
        this.sche = res.data.schedule_dto

      }).catch((err) => { // error
        if (err.message.indexOf('Network Error') > -1) {
          alert('네트워크가 원활하지 않습니다.\n잠시 후 다시 시도해주세요.')
        }
      })
      this.requestBody = { // 데이터 전송
        member_id : this.member_id
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
    },fnNoticeList(notice_id){
      this.notice_id = notice_id
      this.$router.push({
        path: '/prof/notice/list',
        query: this.requestBody
      })
    },
    fnNotice(notice_id){
      this.requestBody.notice_id = notice_id
      this.$router.push({
        path: '/student/notice/detail',
        query: this.requestBody
      })
    },
    fnScheList(sche_id){
      this.sche_id = sche_id
      this.$router.push({
        path: '/prof/schedule/list',
        query: this.requestBody
      })
    },
  },
  computed: {
    sortedNotice(){
      return this.notice
          .slice() // 원본 배열을 변경하지 않기 위해 복사
          .sort((a, b) => b.notice_id - a.notice_id) // id를 내림차순으로 정렬
          .slice(0, 5) // 최대 4개의 항목 추출
    },
    sortedSche(){
      return this.sche
          .slice() // 원본 배열을 변경하지 않기 위해 복사
          .sort((a, b) => b.sche_id - a.sche_id) // id를 내림차순으로 정렬
          .slice(0, 5) // 최대 4개의 항목 추출
    }
  },
  created() {
    this.getSession();
  },
};

</script>
<style scoped>
table tr th {
  text-align: center;
}
table tr td {
  text-align: center;
}
</style>