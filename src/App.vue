<template>
  <!-- <img alt="Vue logo" src="./assets/images/logo.png">
  <HelloWorld msg="Vue : samplevue and Boot : binevue 연동"/> -->

  <PageHeader/> <!--헤더 컴포넌트-->
  <AdminHeader/>
  <router-view/> <!--페이지 이동이 표시될 영역을 의미함-->

  <PageFooter/> <!--푸터 컴포넌트-->
</template>

<script>

import PageHeader from './components/common/PageHeader.vue';
import PageFooter from './components/common/PageFooter.vue';
import AdminHeader from './views/admin/common/AdminHeader.vue';


export default {
  name: 'App',
  components: {
    // HelloWorld
    PageHeader,
      AdminHeader,
    PageFooter
  }
}
</script>

<style>
#app {

  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>