<template>


  <h6>강의평가</h6>
  <div>
    여러분의 답변은 연구 및 교육 목적으로만 사용될 것이며 개인정보가 공개되지 않음을 알려드립니다. <br>솔직하고 신중한 답변 부탁드립니다. 감사합니다.
  </div>
  <div align="left" style="border:1px solid black; padding:10px;">
    <select id="lectureTitle" v-model="lecture_id" >
      <option value="">수강중인 강의를 선택하세요</option>
      <option v-for="lecture in list" :value="lecture.lecture_id" :key="lecture.id">
        {{ lecture.lecture_title }}
      </option>
    </select> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
    -평가하실 강의를 선택 후 문항을 읽고 가장 적절한 곳에 체크해 주세요.

    <table class="table table-bordered" align="center">
      <!-- 문항 1 -->
      <tr align="left">
        <td align="center" valign="center" width="50" rowspan="2">1</td>
        <td width="500">전공강의의 수와 종류에 만족한다.</td>
      </tr>
      <tr align="left">
        <td width="500">
          <input type="radio" v-model="score1"  value="1">전혀 그렇지 않다. &nbsp;
          <input type="radio" v-model="score1" value="2">그렇지 않다. &nbsp;
          <input type="radio" v-model="score1" value="3">보통이다. &nbsp;
          <input type="radio" v-model="score1" value="4">그렇다. &nbsp;
          <input type="radio" v-model="score1" value="5">매우 그렇다. &nbsp;
        </td>
      </tr>

      <!-- 문항 2 -->
      <tr align="left">
        <td align="center" valign="center" width="50" rowspan="2">2</td>
        <td width="500">전공강의의 질과 수준에 만족한다.</td>
      </tr>
      <tr align="left">
        <td width="500">
          <input type="radio" v-model="score2" value="1">전혀 그렇지 않다. &nbsp;
          <input type="radio" v-model="score2" value="2">그렇지 않다. &nbsp;
          <input type="radio" v-model="score2" value="3">보통이다. &nbsp;
          <input type="radio" v-model="score2" value="4">그렇다. &nbsp;
          <input type="radio" v-model="score2" value="5">매우 그렇다. &nbsp;
        </td>
      </tr>

      <!-- 문항 3 -->
      <tr align="left">
        <td align="center" valign="center" width="50" rowspan="2">3</td>
        <td width="500">강의 내용이 이해하기 쉽게 전달된다.</td>
      </tr>
      <tr align="left">
        <td width="500">
          <input type="radio" v-model="score3" value="1">전혀 그렇지 않다. &nbsp;
          <input type="radio" v-model="score3" value="2">그렇지 않다. &nbsp;
          <input type="radio" v-model="score3" value="3">보통이다. &nbsp;
          <input type="radio" v-model="score3" value="4">그렇다. &nbsp;
          <input type="radio" v-model="score3" value="5">매우 그렇다. &nbsp;
        </td>
      </tr>

      <!-- 문항 4 -->
      <tr align="left">
        <td align="center" valign="center" width="50" rowspan="2">4</td>
        <td width="500">담당교수의 전달력과 열정이 느껴진다.</td>
      </tr>
      <tr align="left">
        <td width="500">
          <input type="radio" v-model="score4" value="1">전혀 그렇지 않다. &nbsp;
          <input type="radio" v-model="score4" value="2">그렇지 않다. &nbsp;
          <input type="radio" v-model="score4" value="3">보통이다. &nbsp;
          <input type="radio" v-model="score4" value="4">그렇다. &nbsp;
          <input type="radio" v-model="score4" value="5">매우 그렇다. &nbsp;
        </td>
      </tr>

      <!-- 문항 5 -->
      <tr align="left">
        <td align="center" valign="center" width="50" rowspan="2">5</td>
        <td width="500">강의와 관련된 자료와 참고문헌이 충분하게 제공된다.</td>
      </tr>
      <tr align="left">
        <td width="500">
          <input type="radio" v-model="score5" value="1">전혀 그렇지 않다. &nbsp;
          <input type="radio" v-model="score5" value="2">그렇지 않다. &nbsp;
          <input type="radio" v-model="score5" value="3">보통이다. &nbsp;
          <input type="radio" v-model="score5" value="4">그렇다. &nbsp;
          <input type="radio" v-model="score5" value="5">매우 그렇다. &nbsp;
        </td>
      </tr>
    </table>

    <!-- textarea 입력 -->
    <div>
      <label for="comments">기타 의견:</label><br>
      <textarea id="comments" v-model="comments" rows="4" cols="140"></textarea>
    </div>

    <br>
    <div class="common-buttons">
      <button type="button" class="w3-button w3-round w3-blue-gray" v-on:click="fnSave">저장</button>
      </div>
  </div>
</template>


<script>
export default {
  data() { //변수생성
    return {
      member_id : this.$route.query.member_id ? this.$route.query.member_id : '',
      loginMember: null,
      requestBody: this.$route.query,
      list: [],
      lecture_id : '',
      score1 : '',
      score2 : '',
      score3 : '',
      score4 : '',
      score5 : '',
      comments : '',
      evaluation_id : this.$route.query.free_id

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

      this.$axios.get(this.$serverUrl + '/student/surveycourse/' + this.member_id, {
        params: this.requestBody
      }).then((res) => { //success

        this.list = res.data

        console.log(this.list);
      }).catch((err) => { // error
        if (err.message.indexOf('Network Error') > -1) {
          alert('네트워크가 원활하지 않습니다.\n잠시 후 다시 시도해주세요.')
        }
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
      this.requestBody = { // 데이터 전송
        member_id : this.member_id
      }
    },
    fnSave() {
      let apiUrl = this.$serverUrl + '/student/surveycourse'
      this.form = {
        "lecture_id": this.lecture_id,
        "score1": this.score1,
        "score2": this.score2,
        "score3": this.score3,
        "score4": this.score4,
        "score5": this.score5,
        "comments" : this.comments,
        "member_id": this.member_id,
        "evaluation_id" : this.evaluation_id
      }
       //INSERT
        this.$axios.post(apiUrl, this.form)
            .then((res) => {
              alert('강의평가 저장되었습니다.')
              this.fnView(res.data.member_id)
            }).catch((err) => {
          if (err.message.indexOf('Network Error') > -1) {
            alert('네트워크가 원활하지 않습니다.\n잠시 후 다시 시도해주세요.')
          }
        })
       }
    },
  fnView(member_id) {
    this.requestBody.member_id = member_id
    this.$router.push({
      path: '/student/surveycourse',
      query: this.requestBody
    })
  },
}
</script>

<style scoped>

</style>