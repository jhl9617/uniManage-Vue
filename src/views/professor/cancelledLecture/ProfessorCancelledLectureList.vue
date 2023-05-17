<template>
    <div class="container">
        <div class="row">
            <h336>휴강신청</h336>
            <br>
            <table class="table table-bordered" id="closelist">
                <thead>
                <tr>
                    <th>번호</th>
                    <th>강의명</th>
                    <th>휴강회차</th>
                    <th>보강일시</th>
                    <th>제출서류</th>
                    <th>승인여부</th>
                </tr>
                </thead>
                <tbody>
                <tr>
                    <td>2</td>
                    <td>
                        <router-link to="/prof/lecture/cancelled">공업미적분</router-link>
                    </td>
                    <td>3회차</td>
                    <td>2023.04.28 09:00~11:00</td>
                    <td></td>
                    <td>승인대기</td>
                </tr>
                <tr>
                    <td>1</td>
                    <td>공업미적분</td>
                    <td>4회차</td>
                    <td>2023.05.01 14:00~16:00</td>
                    <td>ㅇ</td>
                    <td>승인완료</td>
                </tr>
                </tbody>
            </table>
            <div>
                <router-link to="/prof/lecture/cancelled/write">
                    <input type="button" value="휴강신청">
                </router-link>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "ProfessorCloseLecture.vue"
}
</script>

<style scoped>
</style>