<template>
    <body class="text-center">
   <main class="form-signin w-100 m-auto">
       <form @submit.prevent="handleSubmit">

            <h1 class="h3 mb-3 fw-normal">로그인</h1>

           <div class="form-floating">
               <input
                       type="number"
                       class="form-control"
                       id="member_id"
                       placeholder="163150"
                       v-model="member_id"
               />
               <label for="member_id">아이디</label>
           </div>
           <br />
           <div class="form-floating">
               <input
                       type="password"
                       class="form-control"
                       id="member_pwd"
                       placeholder="Password"
                       v-model="member_pwd"
               />
               <label for="member_pwd">비밀번호</label>
           </div>
           <br/>
            <router-link to="/findid" class="font-weight-bold text-decoration-none">ID 찾기</router-link> &nbsp;
            <router-link to="/findpassword" class="font-weight-bold text-decoration-none">비밀번호 찾기</router-link> <br><br>
            <button class="w-100 btn btn-lg btn-primary" type="submit">로 그 인</button>

        </form>
    </main>
    </body>

</template>

<script>
export default {
    methods: {
        async handleSubmit() {
            const response = await fetch("/onLogin", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    member_id: this.member_id,
                    member_pwd: this.member_pwd,
                }),
            });
            /*const data = await response.json();
            const path = await response.text();
            if (data.member_id) {
                console.log("Logged in with ID:", data.member_id);
                this.$router.push(path);
            } else {
                console.error("Error logging in");
            }*/
            const path = await response.text();

            if (response.ok) {
                console.log("Logged in with ID:", this.member_id);
                this.$router.push(path);
            } else {
                alert('ID 또는 비밀번호가 일치하지 않습니다.')
                console.error("Error logging in");
            }
        },
    },


}
</script>

<style scoped>

</style>