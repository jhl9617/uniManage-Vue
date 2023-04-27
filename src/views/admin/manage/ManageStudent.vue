<template>
    <div class="board-list">
        학생 관리
        <table class="w3-table-all">
            <thead>
            <tr>
                <th>번호</th>
                <th>학생명</th>
                <th>학번</th>
                <th>학과</th>
                <th>삭제</th>
                <th>수정</th>
            </tr>
            </thead>
            <tbody>
            <tr>
                <td>5</td>
                <router-link to="/admin/manage/detailstudent">
                    <td>학생5</td>
                </router-link>
                <td>20210505</td>
                <td>전자공학과</td>
                <td>
                    <button type="button" class="w3-button w3-round w3-red" v-on:click="fnDelete">삭제</button>&nbsp;
                </td>
                <td>
                    <router-link to="/admin/manage/modifystudent">
                        <button type="button" class="w3-button w3-round w3-blue-gray" v-on:click="fnWrite">수정</button>
                    </router-link>
                </td>
            </tr>
            <tr>
                <td>4</td>
                <td>학생4</td>
                <td>20210505</td>
                <td>컴퓨터공학과</td>
                <td>
                    <button type="button" class="w3-button w3-round w3-red" v-on:click="fnDelete">삭제</button>&nbsp;
                </td>
                <td>
                    <router-link to="/admin/manage/modifystudent">
                        <button type="button" class="w3-button w3-round w3-blue-gray" v-on:click="fnWrite">수정</button>
                    </router-link>
                </td>
            </tr>
            <tr>
                <td>3</td>
                <td>학생3</td>
                <td>20210505</td>
                <td>경영학과</td>
                <td>
                    <button type="button" class="w3-button w3-round w3-red" v-on:click="fnDelete">삭제</button>&nbsp;
                </td>
                <td>
                    <router-link to="/admin/manage/modifystudent">
                        <button type="button" class="w3-button w3-round w3-blue-gray" v-on:click="fnWrite">수정</button>
                    </router-link>
                </td>
            </tr>
            <tr>
                <td>2</td>
                <td>학생2</td>
                <td>20210505</td>
                <td>영문학과</td>
                <td>
                    <button type="button" class="w3-button w3-round w3-red" v-on:click="fnDelete">삭제</button>&nbsp;
                </td>
                <td>
                    <router-link to="/admin/manage/modifystudent">
                        <button type="button" class="w3-button w3-round w3-blue-gray" v-on:click="fnWrite">수정</button>
                    </router-link>
                </td>
            </tr>
            <tr>
                <td>1</td>
                <td>학생1</td>
                <td>20210505</td>
                <td>통계학과</td>
                <td>
                    <button type="button" class="w3-button w3-round w3-red" v-on:click="fnDelete">삭제</button>&nbsp;
                </td>
                <td>
                    <router-link to="/admin/manage/modifystudent">
                        <button type="button" class="w3-button w3-round w3-blue-gray" v-on:click="fnWrite">수정</button>
                    </router-link>
                </td>
            </tr>
            </tbody>
        </table>
        <div align="right">
        <router-link to="/admin/manage/addstudent">
            <button type="button" class="w3-button w3-round w3-blue-gray" v-on:click="fnWrite">학생 추가</button>
        </router-link>
        </div>
        <div>
            <select v-model="search_key">
                <option value="">- 선택 -</option>
                <option value="author">작성자</option>
                <option value="title">제목</option>
                <option value="contents">내용</option>
            </select>

            <input type="text" v-model="search_value" @keyup.enter="fnPage()">
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

            this.$axios.get(this.$serverUrl + "/board/list", {
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
        fnView(idx) {
            this.requestBody.idx = idx  //학번으로 수정 필요
            this.$router.push({
                path: '',
                query: this.requestBody
            })
        },
        fnWrite() {
            this.$router.push({
                path: '/admin/mange/addstudent'
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