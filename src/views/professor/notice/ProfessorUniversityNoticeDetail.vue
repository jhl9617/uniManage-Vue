<template>
    <div class="board-detail">
        <div class="board-contents">
            <h3>{{ notice_title }}</h3>
            <div>
                <span>{{ created_date }}</span>
                <br>
                <span>조회수 : {{ readcount }}</span>
            </div>
        </div>
        <div class="board-contents">
            <span>{{ notice_content }}</span>
        </div>
        <div class="common-buttons">
            <button type="button" class="w3-button w3-round w3-gray" v-on:click="fnList">목록</button>
        </div>
    </div>
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
            created_date: '',
            readcount: '',
        }
    },
    mounted() { // document.ready, window.onload와 같은 형태
        this.fnGetView();
    },
    methods: {
        fnGetView() {
            this.$axios.get(this.$serverUrl + '/prof/notice/' + this.notice_id, {
                params: this.requestBody
            }).then((res) => { //success
                this.notice_title = res.data.notice_title
                this.notice_content = res.data.notice_content
                this.member_id = res.data.member_id
                this.created_date = res.data.created_date
                this.readcount = res.data.readcount
            }).catch((err) => { // error
                if (err.message.indexOf('Network Error') > -1) {
                    alert('네트워크가 원활하지 않습니다.\n잠시 후 다시 시도해주세요.')
                }
            })
        },
        fnList() {
            delete this.requestBody.notice_id
            this.$router.push({
                path: '/prof/notice/list',
                query: this.requestBody
            })
        },
    },
}
</script>

<style scoped>

</style>