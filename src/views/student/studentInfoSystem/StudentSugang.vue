<template>
    <div class="container-fluid">
        <div class="row">
            <div class="col-md-4">
                <div class="col">
                    <div class="d-flex flex-column align-items-center text-center">
                        <img alt="Admin" class="rounded-circle" src="https://bootdey.com/img/Content/avatar/avatar7.png"
                             width="150">
                        <div class="mt-3">
                            <h4 v-if="loginMember">{{ loginMember.name}} 학생</h4>
                            <p class="text-secondary mb-1" v-if="loginMember"> {{ loginMember.department_name}}</p>
                            <button class="btn btn-outline-primary me-2" type="button">LogOut</button>

                        </div>
                    </div>
                </div>
            </div>
            <div class="col-md-8">
                <div class="row">
                    <div class="col-md-8">
                        수강신청
                        <br><br>
                        <div class="container-fluid">
                            <table align="center" class="w3-table-all table-bordered" width="505">
                                <tr align="left">
                                    <th>검색구분</th>
                                    <td>
                                        <select>
                                            <option value="">- 선택 -</option>
                                            <option value="">학과</option>
                                        </select>
                                    </td>
                                    <th>학과</th>
                                    <td>
                                        <select>
                                            <option value="">- 선택 -</option>
                                            <option value="">경영학과</option>
                                            <option value="">컴퓨터공학과</option>
                                            <option value="">잔자공학과</option>
                                            <option value="">중어중문학과</option>
                                            <option value="">영어영문학과</option>
                                        </select>
                                    </td>
                                </tr>
                            </table>
                            <table class="w3-table-all">
                            <tr>
                                <th>강의명</th>
                                <th>학점</th>
                                <th>강의시간</th>
                                <th>수강신청</th>
                            </tr>
                                <tr>
                                    <td>강의명</td>
                                    <td>학점</td>
                                    <td>강의시간</td>
                                    <td><button class="btn btn-outline-dark" type="button">수강신청</button></td>
                                </tr>
                                <tr>
                                    <td>강의명</td>
                                    <td>학점</td>
                                    <td>강의시간</td>
                                    <td><button class="btn btn-outline-dark" type="button">수강신청</button></td>
                                </tr>
                                <tr>
                                    <td>강의명</td>
                                    <td>학점</td>
                                    <td>강의시간</td>
                                    <td><button class="btn btn-outline-dark" type="button">수강신청</button></td>
                                </tr>

                            </table>
                        </div>
                    </div>
                    <div class=" col-md-4
                            ">
                            챗봇
                            <br><br>
                            <div class="container-fluid">

                            </div>
                        </div>
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
    }
}
</script>
<style scoped>
</style>
