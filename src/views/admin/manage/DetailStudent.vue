<template>
    학생 정보 상세
    <br>
    <div align="left">
        <router-link to="/admin/manage/detailstudent">
            <button type="button">기본정보</button>&nbsp;&nbsp;
        </router-link>
        <router-link to="/admin/manage/detailgrade">
            <button type="button">성적</button>&nbsp;&nbsp;
        </router-link>
        <router-link to="/admin/manage/detailscholarship">
            <button type="button">장학</button>
        </router-link>
    </div>
    <br>
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
        </div>
    </div>
</template>

<script>
export default {
    name: "DetailStudent"
}
</script>

<style scoped>

</style>