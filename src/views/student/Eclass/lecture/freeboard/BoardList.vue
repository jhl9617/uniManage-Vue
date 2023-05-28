<template>
  <div class="board-list">
    <h4>자유게시판</h4>

    <div class="common-buttons">
      <button class="w3-button w3-round w3-blue-gray" type="button" v-on:click="fnWrite">등록</button>
    </div>
    <table class="w3-table-all table-bordered">
      <thead>
      <tr>
        <th>No</th>
        <th>제목</th>
        <th>작성자</th>
        <th>등록일시</th>
      </tr>
      </thead>
      <tbody>
      <tr v-for="(row, free_id) in list" :key="free_id">
        <td>{{ row.free_id }}</td>
        <td><a style="cursor: pointer;" v-on:click="fnView(`${row.free_id}`)">{{ row.free_title }}</a></td>
        <td>{{ row.name }}</td>
        <td>{{ row.created_date }}</td>
      </tr>
      </tbody>
    </table>
    <div v-if="paging.total_list_cnt > 0" class="pagination w3-bar w3-padding-16 w3-small justify-content-center">
      <span class="pg">
      <a class="first w3-button w3-border" href="javascript:;" @click="fnPage(1)">&lt;&lt;</a>
      <a v-if="paging.start_page > 10" class="prev w3-button w3-border" href="javascript:;"
         @click="fnPage(`${paging.start_page-1}`)">&lt;</a>
      <template v-for=" (n,index) in paginavigation()">
          <template v-if="paging.page==n">
              <strong :key="index" class="w3-button w3-border w3-green">{{ n }}</strong>
          </template>
          <template v-else>
              <a :key="index" class="w3-button w3-border" href="javascript:;" @click="fnPage(`${n}`)">{{ n }}</a>
          </template>
      </template>
      <a v-if="paging.total_page_cnt > paging.end_page" class="next w3-button w3-border"
         href="javascript:;" @click="fnPage(`${paging.end_page+1}`)">&gt;</a>
      <a class="last w3-button w3-border" href="javascript:;" @click="fnPage(`${paging.total_page_cnt}`)">&gt;&gt;</a>
      </span>
    </div>
    <div>
      <select v-model="search_key">
        <option value="">- 선택 -</option>
        <option value="name">작성자</option>
        <option value="free_title">제목</option>
        <option value="free_content">내용</option>
      </select>
      &nbsp;
      <input v-model="search_value" type="text" @keyup.enter="fnPage()">
      &nbsp;
      <button @click="fnPage()">검색</button>
    </div>
  </div>
</template>

<script>
export default {
  data() { //변수생성
    return {
      requestBody: {}, //리스트 페이지 데이터전송
      list: {}, //리스트 데이터
      no: '', //게시판 숫자처리
      paging: {
        block: 0,
        end_page: 0,
        next_block: 0,
        page: 0,
        page_size: 0,
        prev_block: 0,
        start_index: 0,
        start_page: 0,
        total_block_cnt: 0,
        total_list_cnt: 0,
        total_page_cnt: 0,
      }, //페이징 데이터
      page: this.$route.query.page ? this.$route.query.page : 1,
      size: this.$route.query.size ? this.$route.query.size : 10,
      search_key: this.$route.query.sk ? this.$route.query.sk : '',
      search_value: this.$route.query.sv ? this.$route.query.sv : '',
      // keyword: this.$route.query.keyword,
      paginavigation: function () { //페이징 처리 for문 커스텀
        let pageNumber = [] //;
        let start_page = this.paging.start_page;
        let end_page = this.paging.end_page;
        for (let i = start_page; i <= end_page; i++) pageNumber.push(i);
        return pageNumber;
      }
    }
  },
  mounted() { //연결 되면 == window.onload()
    this.fnGetList()
  },
  methods: {
    fnGetList() {
      //스프링 부트에서 전송받은 데이터 출력 처리
      this.requestBody = { // 데이터 전송
        sk: this.search_key,
        sv: this.search_value,
        // keyword: this.keyword,
        page: this.page,
        size: this.size
      }
      this.$axios.get(this.$serverUrl + "/eclass/lecture/board/list", {
        params: this.requestBody,
        headers: {}
      }).then((res) => {
        if (res.data.result_code === "OK") {
          console.log(this.requestBody)
          this.list = res.data.data
          this.paging = res.data.pagination
          this.no = this.paging.total_list_cnt - ((this.paging.page - 1) * this.paging.page_size)
        }
      }).catch((err) => {
        if (err.message.indexOf('Network Error') > -1) {
          alert('네트워크가 원활하지 않습니다.\n잠시 후 다시 시도해주세요.')
        }
      })
    },
    fnView(free_id) {
      this.requestBody.free_id = free_id
      this.$router.push({
        path: './detail',
        query: this.requestBody
      })
    },
    fnWrite() {
      this.$router.push({
        path: '/eclass/lecture/board/write'
      })
    },
    fnPage(n) {
      if (this.page !== n) {
        this.page = n
      }
      this.fnGetList()
    }
  }
}
</script>