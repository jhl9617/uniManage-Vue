<template>
    <div class="board-list">
        강의 개설 요청 관리
        <table class="w3-table-all table-hover">
            <thead>
            <tr>
                <th>No</th>
                <th>과목명</th>
                <th>학과명</th>
                <th>교수명</th>
                <th>허용여부</th>
            </tr>
            </thead>
            <tbody>
                <tr v-for="(row, index) in list" :key="row.lecture_id">
                    <td>{{ no - index }}</td>
                    <td>
                        <a @click="fnView(row.lecture_id)" style="cursor: pointer;">
                            {{ row.lecture_title }}
                        </a>
                    </td>
                    <td>{{ row.department_name }}</td>
                    <td>{{ row.name }}</td>
                    <td>
                        <button
                                type="button"
                                class="btn btn-outline-dark"
                                @click="approveLecture(row)"
                                :disabled="row.lecture_apply_status === '2'"
                        >
                            {{ row.lecture_apply_status === '2' ? '허용됨' : '허용' }}
                        </button>
                    </td>
                </tr>
            </tbody>
        </table>
        <div class="pagination w3-bar w3-padding-16 w3-small justify-content-center" v-if="paging.total_list_cnt > 0">
      <span class="pg">
      <a href="javascript:;" @click="fnPage(1)" class="first w3-button w3-border">&lt;&lt;</a>
      <a href="javascript:;" v-if="paging.start_page > 10" @click="fnPage(`${paging.start_page-1}`)"
         class="prev w3-button w3-border">&lt;</a>
      <template v-for=" (n,index) in paginavigation()">
          <template v-if="paging.page==n">
              <strong class="w3-button w3-border w3-green" :key="index">{{ n }}</strong>
          </template>
          <template v-else>
              <a class="w3-button w3-border" href="javascript:;" @click="fnPage(`${n}`)" :key="index">{{ n }}</a>
          </template>
      </template>
      <a href="javascript:;" v-if="paging.total_page_cnt > paging.end_page"
         @click="fnPage(`${paging.end_page+1}`)" class="next w3-button w3-border">&gt;</a>
      <a href="javascript:;" @click="fnPage(`${paging.total_page_cnt}`)" class="last w3-button w3-border">&gt;&gt;</a>
      </span>
        </div>
    </div>
    <!--검색 필드 추가-->

    <div>
        <select v-model="search_key">
            <option value="">- 선택 -</option>
            <option value="lecture_title">강의명</option>
            <option value="semester">학기</option>
            <option value="name">교수명</option>
        </select>
        &nbsp;
        <input type="text" v-model="search_value" @keyup.enter="fnPage()">
        &nbsp;
        <PrimeButton @click="fnPage()" style="cursor: pointer;">검색</PrimeButton>
    </div>
    <root>
    </root>
</template>

<script>
import axios from "axios";

export default {
    data() { //변수생성
        return {
            requestBody: {}, //리스트 페이지 데이터전송
            list: {}, //리스트 데이터
            no: '', //게시판 숫자처리
            paging: {
                block: 0,
                end_page: 0,
                next_block: 0,
                page: 0,
                page_size: 0,
                prev_block: 0,
                start_index: 0,
                start_page: 0,
                total_block_cnt: 0,
                total_list_cnt: 0,
                total_page_cnt: 0,
            }, //페이징 데이터
            page: this.$route.query.page ? this.$route.query.page : 1,
            size: this.$route.query.size ? this.$route.query.size : 10,
            //keyword: this.$route.query.keyword,
            search_key: this.$route.query.sk ? this.$route.query.sk : '',
            search_value: this.$route.query.sv ? this.$route.query.sv : '',

            paginavigation: function () { //페이징 처리 for문 커스텀
                let pageNumber = [] //;
                let start_page = this.paging.start_page;
                let end_page = this.paging.end_page;
                for (let i = start_page; i <= end_page; i++) pageNumber.push(i);
                return pageNumber;
            }
        }
    },
    mounted() { //연결 되면 == window.onload()
        this.fnGetList()
    },
    methods: {

        fnGetList() {
            //스프링 부트에서 전송받은 데이터 출력 처리
            this.requestBody = { // 데이터 전송
                //keyword: this.keyword,
                sk: this.search_key,
                sv: this.search_value,
                page: this.page,
                size: this.size
            }

            this.$axios.get("/admin/manage/appliedlecture", {
                params: this.requestBody,
                headers: {}
            }).then((res) => {

                //this.list = res.data  //서버에서 데이터를 목록으로 보내므로 바로 할당하여 사용할 수 있다.
                if (res.data.result_code === "OK") {
                    this.list = res.data.data
                    this.paging = res.data.pagination
                    this.no = this.paging.total_list_cnt - ((this.paging.page - 1) * this.paging.page_size)
                }
            }).catch((err) => {
                if (err.message.indexOf('Network Error') > -1) {
                    alert('네트워크가 원활하지 않습니다.\n잠시 후 다시 시도해주세요.')
                }
            })
        },
        fnView(lecture_id) {
            this.requestBody.lecture_id = lecture_id
            this.$router.push({
                path: '/admin/manage/appliedlecture/detail', //경로, 같은 폴더에 있는 detail.vue
                query: this.requestBody /*파라미터*/
            })
        },
        fnPage(n) {
            if (this.page !== n) {
                this.page = n

            }
            this.fnGetList()
        },
        // fnSave(lectureId, lectureApplyStatus) {
        //     console.log(typeof lectureId);
        //     console.log('lectureId:', lectureId); // 콘솔 로그로 lectureId 값 확인
        //     // eslint-disable-next-line no-undef
        //     const convertedLectureId = BigInt(lectureId); // number를 Long 타입으로 변환
        //     console.log(typeof lectureId)
        //     const requestBody = {
        //         lectureId: convertedLectureId,
        //         lectureApplyStatus: lectureApplyStatus,
        //     };
        //     this.$axios
        //         .put('/admin/manage/appliedlecture/update', requestBody)
        //         .then(() => {
        //             alert('강의 개설이 허용되었습니다.');
        //             this.updateList(convertedLectureId, '2');
        //             console.log('DB 컬럼 값이 성공적으로 업데이트되었습니다.');
        //         })
        //         .catch((err) => {
        //             if (err.message.indexOf('Network Error') > -1) {
        //                 alert('네트워크가 원활하지 않습니다.\n잠시 후 다시 시도해주세요.');
        //             } else {
        //                 console.error('DB 컬럼 값 업데이트 중 오류가 발생했습니다:', err);
        //             }
        //         });
        //     console.log('lectureApplyStatus:', lectureApplyStatus);
        // }

        async approveLecture(lecture) {
            if (lecture.lecture_apply_status !== '2') {
                // lecture_id와 lecture_apply_status를 백엔드 API에 전달하여 수정 요청
                try {
                    await axios.put(`/admin/manage/appliedlecture/${lecture.lecture_id}`, {
                        lecture_apply_status: '2',
                    });
                    // 수정 성공 시, 해당 강의의 lecture_apply_status를 '2'로 변경
                    lecture.lecture_apply_status = '2';
                } catch (error) {
                    console.error('Failed to approve lecture:', error);
                    // 에러 처리
                }
            }
        },
    }
}
</script>

<style scoped>

</style>