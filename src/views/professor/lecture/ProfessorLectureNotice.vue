<template>
    <div class="container">
        공업미적분 공지사항
        <table class="table table-hover">
            <thead>
            <tr>
                <th>번호</th>
                <th>제목</th>
                <th>작성자</th>
                <th>공지 작성일</th>
                <th>파일여부</th>
                <th>조회수</th>
            </tr>
            </thead>
            <tbody>
            <tr>
                <td>3</td>
                <td>
                    <router-link to="/prof/lecture/notice/deatil">3번 공지
                    </router-link>
                </td>
                <td>홍길동</td>
                <td>2023-04-25</td>
                <td>◎</td>
                <td>11</td>
            </tr>
            <tr>
                <td>2</td>
                <td>2번 공지</td>
                <td>홍길동</td>
                <td>2023-04-24</td>
                <td></td>
                <td>3</td>
            </tr>
            <tr>
                <td>1</td>
                <td>1번 공지</td>
                <td>홍길동</td>
                <td>2023-04-23</td>
                <td>◎</td>
                <td>6</td>
            </tr>
            </tbody>
        </table>
        <router-link to="/prof/lecture/notice/write">
            <input type="button" value="새로운 공지 작성하기">
        </router-link> &nbsp; &nbsp;
        <input type="button" value="이전 페이지로 돌아가기">
    </div>
</template>
<script>
</script>
<style></style>