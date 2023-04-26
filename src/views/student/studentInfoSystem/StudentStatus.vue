<template>
    <h6>학적변동내역</h6>
    <table class="table table-bordered" align="center" width="505">
        <tr align="left">
            <th width="100">학번</th>
            <td></td>
            <th width="100">성명</th>
            <td></td>
            <th width="100">학적상태</th>
            <td></td>
        </tr>
        <tr align="left">
            <th>학년</th>
            <td></td>
            <th>이수학기</th>
            <td></td>
            <th>학부(과)</th>
            <td colspan="3"></td>
        </tr>
    </table>
    <br>
    <table class="table table-bordered" align="center" width="505">
        <tr>
            <th>년도</th>
            <th>학기</th>
            <th>변동유형</th>
            <th>변동일자</th>
            <th>만료일자</th>
            <th>사유</th>
        </tr>

    </table>
</template>

<script>
export default {
    name: "StuInfoMainPage"
}
</script>

<style scoped>

</style>