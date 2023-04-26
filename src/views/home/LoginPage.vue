<template>
    <body class="text-center">
   <main class="form-signin w-100 m-auto">
        <form>

            <h1 class="h3 mb-3 fw-normal">로그인</h1>

            <div class="form-floating">
                <input type="email" class="form-control" id="floatingInput" placeholder="name@example.com">
                <label for="floatingInput">아이디</label>
            </div>
            <div class="form-floating">
                <input type="password" class="form-control" id="floatingPassword" placeholder="Password">
                <label for="floatingPassword">비밀번호</label>
            </div>
            <router-link to="/findid" class="font-weight-bold">ID 찾기</router-link> &nbsp;
            <router-link to="/findpassword" class="font-weight-bold">비밀번호 찾기</router-link>
            <button class="w-100 btn btn-lg btn-primary" type="submit">로 그 인</button>

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