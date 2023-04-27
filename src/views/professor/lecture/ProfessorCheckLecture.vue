<template>
    <div class="container">
        강의정보 확인하기
        <table class="table">
            <thead>
            <tr>
                <th>번호</th>
                <th>강의명</th>
                <th>건물이름</th>
                <th>강의실 번호</th>
                <th>요일</th>
                <th>시간</th>
                <th>이동하기</th>
            </tr>
            </thead>
            <tbody>
            <tr>
                <td>1</td>
                <td>공업미적분</td>
                <td>공학관</td>
                <td>102호</td>
                <td>월요일</td>
                <td>09:00~11:00</td>
                <td>
                    <router-link to="/prof/lecture/deatil">
                        <input type="button" value="이동하기">
                    </router-link>
                </td>
            </tr>
            <tr>
                <td>2</td>
                <td>공업적분</td>
                <td>공학관</td>
                <td>105호</td>
                <td>화요일</td>
                <td>10:00~12:00</td>
                <td>
                    <input type="button" value="이동하기">
                </td>
            </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
export default {
    name: "ProfessorCheckLecture.vue"
}
</script>

<style scoped>

</style>