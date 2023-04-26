<template>
    <h6>등록금 납입증명서</h6>
    <div align="right">
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
    </table>
    <br><br>
    <p align="left" style="border:1px solid black; padding:10px;" >
      -학생은 고지서 출력이 가능합니다. 위의 출력 버튼을 누르세요.
    </p>
</template>

<script>
export default {
    name: "PrintReceipt"
}
</script>

<style scoped>

</style>