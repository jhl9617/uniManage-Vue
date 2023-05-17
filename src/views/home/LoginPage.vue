<template>
    <body class="text-center">
   <main class="form-signin w-100 m-auto">
       <form @submit.prevent="fireSignin">

            <h1 class="h3 mb-3 fw-normal">로그인</h1>

           <div class="form-floating">
               <input
                       type="number"
                       class="form-control"
                       id="member_id"
                       placeholder="163150"
                       v-model="userId"
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
                       v-model="password"
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
import { ref } from 'vue'
import axios from 'axios'

export default {
    name: 'SigninForm',
    emits: ['sign-in'],
    setup(props, context) {
        const userId = ref('')
        const password = ref('')

        const fireSignin = () => {
            // Emit the 'sign-in' event with the user's data
            context.emit('sign-in', {
                userId: userId.value,
                password: password.value
            })

            // Send a POST request to your login endpoint with the user's data
            axios.post('http://localhost:9090/login', {
                username:  userId.value,
                password: "{noop}" + password.value
            })
                .then(response => {
                    console.log(response)
                    // handle your response here
                })
                .catch(error => {
                    console.error(error)
                    // handle your error here
                })
        }

        return {
            userId,
            password,
            fireSignin,
        }
    },
}
</script>


<style scoped>

</style>