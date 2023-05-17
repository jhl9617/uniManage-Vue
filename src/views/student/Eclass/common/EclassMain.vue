<template>

  <div class="container-fluid">
    <div class="row">
      <div class="col-md-2">
        <div class="col">
          <div class="d-flex flex-column align-items-center text-center">
            <img alt="Admin" class="rounded-circle" src="https://bootdey.com/img/Content/avatar/avatar7.png"
                 width="150">
            <div class="mt-3">
              <h4>OOO 학생</h4>
              <p class="text-secondary mb-1"> OO 학과</p>

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




          </table>
        </div>
      </div>
    </div>
    <PageFooter/>
  </div>
</template>

<script>
export default {
  data() { //변수생성
    return {
      requestBody: {},
      list: [],
      lecture_id : this.$route.query.lecture_id ? this.$route.query.lecture_id : ''
    }
  },
  mounted() { // document.ready, window.onload와 같은 형태
    this.fnGetView()
  },
  methods: {
    fnGetView() {

      this.$axios.get(this.$serverUrl + '/Eclass' , {}).
      then((res) => { //success
        console.log(res.data);
        this.list = res.data
        this.lecture_id = res.data.lecture_id

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
  }
}


</script>
<style scoped>
</style>
