<template>
    <form>
        <div class="form-group">
            <div class="col-md-3">
                <label for="exampleFormControlInput1">이름</label>
                <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="학생 이름">
            </div>
            <div class="col-md-8">

            </div>

        </div>
        <div class="form-group">
            <label for="exampleFormControlInput1">이메일</label>
            <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="name@example.com">
        </div>

        <div class="form-group">
            <label for="exampleFormControlSelect1">학과</label>
            <select class="form-control" id="exampleFormControlSelect1">
                <option>경영학과</option>
                <option>컴퓨터공학과</option>
                <option>전자공학과</option>
                <option>중어중문학과</option>
                <option>영어영문학과</option>
            </select>
        </div>
        <div class="form-group">
            <label for="exampleFormControlInput1">생년월일(6자리)</label>
            <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="생년월일(6자리)">
        </div>
        <div class="form-group">
            <label for="exampleFormControlInput1">주소</label>
            <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="주소">
        </div>
        <div class="form-group">
            <label for="exampleFormControlInput1">상세주소</label>
            <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="상세주소">
        </div>
        <div class="form-group">
            <label for="exampleFormControlInput1">우편번호</label>
            <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="우편번호">
        </div>

        <button></button>

    </form>

</template>

<script>

import {defineComponent} from "vue";
import StudentSidebar from "@/views/student/studentInfoSystem/PageSidebar.vue";
import AdminSidebar from "@/views/admin/common/AdminSidebar.vue";
import EclassSidebar from "@/views/student/Eclass/PageSidebar.vue";
import ProfessorSidebar from "@/views/professor/common/PageSidebar.vue";

export default defineComponent({
    components: {ProfessorSidebar, EclassSidebar, AdminSidebar, StudentSidebar}
})
</script>