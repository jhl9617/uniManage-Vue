<template>
    <h6>학적변동내역</h6>
    <table class="table table-bordered" align="center" width="505">
        <tr align="left">
            <th width="100">학번</th>
            <td v-if="loginMember">{{loginMember.member_id}}</td>
            <th width="100">성명</th>
            <td v-if="loginMember"> {{ loginMember.name }}</td>
            <th>학년</th>
            <td v-if="loginMember">{{ loginMember.grade }}학년</td>
            <th>학부(과)</th>
            <td v-if="loginMember">{{ loginMember.department_name }}</td>
<!--            <th width="100">학적상태</th>-->
<!--            <td v-if="loginMember">{{loginMember.auth }}</td>-->
        </tr>
<!--        <tr align="left">-->
<!--            <th>학년</th>-->
<!--            <td v-if="loginMember">{{ loginMember.grade }}</td>-->
<!--            <th>이수학기</th>-->
<!--            <td v-if="loginMember"></td>-->
<!--            <th>학부(과)</th>-->
<!--            <td colspan="3"></td>-->
<!--        </tr>-->
    </table>
    <br>
    <table class="table table-bordered" align="center" width="505">
        <tr>
            <th>년도</th>
            <th>학기</th>
            <th>변동유형</th>
            <th>변동일자</th>
            <th>만료일자</th>
            <th>사유</th>
        </tr>

    </table>
</template>

<script>
export default {
    data() {
        return {
            loginMember: null,
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