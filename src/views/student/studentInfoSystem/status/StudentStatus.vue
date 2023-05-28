<template>
    <div>
        <h4>학적변동내역</h4>
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
                <th>변동유형</th>
                <th>휴/복학일자</th>
                <th>만료일자</th>
                <th>사유</th>
            </tr>
            <tr v-for="(row, index) in list" :key="index">
                <td>{{ getChangeType(row.allowed_leave) }}</td>
                <td>{{ getLeaveDate(row.start_date, row.return_date) }}</td>
                <td>{{ row.end_date }}</td>
                <td>{{ row.reason_of_leave }}</td>
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
                .get(this.$serverUrl + '/student/status/' + this.member_id, {
                    params: this.requestBody,
                })
                .then((res) => {
                    this.list = res.data;
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
        getChangeType(allowed_leave) {
            return allowed_leave === '1' ? '휴학' : allowed_leave === '2' ? '복학' : '';
        },
        getLeaveDate(start_date, return_date) {
            if (start_date && return_date) {
                return `${start_date} ~ ${return_date}`;
            } else if (start_date) {
                return start_date;
            } else if (return_date) {
                return return_date;
            } else {
                return '';
            }
        },
    },
    created() {
        this.getSession();
    },
};
</script>

<style scoped>
</style>
