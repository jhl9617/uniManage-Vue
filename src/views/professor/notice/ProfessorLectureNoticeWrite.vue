<template>
    <div class="container">
        <h3>공지글 작성</h3>
        <br>
        <table class="table table-bordered">
            <tr>
                <th style="width: 25%">제목</th>
                <td><input type="text" class="form-control"></td>
            </tr>
            <tr>
                <th>파일첨부</th>
                <td><input type="file"></td>
            </tr>
            <tr>
                <th>공지내용</th>
                <td>
                    <textarea name="" id="" cols="70" rows="5" class="form-control"></textarea>
                </td>
            </tr>
        </table>
        <input type="submit" value="작성완료"> &nbsp; &nbsp;
        <input type="reset" value="작성취소"> &nbsp; &nbsp;
        <input type="button" value="목록으로 돌아가기">
    </div>
</template>
<script>
</script>
<style>
table tr td {
    text-align: left;
}
</style>