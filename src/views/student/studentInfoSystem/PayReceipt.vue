<template>
    <h6>등록금 납입증명서</h6>
    <div align="right">
        <button type="button">조회</button>&nbsp;&nbsp;
        <button type="button">출력</button>
    </div>
    <br>
    <table class="table table-bordered" align="center" width="505">
        <tr align="left">
            <th width="100">학번</th>
            <td width="200">

            </td>
            <th width="100">성명</th>
            <td width="200">

            </td>
        </tr>
        <tr align="left">
            <th width="100">학적상태</th>
            <td width="200">

            </td>
            <th width="100">학년</th>
            <td width="200">

            </td>
        </tr>
        <tr align="left">
            <th width="100">학부(과)</th>
            <td width="200"  colspan="3">

            </td>
        </tr>
        <tr align="left">
            <th width="100">년도</th>
            <td width="200"  colspan="3">
                <select>
                    <option value="">- 선택 -</option>
                    <option value="">2023</option>
                    <option value="">2022</option>d
                    <option value="">2021</option>
                    <option value="">2020</option>
                    <option value="">2019</option>
                </select>
            </td>
        </tr>
    </table>
    <br><br>
    <p align="left" style="border:1px solid black; padding:10px;" >
    -등록금 납입 증명서 출력 방법<br>
        1. 등록금 납입 년도를 입력합니다.<br>
        2. 조회 버튼을 클릭하여 교육비 납입 증명서 출력 가능여부를 확인합니다.<br>
        3. 출력 버튼을 클릭하여 증명서를 출력합니다.<br>
        <br>
        -등록금 납입증명서에 표기된 장학금은 지급예정금액이 포함되어 있으므로 실 지급된 금액과 차이가 있을 수 있습니다.<br>
        -장학금 관련 문의<br>
        인문캠퍼스 02-0000-0000<br>
        자연캠퍼스 02-1111-1111
    </p>
</template>

<script>
export default {
    name: "PayReciept"
}
</script>

<style scoped>

</style>