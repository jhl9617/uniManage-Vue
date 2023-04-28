<template>
    <div class="container">
        <div class="row">
            <h3>휴강신청 내역</h3>
            <br>
            <table class="table table-bordered" id="closelist">
                <thead>
                <tr>
                    <th>번호</th>
                    <th>강의명</th>
                    <th>휴강일</th>
                    <th>휴강시간</th>
                    <th>보강일</th>
                    <th>보강시간</th>
                    <th>제출서류</th>
                    <th>승인여부</th>
                </tr>
                </thead>
                <tbody>
                <tr>
                    <td>2</td>
                    <td>공업미적분</td>
                    <td>2023.04.28</td>
                    <td>09:00~11:00</td>
                    <td>2023.05.03</td>
                    <td>15:00~17:00</td>
                    <td></td>
                    <td>승인대기</td>
                </tr>
                <tr>
                    <td>1</td>
                    <td>공업미적분</td>
                    <td>2023.04.24</td>
                    <td>14:00~16:00</td>
                    <td>2023.04.26</td>
                    <td>09:00~11:00</td>
                    <td>◎</td>
                    <td>승인완료</td>
                </tr>
                </tbody>
            </table>
            <div>
                <input type="button" value="휴강신청">
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
#closelist tr td {
    text-align: center;
}
</style>