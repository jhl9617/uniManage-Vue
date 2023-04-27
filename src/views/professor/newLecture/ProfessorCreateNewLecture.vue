<template>
    <div class="container">
        <form action="">
            <h4>신규강의 개설하기</h4> <br>
            <table class="table" style="width: 800px">
                <tr>
                    <th>강의명</th>
                    <td colspan="3"><input type="text" class="form-control"></td>
                </tr>
                <tr>
                    <th>학점</th>
                    <td colspan="3">
                        <select name="" id="">
                            <option value="" selected>선택</option>
                            <option value="">1학점</option>
                            <option value="">2학점</option>
                            <option value="">3학점</option>
                        </select>
                    </td>
                </tr>
                <tr>
                    <th style="width: 15%;">강의실 1</th>
                    <td style="width: 35%"><input type="text" class="form-control"></td>
                    <th style="width: 15%;">강의시간 1</th>
                    <td style="width: 35%"><input type="text" class="form-control"></td>
                </tr>
                <tr>
                    <th>강의실 2</th>
                    <td><input type="text" class="form-control"></td>
                    <th>강의시간 2</th>
                    <td><input type="text" class="form-control"></td>
                </tr>
                <tr>
                    <th>강의실 3</th>
                    <td><input type="text" class="form-control"></td>
                    <th>강의시간 3</th>
                    <td><input type="text" class="form-control"></td>
                </tr>
                <tr>
                    <th colspan="4">
                        <router-link to="/prof/create/room" target="_blank">
                            <input type="button" value="강의실 조회">
                        </router-link>
                    </th>
                </tr>
                <tr>
                    <th>강의계획서</th>
                    <td colspan="3">
                        <input type="file">
                    </td>
                </tr>
            </table>
            <input type="submit" value="신규강의 생성하기"> &nbsp; &nbsp;
            <input type="button" value="홈페이지로 돌아가기">
        </form>
    </div>
</template>
<script>
</script>
<style>
table tr {
    vertical-align: middle
}
</style>