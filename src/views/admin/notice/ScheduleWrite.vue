<template>
    학사일정 작성
    <br><br>
    <div class="container">
    <table class="table table-bordered half-width">
        <tr style="border: solid 1px ;">
            <th style="border: solid 1px ;">제목</th>
            <td style="border: 1px solid;">
                <input type="text" name="text" v-model="sche_title" size="20" style="width:100%;">
            </td>
        </tr>
        <tr style="border: solid 1px ;">
            <th style="border: solid 1px ;">시작일</th>
            <td style="border: 1px solid;">
                <input type="date" v-model="start_date" class="w3-input w3-border" placeholder="yyyy-MM-dd">
            </td>
        </tr>
        <tr style="border: solid 1px ;">
            <th style="border: solid 1px ;">끝일</th>
            <td style="border: 1px solid;">
                <input type="date" v-model="end_date" class="w3-input w3-border" placeholder="yyyy-MM-dd">
            </td>
        </tr>
    </table>
    </div>
    <br>
        <button type="button" class="w3-button w3-round w3-blue-gray" v-on:click="fnSave">저장</button>&nbsp;

</template>

<script>
export default {
    data() { //변수생성
        return {
            requestBody: this.$route.query,
            sche_id: this.$route.query.sche_id,

            sche_title: '',
            sche_content: '',
            start_date: '',
            end_date:'',
        }
    },
    mounted() {
        this.fnGetView()
    },
    methods: {
        fnGetView() {
            const urlParams = new URLSearchParams(window.location.search)
            this.sche_id = urlParams.get('sche_id')
            this.sche_title = urlParams.get('sche_title')
            this.start_date = urlParams.get('start_date')
            this.end_date = urlParams.get('end_date')
        },
        fnList() {
            delete this.requestBody.sche_id
            this.$router.push({
                path: 'admin/schedule',
                query: this.requestBody
            })
        },
        fnSave() {
            let apiUrl = this.$serverUrl + '/admin/schedule'
            this.form = {
                "sche_id": this.sche_id,
                "sche_title": this.sche_title,
                // "sche_content": this.sche_content,
                "start_date": this.start_date,
                "end_date": this.end_date,
            }
            const requestBody = {
                sche_id: this.sche_id,
                sche_title: this.sche_title,
                start_date: this.start_date,
                end_date: this.end_date
            }

            if (this.sche_id === undefined) {
                //INSERT
                this.$axios.post(apiUrl, this.form)
                    .then(() => {
                        alert('학사일정 글이 저장되었습니다.')
                        this.fnView()
                    }).catch((err) => {
                    if (err.message.indexOf('Network Error') > -1) {
                        alert('네트워크가 원활하지 않습니다.\n잠시 후 다시 시도해주세요.')
                    }
                })
            } else
            this.$axios
                .post(apiUrl, requestBody)
                .then(() => {
                    alert('학사일정 글이 저장되었습니다.')
                    this.fnView()
                })
                .catch((err) => {
                    if (err.message.indexOf('Network Error') > -1) {
                        alert('네트워크가 원활하지 않습니다.\n잠시 후 다시 시도해주세요.')
                    }
                })
        },
        fnView() {
            this.$router.push({
                path: '/admin/schedule'
            });
        },

    },

}
</script>

<style scoped>
.half-width {
    width: 70%;
}
.container {
    display: flex;
    justify-content: center;
    align-items: center;
    /*height: 100vh; !* 페이지 높이에 맞게 조절 *!*/
}
</style>