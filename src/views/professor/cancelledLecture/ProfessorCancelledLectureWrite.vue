<template>
    <div class="container">
        <div class="row">
            <h3>휴강 신청</h3>
            <br>
            <table class="table table-bordered" id="closewrite">
                <tr>
                    <th style="width: 30%">강의명(강의번호)</th>
                    <td>
                        <select>
                            <option value="">강의과목1</option>
                            <option value="">강의과목2</option>
                            <option value="">강의과목3</option>
                        </select>
                    </td>
                </tr>
                <tr>
                    <th style="width: 30%">작성자</th>
                    <td></td>
                </tr>
                <tr>
                    <th>휴강차시</th>
                    <td>3회차</td>
                </tr>
                <tr>
                    <th>보강일시</th>
                    <td>
                        <input type="date"> &nbsp;
                        <select name="" id="">
                            <option value="">09:00~10:00</option>
                            <option value="">09:00~11:00</option>
                            <option value="">10:00~11:00</option>
                            <option value="">10:00~12:00</option>
                            <option value="">11:00~12:00</option>
                            <option value="">11:00~13:00</option>
                            <option value="">12:00~13:00</option>
                            <option value="">14:00~15:00</option>
                            <option value="">14:00~16:00</option>
                            <option value="">15:00~16:00</option>
                            <option value="">15:00~17:00</option>
                            <option value="">16:00~17:00</option>
                            <option value="">16:00~18:00</option>
                            <option value="">17:00~18:00</option>
                        </select>
                    </td>
                </tr>
                <tr>
                    <th>보강일</th>
                    <td><input type="date"></td>
                </tr>
                <tr>
                    <th>시간</th>
                    <td>
                        <select name="" id="">
                            <option value="">09:00~10:00</option>
                            <option value="">09:00~11:00</option>
                            <option value="">10:00~11:00</option>
                            <option value="">10:00~12:00</option>
                            <option value="">11:00~12:00</option>
                            <option value="">11:00~13:00</option>
                            <option value="">12:00~13:00</option>
                            <option value="">14:00~15:00</option>
                            <option value="">14:00~16:00</option>
                            <option value="">15:00~16:00</option>
                            <option value="">15:00~17:00</option>
                            <option value="">16:00~17:00</option>
                            <option value="">16:00~18:00</option>
                            <option value="">17:00~18:00</option>
                        </select>
                    </td>
                </tr>
                <tr>
                    <th>제출서류</th>
                    <td>
                        <input type="file">
                    </td>
                </tr>
                <tr>
                    <th>휴강사유</th>
                    <td>
                        <input type="text">
                    </td>
                </tr>
            </table>
            <div>
                <input type="submit" value="제출하기"> &nbsp;
                <input type="reset" value="작성취소"> &nbsp;
                <input type="button" value="이전목록">
            </div>
        </div>
    </div>
</template>
<script>
</script>
<style>
#closewrite tr td {
    text-align: left;
}
</style>