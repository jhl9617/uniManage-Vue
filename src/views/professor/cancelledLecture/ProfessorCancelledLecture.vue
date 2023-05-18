<template>
    <div class="container">
        <table class="table table-bordered" id="noticedetail">
            <tr>
                <th style="width: 30%">강의명</th>
                <td style="width: 25%">공업미적분</td>
                <th style="width: 20%">휴강신청일</th>
                <td style="width: 25%">2023-04-25</td>
            </tr>
            <tr>
                <th>작성자</th>
                <td colspan="3">교수 홀길동</td>
            </tr>
            <tr>
                <th>휴강차시</th>
                <td colspan="3">3회차</td>
            </tr>
            <tr>
                <th>보강일시</th>
                <td colspan="3">2023년 05월 1일 09:00 ~ 11:00</td>
            </tr>
            <tr>
                <th>강의실 정보</th>
                <td colspan="3">강의실 위치 표시</td>
            </tr>
            <tr>
                <th>제출서류</th>
                <td  colspan="3">
                    <input type="file">
                </td>
            </tr>
            <tr>
                <th>휴강사유</th>
                <td colspan="3">휴강에 대한 내용작성</td>
            </tr>
        </table>
        <input type="button" value="목록으로 돌아가기"> &nbsp; &nbsp;
    </div>
<!-- 휴강 게시물 상세보기 -->
</template>

<script>
export default {
    name: "ProfessorCancelledLecture.vue"
}
</script>

<style scoped>

</style>