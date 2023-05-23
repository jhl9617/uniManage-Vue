<template>
    <h6>강의평가</h6>
    <div>
        여러분의 답변은 연구 및 교육 목적으로만 사용될 것이며 개인정보가 공개되지 않음을 알려드립니다. <br>솔직하고 신중한 답변 부탁드립니다. 감사합니다.
    </div>
    <div align="left" style="border:1px solid black; padding:10px;">
        -문항을 읽고 가장 적절한 곳에 체크해 주세요.
        <table class="table table-bordered" align="center">
            <tr align="left">
                <td align="center" valign="center" width="50" rowspan="2">1</td>
                <td width="500">전공강의의 수와 종류에 만족한다.</td>
            </tr>
            <tr align="left">
                <td width="500">
                    <input type="radio" name="chk_info">전혀 그렇지 않다. &nbsp;
                    <input type="radio" name="chk_info">그렇지 않다. &nbsp;
                    <input type="radio" name="chk_info">보통이다. &nbsp;
                    <input type="radio" name="chk_info">그렇다. &nbsp;
                    <input type="radio" name="chk_info">매우 그렇다. &nbsp;
                </td>
            </tr>
            <tr align="left">
                <td align="center" valign="center" width="50" rowspan="2">2</td>
                <td width="500">전공강의의 질과 수준에 만족한다.</td>
            </tr>
            <tr align="left">
                <td width="500">
                    <input type="radio" name="chk_info">전혀 그렇지 않다. &nbsp;
                    <input type="radio" name="chk_info">그렇지 않다. &nbsp;
                    <input type="radio" name="chk_info">보통이다. &nbsp;
                    <input type="radio" name="chk_info">그렇다. &nbsp;
                    <input type="radio" name="chk_info">매우 그렇다. &nbsp;
                </td>
            </tr>
        </table>
        <br>
        <input type="submit" value="제출">
    </div>
</template>

<script>
export default {
    name: "SurveyCourse"
}
</script>

<style scoped>

</style>