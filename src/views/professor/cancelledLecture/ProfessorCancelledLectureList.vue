<template>
    <div class="container">
        <h3><b>휴강신청</b></h3> <br>
        <table class="table">
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
            <tr v-for="(row, memberId) in list" :key="memberId">
                <td>{{ row.cancelledLectureIdx }}</td>
                <!--           <td><a v-on:click="fnGetList(`${row.cancelledLectureIdx}`)">{{row.lectureId}}</a></td>-->
                <td>{{ row.lecture_id }}</td>
                <td>{{ row.attendanceDay }} 회차</td>
                <td>{{ row.supplyDate }}</td>

                <!-- 파일이 존재하면 ◎, 존재하지 않는다면 빈칸 -->
                <td>
                    <p v-if="row.cancelledFile"> ◎ </p>
                    <p v-else></p>
                </td>

                <!-- 1 = 승인대기(기본값), 2 = 승인완료, 3 = 승인거부 -->
                <td>
                    <p v-if="row.cancelledApply === 1">승인대기</p>
                    <p v-else-if="row.cancelledApply === 2">승인완료</p>
                    <p v-else-if="row.cancelledApply === 3">승인거부</p>
                </td>
            </tr>
            </tbody>
        </table>

        <div class="pagination w3-bar w3-padding-16 w3-small" v-if="paging.total_list_cnt > 0">
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
         <a href="javascript:;" v-if="paging.total_page_cnt > paging.end_page" @click="fnPage(`${paging.end_page+1}`)"
            class="next w3-button w3-border">&gt;</a>
         <a href="javascript:;" @click="fnPage(`${paging.total_page_cnt}`)"
            class="last w3-button w3-border">&gt;&gt;</a>
       </span>
        </div>

        <div class="common-buttons">
            <button type="button" class="w3-button w3-round w3-blue-gray" v-on:click="fnWrite">휴강신청</button>
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
            search_key: this.$route.query.sk ? this.$route.query.sk : '',
            search_value: this.$route.query.sv ? this.$route.query.sv : '',
            paginavigation: function () {
                let pageNumber = []
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
                sk: this.search_key,
                sv: this.search_value,
                page: this.page,
                size: this.size
            }

            this.$axios.get(this.$serverUrl + "/prof/lecture/cancelled/list", {
                params: this.requestBody,
                headers: {},
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
        fnView(cancelledLectureIdx) {
            this.requestBody.cancelledLectureIdx = cancelledLectureIdx
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
        fnPage(n){
            if (this.page !== n){
                this.page = n
            }
            this.fnGetList()
        }
    }
}

</script>

<style scoped>
</style>