<template>
  <!-- 로그인 화면 구성 -->
  <div align="center">
    <h2>로그인</h2>
    <!-- 로그인 요청 이벤트를 처리하는 핸들러 메서드를 지정한다. -->
    <signin-form @sign-in="login"/>
    <p><router-link :to="{ name: 'Signup' }">회원가입</router-link></p>
  </div>
</template>

<script>
import SigninForm from '../../components/auth/SigninForm.vue'
import { router } from '../../router/index.js'
import { inject } from 'vue'

export default {
  name: 'SignIn',
  components: { SigninForm },
  setup() {
    //공유된 로그인 함수 주입(가져옴)
    const signin = inject("signin")

    //로그인 처리 메서드
    const login = (payload) => {
      signin(payload).then(res => {
        alert('로그인 되었습니다.')
        router.push({ name: 'Home' })
      }).catch(err => {
        console.log(err)
      })
    }

    //메서드 변수 반환
    return {
      login,
    }
  },
}
</script>
