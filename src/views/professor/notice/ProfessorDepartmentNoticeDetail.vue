<template>
 <h3>학과공지 상세보기</h3>
 <br>
 <div class="container">
  <table class="table">
   <tr>
    <th style="width: 25%">제목</th>
    <td style="width: 25%">첫번째 공지사항</td>
    <th style="width: 25%">공지작성일</th>
    <td style="width: 25%">2023-04-24</td>
   </tr>
   <tr>
    <th>작성자</th>
    <td>관리자</td>
    <th>조회수</th>
    <td>0</td>
   </tr>
   <tr>
    <th>파일첨부</th>
    <td colspan="3">
     <input type="button" value="파일선택"> 선택된 파일없음
    </td>
   </tr>
   <tr>
    <th>공지내용</th>
    <td colspan="3">첫번째 학과 공지글입니다.</td>
   </tr>
  </table>
  <input type="button" value="목록으로 돌아가기"> &nbsp;
  <input type="button" value="홈페이지로 돌아가기">
 </div>
</template>

<script>
export default {
    name: "ProfessorDepartmentNoticeDetail.vue"
}
</script>

<style scoped>

</style>