<template>
    <div class="container">
        <h3><b>휴강 신청하기</b></h3>
            <table id="cancelledLecturdCreate" class="table" style="width: 1000px;">
                <tr>
                    <th>강의명</th>
                    <td colspan="2">
                        <select>
                            <option value="">강의선택</option>
                            <option v-for="lectureId in lectureIds" :key="lectureId" :value="lectureId">{{ row.lectureId }}</option>
                        </select>


                    </td>
                </tr>
                <tr>
                    <th>작성자</th>
                    <td colspan="2">{{ row.membreId }} 교수님</td>
                </tr>
                <tr>
                    <th>휴강차시</th>
                    <td><input type="number" id="attendanceDay" name="attendanceDay"> 회차</td>
                </tr>
                <tr>
                    <th>보강일시</th>
                    <td>
                        <input type="date">
                    </td>
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
                <tr>
                    <th>강의실 정보</th>
                    <td colspan="2"></td>
                </tr>
                <tr>
                    <th>제출서류</th>
                    <td colspan="2">
                        <input type="file">
                    </td>
                </tr>
                <tr>
                    <th>휴강사유</th>
                    <td colspan="2">
                        <input type="text">
                    </td>
                </tr>
            </table>
            <div class="common-buttons">
                <button type="button" class="" v-on:click="fnSave">휴강 신청하기</button> &nbsp;
                <button type="button" class="" v-on:click="fnList">목록으로 돌아가기</button> &nbsp;
            </div>
        </div>
</template>

<script>
export default{

}


</script>



<style>
#closewrite tr td {
    text-align: left;
}
</style>