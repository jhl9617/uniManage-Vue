<template>
    <div>
        <PageHeader/>
        <div class="container">
            <div class="row">
                <div class="col-md-4">
                    <PageSidebar/>
                </div>
                <div class="col-md-8">
                    <router-view/>
                </div>
            </div>
        </div>
        <PageFooter/>
    </div>
</template>

<script>
import PageHeader from './components/common/PageHeader.vue';
import PageFooter from './components/common/PageFooter.vue';
import PageSidebar from "@/views/student/studentInfoSystem/PageSidebar.vue";

export default {
    name: 'App',
    components: {
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
    margin-top: 60px;
}
</style>