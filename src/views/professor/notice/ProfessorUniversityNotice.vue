<template>
    <h3>대학교 전체공지</h3>
  <div>
      <form action="">
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
                  <td class="text-center">1</td>
                  <td class="text-center"><a href="javascript;" @click="fnPage(1)">첫번째 공지사항</a></td>
                  <td class="text-center">관리자</td>
                  <td class="text-center">2023.04.24</td>
                  <td ></td>
                  <td class="text-center">0</td>
              </tr>
              <tr>
                  <td class="text-center">2</td>
                  <td class="text-center"><a href="javascript;" @click="fnPage(2)">두번째 공지사항</a></td>
                  <td class="text-center">관리자</td>
                  <td class="text-center">2023.04.24</td>
                  <td></td>
                  <td class="text-center">0</td>
              </tr>
              <tr>
                  <td class="text-center">3</td>
                  <td class="text-center"><a href="javascript;" @click="fnPage(3)">세번째 공지사항</a></td>
                  <td class="text-center">관리자</td>
                  <td class="text-center">2023.04.25</td>
                  <td></td>
                  <td class="text-center">0</td>
              </tr>
              </tbody>
          </table>
      </form>
      <input type="submit" value="새로운 공지 작성하기">&nbsp;
      <input type="button" value="홈페이지로 돌아가기">
  </div>

</template>

<script>
export default {
    name: "UniversityNotice.vue",
    methods:{
        fnPage(pageNumber){
            this.$router.push(`/notice/${pageNumber}`);
        },
    },
};
</script>

<style scoped>

</style>