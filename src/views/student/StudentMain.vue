<template>
    <div class="container">
        <header class="d-flex flex-wrap justify-content-center py-3 mb-4 border-bottom">
            <a class="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-dark text-decoration-none" href="/">
                <svg class="bi me-2" height="32" width="40">
                    <use xlink:href="#bootstrap"></use>
                </svg>
                <span class="fs-4"> OO 대학교</span>
            </a>

            <ul class="nav nav-pills">
                <li class="nav-item"><a aria-current="page" class="nav-link" href="#">학교홈페이지</a></li>
                <li class="nav-item">
                    <router-link class="nav-link active" to="/student/studentinfomain">학생정보시스템</router-link>
                </li>
                <li class="nav-item"><a class="nav-link" href="#">OFFICE 365</a></li>
                <li class="nav-item"><a class="nav-link" href="#">도서관</a></li>
                <li class="nav-item">
                    <router-link class="nav-link active" to="/eclass">E-CLASS</router-link>
                </li>
            </ul>
        </header>
    </div>

    <div class="container">
        <div class="row">
            <div class="col-md-4">
                <div class="col">
                    <div class="d-flex flex-column align-items-center text-center">
                        <img alt="Admin" class="rounded-circle" src="https://bootdey.com/img/Content/avatar/avatar7.png"
                             width="150">
                        <div class="mt-3">
                            <h4 v-if="loginMember">Logged in as {{ loginMember.name}}</h4>
                            <p class="text-secondary mb-1"> OO 학과</p>
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
                        <div class="container">
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
                    <div class=" col-md-4">
                            챗봇
                            <br><br>
                            <div class="container">

                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <PageFooter/>
        </div>
</template>

<script>
import PageFooter from "@/components/common/PageFooter.vue";


export default {
    components: {
        // HelloWorld
        PageFooter,
    },
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
<style scoped>
</style>
