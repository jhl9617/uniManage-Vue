<template>
    <div class="container-fluid">
        <div class="row">
            <div class="col-md-6">
                <fieldset>
                    <legend>공지사항 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        <button v-on:click="fnNoticeList(lecture_id)" class="btn btn-outline-dark" type="button">전체보기</button>
                    </legend>
                    <table class="w3-table-all table-bordered">
                        <tr>
                            <td>글번호</td>
                            <td>글제목</td>
                            <td>작성일자</td>
                        </tr>
                        <tr v-for="lectureNotice in sortedLectureNotice" :key="lectureNotice.lecture_notice_id">
                            <td>{{lectureNotice.lecture_notice_id}}</td>
                            <td><a v-on:click="fnNotice(`${lectureNotice.lecture_notice_id}`)" style="cursor: pointer;">{{ lectureNotice.lecture_notice_title }}</a></td>
                            <td>{{ lectureNotice.created_date }}</td>
                        </tr>
                    </table>
                </fieldset>
            </div>
            <div class="col-md-6">
                <fieldset>
                    <legend>강의자료실 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        <button v-on:click="fnLectureRoomList(lecture_id)" class="btn btn-outline-dark" type="button" style="cursor: pointer;">전체보기</button>
                    </legend>
                    <table class="w3-table-all table-bordered" >
                        <tr>
                            <td>글번호</td>
                            <td>글제목</td>
                            <td>작성일자</td>
                        </tr>
                        <tr v-for="lectureRoom in sortedLectureRoom" :key="lectureRoom.lecture_room_id">
                            <td>{{lectureRoom.lecture_room_id}}</td>
                            <td><a v-on:click="fnLectureRoom(`${lectureRoom.lecture_room_id}`)" style="cursor: pointer;">{{ lectureRoom.lecture_room_title }}</a></td>
                            <td>{{ lectureRoom.created_date }}</td>
                        </tr>
                    </table>
                </fieldset>
            </div>
        </div>
        <br>
        <div class="row">
            <div class="col-md-6">
                <fieldset>
                    <legend>과제관리 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        <button v-on:click="fnHomeworkList(lecture_id)" class="btn btn-outline-dark" type="button">전체보기</button>
                    </legend>
                    <table class="w3-table-all table-bordered">
                        <tr>
                            <td>글번호</td>
                            <td>글제목</td>
                            <td>마감일자</td>
                        </tr>
                        <tr v-for="homework in sortedHomework" :key="homework.lecture_notice_id">
                            <td>{{homework.homework_id}}</td>
                            <td><a v-on:click="fnHomework(`${homework.homework_id}`)" style="cursor: pointer;">{{ homework.homework_name }}</a></td>
                            <td>{{ homework.deadline }}</td>
                        </tr>
                    </table>
                </fieldset>
            </div>
        </div>
    </div>


</template>

<script>
export default {
    data() { //변수생성
        return {
            requestBody: this.$route.query,
            lecture_id : this.$route.query.lecture_id,
            lecture_room : [],
            homework : [],
            lecture_notice : []
        }
    },
    mounted() { // document.ready, window.onload와 같은 형태
        this.fnGetView()
    },
    computed: {
        sortedLectureNotice() {
            return this.lecture_notice
                .slice() // 원본 배열을 변경하지 않기 위해 복사
                .sort((a, b) => b.lecture_notice_id - a.lecture_notice_id) // id를 내림차순으로 정렬
                .slice(0, 5) // 최대 4개의 항목 추출
        },
        sortedLectureRoom() {
            return this.lecture_room
                .slice() // 원본 배열을 변경하지 않기 위해 복사
                .sort((a, b) => b.lecture_room_id - a.lecture_room_id) // id를 내림차순으로 정렬
                .slice(0, 5) // 최대 4개의 항목 추출
        },
        sortedHomework() {
            return this.homework
                .slice() // 원본 배열을 변경하지 않기 위해 복사
                .sort((a, b) => b.homework_id - a.homework_id) // id를 내림차순으로 정렬
                .slice(0, 5) // 최대 4개의 항목 추출
        },
    },

    methods: {
        fnGetView() {
            this.$axios.get(this.$serverUrl + '/prof/lecture/' + this.lecture_id , {
                params: this.requestBody
            }).then((res) => { //success
                console.log(res.data);
                this.lecture = res.data.lecture_dto
                this.lecture_id = res.data.lecture_dto.lecture_id
                this.lecture_notice = res.data.lecture_notice_dto
                this.lecture_room = res.data.lecture_room_dto
                this.homework = res.data.homework_dto

            }).catch((err) => { // error
                if (err.message.indexOf('Network Error') > -1) {
                    alert('네트워크가 원활하지 않습니다.\n잠시 후 다시 시도해주세요.')
                }
            })
            this.requestBody = { // 데이터 전송
                lecture_id : this.lecture_id
            }
        },

        fnMain(lecture_id) {
            this.lecture_id = lecture_id
            this.$router.push({
                path: '/prof/lecture',
                query: this.requestBody
            })
        },
        fnHomeworkList(lecture_id) {
            this.lecture_id = lecture_id
            this.$router.push({
                path: '/prof/lecture/homework/list',
                query: this.requestBody
            })
        },
        fnHomework(homework_id) {
            this.requestBody.homework_id = homework_id
            this.$router.push({
                path: './homework/detail',
                query: this.requestBody
            })
        },
        fnNoticeList(lecture_id) {
            this.lecture_id = lecture_id
            this.$router.push({
                path: '/prof/lecture/notice/list',
                query: this.requestBody
            })
        },
        fnNotice(lecture_notice_id) {
            this.requestBody.lecture_notice_id = lecture_notice_id
            this.$router.push({
                path: './notice/detail',
                query: this.requestBody
            })
        },
        fnLectureRoomList(lecture_id) {
            this.lecture_id = lecture_id
            this.$router.push({
                path: '/prof/lecture/reference/list',
                query: this.requestBody
            })
        },
        fnLectureRoom(lecture_room_id) {
            this.requestBody.lecture_room_id = lecture_room_id
            this.$router.push({
                path: './reference/detail',
                query: this.requestBody
            })
        },
    }
}

</script>
<style scoped>
table tr th {
    text-align: center;
}
table tr td {
    text-align: center;
}
</style>
