<template>
  <form @submit.prevent="fireSignin">
    <table>
			<tr>
				<td>아이디</td>
				<td><input type="text" v-model="userId"></td>
			</tr>
			<tr>
				<td>비밀번호</td>
				<td><input type="password" v-model="password"></td>
			</tr>
			<tr>
				<td colspan="2" align="center"><button type="submit">로그인</button></td>
			</tr>
		</table>
  </form>
</template>

<script>
import { ref } from 'vue'

export default {
  name: 'SigninForm',
  emits: ['sign-in'],
  setup(props, context) {
    //컴포넌트 데이터 정의
    const userId = ref('')
    const password = ref('')

    //입력한 사용자 아이디와 비밀번호와 함께 상위 컴포넌트에 sign-in 이벤트를 발생시킨다.
    const fireSignin = () => {
      context.emit('sign-in', {
        userId: userId.value,
        password: password.value 
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
