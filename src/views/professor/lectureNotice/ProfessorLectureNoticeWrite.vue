<template>
    <h6>공지사항 작성</h6>
    <table class="table table-bordered" align="center">
        <tr style="border: solid 1px ;">
            <th style="border: solid 1px ;">제목</th>
            <td style="border: 1px solid;">
                <input type="text" name="text" v-model="lecture_notice_title" size="20" style="width:100%;">
            </td>
        </tr>
        <tr style="border: solid 1px ;">
            <th style="border: solid 1px ;">내용</th>
            <td style="border: 1px solid;">
                <textarea name="content" v-model="lecture_notice_content" rows="10" style="width:100%;"></textarea>
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
            requestBody: this.$route.query,
            lecture_notice_id: this.$route.query.lecture_notice_id,
            lecture_id: this.$route.query.lecture_id,

            lecture_notice_title: '',
            lecture_notice_content: '',
            created_date: '',
            readcount: '',
        }
    },
    mounted() {
        this.lecture_notice_title = this.$route.query.lecture_notice_title || '';
        this.lecture_notice_content = this.$route.query.lecture_notice_content || '';
        this.fnGetView();    },
    methods: {
        fnGetView() {
            if (this.lecture_notice_id !== undefined) {
                this.$axios.get(this.$serverUrl + '/prof/lecture/notice/' + this.lecture_notice_id, {
                    params: this.requestBody
                }).then((res) => {
                    this.lecture_notice_id = res.data.lecture_notice_id
                    this.lecture_notice_title = res.data.lecture_notice_title
                    this.lecture_notice_content = res.data.lecture_notice_content
                    this.lecture_id = res.data.lecture_id
                    this.created_date = res.data.created_date
                    this.readcount = res.data.readcount
                }).catch((err) => {
                    console.log(err)
                })
            }
        },
        fnList() {
            delete this.requestBody.lecture_notice_id
            this.$router.push({
                path: './list',
                query: this.requestBody
            })
        },
        fnView(lecture_notice_id) {
            this.requestBody.lecture_notice_id = lecture_notice_id
            this.$router.push({
                path: './detail',
                query: this.requestBody
            })
        },
        fnSave() {
            let apiUrl = this.$serverUrl + '/prof/lecture/notice'
            this.form = {
                "lecture_notice_id": this.lecture_notice_id,
                "lecture_notice_title": this.lecture_notice_title,
                "lecture_notice_content": this.lecture_notice_content,
                "lecture_id": this.lecture_id,
            }

            if (this.lecture_notice_id === undefined) {
                //INSERT
                this.$axios.post(apiUrl, this.form)
                    .then((res) => {
                        alert('글이 저장되었습니다.')
                        this.fnView(res.data.lecture_notice_id)
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
                        this.fnView(res.data.lecture_notice_id)
                    }).catch((err) => {
                    if (err.message.indexOf('Network Error') > -1) {
                        alert('네트워크가 원활하지 않습니다.\n잠시 후 다시 시도해주세요.')
                    }
                })
            }
        },
    },

}
</script>
<style scoped>

</style>