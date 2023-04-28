<template>
    <div class="container">
        <div class="row">
            <h3>과제생성</h3>
            <br>
            <table class="table table-bordered" id="homeworkwrite">
                <tr>
                    <th>강의명</th>
                    <td>
                        <select name="" id="" class="form-control">
                            <option value="">강의선택</option>
                            <option value="">공업미적분</option>
                            <option value="">공업적분</option>
                        </select>
                    </td>
                </tr>
                <tr>
                    <th>과제명</th>
                    <td>
                        <input type="text" class="form-control">
                    </td>
                </tr>
                <tr>
                    <th>자료첨부</th>
                    <td>
                        <input type="file">
                    </td>
                </tr>
                <tr>
                    <th style="vertical-align: middle">과제내용</th>
                    <td><textarea name="" id="" cols="70" rows="5" class="form-control"></textarea></td>
                </tr>
            </table>
            <label style="text-align: left">
                <input type="checkbox"> 수강생들에게 문자 발송하기
            </label>
            <div>
                <input type="submit" value="과제 등록"> &nbsp; &nbsp;
                <input type="button" value="이전페이지로">
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name: "ProfessorCreateNewHomework.vue"
}
</script>

<style scoped>
#homeworkwrite tr td {
    text-align: left;
}
</style>