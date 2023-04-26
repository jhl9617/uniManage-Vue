<template>
    <PageHeader/>
    <div class="container">
        <div class="row">
            <div class="col-md-4">
                <PageSidebar/>
            </div>
            <div class="col-md-8">
    <h6>장학수혜내역조회</h6>
    <table class="table table-bordered" align="center" width="505">
        <tr align="left">
            <th width="100">학부(과)</th>
            <td colspan="3"></td>
        </tr>
        <tr align="left">
            <th width="100">학년</th>
            <td width="300"></td>
            <th width="100">이름</th>
            <td></td>
        </tr>
    </table>
    <br><br>
    <table class="table table-bordered" align="center" width="505">
        <tr>
            <th>년도</th>
            <th>학기</th>
            <th>장학금명</th>
            <th>장학금액</th>
        </tr>

    </table>
            </div>
        </div>
        <PageFooter/>
    </div>

</template>

<script>
import {defineComponent} from "vue";
import PageSidebar from "@/views/student/studentInfoSystem/PageSidebar.vue";
import PageFooter from "@/components/common/PageFooter.vue";
import PageHeader from "@/views/student/studentInfoSystem/PageHeader.vue";

export default defineComponent({
    components: {PageHeader, PageFooter, PageSidebar}
})
</script>

<style scoped>

</style>