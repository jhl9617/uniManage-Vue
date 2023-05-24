<template>
    <h2>휴강신청</h2>
    <div class="common-buttons">
        <router-link to="/prof/lecture/cancelled/write">
            <button type="button" class="w3-button w3-round w3-blue-gray" v-on:click="fnWrite">휴강 신청하기</button>
        </router-link>
    </div>

    <br><br>
    <div class="container">
        <div class="row">
            <table class="table table-bordered" id="closelist">
                <thead>
                <tr>
                    <th>번호</th>
                    <th>강의명</th>
                    <th>휴강회차</th>
                    <th>보강일시</th>
                    <th>제출서류</th>
                    <th>승인여부</th>
                </tr>
                </thead>
                <tbody>
                <tr v-for="(row, cancelled_lecture_idx_seq) in list" :key="cancelled_lecture_idx_seq">
                    <td>{{row.cancelled_lecture_idx_seq}}</td>
                    <td><a v-on:click="fnGetList(`${row.cancelled_lecture_idx_seq}`)">{{row.lecture_id}}</a></td>
                    <td>{{row.attendance_day}}</td>
                    <td>{{row.supply_date}}</td>

                    <!-- 파일이 존재하면 ◎, 존재하지 않는다면 빈칸 -->
                    <td>
                        <p v-if="findName"> ◎ </p>
                        <p v-else></p>
                    </td>
                    <td>{{row.cancelled_apply}}</td>
                </tr>
                </tbody>
            </table>
            <div class="pagination w3-bar w3-padding-16 w3-small" v-if="paging.total_list_cnt > 0">
                <span class="pg">
                    <a href="javascript:;" @click="fnPage(1)" class="first w3-button w3-border">&lt;&lt;</a>
                    <a href="javascript:;" v-if="paging.start_page > 10" @click="fnPage(`${paging.start_page-1}`)" class="prev w3-button w3-border">&lt;</a>
                    <template v-for=" (n,index) in paginavigation()">
                        <template v-if="paging.page==n">
                            <strong class="w3-button w3-border w3-green" :key="index">{{ n }}</strong>
                        </template>
                        <template v-else>
                            <a class="w3-button w3-border" href="javascript:;" @click="fnPage(`${n}`)" :key="index">{{ n }}</a>
                        </template>
                    </template>
                    <a href="javascript:;" v-if="paging.total_page_cnt > paging.end_page" @click="fnPage(`${paging.end_page+1}`)" class="next w3-button w3-border">&gt;</a>
                    <a href="javascript:;" @click="fnPage(`${paging.total_page_cnt}`)" class="last w3-button w3-border">&gt;&gt;</a>
                </span>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            requestBody: {},
            list: {},
            no: '',
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
            },
            page: this.$route.query.page ? this.$route.query.page : 1,
            size: this.$route.query.size ? this.$route.query.size : 10,

            paginavigation: function () {
                let pageNumber = [] //;
                let start_page = this.paging.start_page;
                let end_page = this.paging.end_page;
                for (let i = start_page; i <= end_page; i++) pageNumber.push(i);
                return pageNumber;
            }
        }
    },
    mounted() {
        this.fnGetList()
    },
    methods: {
        fnGetList() {
            this.requestBody = {
                page: this.page,
                size: this.size
            }
            this.$axios.get( + "/prof/lecture/cancelled/list", {
                params: this.requestBody,
                headers: {}
            }).then((res) => {

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
        fnView(cancelled_lecture_idx_seq) {
            this.requestBody.cancelled_lecture_idx_seq = cancelled_lecture_idx_seq
            this.$router.push({
                path: '/prof/lecture/cancelled',
                query: this.requestBody
            })
        },
        fnWrite() {
            this.$router.push({
                path: '/prof/lecture/cancelled/write'
            })
        }
    }
}

</script>

<style scoped>
</style>