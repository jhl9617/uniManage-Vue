<template>
    <div class="board-detail">
      <div class="board-contents">
        <h3>{{ homework_name }}</h3>
        <div>
          <strong class="w3-large">{{ homework_content }}</strong>
          <br>
          <span>{{ deadline }}</span>
        </div>
      </div>

      <div class="board-contents">
        <span>파일명 : {{ file_name }}</span>
      </div>
      <div class="board-contents">
        <span>바뀐 파일명 : {{ file_rename }}</span>
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
        homework_id: this.$route.query.homework_id,
  
        homework_name: '',
        deadline: '',
        homework_content: '',

        file_name: '',
        file_rename: ''
      }
    },
    mounted() { // document.ready, window.onload와 같은 형태
      this.fnGetView()
    },
    methods: {
      fnGetView() {
        this.$axios.get(this.$serverUrl + '/eclass/lecture/homework/detail', {
          params: this.requestBody
        }).then((res) => { //success
          this.homework_title = res.data.homework.homework_name
          this.deadline = res.data.homework.deadline
          this.homework_content = res.data.homework.homework_content
          this.file_name = res.data.homework_file.file_name
          this.file_rename = res.data.homework_file.file_rename
        }).catch((err) => { // error
          if (err.message.indexOf('Network Error') > -1) {
            alert('네트워크가 원활하지 않습니다.\n잠시 후 다시 시도해주세요.')
          }
        })
      },
      fnList() {
        delete this.requestBody.homework_id
        this.$router.push({
          path: './list',
          query: this.requestBody
        })
      },
      fnWrite() {
        this.$router.push({
          path: './write',
          query: this.requestBody
        })
      },
      fnDelete() {
        if (!confirm("삭제하시겠습니까?")) return
  
        this.$axios.delete(this.$serverUrl + '/board/' + this.idx, {})
            .then(() => {
              alert('삭제되었습니다.')
              this.fnList();
            }).catch((err) => {
          console.log(err);
        })
      }
    }
  }
  </script>
  <style scoped>
  
  
  </style>