<template>
    <h6>장학수혜내역조회</h6>
    <table class="table table-bordered" align="center" width="505">
        <tr align="left">
            <th width="100">학부(과)</th>
            <td colspan="3" v-if="loginMember">{{ loginMember.department_name }}</td>
        </tr>
        <tr align="left">
            <th width="100">학년</th>
            <td width="300" v-if="loginMember">{{ loginMember.grade}}학년</td>
            <th width="100">성명</th>
            <td v-if="loginMember"> {{ loginMember.name }}</td>
        </tr>
    </table>
    <br><br>
    <table class="table table-bordered" align="center" width="505">
        <tr>
            <th>년도</th>
            <th>학기</th>
            <th>장학금명</th>
            <th>장학금액</th>
        </tr>

    </table>

</template>

<script>
export default {
    data(){
        return {
            loginMember : null,
        };
    },
    methods: {
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