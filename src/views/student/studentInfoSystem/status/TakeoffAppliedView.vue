<template>
    휴학 신청 확인
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
                    <th width="100">휴학 시작일</th>
                    <td>{{ start_date }}</td>
                </tr>
                <tr>
                    <th width="100">휴학 끝일</th>
                    <td>{{ end_date }}</td>
                </tr>
                <tr>
                    <th width="100">사유</th>
                    <td>{{ reason_of_leave }}</td>
                </tr>
            </table>
</template>

<script>
export default {
    data() {
        return {
            requestBody: this.$route.query,
            status_id: this.$route.query.status_id,

            member_id: '',
            start_date: '',
            end_date: '',
            reason_of_leave: '',

            loginMember: null,

        }
    },
    mounted() {
        this.fnGetView()
    },
    methods: {
        fnGetView() {
            if (this.status_id !== undefined) {
                this.$axios.get(this.$serverUrl + '/student/takeoff/' + this.status_id, {
                    params: this.requestBody
                }).then((res) => {
                    this.status_id = res.data.status_id
                    this.member_id = res.data.member_id
                    this.start_date = res.data.start_date
                    this.end_date = res.data.end_date
                    this.reason_of_leave = res.data.reason_of_leave
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