<template>
    <div class="container">
        <div class="row">
            <h3>휴강신청</h3>
            <br>
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
                    <td><a v-on:click="fnList(`${row.cancelled_lecture_idx_seq}`)">{{row.lecture_id}}</a></td>
                    <td>{{row.attendance_day}}</td>
                    <td>{{row.supply_date}}</td>

                    <!-- 파일이 존재하면 ◎, 존재하지 않는다면 빈칸 -->
                    <td><p v-if="findFile"> ◎ </p>
                        <p v-else>  </p></td>
                    <td>{{row.cancelled_apply}}</td>
                </tr>
                </tbody>
            </table>
            <div class="pagination w3-bar w3-padding-16 w3-small" v-if="paging.total_list_cnt > 0"></div>
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
                <a href="javascript:;" v-if="paging.total_page_cnt > paging.end_page" @click="fnPage(`${paging.end_page+1}`)" class="next w3-button w3-border">&gt;</a>
                <a href="javascript:;" @click="fnPage(`${paging.total_page_cnt}`)" class="last w3-button w3-border">&gt;&gt;</a>
            </span>
        </div>
    </div>
</template>

<script>
export default {
    data() {

    },
    mounted() {
        this.fnList()
    },
    methods: {
        fnList() {
            this.$axios.get(this.$serverUrl + "/prof/lecture/cancelled/list", {
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
        },

    }
}

</script>

<style scoped>
</style>