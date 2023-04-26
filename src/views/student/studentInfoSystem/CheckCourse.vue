<template>
    <h6>수강신청내역조회</h6>
    <table class="table table-bordered" align="center" width="505">
        <tr align="left">
            <th width="100">년도</th>
            <td width="200">
                <select>
                    <option value="">- 선택 -</option>
                    <option value="year">2023</option>
                    <option value="year">2022</option>
                    <option value="year">2021</option>
                </select>
            </td>
            <th width="100">학기</th>
            <td width="200">
                <select>
                    <option value="">- 선택 -</option>
                    <option value="semester">1학기</option>
                    <option value="semester">2학기</option>
                </select>
            </td>
        </tr>
    </table>
    <br><br>
    <div align="left">
        -붉은색으로 표시된 과목은 폐강된 과목입니다. 다른 과목으로 변경하세요.<br>
        -주황색으로 표시된 과목은 수강철회된 과목입니다.<br>
        -강의를 클릭하시면 수업계획서를 조회하실 수 있습니다.
    </div>
    <br><br>
    <table class="table table-bordered" align="center" width="505">
        <tr>
            <th width="100">강좌번호</th>
            <th width="100">교과목명</th>
            <th width="100">담당교수</th>
            <th width="100">학점</th>
            <th width="100">요일및시간</th>
            <th width="100">강의실</th>
        </tr>

    </table>
</template>

<script>
export default {
    name: "CheckCourse"
}
</script>

<style scoped>

</style>