<template>
장학금 등록
    <div style="border:2px solid black; padding:100px;">
        <table align="center" class="table table-bordered">
            <tr>
             <th width="100">장학금명</th>
             <td>
                 <input type="text" v-model="scho_name" class="w3-input w3-border" placeholder="장학금명을 입력해주세요.">
             </td>
            </tr>
            <tr>
                <th width="100">학생 번호</th>
                <td>
                    <input type="text" v-model="member_id" class="w3-input w3-border" placeholder="학생명을 입력해주세요.">
                </td>
            </tr>
            <tr>
                <th width="100">학기</th>
                <td>
                    <input type="number" v-model="scho_term" class="w3-input w3-border" placeholder="학기를 입력해주세요.">
                </td>
            </tr>
            <tr>
                <th width="100">장학금액</th>
                <td>
                    <input type="number" v-model="amount" class="w3-input w3-border" placeholder="금액을 입력해주세요.">
                </td>
            </tr>

        </table>
        <br>
        <button type="button" class="w3-button w3-round w3-blue-gray" v-on:click="fnSave">저장</button>&nbsp;
        <button type="button" class="w3-button w3-round w3-gray" v-on:click="fnList">목록</button>
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
            member_id: ''
        }
    },
    mounted() {
        this.fnGetView()
    },
    methods: {
        fnGetView() {
            if (this.scho_id !== undefined) {
                this.$axios.get(this.$serverUrl + '/admin/manage/scholarship/' + this.scho_id, {
                    params: this.requestBody
                }).then((res) => {
                    this.scho_term = res.data.scho_term
                    this.scho_name = res.data.scho_name
                    this.amount = res.data.amount
                    this.member_id = res.data.member_id
                }).catch((err) => {
                    console.log(err)
                })
            }
        },
        fnView(scho_id) {
            this.requestBody.scho_id = scho_id
            this.$router.push({
                path: './check',
                query: this.requestBody
            })
        },
        fnList() {
            delete this.requestBody.scho_id
            this.$router.push({
                path: '/admin/manage/scholarship',
                query: this.requestBody
            })
        },
        fnSave() {
            let apiUrl = this.$serverUrl + '/admin/manage/scholarship'  //let = var
            this.form = {
                "scho_id": this.scho_id,
                "scho_term": this.scho_term,
                "scho_name": this.scho_name,
                "amount": this.amount,
                "member_id": this.member_id
            }

            if (this.scho_id === undefined) {
                //INSERT
                this.$axios.post(apiUrl, this.form)
                    .then((res) => {
                        alert('장학금 글이 저장되었습니다.')
                        this.fnView(res.data.scho_id)
                    }).catch((err) => {
                    if (err.message.indexOf('Network Error') > -1) {
                        alert('네트워크가 원활하지 않습니다.\n잠시 후 다시 시도해주세요.')
                    }
                })
            } else {
                //UPDATE
                this.$axios.patch(apiUrl, this.form)
                    .then((res) => {
                        alert('글이 저장되었습니다.')
                        this.scho_id = res.data.scho_id;
                        this.fnView(res.data.scho_id)
                    }).catch((err) => {
                    if (err.message.indexOf('Network Error') > -1) {
                        alert('네트워크가 원활하지 않습니다.\n잠시 후 다시 시도해주세요.')
                    }
                })
            }
        },
    }
}
</script>

<style scoped>

</style>