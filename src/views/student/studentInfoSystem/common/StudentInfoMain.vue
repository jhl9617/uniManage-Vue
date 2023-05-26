<template>
    <div class="container">
        <div class="row">
            <div class="col-md-6">
                <div class="d-flex flex-column align-items-center text-center">
                    <fieldset>
                        <legend>개인정보
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        </legend>
                        <table>
                            <td>
                                <img alt="Admin" class="rounded-circle"
                                     src="https://bootdey.com/img/Content/avatar/avatar7.png" width="150">
                            </td>
                            <td>
                                <div class="mt-3">
                                    <h4 v-if="loginMember">{{ loginMember.name}} 학생</h4>
                                    <div align="left" class="text-secondary mb-1">
                                        <h6 v-if="loginMember">소속 : {{ loginMember.department_name}}</h6>
                                        <h6 v-if="loginMember">학년 : {{ loginMember.grade}}학년</h6>
                                    </div>
                                </div>
                            </td>
                            <tr>
                                <td>
                                    <button class="btn btn-primary" v-on:click="fnMypage">마이페이지</button>
                                </td>
                            </tr>
                        </table>
                    </fieldset>
                </div>

            </div>
        </div>
        <br>
        <div class="row">
            <div class="col-md-6">
                <fieldset>
                    <legend>공지사항 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        <button v-on:click="fnNoticeList(notice_id)" class="btn btn-outline-dark" type="button">전체보기</button>
                    </legend>

                    <table class="w3-table-all">
                        <tr>
                            <td>No</td>
                            <td>글제목</td>
                            <td>작성일</td>
                        </tr>
                        <tr v-for="notice in sortedNotice" :key="notice.notice_id">
                            <td>{{ notice.notice_id }}</td>
                            <td><a v-on:click="fnNotice(`${notice.notice_id}`)" style="cursor: pointer;">{{ notice.notice_title }}</a></td>
                            <td>{{ notice.created_date }}</td>
                        </tr>
                    </table>
                </fieldset>
            </div>
            <div class="col-md-6">
              <h4>학사일정</h4>
              <FullCalendar defaultView="dayGridMonth" :options="calendarOptions" />
            </div>
        </div>
    </div>


</template>

<script>
import FullCalendar from '@fullcalendar/vue3';
import dayGridPlugin from '@fullcalendar/daygrid';
import koLocale from '@fullcalendar/core/locales/ko';
export default {
  components: {
    FullCalendar // make the <FullCalendar> tag available
  },
    data() {
        return {
            loginMember: null,
            notice: [],
            sche: [],
            id : '',
            title : '',
            start : '',
            end : '',
            calendarOptions: {
              plugins : [ dayGridPlugin ],
              initialView: 'dayGridMonth',
              weekends: false,
              events : [],
              locales: [koLocale], // 로케일 추가
              locale: 'ko',



            }
        };
    },
    mounted() { // document.ready, window.onload와 같은 형태
        this.fnGetView()
    },
    methods: {
        fnGetView() {
            this.$axios.get(this.$serverUrl + '/student', {
                params: this.requestBody
            }).then((res) => { //success

                this.notice = res.data.notice_dto
                this.sche = res.data.schedule_dto
                console.log("this.sche : " , this.sche);
                this.setCalendarEvents();
            }).catch((err) => { // error
                if (err.message.indexOf('Network Error') > -1) {
                    alert('네트워크가 원활하지 않습니다.\n잠시 후 다시 시도해주세요.')
                }
            })

            this.requestBody = { // 데이터 전송
                member_id : this.member_id
            }

        },
        setCalendarEvents() {
        this.calendarOptions.events = this.sche.map(item => ({
          id : item.sche_id,
          title: item.sche_title,
          start: item.start_date,
          end: item.end_date
        }));
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
        fnNoticeList(notice_id){
            this.notice_id = notice_id
            this.$router.push({
                path: '/student/notice',
                query: this.requestBody
            })
        },
        fnNotice(notice_id){
            this.requestBody.notice_id = notice_id
            this.$router.push({
                path: '/student/notice/detail',
                query: this.requestBody
            })
        },
        fnMypage() {
            delete this.requestBody.member_id
            this.$router.push({
                path: '/student/mypage',
                query: this.requestBody
            })
        },
    },
    computed: {
        sortedNotice(){
            return this.notice
                .slice() // 원본 배열을 변경하지 않기 위해 복사
                .sort((a, b) => b.notice_id - a.notice_id) // id를 내림차순으로 정렬
                .slice(0, 5) // 최대 4개의 항목 추출
        },
    },
    created() {
        this.getSession();
    },

}
</script>

<style scoped>

</style>