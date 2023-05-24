<template>
  개설강의 상세
    <div class="board-detail">
        <div style="border:2px solid black; padding:100px;" class="board-contents">
            <table align="center" class="table table-bordered">
                <tr>
                    <th width="100">강의명</th>
                    <td>{{ lecture_title}}</td>
                </tr>
                <tr>
                    <th width="100">학기</th>
                    <td>{{ semester }}</td>
                </tr>
                <tr>
                    <th width="100">학과명</th>
                    <td>{{ department_name }}</td>
                </tr>
                <tr>
                    <th width="100">정원</th>
                    <td>{{ number_of_student }}명</td>
                </tr>
                <tr>
                    <th width="100">강의계획서</th>
                    <td>{{ syllabus_title }}</td>
                </tr>
                <tr>
                    <th width="100">강의실</th>
                    <td>{{ roomcode1 }} {{ roomcode2 }} {{ roomcode3 }}호</td>
                </tr>
                <tr>
                    <th width="100">시간</th>
                    <td>{{ timecode1 }} {{ timecode2 }} {{ timecode3 }}</td>
                </tr>
            </table>
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
            requestBody: this.$route.query, //route 가 가지고 있는 쿼리를 requestBody 에 담는다.
            lecture_id: this.$route.query.lecture_id,

            member_id: '',
            classification: '',
            semester: '',
            department_id: '',
            lecture_title:'',
            number_of_student: '',
            credit: '',
            roomcode1: '',
            roomcode2: '',
            roomcode3: '',
            timecode1: '',
            timecode2: '',
            timecode3: '',
            syllabus_title: '',
            syllabus_rename: '',
            lecture_apply_status: '',
            department_name:'',
        }
    },
    mounted() {
        this.fnGetView()
    },
    methods: {
        fnGetView() {
            this.$axios.get(this.$serverUrl + '/admin/manage/lecture/' + this.lecture_id, {
                params: this.requestBody
            }).then((res) => {  //성공 -> res에 정보를 저장함
                this.member_id = res.data.member_id
                this.classification = res.data.classification
                this.semester = res.data.semester
                this.department_id = res.data.department_id
                this.lecture_title = res.data.lecture_title
                this.number_of_student = res.data.number_of_student
                this.credit = res.data.credit
                this.roomcode1 = res.data.roomcode1
                this.roomcode2 = res.data.roomcode2
                this.roomcode3 = res.data.roomcode3
                this.timecode1 = res.data.timecode1
                this.timecode2 = res.data.timecode2
                this.timecode3 = res.data.timecode3
                this.syllabus_title = res.data.syllabus_title
                this.syllabus_rename = res.data.syllabus_rename
                this.lecture_apply_status = res.data.lecture_apply_status
                this.department_name = res.data.department_name
            }).catch((err) => { //실패 -> err에 정보를 저장함
                if (err.message.indexOf('Network Error') > -1) {
                    alert('네트워크가 원활하지 않습니다.\n잠시 후 다시 시도해주세요.')
                }
            })
        },
        fnList() {
            delete this.requestBody.lecture_id
            this.$router.push({
                path: '/admin/manage/lecture',
                query: this.requestBody
            })
        },
        fnUpdate() {
            this.$router.push({
                path: '/admin/manage/lecture/write',
                query: this.requestBody
            })
        },
        fnDelete() {
            if (!confirm("삭제하시겠습니까?")) return

            this.$axios.delete(this.$serverUrl + '/admin/manage/lecture/' + this.lecture_id, {})
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