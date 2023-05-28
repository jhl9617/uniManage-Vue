<template>
  <h4>복학 신청 확인</h4>
    <br><br><br>
    <table class="table table-bordered" align="center" width="505">
        <tr align="left">
            <th width="100">학번</th>
            <td v-if="loginMember">{{loginMember.member_id}}</td>
            <th width="100">성명</th>
            <td v-if="loginMember">{{ loginMember.name }}</td>
            <th>학년</th>
            <td v-if="loginMember">{{ loginMember.grade }}학년</td>
            <th>학부(과)</th>
            <td v-if="loginMember">{{ loginMember.department_name }}</td>
        </tr>
    </table>
    <br><br>
    <table align="center" class="table table-bordered">
        <tr>
            <th width="100">복학일</th>
            <td>{{ return_date }}</td>
        </tr>
    </table>
</template>

<script>
export default {
    data() {
        return {
            requestBody: this.$route.query,
            status_id: this.$route.query.status_id,

            member_id:'',
            return_date: '',

            loginMember: null,

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
            if (this.status_id !== undefined) {
                this.$axios.get(this.$serverUrl + '/student/return/' + this.status_id, {
                    params: this.requestBody
                }).then((res) => {
                    this.status_id = res.data.status_id
                    this.member_id = res.data.member_id
                    this.return_date = this.formatDate(res.data.return_date);
                }).catch((err) => {
                    console.log(err)
                })
            }
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

</style>