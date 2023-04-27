<template>
  학생 정보 상세
    <br>
    <div align="left">
        <router-link to="/admin/manage/detailstudent">
            <button type="button">기본정보</button>&nbsp;&nbsp;
        </router-link>
        <router-link to="/admin/manage/detailscholarship">
            <button type="button">성적</button>&nbsp;&nbsp;
        </router-link>
        <button type="button">장학</button>
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
                <td>중간고사</td>
                <td>201</td>
                <td>30</td>
                <td></td>
                <td>30</td>
                <td></td>
            </tr>
            <tr>
                <td>4</td>
                <td>3</td>
                <td>301</td>
                <td>30</td>
                <td></td>
                <td>30</td>
                <td></td>
            </tr>
            <tr>
                <td>3</td>
                <td>2</td>
                <td>202</td>
                <td>30</td>
                <td></td>
                <td>30</td>
                <td></td>
            </tr>
            <tr>
                <td>2</td>
                <td>1</td>
                <td>104</td>
                <td>25</td>
                <td></td>

            </tr>
            <tr>
                <td>1</td>
                <td>2</td>
                <td>205</td>
                <td>30</td>
                <td></td>
                <td>30</td>
                <td></td>
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