<template>
    <h3>첫번째 공지 상세보기</h3>
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
                  <input type='file'>
              </td>
          </tr>
          <tr>
              <th>공지내용</th>
              <td colspan="3">첫번째 대학교 전체 공지글입니다.</td>
          </tr>
      </table>
      <input type="button" value="목록으로 돌아가기"> &nbsp; &nbsp;
      <input type="button" value="홈페이지로 돌아가기">
  </div>
</template>

<script>
export default {
    name: "ProfessorUniversityNoticeDetail.vue"
}
</script>

<style scoped>

</style>