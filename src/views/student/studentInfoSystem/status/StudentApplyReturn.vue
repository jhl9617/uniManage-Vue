<template>
    <h6>복학신청</h6>
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
                <br><br>
                <div class="orderInfo">
                    <form role="form" method="post" autocomplete="off">

                        <input type="hidden" name="amount" value="${sum}" />

                        <div>
                            <label for="start_date">복학날짜</label> <input type="date" name="return_date" id="return_date">
                        </div>
                        <br>
                        <div class="inputArea">
                            <input type="submit" value="제출">
                        </div>

                    </form>
                </div>
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