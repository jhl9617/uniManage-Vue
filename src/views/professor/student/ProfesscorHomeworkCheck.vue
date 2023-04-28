<template>
    <div class="container">
        <div class="row">
            <h3>과제 제출현황</h3>
            <br>
            <table class="table">
                <tr>
                    <th style="width: 25%">강의명</th>
                    <td>
                        <select name="" id="">
                            <option value="">선택</option>
                            <option value="">공학미적분</option>
                            <option value="">공학적분</option>
                        </select>
                    </td>
                </tr>
                <tr>
                    <th>주차</th>
                    <td>
                        <select name="" id="">
                            <option value="">선택</option>
                            <option value="">1주차</option>
                            <option value="">2주차</option>
                            <option value="">3주차</option>
                            <option value="">4주차</option>
                            <option value="">5주차</option>
                            <option value="">6주차</option>
                            <option value="">7주차</option>
                            <option value="">8주차</option>
                            <option value="">9주차</option>
                            <option value="">10주차</option>
                        </select>
                    </td>
                </tr>
            </table>
            <div>
                <input type="button" value="과제현황 조회하기">
            </div>
        </div>
        <br>
        <br>
        <table class="table table-hover">
            <thead>
            <tr>
                <th>번호</th>
                <th>주차</th>
                <th>강의명</th>
                <th>이동하기</th>
            </tr>
            </thead>
            <tbody>
            <tr>
                <th>1</th>
                <th>4주차</th>
                <th>공업미적분</th>
                <th>
                    <router-link to="/prof/student/homework/list">
                        <input type="button" value="이동하기">
                    </router-link>
                </th>
            </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
export default {
    name: "ProfesscorHomeworkCheck.vue"
}
</script>

<style scoped>

</style>