<template>
    <div class="board-detail">
      <!-- <div class="common-buttons">
        <button type="button" class="w3-button w3-round w3-blue-gray" v-on:click="fnUpdate">수정</button>&nbsp;
        <button type="button" class="w3-button w3-round w3-red" v-on:click="fnDelete">삭제</button>&nbsp;
        <button type="button" class="w3-button w3-round w3-gray" v-on:click="fnList">목록</button>
      </div> -->
      <div class="board-contents">
        <h3>{{ lecture_room_title }}</h3>
        <div>
          <strong class="w3-large">{{ name }}</strong>
          <br>
          <span>{{ created_date }}</span>
        </div>
      </div>
      <div class="board-contents">
        <span>{{ lecture_room_content }}</span>
      </div>
      <div class="board-contents">
        <span>첨부파일명 : {{ file_name }}</span>
      </div>

      <div class="common-buttons">
        <button type="button" class="w3-button w3-round w3-gray" v-on:click="fnList">목록</button>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() { //변수생성
      return {
        requestBody: this.$route.query,
        lecture_room_id: this.$route.query.lecture_room_id,

        lecture_room_title: '',
        member_id: '',
        lecture_room_content: '',
        created_date: '',

        file_name : '',
        file_rename : ''
      }
    },
    mounted() { // document.ready, window.onload와 같은 형태
      console.log(this.requestBody)
      this.fnGetView()
    },
    methods: {
      fnGetView() {
        this.$axios.get(this.$serverUrl + '/eclass/lecture/source/detail', {
          params: this.requestBody
        }).then((res) => { //success
          console.log(res.data);
          this.lecture_room_title = res.data.lecture_room.lecture_room_title
          this.member_id = res.data.lecture_room.member_id
          this.lecture_room_content = res.data.lecture_room.lecture_room_content
          this.created_date = res.data.lecture_room.created_date
          this.file_name = res.data.lecture_room_file.file_name
          this.file_rename = res.data.lecture_room_file.file_rename
        }).catch((err) => { // error
          if (err.message.indexOf('Network Error') > -1) {
            alert('네트워크가 원활하지 않습니다.\n잠시 후 다시 시도해주세요.')
          }
        })
      },
      fnList() {
        delete this.requestBody.lecture_room_id
        this.$router.push({
          path: './list',
          query: this.requestBody
        })
      }

    }
  }
  </script>
  <style scoped>
  
  
  </style>