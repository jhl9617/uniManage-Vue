import { reactive, computed } from 'vue'
import client from '../modules/client.js'
import Cookies from 'js-cookie'

export const useAuth = () => {
  //애플리케이션 데이터를 정의한다.
  const state = reactive({
    accessToken: '',
    //로그인된 사용자 정보
    myinfo: null,
  })

  const myinfo = computed(() => state.myinfo)

  //로그인 여부를 확인한다.
  const isAuthorized = computed(() => {
    return state.accessToken.length > 0 && !!state.myinfo
  })

  //로그인한 사용자가 관리자 권한을 가지고 있는지 확인한다.
  const isAdmin = computed(() => {
    if(!state.myinfo || !state.myinfo.authList) {
      return false
    }

    return isAuthorized && state.myinfo.authList[0].auth === 'ROLE_ADMIN'
  })

  //로그인한 사용자가 회원 권한이 있는지 확인한다.
  const isMember = computed(() => {
    if(!state.myinfo || !state.myinfo.authList) {
      return false
    }
    
    return isAuthorized && state.myinfo.authList[0].auth === 'ROLE_MEMBER'
  })

  //데이터 상태 변경 함수를 정의한다.
  //api 모듈을 사용하여
  const SET_ACCESS_TOKEN = (accessToken) => {
    if (accessToken) {
      state.accessToken = accessToken

      //HTTP 해더에 토큰을 설정
      client.defaults.headers.common.Authorization = `Bearer ${accessToken}`

      //쿠키에 엑세스 토큰을 저장
      Cookies.set('accessToken', accessToken, { expires: 1 })
    }
  }

  //사용자 정보 상태 변경 함수
  const SET_MY_INFO = (myinfo) => {
    if (myinfo) {
      state.myinfo = myinfo
    }
  }

  const DESTROY_ACCESS_TOKEN = () => {
    state.accessToken = ''
    delete client.defaults.headers.common.Authorization
    Cookies.remove('accessToken')
  }

  const DESTROY_MY_INFO = () => {
    state.myinfo = null
  }

  //로그인 처리 함수를 정의한다.
  const signin = (payload) => {
    //사용자아이디와 비밀번호를 REST API 서버의 로그인 처리 API
    //(/api/authenticate)에 넘겨준다.
    return client.post(`/api/authenticate?username=${payload.userId}&password=${payload.password}`, {
      username: payload.userId,
      password: payload.password
    }).then(res => {
      //로그인이 성공하면 서버에서 넘겨받은 응답데이터에서
      const { authorization } = res.headers
      //엑세스토큰을 추출하여 
      const accessToken = authorization.substring(7)
      //스토어 상태에 저장하는 함수를 호출한다.
      SET_ACCESS_TOKEN(accessToken)

      return client.get('/users/myinfo')
    }).then(res => {
      SET_MY_INFO(res.data)
    })
  }

  //저장된 토큰으로 로그인 처리(스토어 상태에 엑세스 토큰을 저장)를 하고
  //로그인한 사용자 정보를 얻는다.
  const signinByToken = (token) => {
    SET_ACCESS_TOKEN(token)
    //사용자 정보 요청
    return client.get('/users/myinfo')
      .then(res => {
        //스토어(데이터 저장소) 상태에 저장
        SET_MY_INFO(res.data)
      })
  }

  //로그아웃 함수
  const signout = () => {
    DESTROY_MY_INFO()
    DESTROY_ACCESS_TOKEN()
  }

  return {
    //변수와 함수를 외부에 공개한다.
    myinfo,
    isAuthorized,
    isAdmin,
    isMember,
    signin,
    signinByToken,
    signout,
  }
}
