<template>
    <div class="container-fluid">
        <div class="row">
                <div class="row">
                    <div>
                        수강신청
                        <br><br>
                        <div class="container-fluid">
                            <table align="center" class="w3-table-all table-bordered" width="505">
                                <tr align="left">
                                    <th>학과</th>
                                    <td>
                                        <select v-model="search_value1">
                                            <option value="">- 선택 -</option>
                                            <option value="1">1:국어국문학과</option>
                                            <option value="2">2:영어영문학과</option>
                                            <option value="3">3:사학과</option>
                                            <option value="4">4:철학과</option>
                                            <option value="5">5:법학과</option>
                                            <option value="6">6:행정학과</option>
                                            <option value="7">7:정치학과</option>
                                            <option value="8">8:경제학과</option>
                                            <option value="9">9:사회학과</option>
                                            <option value="10">10:무역학과</option>
                                            <option value="11">11:신문방송학과</option>
                                            <option value="12">12:경영학과</option>
                                            <option value="13">13:회계학과</option>
                                            <option value="14">14:호텔관광학과</option>
                                            <option value="15">15:교육학과</option>
                                            <option value="16">16:영미어문화학과</option>
                                            <option value="17">17:불어불문학과</option>
                                            <option value="18">18:중어중문학과</option>
                                            <option value="19">19:일어일문학과</option>
                                            <option value="20">20:서반아어학과</option>
                                            <option value="21">21:국제경영학과</option>
                                            <option value="22">22:수학과</option>
                                            <option value="23">23:물리학과</option>
                                            <option value="24">24:화학과</option>
                                            <option value="25">25:생물학과</option>
                                            <option value="26">26:지리학과</option>
                                            <option value="27">27:아동주거학과</option>
                                            <option value="28">28:의상학과</option>
                                            <option value="29">29:식품영양학과</option>
                                            <option value="30">30:약학과</option>
                                            <option value="31">31:임상약학과</option>
                                            <option value="32">32:한약학과</option>
                                            <option value="33">33:간호학과</option>
                                            <option value="34">34:환경조경학과</option>
                                            <option value="35">35:생명공학원</option>
                                            <option value="36">36:우주과학과</option>
                                            <option value="37">37한방재료가공학과:</option>
                                            <option value="38">38:생태시스템공학과</option>
                                            <option value="39">39:식품생명공학과</option>
                                            <option value="40">40:원예학과</option>
                                            <option value="41">41:환경응용과학과</option>
                                            <option value="42">42:원자력공학과</option>
                                            <option value="43">43:전자공학과</option>
                                            <option value="44">44:컴퓨터공학과</option>
                                            <option value="45">45:건축공학과</option>
                                            <option value="46">46:토목공학과</option>
                                            <option value="47">47:기계공학과</option>
                                            <option value="48">48:전파공학과</option>
                                            <option value="49">49:산업공학과</option>
                                            <option value="50">50:섬유공학과</option>
                                            <option value="51">51:화학공학과</option>
                                            <option value="52">52:동서의료공학과</option>
                                            <option value="53">53:의학과</option>
                                            <option value="54">54:한의학과</option>
                                            <option value="55">55:치의학과</option>
                                            <option value="56">56:미술학과</option>
                                            <option value="57">57:무용학과</option>
                                            <option value="58">58:공연예술학과</option>
                                            <option value="59">59:음악학과</option>
                                            <option value="60">60:도예학과</option>
                                            <option value="61">61:산업디자인학과</option>
                                            <option value="62">62:디자인학과</option>
                                            <option value="63">63:체육학과</option>
                                        </select>
                                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                    </td>
                                    <th>구분</th>
                                    <td>
                                        <select v-model="search_value2">
                                            <option value="">- 선택 -</option>
                                            <option value="1">교양</option>
                                            <option value="2">전공</option>
                                        </select>
                                    </td>
                                </tr>
                            </table>
                            <button v-on:click="fnPage()">조회</button>
                            <br><br>
                            <table class="w3-table-all" id="lecturelist">
                                <thead>
                                <tr>
                                    <th>강의명</th>
                                    <th>학점</th>
                                    <th>강의시간</th>
                                    <th>수강신청</th>
                                </tr>
                                </thead>
                                <tbody>
                                <tr v-for="(row, idx) in list" :key="idx">
                                    <td>{{ row.lecture_title}}</td>
                                    <td><a v-on:click="fnView(`${row.lecture_id}`)" style="cursor: pointer;">{{ row.credit }}</a></td>
                                    <td>{{ row.timecode1 }} {{ row.timecode2 }} {{ row.timecode3 }}</td>
                                    <td><button type="button" class="btn btn-outline-dark" v-on:click="fnSave">수강신청</button></td>
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
                    </div>
            </div>
        </div>
    </div>
