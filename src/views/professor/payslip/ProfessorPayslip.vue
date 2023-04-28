<template>
    <h3>급여명세서</h3>
    <br>
  <div class="container">
      급여조회 &nbsp;
      <select name="pay" id="payslip">
        <option value="조회할 월을 선택해주세요"></option>
        <option value="2023.04">2023년 04월</option>
        <option value="2023.03">2023년 03월</option>
        <option value="2023.02">2023년 02월</option>
      </select>
      <br><br><br><br>

      <h4>기본내역</h4>
      <table class="table table-bordered"  style="width: 800px;">
          <thead>
          <tr>
              <th>기관명</th>
              <td>대학교</td>
              <th>담당과목</th>
              <td>oo학과</td>
          </tr>
          <tr>
              <th>보직구분</th>
              <td>교수</td>
              <th>성명</th>
              <td>Porfessor1</td>
          </tr>
          </thead>
      </table>
      <br><br>

      <h4>세부내역</h4><br>
      <table class="table table-bordered"  style="width: 800px;">
        <tr>
            <th colspan="2">급여내역</th>
            <th colspan="2">세금내역</th>
            <th colspan="2">공제내역</th>
        </tr>
          <tr>
              <th>기본급</th>
              <td>3,500,000</td>
              <th>소득세</th>
              <td>181,590</td>
              <th>국민연금</th>
              <td>163,750</td>
          </tr>
          <tr>
              <th>식대</th>
              <td>100,000</td>
              <th>지방 소득세</th>
              <td>15,150</td>
              <th>건강보험</th>
              <td>126,560</td>
          </tr>
          <tr>
              <th>시간 외 근로수당</th>
              <td>253,000</td>
              <th>연말정산 소득세</th>
              <td>0</td>
              <th>고용보험</th>
              <td>30,350</td>
          </tr>
          <tr>
              <th>휴일 근로수당</th>
              <td>0</td>
              <th></th>
              <td></td>
              <th>상조회비</th>
              <td>7000</td>
          </tr>
          <tr>
              <th>직책수당</th>
              <td>100,000</td>
              <th></th>
              <td></td>
              <th>기타 공제</th>
              <td>0</td>
          </tr>
          <tr>
              <th></th>
              <td></td>
          </tr>
          <tr>
              <th>지급액계</th>
              <td>3,953,000</td>
              <th>세금액계</th>
              <td>196,740</td>
              <th>공제액계</th>
              <td>327,660</td>
          </tr>
          <tr>
              <th>최종지급액(세후 급여)</th>
              <td colspan="5">3,428,600</td>
          </tr>
      </table>
  </div>
</template>

<script>
export default {
    name: "ProfesscorPayslip.vue"
}
</script>

<style scoped>

</style>