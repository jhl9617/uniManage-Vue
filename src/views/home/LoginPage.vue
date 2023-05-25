<template>
    <body className="text-center">
    <main className="form-signin w-100 m-auto">
        <form @submit.prevent="fireSignin">

            <h1 className="h3 mb-3 fw-normal">로그인</h1>

            <div className="form-floating">
                <input
                    type="number"
                    className="form-control"
                    id="member_id"
                    placeholder="163150"
                    v-model="userId"
                />
                <label htmlFor="member_id">아이디</label>
            </div>
            <br/>
            <div className="form-floating">
                <input
                    type="password"
                    className="form-control"
                    id="member_pwd"
                    placeholder="Password"
                    v-model="password"
                />
                <label htmlFor="member_pwd">비밀번호</label>
            </div>
            <br/>
            <router-link to="/findid" className="font-weight-bold text-decoration-none">ID 찾기</router-link> &nbsp;
            <router-link to="/findpassword" className="font-weight-bold text-decoration-none">비밀번호 찾기</router-link>
            <br><br>
            <button className="w-100 btn btn-lg btn-primary" type="submit">로 그 인</button>

        </form>
        <button @click="inse">임시</button>
    </main>
    </body>

</template>

<script>
import {reactive, ref} from 'vue'
import axios from 'axios'

import router from "@/router";
import client from "@/modules/client";
import Cookies from 'js-cookie'
import jwt from 'jsonwebtoken';

export default {
    name: 'SigninForm',
    emits: ['sign-in'],
    setup(props, context) {


        const userId = ref('')
        const password = ref('')


        const fireSignin = async () =>{
            // Emit the 'sign-in' event with the user's data
            context.emit('sign-in', {
                userId: userId.value,
                password: password.value
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
        }

        //로그아웃 토큰, 세션 삭제
        const fireLogout = () => {
            // Remove the access token from the Vuex store
            state.accessToken = ''

            // Remove the access token from the Axios headers
            client.defaults.headers.common.Authorization = ''

            // Remove the access token from the cookies
            Cookies.remove('accessToken')
            axios.post('http://localhost:9090/logout')
            // Now you can redirect the user to the login page
            router.push({ path: '/' })
        }
        fireLogout();

        //토큰 decode
        const decodeToken = (token) => {
            try {
                return jwt.decode(token);
            } catch (error) {
                console.error("Error decoding token: ", error);
                return null;
            }
        };

        return {
            userId,
            password,
            fireSignin,
            fireLogout,
            inse
        }
    },
}
</script>


<style scoped>

</style>