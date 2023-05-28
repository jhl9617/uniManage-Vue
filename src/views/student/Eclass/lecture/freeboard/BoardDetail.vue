<template>
  <div class="board-detail">

    <hr/>
    <div class="row">
      <div class="col-md-10">
        <table class="table table-condensed">
          <thead>
          <tr align="center">
            <th width="10%">제목</th>
            <th width="60%">{{ free_title }}</th>
          </tr>
          </thead>
          <tbody>
          <tr>
            <td>작성일</td>
            <td>{{ created_date }}</td>
          </tr>
          <tr>
            <td>글쓴이</td>
            <td>{{ name }} <span style='float:right'>조회 : 1</span>
            </td>
          </tr>
          <tr>
            <td colspan="2"><p>{{ free_content }}</p></td>
          </tr>
          </tbody>
        </table>
        <section class="mb-5">
          <div class="card bg-light">
            <div class="card-body">
              {{ loginMember.name }} &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              <button class="w3-button w3-round w3-blue-gray" type="button"
                      v-on:click="fnSave">댓글등록
              </button>
              <br><br>
              <form class="mb-4"><textarea v-model="free_rep_content" class="form-control" placeholder="댓글을 입력하세요."
                                           rows="3"></textarea></form>
              <div v-for="(row, index) in list" :key="index" class="d-flex mb-4">
                <div class="flex-shrink-0"></div>
                <div class="ms-3">
                  <div class="fw-bold">{{ row.name }}</div>
                  {{ row.free_rep_content }}
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                </div>
                {{ row.created_date }}
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <button v-if="checkPermissions2(row.member_id)" class="w3-button w3-round w3-blue-gray"
                        type="button"
                        v-on:click="fnDelete(row.free_rep_id)">삭제
                </button>
              </div>
            </div>
          </div>
        </section>
       <table class="table table-condensed">
          <thead>
          <tr>
            <td>
                <span style='float:right'>
                  <button v-if="checkPermissions()" class="w3-button w3-round w3-blue-gray"
                          type="button"
                          v-on:click="fnUpdate">수정</button>&nbsp;
                  <button class="w3-button w3-round w3-red" type="button" v-on:click="fnDelete()">삭제</button>&nbsp;
                  <button class="w3-button w3-round w3-gray" type="button"
                          v-on:click="fnList">목록</button>
                </span>
            </td>
          </tr>
          </thead>
        </table>
      </div>
    </div>
    <hr/>

  </div>
</template>

<script>
export default {
  data() { //변수생성
    return {
      requestBody: this.$route.query,
      free_id: this.$route.query.free_id,
      list: [],
      loginMember: null,
      member_id: '',
      free_rep_content: '',
    }
  },
  mounted() { // document.ready, window.onload와 같은 형태
    this.fnGetView();
  },
  created() {
    this.getSession();
  },
  methods: {
    fnGetView() {
      this.$axios.get(this.$serverUrl + '/eclass/lecture/board/' + this.free_id, {
        params: this.requestBody
      }).then((res) => { //success
        this.free_title = res.data.freeboard.free_title
        this.member_id = res.data.freeboard.member_id
        this.name = res.data.freeboard.name
        this.free_content = res.data.freeboard.free_content
        this.created_date = res.data.freeboard.created_date
        this.list = res.data.freeboard_reps
        this.free_rep_id = res.data.freeboard_reps.free_rep_id
        console.log(this.list)
      }).catch((err) => { // error
        if (err.message.indexOf('Network Error') > -1) {
          alert('네트워크가 원활하지 않습니다.\n잠시 후 다시 시도해주세요.')
        }
      })
    },
    fnList() { // 게시판 리스트 보기
      delete this.requestBody.free_id
      this.$router.push({
        path: './list',
        query: this.requestBody
      })
    },
    fnSave() { // 게시판 글 저장 또는 수정
      let apiUrl = this.$serverUrl + '/eclass/lecture/board/' + this.free_id
      this.form = {
        "free_rep_id": this.free_rep_id,
        "free_rep_content": this.free_rep_content,
        "free_id": this.free_id,
        "member_id": this.loginMember.member_id
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
    fnDelete(id) {
      let apiUrl = this.$serverUrl + '/eclass/lecture/board/' + this.free_id
      this.form = {
        "id": id,
        "free_id": this.free_id
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
    },
    checkPermissions() { // 게시판 글 작성자와 로그인 한 사용자의 아이디가 일치하는지 확인
      return this.member_id === this.loginMember.member_id;
    },
    checkPermissions2(n) { // 게시판 글 작성자와 로그인 한 사용자의 아이디가 일치하는지 확인
      return n === this.loginMember.member_id;
    },
  }
}
</script>
<style scoped>

</style>

