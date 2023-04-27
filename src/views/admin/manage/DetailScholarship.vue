<template>
  학생 정보 상세
    <br>
    <div align="left">
        <router-link to="/admin/manage/detailstudent">
            <button type="button">기본정보</button>&nbsp;&nbsp;
        </router-link>
        <router-link to="/admin/manage/detailgrade">
            <button type="button">성적</button>&nbsp;&nbsp;
        </router-link>
        <router-link to="/admin/manage/detailscholarship">
          <button type="button">장학</button>
        </router-link>
    </div>
    <br>
    <div class="container">
        <table class="w3-table-all">
            <tr>
                <td>장학금번호</td>
                <td>장학금명</td>
                <td>장학금액</td>
                <td>받은학기</td>
            </tr>
            <tr>
                <td>20651255</td>
                <td>성적우수장학금</td>
                <td>700,000</td>
                <td>2022-2학기</td>
            </tr>
            <tr>
                <td>20613122</td>
                <td>코로나지원장학금</td>
                <td>300,000</td>
                <td>2021-1학기</td>
            </tr>
        </table>
    </div>
</template>

<script>
export default {
    name: "DetailScholarship"
}
</script>

<style scoped>

</style>