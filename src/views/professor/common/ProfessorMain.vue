<template>
    <div class="col-md-12">
        <div class="container">
            <div class="row">
                <div class="col-md-6">
                    <div class="d-flex flex-column align-items-center text-center">
                        <fieldset>
                            <legend>개인정보
                                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                            </legend>
                            <table>
                                <tr>
                                    <td>
                                        <img src="https://bootdey.com/img/Content/avatar/avatar7.png" alt="Admin"
                                             class="rounded-circle" width="150">
                                    </td>
                                    <td>
                                        <div class="mt-3">
                                            <h4 v-if="loginMember">Logged in as {{ loginMember.name}}</h4>
                                            <div class="text-secondary mb-1" align="left">
                                                소속:<br>
                                                구분:<br>
                                            </div>
                                        </div>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <button class="btn btn-primary">비밀번호변경</button>
                                    </td>
                                </tr>
                            </table>
                        </fieldset>
                    </div>

                </div>
                <div class="col-md-6">
                    <fieldset>
                        <legend>공지사항 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                            <button type="button" class="btn btn-outline-dark">전체보기</button>
                        </legend>

                        <table class="w3-table-all">
                            <tr>
                                <td>글제목</td>
                                <td>작성일자</td>
                            </tr>
                            <tr>
                                <td>글제목</td>
                                <td>작성일자</td>
                            </tr>
                            <tr>
                                <td>글제목</td>
                                <td>작성일자</td>
                            </tr>
                            <tr>
                                <td>글제목</td>
                                <td>작성일자</td>
                            </tr>
                        </table>
                    </fieldset>
                </div>
            </div>
            <br>
            <div class="row">
                <div class="col-md-6">
                    <fieldset>
                        <legend>시간표
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        </legend>
                        <table class="w3-table-all">
                            <tr>
                                <td></td>
                                <td>월</td>
                                <td>화</td>
                                <td>수</td>
                                <td>목</td>
                                <td>금</td>
                            </tr>
                            <tr>
                                <td>1</td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                            </tr>
                            <tr>
                                <td>2</td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                            </tr>
                            <tr>
                                <td>3</td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                            </tr>
                        </table>
                    </fieldset>
                </div>
                <div class="col-md-6">
                    <fieldset>
                        <legend>학사일정&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                            <button type="button" class="btn btn-outline-dark">전체보기</button>
                        </legend>
                        <table class="w3-table-all">
                            <tr>
                                <td>글제목</td>
                                <td>작성일자</td>
                            </tr>
                            <tr>
                                <td>글제목</td>
                                <td>작성일자</td>
                            </tr>
                            <tr>
                                <td>글제목</td>
                                <td>작성일자</td>
                            </tr>
                            <tr>
                                <td>글제목</td>
                                <td>작성일자</td>
                            </tr>
                        </table>
                    </fieldset>
                </div>
            </div>
        </div>
    </div>
</template>
<script>

export default {

    data() {
        return {
            loginMember: null,
        };
    },
    methods: {
        async getSession() {
            try {
                const response = await fetch("/sessionCheck");
                if (response.status === 200) {
                    const data = await response.json();
                    console.log("Session data:", data);
                    this.loginMember = data;
                } else {
                    console.error("Error fetching session data");
                }
            } catch (error) {
                console.error("Error fetching session data:", error);
            }
        },
    },
    created() {
        this.getSession();
    },


};

</script>
<style>
</style>