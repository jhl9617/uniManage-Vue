<template>
  <div class="container" style="text-align: center">
    강의실 조회 <br><br>
    <form action="">
      <select name="build" id="build" required>
        <option value="#">건물</option>
        <option value="공학관">공학관</option>
        <option value="과학관">과학관</option>
        <option value="인문사회관">인문사회관</option>
      </select>
      <select name="day" id="day" required>
        <option value="#">요일</option>
        <option value="월">월요일</option>
        <option value="화">화요일</option>
        <option value="수">수요일</option>
        <option value="목">목요일</option>
        <option value="금">금요일</option>
      </select>
      <select name="roomnum" id="roomnum" required>
        <option value="#">강의실 호수</option>
        <option value="101호">101호</option>
        <option value="102호">102호</option>
        <option value="103호">103호</option>
        <option value="104호">104호</option>
        <option value="201호">201호</option>
        <option value="202호">202호</option>
        <option value="203호">203호</option>
      </select>
      <input type="submit" value="조회">
    </form>
    <br>
    <div>
      <table class="table table-hover">
        <thead>
        <tr>
          <th>건물이름</th>
          <th>강의실번호</th>
          <th>요일</th>
          <th>시간</th>
          <th>수용인원</th>
          <th>선택</th>
        </tr>
        </thead>
        <tbody>
        </tbody>
      </table>
      1 2 3 4 5 > >>
    </div>
    <br><br>
    <div>
      선택한 강의실
      <table class="table">
        <thead>
        <tr>
          <th colspan="5" style="text-align:left"> &nbsp; &nbsp; &nbsp; 목록</th>
          <th>신청여부</th>
        </tr>
        </thead>
        <tbody>
        </tbody>
      </table>
    </div>
  </div>
</template>
<script>

</script>
<style>
select {
  height: 28px;
  text-align: center;
}

table tr td {
  text-align: center;
}
</style>