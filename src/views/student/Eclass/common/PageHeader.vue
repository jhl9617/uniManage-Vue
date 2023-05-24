<!-- PageHeader.vue -->
<template>
  <div class="container-fluid">
    <header class="d-flex flex-wrap align-items-center justify-content-center justify-content-md-between py-3 mb-4 border-bottom">

        <img alt="logo" src="../../../../assets/images/collegeimage.jpg" width="2560" height="300">
      
    </header>
  </div>
      <div class="container-fluid">
        <header class="d-flex flex-wrap align-items-center justify-content-center justify-content-md-between py-3 mb-4 border-bottom">
              <h4>{{loginMember.name}} 학생</h4>

            <div class="col-md-12 text-end">
              강의명 : {{ lecture_title }} //&nbsp;  &nbsp;&nbsp;&nbsp; 강의시간 : {{ timecode1 }} {{ timecode2 }} {{ timecode3 }} // {{ roomcode1 }} // 학점 : {{ credit }} 학점 // 수강생 :
              {{ number_of_student }} 명
            </div>
        </header>
    </div>

    
  </template>
  
  <script>
  export default {
    data() { //변수생성
      return {
        loginMember : '',
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
        department_name : '',

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
          console.log(res.data);
          this.lecture_id = res.data.lecture_dto.lecture_id
          this.member_id = res.data.lecture_dto.member_id
          this.classification = res.data.lecture_dto.classification
          this.semester = res.data.lecture_dto.semester
          this.department_id = res.data.lecture_dto.department_id
          this.lecture_title = res.data.lecture_dto.lecture_title
          this.number_of_student = res.data.lecture_dto.number_of_student
          this.credit = res.data.lecture_dto.credit
          this.roomcode1 = res.data.lecture_dto.roomcode1
          this.roomcode2 = res.data.lecture_dto.roomcode2
          this.roomcode3 = res.data.lecture_dto.roomcode3
          this.timecode1 = res.data.lecture_dto.timecode1
          this.timecode2 = res.data.lecture_dto.timecode2
          this.timecode3 = res.data.lecture_dto.timecode3
          this.syllabus_title = res.data.lecture_dto.syllabus_title
          this.syllabus_rename = res.data.lecture_dto.syllabus_rename
          this.lecture_apply_status = res.data.lecture_dto.lecture_apply_status
          this.name = res.data.lecture_dto.name
          this.department_name = res.data.lecture_dto.department_name

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
        this.lecture_id = lecture_id
        this.$router.push({
          path: 'eclass/lecture',
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
        this.requestBody = { // 데이터 전송
          member_id : this.member_id
        }
      }
    }
  }
  </script>
  
  <style scoped>
  
  </style>