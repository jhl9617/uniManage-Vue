<!-- PageSidebar.vue -->
<template>
    <div class="d-flex flex-column flex-shrink-0 p-3 bg-body-tertiary" style="width: 280px;">
        <ul class="list-unstyled ps-0">
            <li class="mb-1">
                <router-link to="/admin/" class="nav-link link-body-emphasis">
                    개인정보
                </router-link>
            </li>
            <li class="mb-1">
                <router-link to="/admin/notice/list" class="nav-link link-body-emphasis">
                    공지사항 관리
                </router-link>
            </li>
            <li class="mb-1">
                <router-link to="/personinfo" class="nav-link link-body-emphasis">
                    학생 관리
                </router-link>
            </li>
            <li class="mb-1">
                <router-link to="/personinfo" class="nav-link link-body-emphasis">
                    강의 관리
                </router-link>
            </li>
            <li class="mb-1">
                <router-link to="/admin/manage/appliedclass" class="nav-link link-body-emphasis">
                    강의 신청 관리
                </router-link>
            </li>
            <li class="mb-1">
                <router-link to="/admin/manage/classroom" class="nav-link link-body-emphasis">
                    강의실 관리
                </router-link>
            </li>
            <li class="mb-1">
                <router-link to="/admin/manage/professor" class="nav-link link-body-emphasis">
                    교수 관리
                </router-link>
            </li>
            <li class="mb-1">
                <router-link to="/admin/manage/scholarship" class="nav-link link-body-emphasis">
                    장학금 관리
                </router-link>
            </li>
        </ul>
    </div>
</template>

<script>
export default {}
</script>

<style scoped>

</style>