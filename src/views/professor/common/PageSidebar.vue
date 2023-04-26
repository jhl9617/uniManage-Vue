<!-- PageSidebar.vue -->
<template>
    <div class="d-flex flex-column flex-shrink-0 p-3 bg-body-tertiary" style="width: 280px;">
        <ul class="list-unstyled ps-0">
            <li class="mb-1">
                <button class="btn btn-toggle d-inline-flex align-items-center rounded border-0" data-bs-toggle="collapse" data-bs-target="#info-collapse" aria-expanded="true">
                    개인정보
                </button>
                <div class="collapse" id="info-collapse" style="">
                    <ul class="btn-toggle-nav list-unstyled fw-normal pb-1 small">
                        <li>
                            <router-link to="/prof/info" class="link-body-emphasis d-inline-flex text-decoration-none rounded">
                                개인정보 조회
                            </router-link>
                        </li>
                    </ul>
                </div>
            </li>
            <li class="mb-1">
                <button class="btn btn-toggle d-inline-flex align-items-center rounded border-0" data-bs-toggle="collapse" data-bs-target="#create-collapse" aria-expanded="true">
                    개설강좌
                </button>
                <div class="collapse" id="create-collapse" style="">
                    <ul class="btn-toggle-nav list-unstyled fw-normal pb-1 small">
                        <li>
                            <router-link to="/prof/create" class="link-body-emphasis d-inline-flex text-decoration-none rounded">
                                신규강좌 개설
                            </router-link>
                        </li>
                        <li>
                            <router-link to="/createlist" class="link-body-emphasis d-inline-flex text-decoration-none rounded">
                                신규강의 신청내역
                            </router-link>
                        </li>
                    </ul>
                </div>
            </li>
            <li class="mb-1">
                <button class="btn btn-toggle d-inline-flex align-items-center rounded border-0" data-bs-toggle="collapse" data-bs-target="#lecture-collapse" aria-expanded="false">
                    강의
                </button>
                <div class="collapse" id="lecture-collapse" style="">
                    <ul class="btn-toggle-nav list-unstyled fw-normal pb-1 small">
                        <li>
                            <router-link to="/lecturelist" class="link-body-emphasis d-inline-flex text-decoration-none rounded">
                                강의정보 확인하기
                            </router-link>
                        </li>
                        <li>
                            <router-link to="/homework" class="link-body-emphasis d-inline-flex text-decoration-none rounded">
                                과제
                            </router-link>
                        </li>
                        <li>
                            <router-link to="/lectureclosed" class="link-body-emphasis d-inline-flex text-decoration-none rounded">
                                휴강
                            </router-link>
                        </li>
                    </ul>
                </div>
            </li>
            <li class="mb-1">
                <button class="btn btn-toggle d-inline-flex align-items-center rounded border-0" data-bs-toggle="collapse" data-bs-target="#student-collapse" aria-expanded="false">
                    학생관리
                </button>
                <div class="collapse" id="student-collapse" style="">
                    <ul class="btn-toggle-nav list-unstyled fw-normal pb-1 small">
                        <li>
                            <router-link to="/studentattendance" class="link-body-emphasis d-inline-flex text-decoration-none rounded">
                                학생 출석관리
                            </router-link>
                        </li>
                        <li>
                            <router-link to="/homeworklist" class="link-body-emphasis d-inline-flex text-decoration-none rounded">
                                과제 제출현황
                            </router-link>
                        </li>
                    </ul>
                </div>
            </li>
            <li class="mb-1">
                <button class="btn btn-toggle d-inline-flex align-items-center rounded border-0" data-bs-toggle="collapse" data-bs-target="#rating-collapse" aria-expanded="false">
                    강의평가
                </button>
                <div class="collapse" id="rating-collapse" style="">
                    <ul class="btn-toggle-nav list-unstyled fw-normal pb-1 small">
                        <li>
                            <router-link to="/lecturerating" class="link-body-emphasis d-inline-flex text-decoration-none rounded">
                                강의 평가내역
                            </router-link>
                        </li>
                    </ul>
                </div>
            </li>
            <li class="mb-1">
                <button class="btn btn-toggle d-inline-flex align-items-center rounded border-0" data-bs-toggle="collapse" data-bs-target="#notice-collapse" aria-expanded="false">
                    공지사항
                </button>
                <div class="collapse" id="notice-collapse" style="">
                    <ul class="btn-toggle-nav list-unstyled fw-normal pb-1 small">
                        <li>
                            <router-link to="/notice/list" class="link-body-emphasis d-inline-flex text-decoration-none rounded">
                                전체 공지
                            </router-link>
                        </li>
                        <li>
                            <router-link to="/dnotice/list" class="link-body-emphasis d-inline-flex text-decoration-none rounded">
                                학과 공지
                            </router-link>
                        </li>
                    </ul>
                </div>
            </li>
            <li class="mb-1">
                <button class="btn btn-toggle d-inline-flex align-items-center rounded border-0" data-bs-toggle="collapse" data-bs-target="#salary-collapse" aria-expanded="false">
                    급여
                </button>
                <div class="collapse" id="salary-collapse" style="">
                    <ul class="btn-toggle-nav list-unstyled fw-normal pb-1 small">
                        <li>
                            <router-link to="/salary" class="link-body-emphasis d-inline-flex text-decoration-none rounded">
                                급여명세서
                            </router-link>
                        </li>
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