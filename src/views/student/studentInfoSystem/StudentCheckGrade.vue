<template>
    <PageHeader/>
    <div class="container">
        <div class="row">
            <div class="col-md-4">
                <PageSidebar/>
            </div>
            <div class="col-md-8">

            <h6>수강성적조회</h6>
    <table class="table table-bordered" align="center" width="505">
        <tr>
            <th width="100">강좌번호</th>
            <th width="100">교과목명</th>
            <th width="100">학점</th>
            <th width="100">성적</th>
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