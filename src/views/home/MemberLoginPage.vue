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

        let accessToken;

        const userId = ref('')
        const password = ref('')

        const fireSignin = async () => {
            // Emit the 'sign-in' event with the user's data
            context.emit('sign-in', {
                userId: userId.value,
                password: password.value
            });

            // Send a POST request to your login endpoint with the user's data
            axios.post('http://localhost:9090/login', {
                username: userId.value,
                password: password.value
            })
                .then(response => {
                    // After successful login, extract the access token
                    const { authorization } = response.headers;
                    accessToken = authorization.substring(7);

                    // Then send a POST request to getProfile endpoint
                    return axios.post('http://localhost:9090/getProfile', {
                        memberId: userId.value.toString(),
                    });
                })
                .then(response => {
                    console.log("유저 정보 : " + response);

                    // Decode the token and extract the roles
                    const decoded = decodeToken(accessToken);
                    let pagePath = '';
                    if (decoded && decoded.rol && decoded.rol.length > 0) {
                        const roles = decoded.rol;
                        if (roles.includes('1')) {
                            pagePath = '/prof/main';
                        } else if (roles.includes('2')) {
                            pagePath = '/admin';
                        } else if (roles.includes('3') || roles.includes('4') || roles.includes('5')) {
                            pagePath = '/student';
                        } else {
                            pagePath = '';
                        }
                    }

                    // Save the access token in the store state
                    SET_ACCESS_TOKEN(accessToken);

                    // Redirect to another page
                    router.push({
                        path: pagePath,
                    });
                })
                .catch(error => {
                    console.error(error);
                });
        };
        const inse = () => {
            axios.post('http://localhost:9090/insert', {

            })
                .then(response => {
                    console.log(response + "회원등록")
                    // handle your response here
                })
                .catch(error => {
                    console.error(error)
                    // handle your error here

                })
        }
        //애플리케이션 데이터를 정의한다.
        const state = reactive({
            accessToken: '',
            //로그인된 사용자 정보
            myinfo: null,
        })

        const SET_ACCESS_TOKEN = (accessToken) => {
            if (accessToken) {
                state.accessToken = accessToken

                //HTTP 해더에 토큰을 설정
                client.defaults.headers.common.Authorization = `Bearer ${accessToken}`

                //쿠키에 엑세스 토큰을 저장
                Cookies.set('accessToken', accessToken, { expires: 1 })
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