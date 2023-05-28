<template>
    장학수혜내역조회
    <br><br>
    <table class="w3-table-all">
        <tr align="left">
            <th width="100">학부(과)</th>
            <td v-if="loginMember">{{ loginMember.department_name }}</td>
            <th width="100">학년</th>
            <td v-if="loginMember">{{ loginMember.grade}}학년</td>
            <th width="100">성명</th>
            <td v-if="loginMember"> {{ loginMember.name }}</td>
        </tr>
    </table>
    <br><br>
    <table class="w3-table-all">
        <tr>
            <th>년도</th>
            <th>장학금명</th>
            <th>장학금액</th>
        </tr>
        <tr v-for="(row, index) in list" :key="index">
            <td>{{ row.scho_term }}</td>
            <td>{{ row.scho_name }}</td>
            <td>{{ row.amount }}</td>
        </tr>
    </table>

</template>

<script>
export default {
    data(){
        return {
            member_id : this.$route.query.member_id ? this.$route.query.member_id : '',
            loginMember : null,
            requestBody: {},
            list: [],
        };
    },
    mounted() { // document.ready, window.onload와 같은 형태
        this.fnGetView()

    },
    methods: {
        fnGetView() {

            this.$axios.get(this.$serverUrl + '/student/scholarship/' + this.member_id , {
                params : this.requestBody
            }).
            then((res) => { //success

                this.list = res.data.data
                this.scho_id = res.data.scho_id
                console.log(this.list);
            }).catch((err) => { // error
                if (err.message.indexOf('Network Error') > -1) {
                    alert('네트워크가 원활하지 않습니다.\n잠시 후 다시 시도해주세요.')
                }
            })
        },
        async getSession() {
            try {
                const response = await fetch("/sessionCheck");
                if (response.status === 200) {
                    const data = await response.json();
                    console.log("Session data:", data);
                    this.loginMember = data;
                } else {
                    console.error("Error fetching session data");
                }
            } catch (error) {
                console.error("Error fetching session data:", error);
            }
        },
    },
    created() {
        this.getSession();
    },
}
</script>
<style scoped>
table {
    margin: 0 auto;
}

th, td {
    text-align: center;
}
</style>