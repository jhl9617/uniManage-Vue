<template>
    교수 정보 상세
    <br><br>
            <div class="container">
                            <table class="w3-table-all half-width">
                                <tr>
                                    <th width="100">이름</th>
                                    <td>{{ name }}</td>
                                </tr>
                                <tr>
                                    <th width="100">ID</th>
                                    <td>{{ member_id }}</td>
                                </tr>
                                <tr>
                                    <th width="100">생년월일</th>
                                    <td>{{ birthday }}</td>
                                </tr>
                                <tr>
                                    <th width="100">학과</th>
                                    <td>{{ department_name }}</td>
                                </tr>
                                <tr>
                                    <th width="100">우편번호</th>
                                    <td>{{ postcode }}</td>
                                </tr>
                                <tr>
                                    <th width="100">주소</th>
                                    <td>{{ address1 }}<br> {{ address2 }}</td>
                                </tr>
                                <tr>
                                    <th width="100">전화번호</th>
                                    <td>{{ phone }}</td>
                                </tr>
                                <tr>
                                    <th width="100">e-mail</th>
                                    <td>{{ email }}</td>
                                </tr>
                            </table>
                    </div>
                <br>
    <div>
        <button type="button" class="w3-button w3-round w3-blue-gray" v-on:click="fnUpdate">수정</button>
        <button type="button" class="w3-button w3-round w3-red" v-on:click="fnDelete">삭제</button>&nbsp;
        <button type="button" class="w3-button w3-round w3-gray" v-on:click="fnList">목록</button>
    </div>
</template>

<script>
export default {
    data() { //변수생성
        return {
            requestBody: this.$route.query, //route 가 가지고 있는 쿼리를 requestBody 에 담는다.
            member_id: this.$route.query.member_id,

            member_idx:'',
            member_pwd: '',
            name: '',
            department_id: '',
            grade:'',
            birthday: '',
            phone: '',
            email: '',
            postcode: '',
            address1:'',
            address2:'',
            auth:'',
            department_name:'',

        }
    },
    mounted() {
        this.fnGetView()
    },
    methods: {
        formatDate(date) {
            const options = { year: 'numeric', month: 'long', day: 'numeric' };
            return new Date(date).toLocaleDateString('ko-KR', options);
        },
        fnGetView() {
            this.$axios.get(this.$serverUrl + '/admin/manage/professor/' + this.member_id, {
                params: this.requestBody
            }).then((res) => {  //성공 -> res에 정보를 저장함
                this.member_id = res.data.member_id
                this.member_idx = res.data.member_idx
                this.member_pwd = res.data.member_pwd
                this.name = res.data.name
                this.department_id = res.data.department_id
                this.grade = res.data.grade
                this.birthday = this.formatDate(res.data.birthday);
                this.phone = res.data.phone
                this.email = res.data.email
                this.postcode = res.data.postcode
                this.address1 = res.data.address1
                this.address2 = res.data.address2
                this.auth = res.data.auth
                this.department_name = res.data.department_name
            }).catch((err) => { //실패 -> err에 정보를 저장함
                if (err.message.indexOf('Network Error') > -1) {
                    alert('네트워크가 원활하지 않습니다.\n잠시 후 다시 시도해주세요.')
                }
            })
        },
        fnList() {
            delete this.requestBody.member_id
            this.$router.push({
                path: '/admin/manage/professor',
                query: this.requestBody
            })
        },
        fnUpdate() {
            this.$router.push({
                path: '/admin/manage/professor/write',
                query: this.requestBody
            })
        },
        fnDelete() {
            if (!confirm("삭제하시겠습니까?")) return

            this.$axios.delete(this.$serverUrl + '/admin/manage/professor/' + this.member_id, {})
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
.half-width {
    width: 50%;
}
.container {
    display: flex;
    justify-content: center;
    align-items: center;
    /*height: 100vh; !* 페이지 높이에 맞게 조절 *!*/
}
table {
    margin: 0 auto;
}

th {
    text-align: center;
}
</style>