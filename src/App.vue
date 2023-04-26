<template>
 <div>
    <PageHeader/>
    <div class="container">
      <div class="row">
        <div class="col-md-4">
          <PageSidebar/>

        </div>
        <PageFooter/>
    </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'

import PageHeader from './views/student/Eclass/PageHeader.vue';
import PageFooter from './components/common/PageFooter.vue';
import PageSidebar from './views/student/Eclass/PageSidebar.vue';


export default {
    name: 'App',
    components: {
        // HelloWorld
        PageHeader,

        PageFooter,
        PageSidebar
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
}
</style>