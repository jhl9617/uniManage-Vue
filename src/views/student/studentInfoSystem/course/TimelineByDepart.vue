<template>
    <h4>학과별 강의시간표</h4>
    <table class="table table-bordered" align="center" width="505">
        <tr align="left">
            <th width="100">년도</th>
            <td width="200">
                <select v-model="search_value1">
                <option value="">- 선택 -</option>
                <option value="2023">2023</option>
                <option value="2022">2022</option>
                <option value="2021">2021</option>
                 </select>
            </td>
            <th width="100">학기</th>
            <td width="200">
                <select v-model="search_value2">
                    <option value="">- 선택 -</option>
                    <option value="01">1학기</option>
                    <option value="02">2학기</option>
                </select>
            </td>
        </tr>
        <tr align="left">
            <th width="100">검색구분</th>
            <td width="200">
                <select v-model="search_value3">
                    <option value="">- 선택 -</option>
                    <option value="1">전공</option>
                    <option value="2">선택</option>
                </select>
            </td>
            <th width="100">학과</th>
            <td width="200">
                <select v-model="search_value4">
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

            </td>
        </tr>
      <button v-on:click="fnPage()">조회</button>
    </table>


    <br><br>
    <table class="table table-bordered" align="center" width="505">
        <tr>
            <th>교과목명</th>
            <th>학점</th>
            <th>담당교수</th>
            <th>강좌번호</th>
            <th>제한인원</th>
            <th>강의시간</th>
            <th>강의계획서</th>
        </tr>
        <tr v-for="(row, idx) in list" :key ="idx">

          <td>{{ row.lecture_title }}</td>
          <td>{{ row.credit }}</td>
          <td>{{ row.name }}</td>
          <td>{{ row.lecture_id }}</td>
          <td>{{ row.number_of_student }}</td>
          <td>{{ row.timecode1 }}  {{ row.timecode2 }}  {{ row.timecode3 }}</td>
          <td>{{ row.syllabus_title }}</td>
        </tr>

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
</template>

<script>
export default {
  data() { //변수생성
    return {
      member_id: this.$route.query.member_id ? this.$route.query.member_id : '',
      loginMember: null,
      requestBody: {},
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
      search_value1: this.$route.query.sv1 ? this.$route.query.sv1 : '',
      search_value2: this.$route.query.sv2 ? this.$route.query.sv2 : '',
      search_value3: this.$route.query.sv3 ? this.$route.query.sv3 : '',
      search_value4: this.$route.query.sv4 ? this.$route.query.sv4 : '',
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
      this.requestBody = { // 데이터 전송
        sv1: this.search_value1,
        sv2: this.search_value2,
        sv3: this.search_value3,
        sv4: this.search_value4,
        page: this.page,
        size: this.size,
      }

      this.$axios.get(this.$serverUrl + '/student/timelinebydepart/', {
        params: this.requestBody,
        headers : {}
      })
          .then((res) => {
            this.list = res.data.data
            this.paging = res.data.pagination
            this.no = this.paging.total_list_cnt - ((this.paging.page - 1) * this.paging.page_size)
            console.log(this.list)
          })
          .catch((err) => {
            if (err.message.indexOf('Network Error') > -1) {
              alert('네트워크가 원활하지 않습니다.\n잠시 후 다시 시도해주세요.');
            }
          });
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
    fnPage(n) {
      if (this.page !== n) {
        this.page = n
      }
      this.fnGetList()
    }
  }
}
</script>

<style scoped>

</style>