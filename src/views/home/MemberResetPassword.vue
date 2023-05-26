<template>
    <body class="text-center">



    <main class="form-signin w-100 m-auto">
        <form>

            <h1 class="h3 mb-3 fw-normal">비밀번호변경</h1>
            <div class="form-floating">
                <input type="password" class="form-control" id="pass" placeholder="">
                <label for="floatingInput">이전 비밀번호</label><br>
            </div>
            <div class="form-floating">
                <input type="password" class="form-control" id="pass" placeholder="">
                <label for="floatingInput">새로운 비밀번호</label><br>
            </div>
            <div class="form-floating">
                <input type="password" class="form-control" id="password" placeholder="">
                <label for="floatingInput">비밀번호 다시 입력</label><br>
            </div>


            <button class="w-100 btn btn-lg btn-primary" type="submit">비밀번호 변경</button>

        </form>
    </main>
    </body>

</template>

<script>
export default {

}
</script>

<style scoped>

</style>