<template>
    <h6>공지사항 발송</h6>
    <table class="table table-bordered" align="center">
        <tr style="border: solid 1px ;">
            <th style="border: solid 1px ;">제목</th>
            <td style="border: 1px solid;">
                <input type="text" name="text" size="20" style="width:100%;">
            </td>
        </tr>
        <tr style="border: solid 1px ;">
            <th style="border: solid 1px ;">내용</th>
            <td style="border: 1px solid;">
                <textarea name="content" rows="10" style="width:100%;"></textarea>
            </td>
        </tr>
        <tr style="border: solid 1px ;">
            <th style="border: solid 1px ;">보낼사람</th>
            <td style="border: 1px solid;">
                <input type="radio" name="chk_info">전체 &nbsp;
                <input type="radio" name="chk_info">이메일 &nbsp;
                <input type="radio" name="chk_info">SMS &nbsp;
            </td>
        </tr>
        <tr style="border: solid 1px ;">
            <th style="border: solid 1px ;">소속</th>
            <td style="border: 1px solid;">
                <input type="radio" name="chk_info">전체 &nbsp;
                <select>
                    <option value="">- 선택 -</option>
                    <option value="">인문계</option>
                    <option value="">이공계</option>
                </select>
            </td>
        </tr>
        <tr style="border: solid 1px ;">
            <th style="border: solid 1px ;">전송수단</th>
            <td style="border: 1px solid;">
                <input type="radio" name="chk_info">전체 &nbsp;
                <input type="radio" name="chk_info">이메일 &nbsp;
                <input type="radio" name="chk_info">SMS &nbsp;
            </td>
        </tr>
    </table>
    <div>
            <button type="button">전송</button>&nbsp;&nbsp;
            <button type="button">전송취소</button>
    </div>
</template>

<script>
export default {
    data() { //변수생성
        return {
            requestBody: this.$route.query,
            idx: this.$route.query.idx,

            title: '',
            author: '',
            contents: '',
            created_at: ''
        }
    },
    mounted() {
        this.fnGetView()
    },
    methods: {
        fnGetView() {
            if (this.idx !== undefined) {
                this.$axios.get(this.$serverUrl + '/board/' + this.idx, {
                    params: this.requestBody
                }).then((res) => {
                    this.title = res.data.title
                    this.author = res.data.author
                    this.contents = res.data.contents
                    this.created_at = res.data.created_at
                }).catch((err) => {
                    console.log(err)
                })
            }
        },
        fnList() {
            delete this.requestBody.idx
            this.$router.push({
                path: './list', //  board/list
                query: this.requestBody
            })
        },
        fnView(idx) {
            this.requestBody.idx = idx
            this.$router.push({
                path: './detail',
                query: this.requestBody
            })
        },
        fnSave() {
            let apiUrl = this.$serverUrl + '/board'
            this.form = {
                "idx": this.idx,
                "title": this.title,
                "contents": this.contents,
                "author": this.author
            }//asd

            if (this.idx === undefined) {
                //INSERT
                this.$axios.post(apiUrl, this.form)
                    .then((res) => {
                        alert('글이 저장되었습니다.')
                        this.fnView(res.data.idx)
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
                        this.fnView(res.data.idx)
                    }).catch((err) => {
                    if (err.message.indexOf('Network Error') > -1) {
                        alert('네트워크가 원활하지 않습니다.\n잠시 후 다시 시도해주세요.')
                    }
                })
            }
        }
    }
}
</script>
<style scoped>

</style>