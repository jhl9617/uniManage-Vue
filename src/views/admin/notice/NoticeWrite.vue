<template>
    <h6>공지사항 작성</h6>
    <table class="table table-bordered" align="center">
        <tr style="border: solid 1px ;">
            <th style="border: solid 1px ;">제목</th>
            <td style="border: 1px solid;">
                <input type="text" name="text" v-model="notice_title" size="20" style="width:100%;">
            </td>
        </tr>
        <tr style="border: solid 1px ;">
            <th style="border: solid 1px ;">내용</th>
            <td style="border: 1px solid;">
                <textarea name="content" v-model="notice_content" rows="10" style="width:100%;"></textarea>
            </td>
        </tr>
        <button type="button" class="w3-button w3-round w3-blue-gray" v-on:click="fnSave">저장</button>&nbsp;
    </table>
</template>

<script>
export default {
    data() { //변수생성
        return {
            requestBody: this.$route.query,
            notice_id: this.$route.query.notice_id,

            notice_title: '',
            notice_content: '',
            member_id: '',
            created_date:'',
            readcount:'',

            loginMember: null,

        }
    },
    mounted() {
        this.fnGetView()
    },
    methods: {
        fnGetView() {
            if (this.notice_id !== undefined) {
                this.$axios.get(this.$serverUrl + '/admin/notice/' + this.notice_id, {
                    params: this.requestBody
                }).then((res) => {
                    this.notice_id = res.data.notice_id
                    this.notice_title = res.data.notice_title
                    this.notice_content = res.data.notice_content
                    this.member_id = res.data.member_id
                    this.created_date = res.data.created_date
                    this.readcount = res.data.readcount
                }).catch((err) => {
                    console.log(err)
                })
            }
        },
        fnList() {
            delete this.requestBody.notice_id
            this.$router.push({
                path: './list',
                query: this.requestBody
            })
        },
        fnView(notice_id) {
            this.requestBody.notice_id = notice_id
            this.$router.push({
                path: './view',
                query: this.requestBody
            })
        },
        fnSave() {
            let apiUrl = this.$serverUrl + '/admin/notice'
            this.form = {
                "notice_id": this.notice_id,
                "notice_title": this.notice_title,
                "notice_content": this.notice_content,
                "member_id": this.loginMember.member_id,
            }

            if (this.notice_id === undefined) {
                //INSERT
                this.$axios.post(apiUrl, this.form)
                    .then((res) => {
                        alert('글이 저장되었습니다.')
                        this.fnView(res.data.notice_id)
                    }).catch((err) => {
                    if (err.message.indexOf('Network Error') > -1) {
                        alert('네트워크가 원활하지 않습니다.\n잠시 후 다시 시도해주세요.')
                    }
                })
            } else {
                //UPDATE
                this.$axios.patch(apiUrl, this.form)
                    .then((res) => {
                        alert('글이 저장되었습니다.')
                        this.fnView(res.data.notice_id)
                    }).catch((err) => {
                    if (err.message.indexOf('Network Error') > -1) {
                        alert('네트워크가 원활하지 않습니다.\n잠시 후 다시 시도해주세요.')
                    }
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