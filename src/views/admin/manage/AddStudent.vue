<template>
    학생 추가
    <div style="border:2px solid black; padding:100px;">
        <div class="col-md-8">
            <div class="container">
                <div class="row">
                    <div class="col-md-4">
                        <div class="d-flex flex-column align-items-center text-center">
                            <fieldset>
                                <table>
                                    <td>
                                        <img src="https://bootdey.com/img/Content/avatar/avatar7.png" alt="Admin" class="rounded-circle" width="150">
                                    </td>
                                    <tr>
                                        <td>
                                            <button class="btn btn-primary">이미지 업로드</button>
                                        </td>
                                    </tr>
                                </table>
                            </fieldset>
                        </div>
                    </div>
                    <div class="col-md-8">
                        <fieldset>
                            <table class="w3-table-all">
                                <tr>
                                    <td>이름</td>
                                    <td></td>
                                </tr>
                                <tr>
                                    <td>학번(ID)</td>
                                    <td></td>
                                </tr>
                                <tr>
                                    <td>생년월일</td>
                                    <td></td>
                                </tr>
                                <tr>
                                    <td>소속</td>
                                    <td></td>
                                </tr>
                                <tr>
                                    <td>우편번호</td>
                                    <td></td>
                                </tr>
                                <tr>
                                    <td>주소</td>
                                    <td>
                                        <input type="text" id="sample6_postcode" placeholder="우편번호">
                                        <input type="button" onclick="sample6_execDaumPostcode()" value="우편번호 찾기"><br>
                                        <input type="text" id="sample6_address" placeholder="주소"><br>
                                        <input type="text" id="sample6_detailAddress" placeholder="상세주소">
                                        <input type="text" id="sample6_extraAddress" placeholder="참고항목">
                                    </td>
                                </tr>
                                <tr>
                                    <td>성별</td>
                                    <td></td>
                                </tr>
                                <tr>
                                    <td>휴대전화번호</td>
                                    <td></td>
                                </tr>
                                <tr>
                                    <td>e-mail</td>
                                    <td></td>
                                </tr>
                            </table>
                        </fieldset>
                    </div>
                </div>
                <br>

            </div>
            <div align="center">
                <button type="button">추가</button>&nbsp;&nbsp;
                <button type="button">목록</button>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "AddProfessor"
}
</script>

<style scoped>

</style>

<!--            <label for="exampleFormControlSelect1">학과</label>
            <select class="form-control" id="exampleFormControlSelect1">
                <option>경영학과</option>
                <option>컴퓨터공학과</option>
                <option>전자공학과</option>
                <option>중어중문학과</option>
                <option>영어영문학과</option>
            </select>-->