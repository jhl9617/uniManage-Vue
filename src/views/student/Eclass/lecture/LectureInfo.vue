  <template>
      강의정보

      <table class="w3-table-all">
          <tr>
              <td>강의명</td>
              <td>{{ lecture_title }}</td>
          </tr>
          <tr>
              <td>학과명</td>
              <td>{{ department_name}}</td>
          </tr>
          <tr>
            <td>구분</td>
            <td><span v-if="classification === '1'">전공</span>
              <span v-else-if="classification === '2'">교양</span></td>
          </tr>
          <tr>
              <td>학점</td>
              <td>{{ credit }} 학점</td>
          </tr>
          <tr>
              <td>강의시간</td>
              <td>{{ timecode1 }} {{ timecode2 }} {{ timecode3 }}</td>
          </tr>
          <tr>
              <td>강의실</td>
              <td>{{ roomcode1 }} {{ roomcode2 }} {{ roomcode3 }} 호</td>
          </tr>
          <tr>
              <td>수강생</td>
              <td> {{ number_of_student }} 명 </td>
          </tr>

      </table>
  </template>

  <script>
  export default {
    data() { //변수생성
      return {
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
    methods: {
      fnGetView() {

        this.$axios.get(this.$serverUrl + '/eclass/lecture/lectureinfo/' + this.lecture_id , {
          params: this.requestBody
        }).then((res) => { //success
          console.log(res.data);
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


    }
  }
  </script>