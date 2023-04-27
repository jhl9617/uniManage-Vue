<template>
    <div class="container">
        신규강의 신청내역
        <table class="table">
            <thead>
            <tr>
                <th>강의명</th>
                <th>건물이름</th>
                <th>강의실 번호</th>
                <th>요일</th>
                <th>시간</th>
                <th>수용인원</th>
                <th>승인여부</th>
            </tr>
            </thead>
            <tbody>
            <tr>
                <td>공업미적분</td>
                <td>공학관</td>
                <td>102호</td>
                <td>월요일</td>
                <td>09:00~11:00</td>
                <td>40명</td>
                <td>승인완료</td>
            </tr>
            <tr>
                <td>공업적분</td>
                <td>공학관</td>
                <td>105호</td>
                <td>화요일</td>
                <td>10:00~12:00</td>
                <td>40명</td>
                <td>승인대기</td>
            </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
export default {
    name: "professorNewLectureDetails"
}
</script>

<style scoped>

</style>