<template>
    <div class="board-detail">
      <!-- <div class="common-buttons">
        <button type="button" class="w3-button w3-round w3-blue-gray" v-on:click="fnSave">저장</button>&nbsp;
        <button type="button" class="w3-button w3-round w3-gray" v-on:click="fnList">목록</button>
      </div> -->
      <div class="board-contents">
        <input type="text" v-model="free_title" class="w3-input w3-border" placeholder="제목을 입력해주세요." >
        <input type="text" v-model="member_id" class="w3-input w3-border" >
      </div>
      <div class="board-contents">
        <textarea id="" cols="30" rows="10" v-model="free_content" class="w3-input w3-border" style="resize: none;">
        </textarea>
      </div>
      <div class="common-buttons">
        <button type="button" class="w3-button w3-round w3-blue-gray" v-on:click="fnSave">저장</button>&nbsp;
        <button type="button" class="w3-button w3-round w3-gray" v-on:click="fnList">목록</button>
      </div>
    </div>
  </template>

  <script>
  export default {
    data() { //변수생성
      return {
        requestBody: this.$route.query,
        free_id: this.$route.query.free_id,
        member_id : '',
        free_title: '',
        name: '',
        free_content: '',
        created_date: ''
      }
    },
    mounted() {
      this.fnGetView()
    },
    methods: {
      fnGetView() {
        if (this.free_id !== undefined) { // 상세보기 -> 수정
          this.$axios.get(this.$serverUrl + '/eclass/lecture/board/' + this.free_id, {
            params: this.requestBody
          }).then((res) => {
            console.log(res.data)
            this.free_title = res.data.freeboard.free_title
            this.name = res.data.freeboard.name
            this.member_id = res.data.freeboard.member_id
            this.free_content = res.data.freeboard.free_content
            this.created_date = res.data.freeboard.created_date
          }).catch((err) => {
            console.log(err)
          })
        }
      },
      fnList() {
        delete this.requestBody.free_id
        this.$router.push({
          path: './list',
          query: this.requestBody
        })
      },
      fnView(free_id) {
        this.requestBody.free_id = free_id
        this.$router.push({
          path: './detail',
          query: this.requestBody
        })
      },
      fnSave() {
        let apiUrl = this.$serverUrl + '/Eclass/lecture/board'
        this.form = {
          "free_id": this.free_id,
          "free_title": this.free_title,
          "free_content": this.free_content,
          "member_id": this.member_id
        }

        if (this.free_id === undefined) {
          //INSERT
          this.$axios.post(apiUrl, this.form)
          .then((res) => {
            alert('글이 저장되었습니다.')
            this.fnView(res.data.free_id)
          }).catch((err) => {
            if (err.message.indexOf('Network Error') > -1) {
              alert('네트워크가 원활하지 않습니다.\n잠시 후 다시 시도해주세요.')
            }
          })
        } else {
          //UPDATE
          this.$axios.patch(apiUrl, this.form)
          .then((res) => {
            alert('글이 수정되었습니다.')
            this.fnView(res.data.free_id)
          }).catch((err) => {
            if (err.message.indexOf('Network Error') > -1) {
              alert('네트워크가 원활하지 않습니다.\n잠시 후 다시 시도해주세요.')
            }
          })
        }
      }
    }
  }
  </script>
  <style scoped>

  </style>