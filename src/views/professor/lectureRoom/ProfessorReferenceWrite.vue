<template>
    <h6>강의 자료 작성</h6>
    <table class="table table-bordered" align="center">
        <tr style="border: solid 1px ;">
            <th style="border: solid 1px ;">제목</th>
            <td style="border: 1px solid;">
                <input type="text" name="text" v-model="lecture_room_title" size="20" style="width:100%;">
            </td>
        </tr>
        <tr>
            <th>강의자료</th>
            <td>
                <input type="file" name="file" v-model="file_name">
            </td>
        </tr>
        <tr style="border: solid 1px ;">
            <th style="border: solid 1px ;">내용</th>
            <td style="border: 1px solid;">
                <textarea name="content" v-model="lecture_room_content" rows="10" style="width:100%;"></textarea>
            </td>
        </tr>
        <div style="text-align: center;">
            <button type="button" class="w3-button w3-round w3-blue-gray" v-on:click="fnSave">저장</button>&nbsp;
        </div>
    </table>
</template>

<script>
export default {
    data() { //변수생성
        return {
            loginMember: null,

            requestBody: this.$route.query,
            lecture_room_id: this.$route.query.lecture_room_id,
            lecture_id: this.$route.query.lecture_id,

            member_id: '',
            lecture_room_title: '',
            lecture_room_content: '',
            created_date: '',
            readcount: '',

            file_name: '',
            file_rename: '',
        }
    },
    mounted() {
        this.lecture_room_title = this.$route.query.lecture_room_title || '';
        this.lecture_room_content = this.$route.query.lecture_room_content || '';
        this.fnGetView();
    },
    methods: {
        fnGetView() {
            if (this.lecture_room_id !== undefined) {
                this.$axios.get(this.$serverUrl + '/prof/lecture/reference/' + this.lecture_room_id, {
                    params: this.requestBody
                }).then((res) => {
                    this.lecture_room_id = res.data.lecture_room_id
                    this.lecture_room_title = res.data.lecture_room_title
                    this.lecture_room_content = res.data.lecture_room_content
                    this.lecture_id = res.data.lecture_id
                    this.created_date = res.data.created_date
                    this.readcount = res.data.readcount
                    this.member_id = res.data.member_id
                    this.file_name = res.data.file_name
                    this.file_rename = res.data.file_rename
                }).catch((err) => {
                    console.log(err)
                })
            }
        },
        fnList() {
            delete this.requestBody.lecture_room_id
            this.$router.push({
                path: './list',
                query: this.requestBody
            })
        },
        fnView(lecture_room_id) {
            this.requestBody.lecture_room_id = lecture_room_id
            this.$router.push({
                path: './detail',
                query: this.requestBody
            })
        },
        fnSave() {
            let apiUrl = this.$serverUrl + '/prof/lecture/reference'
            this.form = {
                "lecture_room_id": this.lecture_room_id,
                "lecture_room_title": this.lecture_room_title,
                "lecture_room_content": this.lecture_room_content,
                "lecture_id": this.lecture_id,
                "member_id": this.loginMember.member_id,
                "file_name": this.file_name,
                "file_rename": this.file_rename,
            }

            if (this.lecture_room_id === undefined) {
                //INSERT
                this.$axios.post(apiUrl, this.form)
                    .then((res) => {
                        alert('글이 저장되었습니다.')
                        this.fnView(res.data.lecture_room_id)
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
                        this.fnView(res.data.lecture_room_id)
                    }).catch((err) => {
                    if (err.message.indexOf('Network Error') > -1) {
                        alert('네트워크가 원활하지 않습니다.\n잠시 후 다시 시도해주세요.')
                    }
                })
            }
        }, async getSession() {
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