<template>
 <h3>강의평가 결과</h3>
  <br>
  강의명 &nbsp;
    <select name="lecture" id="lectureEvaluation">
        <option value="lecture1">공업미적분</option>
        <option value="lecture2">공업적분</option>
    </select> &nbsp;

    <button><router-link to="/prof/lecture/rating">강의평가 추이</router-link></button> &nbsp;
    <button><router-link to="/prof/lectureEvaluation/lectureEvaluationAnswer">추가 답변내용</router-link></button>

<br><br>

    <table class="table table-bordered"  style="width: 800px;">
        <thead>
        <tr>
            <th>No</th>
            <th>년도</th>
            <th>학기</th>
            <th>과목명</th>
            <th>응답내용</th>
        </tr>
        </thead>

        <tbody>
        <tr>
            <th>1</th>
            <td>2023년</td>
            <td>1학기</td>
            <td>공업미적분</td>
            <td>수업이 너무 재밌었어요!</td>
        </tr>
        <tr>
            <th>2</th>
            <td>2023년</td>
            <td>1학기</td>
            <td>공업미적분</td>
            <td>흥미로운 수업이었습니다.</td>
        </tr>
        <tr>
            <th>3</th>
            <td>2023년</td>
            <td>1학기</td>
            <td>공업미적분</td>
            <td>지루했어요</td>
        </tr>
        <tr>
            <th>4</th>
            <td>2023년</td>
            <td>1학기</td>
            <td>공업미적분</td>
            <td>끝나서 아쉽네요</td>
        </tr>
        <tr>
            <th>5</th>
            <td>2023년</td>
            <td>1학기</td>
            <td>공업미적분</td>
            <td>좋았습니다</td>
        </tr>
        <tr>
            <th>6</th>
            <td>2023년</td>
            <td>1학기</td>
            <td>공업미적분</td>
            <td>재밌었어요</td>
        </tr>
        <tr>
            <th>7</th>
            <td>2023년</td>
            <td>1학기</td>
            <td>공업미적분</td>
            <td>과제 줄여주세요</td>
        </tr>
        <tr>
            <th>8</th>
            <td>2023년</td>
            <td>1학기</td>
            <td>공업미적분</td>
            <td>이해하기 어려웠어요</td>
        </tr>
        <tr>
            <th>9</th>
            <td>2023년</td>
            <td>1학기</td>
            <td>공업미적분</td>
            <td>별로에요</td>
        </tr>
        <tr>
            <th>10</th>
            <td>2023년</td>
            <td>1학기</td>
            <td>공업미적분</td>
            <td>다시 듣고싶은 수업입니다</td>
        </tr>
        </tbody>
    </table>
</template>

<script>
export default {
    name: "ProfessorLectureEvaluationAnswer.vue"
}
</script>

<style scoped>
</style>