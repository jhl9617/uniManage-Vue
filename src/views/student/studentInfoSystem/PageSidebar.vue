<!-- PageSidebar.vue -->
<template>
    <div class="d-flex flex-column flex-shrink-0 p-3 bg-body-tertiary" style="width: 300px;">
        <router-link to="/student/studentinfomain" class="d-flex align-items-center pb-3 mb-3 link-body-emphasis text-decoration-none border-bottom">
            <svg class="bi pe-none me-2" width="30" height="24"><use xlink:href="#bootstrap"></use></svg>
            <span class="fs-5 fw-semibold">학생정보시스템</span>
        </router-link>
        <ul class="list-unstyled ps-0">
            <li class="mb-1">
                <button class="btn btn-toggle d-inline-flex align-items-center rounded border-0 collapsed" data-bs-toggle="collapse" data-bs-target="#home-collapse" aria-expanded="false">
                    학적/장학
                </button>
                <div class="collapse" id="home-collapse" style="">
                    <ul class="btn-toggle-nav list-unstyled fw-normal pb-1 small">
                        <li><router-link to="/student/status" class="link-body-emphasis d-inline-flex text-decoration-none rounded">학적변동내역</router-link></li>
                        <li><router-link to="/student/takeoff" class="link-body-emphasis d-inline-flex text-decoration-none rounded">휴학신청</router-link></li>
                        <li><router-link to="/student/return" class="link-body-emphasis d-inline-flex text-decoration-none rounded">복학신청</router-link></li>
                        <li><router-link to="/student/checkscholarship" class="link-body-emphasis d-inline-flex text-decoration-none rounded">장학수혜내역조회</router-link></li>
                    </ul>
                </div>
            </li>
            <li class="mb-1">
                <button class="btn btn-toggle d-inline-flex align-items-center rounded border-0 collapsed" data-bs-toggle="collapse" data-bs-target="#dashboard-collapse" aria-expanded="false">
                    교과/수강
                </button>
                <div class="collapse" id="dashboard-collapse" style="">
                    <ul class="btn-toggle-nav list-unstyled fw-normal pb-1 small">
                        <li><router-link to="/student/timelinebydepart" class="link-body-emphasis d-inline-flex text-decoration-none rounded">학과별강의시간표</router-link></li>
                        <li><router-link to="/student/studenttimetable" class="link-body-emphasis d-inline-flex text-decoration-none rounded">수강과목시간표</router-link></li>
                        <li><router-link to="/student/checkcourse" class="link-body-emphasis d-inline-flex text-decoration-none rounded">수강신청내역조회</router-link></li>
                    </ul>
                </div>
            </li>
            <li class="mb-1">
                <button class="btn btn-toggle d-inline-flex align-items-center rounded border-0 collapsed" data-bs-toggle="collapse" data-bs-target="#orders-collapse" aria-expanded="false">
                    등록
                </button>
                <div class="collapse" id="orders-collapse" style="">
                    <ul class="btn-toggle-nav list-unstyled fw-normal pb-1 small">
                        <li><router-link to="/student/payreceipt" class="link-body-emphasis d-inline-flex text-decoration-none rounded">등록금납입증명서</router-link></li>
                        <li><router-link to="/student/printreceipt" class="link-body-emphasis d-inline-flex text-decoration-none rounded">등록금고지서출력</router-link></li>
                    </ul>
                </div>
            </li>
            <li class="mb-1">
                <button class="btn btn-toggle d-inline-flex align-items-center rounded border-0 collapsed" data-bs-toggle="collapse" data-bs-target="#account-collapse" aria-expanded="false">
                    성적/졸업
                </button>
                <div class="collapse" id="account-collapse">
                    <ul class="btn-toggle-nav list-unstyled fw-normal pb-1 small">
                        <li><router-link to="/student/checkcredit" class="link-dark d-inline-flex text-decoration-none rounded">졸업학점조회</router-link></li>
                        <li><router-link to="/student/checkgrade" class="link-dark d-inline-flex text-decoration-none rounded">수강성적조회</router-link></li>
                    </ul>
                </div>
            </li>
            <li class="mb-1">
                <button class="btn btn-toggle d-inline-flex align-items-center rounded border-0 collapsed" data-bs-toggle="collapse" data-bs-target="#survey-collapse" aria-expanded="false">
                    강의평가
                </button>
                <div class="collapse" id="survey-collapse" style="">
                    <ul class="btn-toggle-nav list-unstyled fw-normal pb-1 small">
                        <li><router-link to="/student/surveycourse" class="link-body-emphasis d-inline-flex text-decoration-none rounded">강의평가</router-link></li>
                    </ul>
                </div>
            </li>
        </ul>
    </div>
</template>

<script>
export default {}
</script>

<style scoped>

</style>