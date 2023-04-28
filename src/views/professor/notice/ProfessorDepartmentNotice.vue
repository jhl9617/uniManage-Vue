<template>
 <h3>학과 공지사항</h3>
 <br>
 <div class="container">
  <table class="table table-bordered"  style="width: 800px;">
   <thead>
   <tr>
    <th>No</th>
    <th>공지제목</th>
    <th>작성자</th>
    <th>공지 작성일</th>
    <th>파일여부</th>
    <th>조회수</th>
   </tr>
   </thead>

   <tbody>
   <tr>
    <td>1</td>
    <td><router-link to="/prof/notice/DepartmentNoticeDetail">첫번째 학과 공지사항</router-link></td>
    <td>관리자</td>
    <td>2023.04.24</td>
    <td ></td>
    <td>0</td>
   </tr>
   <tr>
    <td>2</td>
    <td>두번째 학과 공지사항</td>
    <td>관리자</td>
    <td>2023.04.24</td>
    <td></td>
    <td>0</td>
   </tr>
   <tr>
    <td>3</td>
    <td>세번째 학과 공지사항</td>
    <td>관리자</td>
    <td>2023.04.25</td>
    <td></td>
    <td>0</td>
   </tr>
   </tbody>
  </table>
  <br>
  <button>새로운 공지 작성하기</button>&nbsp;
  <button>홈페이지로 돌아가기</button>
 </div>
</template>

<script>
export default {
    name: "DepartmentNotice.vue"
}
</script>

<style scoped>
</style>