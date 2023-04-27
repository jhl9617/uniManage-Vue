<template>
    교수 정보 상세
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
                                    <td>ID</td>
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
                                    <td></td>
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
                <button type="button">목록</button>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "DetailProfessor"
}
</script>

<style scoped>

</style>