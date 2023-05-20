<template>
    <div class="board-detail">
      <!-- <div class="common-buttons">
        <button type="button" class="w3-button w3-round w3-blue-gray" v-on:click="fnUpdate">수정</button>&nbsp;
        <button type="button" class="w3-button w3-round w3-red" v-on:click="fnDelete">삭제</button>&nbsp;
        <button type="button" class="w3-button w3-round w3-gray" v-on:click="fnList">목록</button>
      </div> -->
      <div class="board-contents">
        <h3>{{ free_title }}</h3>
        <div>
          <strong class="w3-large">{{ name }}</strong>
          <br>
          <span>{{ created_date }}</span>
        </div>
      </div>
      <div class="board-contents">
        <span>{{ free_content }}</span>

      </div>
      <table class="w3-table-all">

        <tbody>
        <tr v-for="(row, index) in list" :key="index">
          <td>{{ row.name }}</td>
          <td>{{ row.free_rep_content }}</td>
          <td>{{ row.created_date}} </td> <button type="button" class="w3-button w3-round w3-red" v-on:click="fnDelete(row.free_rep_id)">삭제</button>
        </tr>
        </tbody>
      </table>
          <hr><hr>

            <div class="reply-contents">
                /*{토큰. 이름}*/
                <hr>
        <textarea id="" cols="300" rows="10" v-model="free_rep_content" class="w3-input w3-border" style="resize: none;">
        </textarea>
                <div class="common-buttons">
                    <button type="button" class="w3-button w3-round w3-blue-gray" v-on:click="fnSave">댓글등록</button>&nbsp;

                </div>
            </div>


      <div class="common-buttons">
        <button type="button" class="w3-button w3-round w3-blue-gray" v-on:click="fnUpdate">수정</button>&nbsp;
        <button type="button" class="w3-button w3-round w3-red" v-on:click="fnDelete()">삭제</button>&nbsp;
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
        list : [],


      }
    },
    mounted() { // document.ready, window.onload와 같은 형태
      console.log(this.requestBody)
      this.fnGetView()
    },
    methods: {
      fnGetView() {
        this.$axios.get(this.$serverUrl + '/eclass/lecture/board/' + this.free_id, {
          params: this.requestBody
        }).then((res) => { //success
            console.log(res.data);
            console.log(res.data.freeboard); // Check the freeboard object in the response
            console.log(res.data.freeboard_reps); // Check the freeboardReps array in the response
          this.free_title = res.data.freeboard.free_title
          this.name = res.data.freeboard.name
          this.free_content = res.data.freeboard.free_content
          this.created_date = res.data.freeboard.created_date
          this.list = res.data.freeboard_reps
          this.free_rep_id = res.data.freeboard_reps.free_rep_id
        }).catch((err) => { // error
          if (err.message.indexOf('Network Error') > -1) {
            alert('네트워크가 원활하지 않습니다.\n잠시 후 다시 시도해주세요.')
          }
        })
      },
      fnList() {
        delete this.requestBody.free_id
        this.$router.push({
          path: './list',
          query: this.requestBody
        })
      },
        fnSave() {
            let apiUrl = this.$serverUrl + '/eclass/lecture/board/' +  this.free_id
            this.form = {
                "free_rep_id": this.free_rep_id,
                "free_rep_content": this.free_rep_content,
                "free_id": this.free_id,
                "member_id": this.member_id
            }

            if (this.free_id !== undefined) {
                //insert
                this.$axios.post(apiUrl, this.form)
                    .then((res) => {
                        alert('댓글이 작성되었습니다.')
                        this.fnGetView(res.data.free_id)
                    }).catch((err) => {
                    if (err.message.indexOf('Network Error') > -1) {
                        alert('네트워크가 원활하지 않습니다.\n잠시 후 다시 시도해주세요.')
                    }
                })
            }
        },
      fnUpdate() {
        this.$router.push({
          path: './write',
          query: this.requestBody
        })
      },
      // fnDelete(id) {
      //
      //     let apiUrl = this.$serverUrl + '/Eclass/board/' +  this.free_id
      //     this.form = {
      //         "id": id,
      //         "free_id" : this.free_id
      //     }
      //
      //     if (id === undefined) {
      //         if (!confirm("삭제하시겠습니까?")) return
      //   this.$axios.delete(apiUrl, this.form.free_id).then(() => {
      //         alert('글이 삭제되었습니다.')
      //         this.fnList();
      //       }).catch((err) => {
      //     console.log(err);
      //   })
      // } else {
      //         console.log(this.form.id);
      //         if (!confirm("댓글을 삭제하시겠습니까?")) return
      //         this.$axios.delete(apiUrl, this.form.id).then((res) => {
      //             alert('댓글이 삭제되었습니다.')
      //             this.fnGetView(res.data.free_id);
      //         }).catch((err) => {
      //             console.log(err);
      //         })
      //     }
      // }
        fnDelete(id) {
            let apiUrl = this.$serverUrl + '/eclass/lecture/board/' + this.free_id
            this.form = {
                "id": id,
                "free_id" : this.free_id
            }

            if (id === undefined || id === null) { // id 가 undefined 이거나 null 인 경우
                if (!confirm("삭제하시겠습니까?")) return
                this.$axios.delete(apiUrl, {params: this.form}).then(() => {
                    alert('글이 삭제되었습니다.')
                    this.fnList();
                }).catch((err) => {
                    console.log(err);
                })
            } else {
                console.log(this.form.id);
                if (!confirm("댓글을 삭제하시겠습니까?")) return
                this.$axios.delete(apiUrl, {params: this.form}).then((res) => {
                    alert('댓글이 삭제되었습니다.')
                    this.fnGetView(res.data.free_id);
                }).catch((err) => {
                    console.log(err);
                })
            }
        }
    }
  }
  </script>
  <style scoped>

  </style>

