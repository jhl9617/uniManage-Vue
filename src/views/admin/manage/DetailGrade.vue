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
                <td>강의명</td>
                <td>중간고사</td>
                <td>기말고사</td>
                <td>과제</td>
                <td>합계</td>
                <td>평균</td>
                <td>등수</td>
            </tr>
            <tr>
                <td>투자론</td>
                <td>50.0</td>
                <td>50.0</td>
                <td>20.0</td>
                <td>120.0</td>
                <td>63.3</td>
                <td>1</td>
            </tr>
            <tr>
                <td>세무회계</td>
                <td>40.0</td>
                <td>25.5</td>
                <td>0.0</td>
                <td>65.5</td>
                <td>21.8</td>
                <td>7</td>
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