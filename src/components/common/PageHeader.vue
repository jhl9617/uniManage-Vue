<!-- PageHeader.vue -->
<template>
<!--    <header>
      <div id="nav">
        <router-link to="/">Home</router-link> |
        <router-link to="/about">About</router-link> |
        <router-link to="/board/list">게시판</router-link>
      </div>
    </header>-->
    <div class="container">
        <header class="d-flex flex-wrap align-items-center justify-content-center justify-content-md-between py-3 mb-4 border-bottom">
            <div class="col-md-3 mb-2 mb-md-0">
                <a href="/" class="d-inline-flex link-body-emphasis text-decoration-none">
                    <svg class="bi" width="40" height="32" role="img" aria-label="Bootstrap"><use xlink:href="#bootstrap"></use></svg>
                </a>
            </div>

            <ul class="nav col-12 col-md-auto mb-2 justify-content-center mb-md-0">
                <li><router-link to="/"> Home </router-link></li> |
                <li><router-link to="/about"> About </router-link></li> |
                <li><router-link to="/board/list"> 게시판 </router-link></li> |
                <li><router-link to="/admin"> 교직원 </router-link></li> |
                <li><router-link to="/student"> 학생 </router-link></li> |
                <li><router-link to="/eclass"> e-class </router-link></li> |
                <li><router-link to="/student"> 수강신청 </router-link></li> |
                <li><router-link to="/prof/main"> 교수 </router-link></li> |

            </ul>

            <div class="col-md-3 text-end">
                <button type="button" class="btn btn-outline-primary me-2">Login</button>
                <button type="button" class="btn btn-primary">Sign-up</button>
            </div>
        </header>
    </div>
  </template>
  
  <script>
  export default {
  
  }
  </script>
  
  <style scoped>

  </style>