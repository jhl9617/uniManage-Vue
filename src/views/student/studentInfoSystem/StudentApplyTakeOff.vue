<template>
    <h6>휴학신청</h6>
    <table class="table table-bordered" align="center" width="505">
        <tr align="left">
            <th width="100">학번</th>
            <td></td>
            <th width="100">성명</th>
            <td></td>
            <th width="100">학적상태</th>
            <td></td>
        </tr>
        <tr align="left">
            <th>학년</th>
            <td></td>
            <th>이수학기</th>
            <td></td>
            <th>학부(과)</th>
            <td></td>
        </tr>
    </table>
    <br><br>
    <div class="orderInfo">
        <form role="form" method="post" autocomplete="off">

            <input type="hidden" name="amount" value="${sum}" />

            <div>
                <label for="start_date">휴학신청날짜</label> <input type="date" name="start_date" id="start_date">
            </div>
            <br>
            <div>
                <label for="end_date">휴학끝날짜</label> <input type="date" name="end_date" id="end_date">
            </div>
            <br>
            <div>
                <label for="classify">휴학분류</label>&nbsp;
                <select>
                <option value="">- 선택 -</option>
                <option value="author">일반휴학</option>
                <option value="title">군휴학</option>
                </select>
            </div>

            <br>
            <div class="inputArea">
                <input type="submit" value="제출">
            </div>

        </form>
    </div>
</template>

<script>
export default {
    name: "ApplyTakeOff"
}
</script>

<style scoped>

</style>