<template>
  학생 정보 상세
    <br>
    <div align="left">
        <a v-on:click="fnView(`${member_idx}`)">
            <button type="button" class="w3-button w3-round w3-gray">기본정보</button>
        </a>
        &nbsp;&nbsp;
        <a v-on:click="fnViewGrade(`${member_idx}`)">
            <button type="button" class="w3-button w3-round w3-gray">성적</button>
        </a>
        &nbsp;&nbsp;
        <a v-on:click="fnViewScho(`${member_idx}`)">
            <button type="button" class="w3-button w3-round w3-gray">장학</button>
        </a>
    </div>
    <br>
    <div class="container">
        <table class="w3-table-all">
            <tr>
                <td>강의명</td>
                <td>중간고사</td>
                <td>기말고사</td>
                <td>과제</td>
                <td>합계</td>
                <td>평균</td>
                <td>등수</td>
            </tr>
            <tr>
                <td>투자론</td>
                <td>50.0</td>
                <td>50.0</td>
                <td>20.0</td>
                <td>120.0</td>
                <td>63.3</td>
                <td>1</td>
            </tr>
            <tr>
                <td>세무회계</td>
                <td>40.0</td>
                <td>25.5</td>
                <td>0.0</td>
                <td>65.5</td>
                <td>21.8</td>
                <td>7</td>
            </tr>
        </table>
    </div>
</template>

<script>
export default {
    data() { //변수생성
        return {
            requestBody: this.$route.query, //route 가 가지고 있는 쿼리를 requestBody 에 담는다.
            member_idx: this.$route.query.member_idx,

            member_id: '',
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
        fnGetView() {
            this.$axios.get(this.$serverUrl + '/admin/manage/student/' + this.member_idx, {
                params: this.requestBody
            }).then((res) => {  //성공 -> res에 정보를 저장함
                this.member_id = res.data.member_id
                this.member_pwd = res.data.member_pwd
                this.name = res.data.name
                this.department_id = res.data.department_id
                this.grade = res.data.grade
                this.birthday = res.data.birthday
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
            delete this.requestBody.member_idx
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

            this.$axios.delete(this.$serverUrl + '/admin/manage/student/' + this.member_idx, {})
                .then(() => {
                    alert('삭제되었습니다.')
                    this.fnList();
                }).catch((err) => {
                console.log(err);
            })
        },
        fnView(member_idx) {
            this.requestBody.member_idx = member_idx
            this.$router.push({
                path: '/admin/manage/student/detail',
                query: this.requestBody
            })
        },
        fnViewGrade(member_idx) {
            this.requestBody.member_idx = member_idx
            this.$router.push({
                path: '/admin/manage/student/grade',
                query: this.requestBody
            })
        },
        fnViewScho(member_idx) {
            this.requestBody.member_idx = member_idx
            this.$router.push({
                path: '/admin/manage/student/scholarship',
                query: this.requestBody
            })
        },
    }
}
</script>

<style scoped>

</style>