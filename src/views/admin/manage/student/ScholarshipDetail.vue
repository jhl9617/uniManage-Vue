<template>
  학생 정보 상세
    <br><br>
    <div>
        <a v-on:click="fnView(`${member_id}`)">
            <button type="button" class="w3-button w3-round w3-gray">기본정보</button>
        </a>
        &nbsp;&nbsp;
        <a v-on:click="fnViewScore(`${member_id}`)">
            <button type="button" class="w3-button w3-round w3-gray">성적</button>
        </a>
        &nbsp;&nbsp;
        <a v-on:click="fnViewScho(`${member_id}`)">
            <button type="button" class="w3-button w3-round w3-gray">장학</button>
        </a>
    </div>
    <br>
    <div class="container">
        <table class="w3-table-all">
            <thead>
            <tr>
                <th>장학금번호</th>
                <th>장학금명</th>
                <th>장학금액</th>
                <th>받은학기</th>
            </tr>
            </thead>
            <tbody>
            <tr v-for="(row, member_id) in list" :key="member_id">
                <td>{{ row.scho_id }}</td>
                <td>{{ row.scho_name }}</td>
                <td>{{ row.amount }}</td>
                <td>{{ row.scho_term }}</td>
            </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
export default {
    data() { //변수생성
        return {
            requestBody: this.$route.query, //route 가 가지고 있는 쿼리를 requestBody 에 담는다.
            member_id: this.$route.query.member_id,

            scho_id:'',
            scho_name:'',
            scho_term:'',
            amount:'',
            list: {},
        }
    },
    mounted() {
        this.fnGetView()

    },
    methods: {
        fnGetView() {
            this.$axios.get(this.$serverUrl + '/admin/manage/student/scholarship/' + this.member_id, {
                params: this.requestBody
            }).then((res) => {  //성공 -> res에 정보를 저장함
                this.list = res.data.data
            }).catch((err) => { //실패 -> err에 정보를 저장함
                if (err.message.indexOf('Network Error') > -1) {
                    alert('네트워크가 원활하지 않습니다.\n잠시 후 다시 시도해주세요.')
                }
            })
        },

        fnList() {
            delete this.requestBody.member_id
            this.$router.push({
                path: '/admin/manage/student',
                query: this.requestBody
            })
        },
        fnUpdate() {
            this.$router.push({
                path: '/admin/manage/student/write',
                query: this.requestBody
            })
        },
        fnDelete() {
            if (!confirm("삭제하시겠습니까?")) return

            this.$axios.delete(this.$serverUrl + '/admin/manage/student/' + this.member_id, {})
                .then(() => {
                    alert('삭제되었습니다.')
                    this.fnList();
                }).catch((err) => {
                console.log(err);
            })
        },
        fnView(member_id) {
            this.$router.push({
                params: { member_id },
                path: '/admin/manage/student/detail',
                query: this.requestBody
            })
        },
        fnViewScore(member_id) {
            this.$router.push({
                path: '/admin/manage/student/score',
                params: { member_id },
                query: this.requestBody
            })
        },
        fnViewScho(member_id) {
            this.$router.push({
                path: '/admin/manage/student/scholarship',
                params: { member_id },
                query: this.requestBody
            });

        },

    }
}
</script>

<style scoped>
</style>