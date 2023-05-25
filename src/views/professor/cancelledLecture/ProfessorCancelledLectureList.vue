<template>
    <h2>휴강신청</h2>
    <button type="button" class="" v-on:click="fnWrite">신규휴강 신청하기</button>
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
                    <td><a v-on:click="fnList(`${row.cancelled_lecture_idx_seq}`)">{{row.lecture_id}}</a></td>
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
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            fileName: "example.txt"
        };
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
        }
    }
}

</script>

<style scoped>
</style>