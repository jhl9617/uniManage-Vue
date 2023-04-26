<template>
    <h6>학과별 강의시간표</h6>
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
        <tr align="left">
            <th width="100">검색구분</th>
            <td width="200">
                <select>
                    <option value="">- 선택 -</option>
                    <option value="">학과</option>
                </select>
            </td>
            <th width="100">학과</th>
            <td width="200">
                <select>
                    <option value="">- 선택 -</option>
                    <option value="">경영학과</option>
                    <option value="">컴퓨터공학과</option>
                    <option value="">잔자공학과</option>
                    <option value="">중어중문학과</option>
                    <option value="">영어영문학과</option>
                </select>
            </td>
        </tr>
    </table>
    <button>조회</button>
    <br><br>
    <table class="table table-bordered" align="center" width="505">
        <tr>
            <th>학년</th>
            <th>교과목명</th>
            <th>학점</th>
            <th>시간</th>
            <th>담당교수</th>
            <th>강좌번호</th>
            <th>제한인원</th>
            <th>강의시간</th>
            <th>강의계획서</th>
        </tr>

    </table>
</template>

<script>
export default {
    name: "TimelineByDepart"
}
</script>

<style scoped>

</style>