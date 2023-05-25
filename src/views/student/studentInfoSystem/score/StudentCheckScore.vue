<template>
    <div>
        <h6>수강 성적 조회</h6>
        <table className="table table-bordered" align="center" width="505">
            <tr align="left">
                <th width="100">학번</th>
                <td v-if="loginMember">{{ loginMember.member_id }}</td>
                <th width="100">성명</th>
                <td v-if="loginMember">{{ loginMember.name }}</td>
                <th>학년</th>
                <td v-if="loginMember">{{ loginMember.grade }}학년</td>
                <th>학부(과)</th>
                <td v-if="loginMember">{{ loginMember.department_name }}</td>
            </tr>
        </table>
        <br>
        <table className="table table-bordered" align="center" width="505">
            <tr>
                <th>강좌번호</th>
                <th>교과목명</th>
                <th>학점</th>
                <th>성적</th>
            </tr>
            <tr v-for="(row, index) in list" :key="index">
                <td>{{ row.lecture_id }}</td>
                <td>{{ row.lecture_title }}</td>
                <td>{{ row.credit }}</td>
                <td>{{ row.mid_score }}</td>
            </tr>
        </table>
    </div>
</template>

<script>
export default {
    data() {
        return {
            member_id: this.$route.query.member_id ? this.$route.query.member_id : '',
            loginMember: null,
            requestBody: {},
            list: [],
        };
    },
    mounted() {
        this.fnGetView();
    },
    methods: {
        fnGetView() {
            this.$axios
                .get(this.$serverUrl + '/student/score/' + this.member_id, {
                    params: this.requestBody,
                })
                .then((res) => {
                    this.list = res.data.data
                    console.log(this.list)
                })
                .catch((err) => {
                    if (err.message.indexOf('Network Error') > -1) {
                        alert('네트워크가 원활하지 않습니다.\n잠시 후 다시 시도해주세요.');
                    }
                });
        },
        async getSession() {
            try {
                const response = await fetch('/sessionCheck');
                if (response.status === 200) {
                    const data = await response.json();
                    console.log('Session data:', data);
                    this.loginMember = data;
                } else {
                    console.error('Error fetching session data');
                }
            } catch (error) {
                console.error('Error fetching session data:', error);
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