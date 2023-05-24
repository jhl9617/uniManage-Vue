<template>
    <h2>휴강 신청하기</h2>
    <div class="container">
        <div class="row">
            <table class="table table-bordered" id="closewrite">
                <tr>
                    <th style="width: 30%">강의명</th>
                    <td>
                        <select>
                        </select>
                    </td>
                </tr>
                <tr>
                    <th style="width: 30%">작성자</th>
                    <td>{{this.departmentName}} 교수님</td>
                </tr>
                <tr>
                    <th><label for ="ATTENDANCE_DAY"></label>휴강차시</th>
                    <td><input type="number" id="attendanceDay" name="attendanceDay"> 회차</td>
                </tr>
                <tr>
                    <th>보강일시</th>
                    <td>
                        <table>
                            <tr>
                                <th>보강일</th>
                                <td><input type="date"> </td>
                            </tr>
                            <tr>
                                <th>시작시간</th>
                                <td>
                                    <select name="" id="">
                                        <option value="">09:00</option>
                                        <option value="">10:00</option>
                                        <option value="">11:00</option>
                                        <option value="">12:00</option>
                                        <option value="">13:00</option>
                                        <option value="">14:00</option>
                                        <option value="">15:00</option>
                                        <option value="">16:00</option>
                                        <option value="">17:00</option>
                                    </select>
                                </td>
                                <th>종료시간</th>
                                <td>
                                    <select name="" id="">
                                        <option value="">10:00</option>
                                        <option value="">11:00</option>
                                        <option value="">12:00</option>
                                        <option value="">13:00</option>
                                        <option value="">14:00</option>
                                        <option value="">15:00</option>
                                        <option value="">16:00</option>
                                        <option value="">17:00</option>
                                        <option value="">18:00</option>
                                    </select>
                                </td>
                            </tr>
                        </table>
                    </td>
                </tr>
                <tr>
                    <th>강의실 정보</th>
                    <td>강의실 위치 표시</td>
                </tr>
                <tr>
                    <th>제출서류</th>
                    <td>
                        <div class="common-buttons">
                            <input type="file">
                        </div>
                    </td>
                </tr>
                <tr>
                    <th>휴강사유</th>
                    <td>
                        <input type="text">
                    </td>
                </tr>
            </table>
            <div class="common-buttons">
                <button type="button" class="" v-on:click="fnSave">휴강 신청하기</button> &nbsp;
                <router-link to="/prof/lecture/cancelled/list">
                    <button type="button" class="" v-on:click="fnCancelledLectureList">목록으로 돌아가기</button> &nbsp;
                </router-link>
            </div>
        </div>
    </div>
</template>

<script>
// export default {
//     data() {
//         return {
//             requestBody: this.$router.query,
//             lecture_id: '',
//             member_id: '',
//             attendance_Day: '',
//             supply_Date: '',
//             lecture_room_code: '',
//             cancelled_file: '',
//             cancelled_file_rename: '',
//             reason: ''
//         }
//     },
//     mounted() {
//        this.fnView()
//     },
//     // methods: {
    //     async fnView(){
    //         const response = await fetch
    //     }
    //
//     // }
// }











// fnCancelledLectureList
</script>



<style>
#closewrite tr td {
    text-align: left;
}
</style>