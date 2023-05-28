<template>
    <div class="container">
        <h3><b>휴강 신청하기</b></h3>
        <table id="cancelledLecturdetail" class="table" style="width: 1000px;">
            <tr>
                <th>강의명</th>
                <td colspan="1">{{ row.lectureId }}</td>

                <th>휴강회차</th>
                <td colspan="1">{{ row.attendanceDay }} 회차</td>
            </tr>
            <tr>
                <th>작성자</th>
                <td colspan="4">{{ row.memberId }} 교수님</td>
            </tr>

            <tr>
                <th>보강일시</th>
                <td colspan="4">{{ row.supplyDate }}</td>
            </tr>
            <tr>
                <th>강의실 위치</th>
                <td colspan="4">{{ row.lectureRoomCode }}</td>
            </tr>
            <tr>
                <th>제출서류</th>
                <td  colspan="4">{{row.cancelledFile}}
                    <input type="file">
                </td>
            </tr>
            <tr>
                <th>휴강사유</th>
                <td colspan="4">
                    <input type="text">
                </td>
            </tr>
        </table>


        <button type="submit" class="w3-button w3-round w3-blue-gray" v-on:click="fnNewView">새로운 휴강신청 작성하기</button> &nbsp;
        <button type="button" class="w3-button w3-round w3-blue-gray" v-on:click="fnList">목록</button>

    </div>
</template>

<script>
export default {
    data() {
        return {
            requestBody: this.$router.query,
            cancelledLectureIdx: this.$route.query.cancelledLectureIdx,

            memberId: '',
            lectureId: '',
            lectureRoomCode: '',
            attendanceDay: '',
            supplyDate: '',
            reason: '',
            cancelledFile: '',
            cancelledFileRename: '',
            cancelledApply: ''
        }
    },
    mounted() {
        this.fnGetView()
    },
    methods: {
        fnGetView(){
            this.$axios.get(this.$serverUrl + '/prof/lecture/cancelled/list/' + this.cancelledLectureIdx,{
                params: this.requestBody
            }).then((res) => {
                this.memberId = res.data.memberId
                this.lectureId = res.data.lectureId
                this.lectureRoomCode = res.data.lectureRoomCode
                this.attendanceDay = res.data.attendanceDay
                this.reason = res.data.reason
                this.cancelledFile = res.data.cancelledFile
                this.cancelledFileRename = res.data.cancelledFileRename
                this.cancelledApply = res.data.cancelledApply
            }).catch((err) => {
                if(err.message.indexOf('Network Error')> -1){
                    alert('네트워크가 원활하지 않습니다.\n잠시 후 다시 시도해주세요.')
                }
            })
        },
        fnList(){
            delete this.requestBody.idx
            this.$router.push({
                path: './list',
                query: this.requestBody
            })
        },
        fnNewView(){
            delete this.requestBody.idx
            this.$router.push({
                path: './write',
                query: this.requestBody
            })
        }
    }
}
</script>

<style scoped>
</style>