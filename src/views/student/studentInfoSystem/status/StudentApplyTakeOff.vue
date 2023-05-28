<template>
    <h4>휴학신청</h4>
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
    <div class="orderInfo">
        <table align="center" class="table table-bordered">
            <tr>
                <th width="100">휴학신청날짜</th>
                <td>
                    <input type="date" v-model="start_date" class="w3-input w3-border">
                </td>
            </tr>
            <tr>
                <th width="100">휴학끝날짜</th>
                <td>
                    <input type="date" v-model="end_date" class="w3-input w3-border">
                </td>
            </tr>
            <tr>
                <th width="100">사유</th>
                <td>
                    <input type="text" v-model="reason_of_leave" class="w3-input w3-border" placeholder="사유를 입력해주세요.">
                </td>
            </tr>
        </table>
        <button type="button" class="w3-button w3-round w3-blue-gray" v-on:click="fnSave">저장</button>&nbsp;
    </div>
</template>

<script>
export default {
    data() {
        return {
            requestBody: this.$route.query,
            status_id: this.$route.query.status_id,

            member_id:'',
            start_date:'',
            end_date:'',
            reason_of_leave:'',

            loginMember: null,
        }
    },
    mounted() {
        this.fnGetView()
    },
    methods: {
        fnGetView() {
            if (this.status_id !== undefined) {
                this.$axios.get(this.$serverUrl + '/takeoff/' + this.status_id, {
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
        fnView(status_id) {
            this.requestBody.status_id = status_id
            this.$router.push({
                path: './takeoff/detail',
                query: this.requestBody
            })
        },
        fnSave() {
            let apiUrl = this.$serverUrl + '/student/takeoff'
            this.form = {
                "status_id": this.status_id,
                "member_id": this.loginMember.member_id,
                "start_date": this.start_date,
                "end_date": this.end_date,
                "reason_of_leave": this.reason_of_leave,
            }

            if (this.status_id === undefined) {
                //INSERT
                this.$axios.post(apiUrl, this.form)
                    .then((res) => {
                        alert('휴학이 신청되었습니다.')
                        this.fnView(res.data.status_id)
                    }).catch((err) => {
                    if (err.message.indexOf('Network Error') > -1) {
                        alert('네트워크가 원활하지 않습니다.\n잠시 후 다시 시도해주세요.')
                    }
                })
            }
            // else {
            //     //UPDATE
            //     this.$axios.patch(apiUrl, this.form)
            //         .then((res) => {
            //             alert('글이 저장되었습니다.')
            //             this.fnView(res.data.status_id)
            //         }).catch((err) => {
            //         if (err.message.indexOf('Network Error') > -1) {
            //             alert('네트워크가 원활하지 않습니다.\n잠시 후 다시 시도해주세요.')
            //         }
            //     })
            // }
        },
    },
    created() {
        this.getSession();
    },
}
</script>

<style scoped>

</style>