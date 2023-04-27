<template>
    <div class="container-fluid">
        <header class="d-flex flex-wrap align-items-center justify-content-center justify-content-md-between py-3 mb-4 border-bottom">

            <router-link to="/eclass">
                <img alt="logo" src="../../../assets/images/collegeimage.jpg" width="1300" height="300">
            </router-link>

        </header>
    </div>
    <div class="container-fluid">
        <header class="d-flex flex-wrap align-items-center justify-content-center justify-content-md-between py-3 mb-4 border-bottom">
            <ul class="nav col-12 col-md-auto mb-2 justify-content-center mb-md-0">
            </ul>

            <div class="col-md-6 text-end">
                OOO 학생 &nbsp;
                <button class="btn btn-outline-primary me-2" type="button">LogOut</button>
            </div>
        </header>
    </div>
    <div class="container-fluid">
        <div class="row">
            <div class="col-md-4">
                <div class="col">
                    <div class="d-flex flex-column align-items-center text-center">
                        <img alt="Admin" class="rounded-circle" src="https://bootdey.com/img/Content/avatar/avatar7.png"
                             width="150">
                        <div class="mt-3">
                            <h4>OOO 학생</h4>
                            <p class="text-secondary mb-1"> OO 학과</p>
                            <div class="d-flex flex-column flex-shrink-0 p-3 bg-body-tertiary" style="width: 280px;">
                                <router-link to="/Eclass" class="d-flex align-items-center mb-3 mb-md-0 me-md-auto link-body-emphasis text-decoration-none">
                                    <span class="fs-4">내 강의실</span>
                                </router-link>
                                <hr>
                                <ul class="nav nav-pills flex-column mb-auto">

                                    <li>
                                        <router-link to="/eclass/totalhomework/list" class="nav-link link-body-emphasis ">

                                            과제등록 현황
                                        </router-link>
                                    </li>

                                </ul>
                                <hr>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-md-8">
                내 강의실
                <br><br>
                <div class="container-fluid">
                    <table class="w3-table-all">
                        <tr>
                            <td>번호</td>
                            <td>강의명</td>
                            <td>강의시간</td>
                            <td>바로가기</td>
                        </tr>
                        <tr>
                            <td>번호</td>
                            <td>강의명</td>
                            <td>강의시간</td>
                            <td>
                                <router-link to="/eclass/1">
                                <button class="btn btn-outline-info" type="button">바로가기</button>
                                </router-link>
                            </td>
                        </tr>
                        <tr>
                            <td>번호</td>
                            <td>강의명</td>
                            <td>강의시간</td>
                            <td>
                                <button class="btn btn-outline-info" type="button">바로가기</button>
                            </td>
                        </tr>
                        <tr>
                            <td>번호</td>
                            <td>강의명</td>
                            <td>강의시간</td>
                            <td>
                                <button class="btn btn-outline-info" type="button">바로가기</button>
                            </td>
                        </tr>
                        <tr>
                            <td>번호</td>
                            <td>강의명</td>
                            <td>강의시간</td>
                            <td>
                                <button class="btn btn-outline-info" type="button">바로가기</button>
                            </td>
                        </tr>
                        <tr>
                            <td>번호</td>
                            <td>강의명</td>
                            <td>강의시간</td>
                            <td>
                                <button class="btn btn-outline-info" type="button">바로가기</button>
                            </td>
                        </tr>
                        <tr>
                            <td>번호</td>
                            <td>강의명</td>
                            <td>강의시간</td>
                            <td>
                                <button class="btn btn-outline-info" type="button">바로가기</button>
                            </td>
                        </tr>
                        <tr>
                            <td>번호</td>
                            <td>강의명</td>
                            <td>강의시간</td>
                            <td>
                                <button class="btn btn-outline-info" type="button">바로가기</button>
                            </td>
                        </tr>

                    </table>
                </div>
            </div>
        </div>
        <PageFooter/>
    </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'

// import PageHeader from "@/views/student/Eclass/PageHeader.vue";
import PageFooter from "@/components/common/PageFooter.vue";


export default {
    components: {
        // HelloWorld
        PageFooter,

    }
}
</script>
<style scoped>
</style>
