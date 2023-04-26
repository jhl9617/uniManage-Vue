<!-- PersonInfo.vue -->
<template>
    <div>
        <table class="table table-bordered">
            <tr>
                <th colspan="2">개인정보 조회</th>
            </tr>
            <tr>
                <th style="width: 25%">소속</th>
                <td></td>
            </tr>
            <tr>
                <th>이름</th>
                <td></td>
            </tr>
            <tr>
                <th>학적상태</th>
                <td></td>
            </tr>
        </table>
        <br>
        <form action="">
            <table class="table table-bordered">
                <tr>
                    <th colspan="2">개인정보 수정</th>
                </tr>
                <tr>
                    <th style="width: 25%">영문명</th>
                    <td>
                        <input type="text" class="form-control">
                    </td>
                </tr>
                <tr>
                    <th>우편번호</th>
                    <td>
                        <input type="text" class="form-control">
                    </td>
                </tr>
                <tr>
                    <th style="vertical-align: middle;">주소</th>
                    <td>
                        <input type="text" class="form-control">
                        <input type="text" class="form-control">
                    </td>
                </tr>
                <tr>
                    <th>휴대전화</th>
                    <td>
                        <input type="tel" class="form-control">
                    </td>
                </tr>
                <tr>
                    <th>E-Mail</th>
                    <td>
                        <input type="email" class="form-control">
                    </td>
                </tr>
            </table>
            <input type="submit" value="개인정보 수정하기"> &nbsp; &nbsp;
            <input type="button" value="홈페이지로 돌아가기">
        </form>
    </div>
</template>
<script>
</script>
<style>
td {
    text-align: left;
}
</style>