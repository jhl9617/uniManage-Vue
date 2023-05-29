<template>
    <div class="board-detail">
        <div class="board-contents" style="text-align: center;">
            <h3> 제목 : {{ lecture_notice_title }}</h3>
            <div style="text-align: left">
                <strong class="w3-large"> 작성일자 : {{ created_date }}</strong>
                <br>
                <span> 조회수 : {{ readcount }}</span>
            </div>
        </div>
        <div class="board-contents">
            <span>{{ lecture_notice_content }}</span>
        </div>
        <div class="common-buttons">
            <button type="button" class="w3-button w3-round w3-blue-gray" v-on:click="fnUpdate">수정</button>&nbsp;
            <button type="button" class="w3-button w3-round w3-red" v-on:click="fnDelete">삭제</button>&nbsp;
            <button type="button" class="w3-button w3-round w3-gray" v-on:click="fnList">목록</button>
        </div>
    </div>
</template>

<script>
export default {
    data() { //변수생성
        return {
            requestBody: this.$route.query,
            lecture_notice_id: this.$route.query.lecture_notice_id,
            lecture_id : this.$route.query.lecture_id,

            lecture_notice_title: '',
            lecture_notice_content: '',
            readcount: '',
            created_date: ''
        }
    },
    mounted() { // document.ready, window.onload와 같은 형태

        this.fnGetView()
    },
    methods: {
        fnGetView() {
            this.$axios.get(this.$serverUrl + '/prof/lecture/notice/detail', {
                params: this.requestBody
            }).then((res) => { //success
                this.lecture_notice_id = res.data.lecture_notice_id
                this.lecture_id = res.data.lecture_id
                this.lecture_notice_title = res.data.lecture_notice_title
                this.lecture_notice_content = res.data.lecture_notice_content
                this.readcount = res.data.readcount
                this.created_date = res.data.created_date
            }).catch((err) => { // error
                if (err.message.indexOf('Network Error') > -1) {
                    alert('네트워크가 원활하지 않습니다.\n잠시 후 다시 시도해주세요.')
                }
            })
        },
        fnList() {
            delete this.requestBody.lecture_notice_id
            this.$router.push({
                path: './list',
                query: this.requestBody
            })
        },
        fnUpdate() {
            this.$router.push({
                path: './write',
                query: {
                    ...this.requestBody,
                    lecture_notice_title: this.lecture_notice_title,
                    lecture_notice_content: this.lecture_notice_content
                }
            })
        },
        fnDelete() {
            if (!confirm("삭제하시겠습니까?")) return

            this.$axios.delete(this.$serverUrl + '/prof/lecture/notice/' + this.lecture_notice_id, {})
                .then(() => {
                    alert('삭제되었습니다.')
                    this.fnList();
                }).catch((err) => {
                console.log(err);
            })
        }
    }
}
</script>
<style scoped>


</style>