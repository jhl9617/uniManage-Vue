<template>
    <div class="container">
        참고자료 1 상세보기
        <table class="table">
            <tr>
                <th style="width: 25%">제목</th>
                <td style="width: 25%">참고자료 1</td>
                <th style="width: 25%">작성일</th>
                <td style="width: 25%">2023-04-25</td>
            </tr>
            <tr>
                <th>작성자</th>
                <td>홍길동</td>
                <th>조회수</th>
                <td>24</td>
            </tr>
            <tr>
                <th>파일첨부</th>
                <td colspan="3">파일 파일</td>
            </tr>
            <tr>
                <th>내용</th>
                <td colspan="3">
                    참고자료 1입니다.<br>
                    참고바랍니다.
                </td>
            </tr>
        </table>
        <router-link to="/prof/lecture/reference/update">
            <input type="button" value="수정하기">
        </router-link>
        &nbsp; &nbsp;
        <input type="button" value="목록으로 돌아가기"> &nbsp; &nbsp;
        <input type="button" value="강의로 돌아가기">
    </div>
</template>
<script>
</script>
<style></style>