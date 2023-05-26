<template>
    학생 정보 상세
    <br>
    <div align="left">
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
    <div style="border:2px solid black; padding:100px;">
        <div class="col-md-8">
            <div class="container">
                <div class="row">
<!--                    <div class="col-md-4">-->
<!--                        <div class="d-flex flex-column align-items-center text-center">-->
<!--                            <fieldset>-->
<!--                                <table>-->
<!--                                    <td>-->
<!--                                        <img src="@/assets/images/cha.jpg" class="rounded-circle" width="150">-->
<!--                                    </td>-->
<!--                                </table>-->
<!--                            </fieldset>-->
<!--                        </div>-->

<!--                    </div>-->
                    <div class="col-md-8">
                        <fieldset>
                            <table class="w3-table-all">
                                <tr>
                                    <td>이름</td>
                                    <td>{{ name }}</td>
                                </tr>
                                <tr>
                                    <td>ID</td>
                                    <td>{{ member_id }}</td>
                                </tr>
                                <tr>
                                    <td>생년월일</td>
                                    <td>{{ birthday }}</td>
                                </tr>
                                <tr>
                                    <td>학과</td>
                                    <td>{{ department_name }}</td>
                                </tr>
                                <tr>
                                    <td>우편번호</td>
                                    <td>{{ postcode }}</td>
                                </tr>
                                <tr>
                                    <td>주소</td>
                                    <td>{{ address1 }}<br> {{ address2 }}</td>
                                </tr>
                                <tr>
                                    <td>휴대전화번호</td>
                                    <td>{{ phone }}</td>
                                </tr>
                                <tr>
                                    <td>e-mail</td>
                                    <td>{{ email }}</td>
                                </tr>
                            </table>
                        </fieldset>
                    </div>
                </div>
                <br>

            </div>
        </div>
    </div>
    <div class="common-buttons">
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
            this.$axios.get(this.$serverUrl + '/admin/manage/student/' + this.member_id, {
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
                console.log(res.data)
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