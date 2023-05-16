<template>
    <div class="container">
        강의실 조회 <br>
        <form action="">
            <select name="build" id="build" required>
                <option value="#">건물</option>
                <option value="공학관">공학관</option>
                <option value="인문관">과학관</option>
                <option value="자연관">인문사회관</option>
            </select>
            <select name="day" id="day">
                <option value="#">요일</option>
                <option value="mon">월요일</option>
                <option value="tue">화요일</option>
                <option value="wed">수요일</option>
                <option value="thu">목요일</option>
                <option value="fri">금요일</option>
            </select>
            <select name="roomnum" id="roomnum">
                <option value="#">강의실 호수</option>
                <option value="101">101호</option>
                <option value="102">102호</option>
                <option value="103">103호</option>
                <option value="104">104호</option>
                <option value="201">201호</option>
                <option value="202">202호</option>
                <option value="203">203호</option>
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