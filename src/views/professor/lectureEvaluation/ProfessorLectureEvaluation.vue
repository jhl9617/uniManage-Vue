<template>
  <h3>강의 평가내역</h3>
  <br>
  강의명 &nbsp;
    <select name="lecture" id="lectureEvaluation">
        <option value="lecture1">공업미적분</option>
        <option value="lecture2">공업적분</option>
    </select> &nbsp;

    <button><router-link to="/prof/lecture/rating">강의평가 추이</router-link></button> &nbsp;
    <button><router-link to="/prof/lectureEvaluation/lectureEvaluationAnswer">추가 답변내용</router-link></button>
  <br>
  <img src="@/assets/images/graph.png" alt="">

</template>

<script>
export default {
    name: "ProfessorLectureEvaluation.vue"
}


</script>

<style scoped>
</style>