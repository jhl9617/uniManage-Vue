<template>
    <h6>수강과목시간표</h6>
    <table class="table table-bordered" align="center" width="505">
    <tr align="left">
        <th width="100">년도</th>
        <td width="200">
            <select>
                <option value="">- 선택 -</option>
                <option value="year">2023</option>
                <option value="year">2022</option>
                <option value="year">2021</option>
            </select>
        </td>
        <th width="100">학기</th>
        <td width="200">
            <select>
                <option value="">- 선택 -</option>
                <option value="semester">1학기</option>
                <option value="semester">2학기</option>
            </select>
        </td>
    </tr>
    </table>
    <button>조회</button>
    <br><br>
    <table width=400 height="600" style="color: #121212">
        <tr>
            <th></th>
            <th>월</th>
            <th>화</th>
            <th>수</th>
            <th>목</th>
            <th>금</th>
        </tr>
        <tr>
            <th>9</th>
            <td></td>
            <td rowspan="2" style="background-color: #ecc369">Practical English A2</td>
            <td rowspan="2" style="background-color: #f08676">해부생리학2</td>
            <td rowspan="2" style="background-color: #70a5e9">Practical English A4</td>
            <td rowspan="2" style="background-color: #75ca87">다문화가족건강</td>
        </tr>
        <tr>
            <th>10</th>
            <td></td>
        </tr>
        <tr>
            <th>11</th>
            <td style="background-color: #f08676">해부생리학2</td>
            <td></td>
            <td></td>
            <td></td>
            <td rowspan="2" style="background-color: #d397ed">창조와 몰입</td>
        </tr>
        <tr>
            <th>12</th>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
        </tr>
        <tr>
            <th>1</th>
            <td></td>
            <td rowspan="2" style="background-color: #a6c96f">삶과 철학</td>
            <td></td>
            <td></td>
            <td></td>
        </tr>
        <tr>
            <th>2</th>
            <td></td>
            <td rowspan="2" style="background-color: #7ad1c0">인간행동과심리</td>
            <td></td>
            <td></td>
        </tr>
        <tr>
            <th>3</th>
            <td></td>
            <td></td>
            <td rowspan="2" style="background-color: #fbaa69">문학의이해</td>
            <td></td>
        </tr>
        <tr>
            <th>4</th>
            <td></td>
            <td></td>
            <td></td>
            <td rowspan="3" style="background-color: #9d86e0">의료보건글쓰기</td>
        </tr>
        <tr>
            <th>5</th>
            <td></td>
            <td></td>
            <td></td>
            <td rowspan="2" style="background-color: #f08676">노인심리학</td>
        </tr>
        <tr>
            <th>6</th>
            <td></td>
            <td></td>
            <td></td>
        </tr>
    </table>
</template>

<script>
export default {
    name: "StudentTimetable"
}
</script>

<style scoped>

</style>