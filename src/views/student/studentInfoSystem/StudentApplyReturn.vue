<template>
    <PageHeader/>
    <div class="container">
        <div class="row">
            <div class="col-md-4">
                <PageSidebar/>
            </div>
            <div class="col-md-8">
                <h6>복학신청</h6>
                <table class="table table-bordered" align="center" width="505">
                    <tr align="left">
                        <th width="100">학번</th>
                        <td></td>
                        <th width="100">성명</th>
                        <td></td>
                        <th width="100">학적상태</th>
                        <td></td>
                    </tr>
                    <tr align="left">
                        <th>학년</th>
                        <td></td>
                        <th>이수학기</th>
                        <td></td>
                        <th>학부(과)</th>
                        <td></td>
                    </tr>
                </table>
                <br><br>
                <div class="orderInfo">
                    <form role="form" method="post" autocomplete="off">

                        <input type="hidden" name="amount" value="${sum}" />

                        <div>
                            <label for="start_date">복학날짜</label> <input type="date" name="return_date" id="return_date">
                        </div>
                        <br>
                        <div class="inputArea">
                            <input type="submit" value="제출">
                        </div>

                    </form>
                </div>
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