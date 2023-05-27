<template>
  <div class="position-absolute top-50 start-50 translate-middle">
    <body class="text-center">



    <main class="form-signin w-100 m-auto">
        <form>
            <h1 class="h3 mb-3 fw-normal">ID찾기</h1>
            <div class="form-floating">
                <input type="text" class="form-control" id="name" placeholder="">
                <label for="floatingInput">이름</label>
            </div><br>
            <div class="form-floating">
                <input type="text" class="form-control" id="birth" placeholder="">
                <label for="floatingInput">생년월일</label>
            </div><br>
            <div class="form-floating">
                <input type="email" class="form-control" id="email" placeholder="">
                <label for="floatingInput">이메일</label>
            </div><br>

            <button class="w-100 btn btn-lg btn-primary" type="submit">ID찾기</button>

        </form>
    </main>
    </body>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>

</style>