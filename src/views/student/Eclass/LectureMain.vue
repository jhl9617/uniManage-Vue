<template>
     <PageHeader/>
        <div class="container">
            <div class="row">
                <div class="col-md-4">
                    <PageSidebar/>
                </div>
                <div class="col-md-8">
                    <div class="container">
                        <div class="row">
                            <div class="col-md-6">
                                <fieldset>
                                    <legend>공지사항 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                        <router-link to="/Eclass/notice/list">
                                        <button type="button" class="btn btn-outline-dark">전체보기</button>
                                    </router-link></legend>


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
                            <div class="col-md-6">
                                <fieldset>
                                    <legend>강의자료실 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                        <router-link to="/Eclass/source/list">
                                        <button type="button" class="btn btn-outline-dark">전체보기</button>
                                    </router-link></legend>

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
                                    <legend>과제제출 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                        <router-link to="/Eclass/homework/list">
                                        <button type="button" class="btn btn-outline-dark">전체보기</button>
                                    </router-link></legend>

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
                            <div class="col-md-6">
                                <fieldset>
                                    <legend>자유게시판 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                        <router-link to="/Eclass/board/list">
                                        <button type="button" class="btn btn-outline-dark">전체보기</button>
                                    </router-link></legend>

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
        </div>
        <PageFooter/>
    </div>
</template>

<script>

import PageHeader from "@/views/student/Eclass/PageHeader.vue";
import PageFooter from "@/components/common/PageFooter.vue";
import PageSidebar from "@/views/student/Eclass/PageSidebar.vue";



export default {
   components: {
        // HelloWorld
        PageHeader,
        PageFooter,
        PageSidebar
    }
}
</script>
  <style scoped>
   </style>
