<template>
    <div class="board-list">
        수강신청내역
        <br><br>
        <table class="w3-table-all table-hover">
            <thead>
            <tr>
                <th>No</th>
                <th>제목</th>
                <th>등록일시</th>
            </tr>
            </thead>
            <tbody>
            <tr v-for="(row, notice_id) in list" :key="notice_id">
                <td>{{ row.notice_id }}</td>
                <td><a v-on:click="fnView(`${row.notice_id}`)" style="cursor: pointer;">{{ row.notice_title }}</a></td>
                <td>{{ row.created_date }}</td>
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
<!--        <div>-->
<!--            <select v-model="search_key">-->
<!--                <option value="">- 선택 -</option>-->
<!--                <option value="notice_title">제목</option>-->
<!--                <option value="notice_content">내용</option>-->
<!--            </select>-->
<!--            &nbsp;-->
<!--            <input type="text" v-model="search_value" @keyup.enter="fnPage()">-->
<!--            &nbsp;-->
<!--            <PrimeButton @click="fnPage()">검색</PrimeButton>-->
<!--        </div>-->
    </div>
<!--    <div class="content susin-list">-->
<!--        <div class="itb-title">-->
<!--            <a style="letter-spacing: -2px;color:#333333; font-weight: 600; font-size: 16px">수강신청내역</a>-->
<!--            <a class="buttonset">-->
<!--                <span class="item" id="meta_3">총 신청가능학점<em> 21</em>학점</span>-->
<!--                <span class="item" id="meta_4"-->
<!--                >신청과목수<em class="totalNumber">{{ courseList.length }}</em>과목</span-->
<!--                >-->
<!--                <span class="item" id="meta_5"-->
<!--                >신청학점<em class="totalScore">{{ courseList.length*3 }}</em>학점</span-->
<!--                >-->
<!--            </a>-->
<!--        </div>-->
<!--        &lt;!&ndash; item block wrapper &ndash;&gt;-->
<!--        <div class="itb-cover">-->
<!--            <div style="width: 100%" class="itb susin">-->
<!--                <div class="itm susin-itm">-->
<!--                    <a class="itm-num"></a>-->
<!--                    <a v-if="!listMenu" class="itm-apply" style="width: 70px">수강삭제</a>-->
<!--                    <a class="itm-snum">학수번호-분반</a>-->
<!--                    <a class="itm-cname">강좌명</a>-->
<!--                    <a class="itm-grd">대상학년</a>-->
<!--                    <a class="itm-gname">교수명</a>-->
<!--                    <a class="itm-hakzum">학점</a>-->
<!--                    <a class="itm-time">강의시간/강의실</a>-->
<!--                    <a class="itm-isgub">이수구분</a>-->
<!--                    <a class="itm-zsugang">재수강 여부</a>-->
<!--                    <a class="itm-bigo">비고</a>-->
<!--                    <a style="flex:4;"></a>-->
<!--                </div>-->
<!--                <div class="noCourses" v-if="noCourses">-->
<!--                    <a>수강신청 내역이 없습니다.</a>-->
<!--                </div>-->
<!--                <div v-for="num in courseList" :key="num" class="itm susin-itm">-->
<!--                    <a class="itm-num">{{ num }}</a>-->
<!--                    <a v-if="!listMenu" class="itm-apply" style="width: 70px"-->
<!--                    ><button @click="()=>deleteCourse(num)" class="delete-btn">삭제</button></a-->
<!--                    >-->
<!--                    <a class="itm-snum">ADD123-01</a>-->
<!--                    <a style="text-align:left;" class="itm-cname">삭제연습{{ num }}</a>-->
<!--                    <a class="itm-grd">0</a>-->
<!--                    <a class="itm-gname">교수{{ num }}</a>-->
<!--                    <a class="itm-hakzum">3</a>-->
<!--                    <a class="itm-time">월 10:30-13:00 (강의실)</a>-->
<!--                    <a class="itm-isgub">이수구분</a>-->
<!--                    <a class="itm-zsugang"></a>-->
<!--                    <a class="itm-bigo"></a>-->
<!--                    <a style="flex:4;"></a>-->
<!--                </div>-->
<!--            </div>-->
<!--        </div>-->
<!--        &lt;!&ndash;  &ndash;&gt;-->
<!--        <div class="itm-warn itm-notice">-->
<!--            <a><i class="fas fa-exclamation-circle"> </i> 이수구분 : 11 전공기초, 04-->
<!--                전공필수, 05 전공선택, 06 교직과, 14 중핵교과, 15 배분이수교과, 16-->
<!--                기초교과, 17 자유이수, 20 교직전선, 24 계절학기전공필수, 27-->
<!--                계절학기전공선택, 08 자유선택교과[배움학점제,군사학,취업스쿨,학점교류-->
<!--                과목등]</a>-->
<!--        </div>-->
<!--    </div>-->
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

            this.$axios.get(this.$serverUrl + "/admin/notice/list", {
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
        fnPage(n) {
            if (this.page !== n) {
                this.page = n

            }
            this.fnGetList()
        }
    }
}
</script>

<style scoped>

</style>