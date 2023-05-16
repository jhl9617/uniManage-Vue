import { reactive, computed } from 'vue'
import client from '../modules/client.js'

export const useMember = () => {
  //회원가입과 회원관리를 위한 애플리케이션 데이터
  const state = reactive({
    jobCodes: [],
    members: [],
    member: null,
  })

  //computed 속성 정의
  const jobCodes = computed(() => state.jobCodes)
  const members = computed(() => state.members)
  const member = computed(() => state.member)

  //직업 목록 상태 변경 함수 정의
  const FETCH_JOBCODE_LIST = (jobCodes) => {
    state.jobCodes = jobCodes
  }

  const FETCH_MEMBER_LIST = (members) => {
    state.members = members
  }

  const FETCH_MEMBER = (member) => {
    state.member = member
  }

  //REST API 서버와 통신하여 작업코드목록을 가져와서
  //작업코드 목록 상태를 변경시키는 함수
  const fetchJobCodeList = () => {
    return client.get('/codes/job')
      .then(res => {
        FETCH_JOBCODE_LIST(res.data)
      })
  }

  const fetchMemberList = () => {
    return client.get('/users')
      .then(res => {
        FETCH_MEMBER_LIST(res.data)
      })
  }

  const fetchMember = (userNo) => {
    return client.get(`/users/${userNo}`)
      .then(res => {
        FETCH_MEMBER(res.data)
      })
  }

  //변수와 함수 외부에 공개
  return {
    jobCodes,
    fetchJobCodeList,
    members,
    member,
    fetchMemberList,
    fetchMember,
  }
}
