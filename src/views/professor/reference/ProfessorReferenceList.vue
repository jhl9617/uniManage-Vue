<template>
    <div class="container">
        공업미적분 강의자료실
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
                    <router-link to="/prof/lecture/reference/detail">참고자료 1
                    </router-link>
                </td>
                <td>홍길동</td>
                <td>2023-04-25</td>
                <td>◎</td>
                <td>24</td>
            </tr>
            <tr>
                <td>2</td>
                <td>수업자료 2</td>
                <td>홍길동</td>
                <td>2023-04-24</td>
                <td>◎</td>
                <td>27</td>
            </tr>
            <tr>
                <td>1</td>
                <td>수업자료 1</td>
                <td>홍길동</td>
                <td>2023-04-23</td>
                <td>◎</td>
                <td>23</td>
            </tr>
            </tbody>
        </table>
        <router-link to="/prof/lecture/reference/write">
            <input type="button" value="강의자료 작성하기">
        </router-link> &nbsp; &nbsp;
        <input type="button" value="이전 페이지로 돌아가기">
    </div>
</template>
<script>
</script>
<style></style>