</template>

<script>


export default {
    data() {
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
            search_value1: this.$route.query.sk ? this.$route.query.sk : '',
            search_value2: this.$route.query.sv ? this.$route.query.sv : '',
            paginavigation: function () { //페이징 처리 for문 커스텀
                let pageNumber = [] //;
                let start_page = this.paging.start_page;
                let end_page = this.paging.end_page;
                for (let i = start_page; i <= end_page; i++) pageNumber.push(i);
                return pageNumber;
            },

            loginMember: null,

            course_regi_id: this.$route.query.course_regi_id,

            member_id: '',
            lecture_id: '',
            course_regi_term: '',
            department_id:'',
        };
    },
    mounted() { //연결 되면 == window.onload()
        this.fnGetList()
    },
    methods: {
        fnGetList() {
            this.requestBody = { // 데이터 전송
                sk: this.search_value1,
                sv: this.search_value2,
                page: this.page,
                size: this.size
            }

            this.$axios.get("/student/sugang", {
                params: this.requestBody,
                headers: {}
            }).then((res) => {
                // this.list = res.data  //서버에서 데이터를 목록으로 보내므로 바로 할당하여 사용할 수 있다.
                if (res.data.result_code === "OK") {
                    this.list = res.data.data
                    console.log(this.list)
                    this.paging = res.data.pagination
                    this.no = this.paging.total_list_cnt - ((this.paging.page - 1) * this.paging.page_size)
                }
            }).catch((err) => {
                if (err.message.indexOf('Network Error') > -1) {
                    alert('네트워크가 원활하지 않습니다.\n잠시 후 다시 시도해주세요.')
                }
            })
        },
        // fnView(lecture_id) {
        //     this.requestBody.lecture_id = lecture_id
        //     this.$router.push({
        //         path: '/',
        //         query: this.requestBody
        //     })
        // },
        fnPage(n) {
            if (this.page !== n) {
                this.page = n
            }
            this.fnGetList()
        },
        fnSave() {
            let apiUrl = this.$serverUrl + '/student/sugang'  //let = var
            this.form = {
                "course_regi_id": this.course_regi_id,
                "member_id": this.member_id,
                "lecture_id": this.lecture_id,
                "course_regi_term": this.semester,
            }

            if (this.course_regi_id === undefined) {
                //INSERT
                this.$axios.post(apiUrl, this.form)
                    .then((res) => {
                        alert('수강신청이 성공하였습니다.')
                        this.fnView(res.data.course_regi_id)
                    }).catch((err) => {
                    if (err.message.indexOf('Network Error') > -1) {
                        alert('네트워크가 원활하지 않습니다.\n잠시 후 다시 시도해주세요.')
                    }
                })
            }
            // else {
            //     //UPDATE
            //     this.$axios.patch(apiUrl, this.form)
            //         .then((res) => {
            //             alert('글이 저장되었습니다.')
            //             this.scho_id = res.data.scho_id;
            //             this.fnView(res.data.scho_id)
            //         }).catch((err) => {
            //         if (err.message.indexOf('Network Error') > -1) {
            //             alert('네트워크가 원활하지 않습니다.\n잠시 후 다시 시도해주세요.')
            //         }
            //     })
            // }
        },
        async getSession() {
            try {
                const response = await fetch("/sessionCheck");
                if (response.status === 200) {
                    const data = await response.json();
                    console.log("Session data:", data);
                    this.loginMember = data;
                } else {
                    console.error("Error fetching session data");
                }
            } catch (error) {
                console.error("Error fetching session data:", error);
            }
        },
    },
    created() {
        this.getSession();
    },
}
</script>
<style scoped>
table {
    width: 100%;
}

th {
    text-align: center;
}

td {
    text-align: center;
}
</style>
