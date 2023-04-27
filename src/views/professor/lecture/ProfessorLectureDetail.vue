<template>
    <div class="container">
        공업미적분
        <div class="d-flex justify-content-around">
            <div>
                공지사항
                <router-link to="/prof/lecture/notice/list">
                    <input type="button" value="전체보기">
                </router-link>
                <table class="table table-bordered">
                    <thead>
                    <tr>
                        <th>번호</th>
                        <th>제목</th>
                        <th>작성자</th>
                        <th>작성일</th>
                        <th>조회수</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <td>3</td>
                        <td>3번 공지</td>
                        <td>홍길동</td>
                        <td>23-04-25</td>
                        <td>11</td>
                    </tr>
                    <tr>
                        <td>2</td>
                        <td>2번 공지</td>
                        <td>홍길동</td>
                        <td>23-04-24</td>
                        <td>3</td>
                    </tr>
                    <tr>
                        <td>1</td>
                        <td>1번 공지</td>
                        <td>홍길동</td>
                        <td>23-04-23</td>
                        <td>6</td>
                    </tr>
                    </tbody>
                </table>
            </div>
            <div>
                강의자료실
                <router-link to="/prof/lecture/reference/list">
                    <input type="button" value="전체보기">
                </router-link>
                <table class="table table-bordered">
                    <thead>
                    <tr>
                        <th>번호</th>
                        <th>강의자료명</th>
                        <th>작성자</th>
                        <th>파일</th>
                        <th>조회수</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <td>3</td>
                        <td>참고자료 1</td>
                        <td>홍길동</td>
                        <td>◎</td>
                        <td>24</td>
                    </tr>
                    <tr>
                        <td>2</td>
                        <td>수업자료 2</td>
                        <td>홍길동</td>
                        <td>◎</td>
                        <td>27</td>
                    </tr>
                    <tr>
                        <td>1</td>
                        <td>수업자료 1</td>
                        <td>홍길동</td>
                        <td>◎</td>
                        <td>23</td>
                    </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </div>
</template>
<script setup>
</script>
<style>
</style>