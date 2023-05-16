<template>
    <div class="board-detail">
        <div style="border:2px solid black; padding:100px;" class="board-contents">
            <table align="center" class="table table-bordered">
                <tr>
                    <th width="100">장학금명</th>
                    <td>{{ scho_name }}</td>
                </tr>
                <tr>
                    <th width="100">학생명</th>
                    <td>{{ name }}</td>
                </tr>
                <tr>
                    <th width="100">학기</th>
                    <td>{{ scho_term }}</td>
                </tr>
                <tr>
                    <th width="100">장학금액</th>
                    <td>{{ amount }}</td>
                </tr>
            </table>
        </div>

        <div class="common-buttons">
            <button type="button" class="w3-button w3-round w3-blue-gray" v-on:click="fnUpdate">수정</button>
            <button type="button" class="w3-button w3-round w3-red" v-on:click="fnDelete">삭제</button>&nbsp;
            <button type="button" class="w3-button w3-round w3-gray" v-on:click="fnList">목록</button>
        </div>
    </div>
</template>

<script>
export default {
    data() { //변수생성
        return {
            requestBody: this.$route.query, //route 가 가지고 있는 쿼리를 requestBody 에 담는다.
            scho_id: this.$route.query.scho_id,

            scho_term: '',
            scho_name: '',
            amount: '',
            member_id: '',
            name:'',
        }
    },
    mounted() {
        this.fnGetView()
    },
    methods: {
        fnGetView() {
            this.$axios.get(this.$serverUrl + '/admin/manage/scholarship/' + this.scho_id, {
                params: this.requestBody
            }).then((res) => {  //성공 -> res에 정보를 저장함
                this.scho_term = res.data.scho_term
                this.scho_name = res.data.scho_name
                this.amount = res.data.amount
                this.member_id = res.data.member_id
                this.name = res.data.name
            }).catch((err) => { //실패 -> err에 정보를 저장함
                if (err.message.indexOf('Network Error') > -1) {
                    alert('네트워크가 원활하지 않습니다.\n잠시 후 다시 시도해주세요.')
                }
            })
        },
        fnList() {
            delete this.requestBody.scho_id
            this.$router.push({
                path: '/admin/manage/scholarship',
                query: this.requestBody
            })
        },
        fnUpdate() {
            this.$router.push({
                path: '/admin/manage/scholarship/write',
                query: this.requestBody
            })
        },
        fnDelete() {
            if (!confirm("삭제하시겠습니까?")) return

            this.$axios.delete(this.$serverUrl + '/admin/manage/scholarship/' + this.scho_id, {})
                .then(() => {
                    alert('삭제되었습니다.')
                    this.fnList();
                }).catch((err) => {
                console.log(err);
            })
        }
    }
}
</script>

<style scoped>

</style>