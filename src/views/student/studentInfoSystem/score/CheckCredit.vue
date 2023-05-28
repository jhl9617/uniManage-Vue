<template>
    <h4>졸업 학점 조회</h4>
    <div>
        <div style="text-align:left;">
        -기본인적사항
        </div>
    <table class="table table-bordered" align="center" width="505">
        <tr align="left">
            <th width="100">학번</th>
            <td width="200" v-if="loginMember">
                {{loginMember.member_id}}
            </td>
            <th width="100">성명</th>
            <td width="200" v-if="loginMember">
                {{ loginMember.name }}
            </td>
        </tr>
        <tr align="left">
            <th width="100">학부(과)</th>
            <td width="200" v-if="loginMember">
                {{ loginMember.department_name }}
            </td>
            <th width="100">학년</th>
            <td width="200" v-if="loginMember">
                {{ loginMember.grade }}학년
            </td>
        </tr>
<!--        <tr align="left">-->
<!--            <th width="100">학부(과)</th>-->
<!--            <td width="200" v-if="loginMember">-->
<!--                {{ loginMember.department_name }}-->
<!--            </td>-->
<!--            <th width="100">이수학기</th>-->
<!--            <td width="200">-->

<!--            </td>-->
<!--        </tr>-->
    </table>
    </div>
    <div>
        <div style="text-align:left;">
            -이수학점내역
        </div>
        <table class="table table-bordered" align="center" width="505">
            <tr align="left">
                <th width="250">공통교양</th>
                <td width="200">

                </td>
                <th width="250">핵심교양</th>
                <td width="200">

                </td>
                <th width="250">기초교양</th>
                <td width="200">

                </td>
                <th width="250">일반교양</th>
                <td width="200">

                </td>
            </tr>
            <tr align="left">
                <th width="250">전공</th>
                <td width="200">

                </td>
                <th width="250">부전공</th>
                <td width="200">

                </td>
                <th width="250">복수전공</th>
                <td width="200">

                </td>
                <th width="250">총취득학점</th>
                <td width="200">

                </td>
            </tr>
        </table>
    </div>
    <div>
        <div style="text-align:left;">
            -졸업필요학점계
        </div>
        <table class="table table-bordered" align="center" width="505">
            <tr align="left">
                <th width="250">공통교양</th>
                <td width="200">

                </td>
                <th width="250">핵심교양</th>
                <td width="200">

                </td>
                <th width="250">기초교양</th>
                <td width="200">

                </td>
                <th width="250">일반교양</th>
                <td width="200">

                </td>
            </tr>
            <tr align="left">
                <th width="250">전공</th>
                <td width="200">

                </td>
                <th width="250">부전공</th>
                <td width="200">

                </td>
                <th width="250">복수전공</th>
                <td width="200">

                </td>
                <th width="250">총취득학점</th>
                <td width="200">

                </td>
            </tr>
        </table>
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