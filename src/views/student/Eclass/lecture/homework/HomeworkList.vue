<template>
    <div class="board-list">
        <h4> 과제게시판 </h4>

        <div class="common-buttons">

        </div>
         <table class="w3-table-all table-bordered">
            <thead>
            <tr>
                <th>No</th>
                <th>과제제목</th>
                <th>마감기한</th>
                <th>제출확인</th>
            </tr>
            </thead>
            <tbody>
            <tr v-for="(row, idx) in list" :key="idx">
                <td>{{ row.homework_id }}</td>
                <td><a v-on:click="fnView(`${row.homework_id}`)" style="cursor: pointer;">{{ row.homework_name }}</a></td>
                <td>{{ row.deadline }}</td>
                <td>{{ row.submitted }}</td>
            </tr>
            </tbody>
        </table>
        <div class="pagination w3-bar w3-padding-16 w3-small justify-content-center" v-if="paging.total_list_cnt > 0">
      <span class="pg">
      <a href="javascript:;" @click="fnPage(1)" class="first w3-button w3-border">&lt;&lt;</a>
      <a href="javascript:;" v-if="paging.start_page > 10" @click="fnPage(`${paging.start_page-1}`)"
         class="prev w3-button w3-border">&lt;</a>
      <template v-for=" (n,index) in paginavigation()">
          <template v-if="paging.page==n">
              <strong class="w3-button w3-border w3-green" :key="index">{{ n }}</strong>
          </template>
          <template v-else>
              <a class="w3-button w3-border" href="javascript:;" @click="fnPage(`${n}`)" :key="index">{{ n }}</a>
          </template>
      </template>
      <a href="javascript:;" v-if="paging.total_page_cnt > paging.end_page"
         @click="fnPage(`${paging.end_page+1}`)" class="next w3-button w3-border">&gt;</a>
      <a href="javascript:;" @click="fnPage(`${paging.total_page_cnt}`)" class="last w3-button w3-border">&gt;&gt;</a>
      </span>
        </div>
    </div>

</template>

<script>
export default {
    data() { //변수생성
        return {
            requestBody: {}, //리스트 페이지 데이터전송
            list: {}, //리스트 데이터
            lecture_id : this.$route.query.lecture_id,
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
                size: this.size,
                lecture_id : this.lecture_id
            }

            this.$axios.get(this.$serverUrl + "/eclass/lecture/homework/list", {
                params: this.requestBody,
                headers: {}
            }).then((res) => {

                // this.list = res.data  //서버에서 데이터를 목록으로 보내므로 바로 할당하여 사용할 수 있다.
                if (res.data.result_code === "OK") {
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
        fnView(homework_id) {
            this.requestBody.homework_id = homework_id
            this.$router.push({
                path: './detail',
                query: this.requestBody
            })
        },
        fnWrite() {
            this.$router.push({
                path: './write'
            })
        },
        fnPage(n) {
            if (this.page !== n) {
                this.page = n

            }
            this.fnGetList()
        }
    }
    // fnGetList() {





    //임시 데이터 출력 처리용
    // this.list = [
    //   {
    //       "idx":1,
    //       "title": "제목1",
    //       "author": "작성자1",
    //       "created_at": "작성일시1"
    //   },
    //   {
    //       "idx":1,
    //       "title": "제목1",
    //       "author": "작성자1",
    //       "created_at": "작성일시1"
    //   },
    //   {
    //       "idx":1,
    //       "title": "제목1",
    //       "author": "작성자1",
    //       "created_at": "작성일시1"
    //   }
    // ]
    // }
    // }
}
</script>