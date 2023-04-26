<!-- PageSidebar.vue -->
<template>
    <div class="d-flex flex-column flex-shrink-0 p-3 bg-body-tertiary" style="width: 280px;">
    <router-link to="/Eclass/1" class="d-flex align-items-center mb-3 mb-md-0 me-md-auto link-body-emphasis text-decoration-none">
      <svg class="bi pe-none me-2" width="40" height="32"><use xlink:href="#bootstrap"></use></svg>
      <span class="fs-4">과목명</span>
    </router-link>
    <hr>
    <ul class="nav nav-pills flex-column mb-auto">
      <li class="nav-item">
          <router-link to="/Eclass/lectureinfo" class="nav-link link-body-emphasis" aria-current="page">

          강의정보
            </router-link>
      </li>
      <li>
          <router-link to="/Eclass/homework/list" class="nav-link link-body-emphasis ">

          과제제출
          </router-link>
      </li>
      <li>
        <router-link to="/Eclass/notice/list" class="nav-link link-body-emphasis">

          공지사항
        </router-link>
      </li>
      <li>
        <router-link to="/Eclass/source/list" class="nav-link link-body-emphasis">

          강의자료실
        </router-link>
      </li>
      <li>
        <router-link to="/Eclass/board/list" class="nav-link link-body-emphasis">

          자유게시판
        </router-link>
      </li>
    </ul>
    <hr>
    
  </div>
  </template>
  
  <script>
  export default {}
  </script>
  
  <style scoped>
  
  </style>

