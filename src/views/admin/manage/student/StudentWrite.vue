<template>
    학생 추가
    <div style="border:2px solid black; padding:100px;">
        <div class="col-md-8">
            <div class="container">
                <div class="row">
<!--                    <div class="col-md-4">-->
<!--                        <div class="d-flex flex-column align-items-center text-center">-->
<!--                            <fieldset>-->
<!--                                <table>-->
<!--                                    <td>-->
<!--                                        <img src="https://bootdey.com/img/Content/avatar/avatar7.png" alt="Admin" class="rounded-circle" width="150">-->
<!--                                    </td>-->
<!--                                    <tr>-->
<!--                                        <td>-->
<!--                                            <button class="btn btn-primary">이미지 업로드</button>-->
<!--                                        </td>-->
<!--                                    </tr>-->
<!--                                </table>-->
<!--                            </fieldset>-->
<!--                        </div>-->
<!--                    </div>-->
                    <div class="col-md-8">
                        <fieldset>
                            <table class="w3-table-all">
                                <tr>
                                    <td>이름</td>
                                    <td>
                                        <input type="text" v-model="name" class="w3-input w3-border" placeholder="학생명을 입력해주세요.">
                                    </td>
                                </tr>
                                <tr>
                                    <td>학생 번호(ID)</td>
                                    <td>
                                        <input type="text" v-model="member_id" class="w3-input w3-border" placeholder="학생 번호를 입력해주세요.">
                                    </td>
                                </tr>
                                <tr>
                                    <td>임시 비밀번호</td>
                                    <td>
                                        <input type="text" v-model="member_pwd" class="w3-input w3-border" placeholder="임시 비밀번호를 입력해주세요.">
                                    </td>
                                </tr>
                                <tr>
                                    <td>학과</td>
                                    <td>
                                        <select v-model="department_id">
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
                                <tr>
                                    <td>학년</td>
                                    <td>
                                        <select v-model="grade">
                                            <option value="">- 선택 -</option>
                                            <option value="1">1</option>
                                            <option value="2">2</option>
                                            <option value="3">3</option>
                                            <option value="4">4</option>=
                                        </select>
                                    </td>
                                </tr>
                                <tr>
                                    <td>구분</td>
                                    <td>
                                        <select v-model="auth">
                                            <option value="">- 선택 -</option>
                                            <option value="1">1:교수</option>
                                            <option value="2">2:교직원</option>
                                            <option value="3">3:재학생</option>
                                            <option value="4">4:졸업생</option>
                                            <option value="5">5:휴학생</option>
                                        </select>
                                    </td>
                                </tr>
                                <tr>
                                    <td>생년월일</td>
                                    <td>
                                        <input type="date" v-model="birthday" class="w3-input w3-border" placeholder="yyyy-MM-dd">
                                    </td>
                                </tr>
                                <tr>
                                    <td>휴대전화번호</td>
                                    <td>
                                        <input type="text" v-model="phone" class="w3-input w3-border" placeholder="000-0000-0000">
                                    </td>
                                </tr>
                                <tr>
                                    <td>e-mail</td>
                                    <td>
                                        <input type="text" v-model="email " class="w3-input w3-border" placeholder="이메일 주소를 입력해주세요.">
                                    </td>
                                </tr>
                                <tr>
                                    <td>주소</td>
                                    <td>
                                        <input type="text" placeholder="우편번호" v-model="postcode" readonly />
                                        <input type="button" @click="execDaumPostcode()" value="우편번호 찾기"/>
                                        <input type="text" v-model="address1" placeholder="주소" readonly/>
                                        <input type="text" v-model="address2" placeholder="상세주소" />
                                    </td>
                                </tr>
                            </table>
                        </fieldset>
                    </div>
                </div>
                <br>

            </div>
        </div>
    </div>
    <button type="button" class="w3-button w3-round w3-blue-gray" v-on:click="fnSave">저장</button>&nbsp;
    <button type="button" class="w3-button w3-round w3-gray" v-on:click="fnList">목록</button>
</template>

<script>

export default {

    data() { //변수생성
        return {
            requestBody: this.$route.query, //route 가 가지고 있는 쿼리를 requestBody 에 담는다.
            member_id: this.$route.query.member_id,

            member_idx: '',
            member_pwd: '',
            name: '',
            department_id: '',
            grade: '',
            birthday: '',
            phone: '',
            email: '',
            postcode: '',
            address1: '',
            address2: '',
            auth: '',
        }
    },
    mounted() {
        this.fnGetView();

        let script = document.createElement('script');
        script.src = "https://t1.daumcdn.net/mapjsapi/bundle/postcode/prod/postcode.v2.js";
        script.async = true;
        document.body.appendChild(script);

    },
    methods: {
        fnGetView() {
            if (this.member_id !== undefined) {
                this.$axios.get(this.$serverUrl + '/admin/manage/student/' + this.member_id, {
                    params: this.requestBody
                }).then((res) => {
                    this.member_idx = res.data.member_idx
                    this.member_id = res.data.member_id
                    this.member_pwd = res.data.member_pwd
                    this.name = res.data.name
                    this.department_id = res.data.department_id
                    this.grade = res.data.grade
                    this.birthday = res.data.birthday
                    this.phone = res.data.phone
                    this.email = res.data.email
                    this.postcode = res.data.postcode
                    this.address1 = res.data.address1
                    this.address2 = res.data.address2
                    this.auth = res.data.auth
                }).catch((err) => {
                    console.log(err)
                })
            }
        },
        fnView(member_id) {
            this.requestBody.member_id = member_id
            this.$router.push({
                path: './detail',
                query: this.requestBody
            })
        },
        fnList() {
            delete this.requestBody.member_id
            this.$router.push({
                path: '/admin/manage/student',
                query: this.requestBody
            })
        },
        fnSave() {
            let apiUrl = this.$serverUrl + '/admin/manage/student'  //let = var
            this.form = {
                "member_idx": this.member_idx,
                "member_id": this.member_id,
                "member_pwd": this.member_pwd,
                "name": this.name,
                "department_id": this.department_id,
                "grade": this.grade,
                "birthday": this.birthday,
                "phone": this.phone,
                "email": this.email,
                "postcode": this.postcode,
                "address1": this.address1,
                "address2": this.address2,
                "auth": this.auth,
            },
                console.log(this.department_id);

            // if (this.member_idx === undefined) {
            //     //INSERT
            //     this.$axios.post(apiUrl, this.form)
            //         .then((res) => {
            //             alert('학생 정보가 저장되었습니다.')
            //             this.fnView(res.data.member_id)
            //         }).catch((err) => {
            //         if (err.message.indexOf('Network Error') > -1) {
            //             alert('네트워크가 원활하지 않습니다.\n잠시 후 다시 시도해주세요.')
            //         }
            //     })
            // } else {
            //     //UPDATE
            //     this.$axios.patch(apiUrl, this.form)
            //         .then((res) => {
            //             alert('글이 저장되었습니다.')
            //             this.fnView(res.data.member_id)
            //         }).catch((err) => {
            //         if (err.message.indexOf('Network Error') > -1) {
            //             alert('네트워크가 원활하지 않습니다.\n잠시 후 다시 시도해주세요.')
            //         }
            //     })
            // }

            if (!this.member_idx) {
                // INSERT
                this.$axios.post(apiUrl, this.form)
                    .then((res) => {
                        // INSERT 성공 시 반환된 member_id 값을 사용하여 member_idx 업데이트
                        this.member_idx = res.data.member_id;

                        alert('학생 정보가 저장되었습니다.');
                        this.fnView(res.data.member_id);
                    })
                    .catch((err) => {
                        if (err.message.indexOf('Network Error') > -1) {
                            alert('네트워크가 원활하지 않습니다.\n잠시 후 다시 시도해주세요.');
                        }
                    });
            } else {
                // UPDATE
                this.$axios.patch(apiUrl, this.form)
                    .then((res) => {
                        alert('글이 저장되었습니다.');
                        this.fnView(res.data.member_id);
                    })
                    .catch((err) => {
                        if (err.message.indexOf('Network Error') > -1) {
                            alert('네트워크가 원활하지 않습니다.\n잠시 후 다시 시도해주세요.');
                        }
                    });
            }

        },
        execDaumPostcode() {
            new window.daum.Postcode({
                oncomplete: (data) => {
                    if (this.extraAddress !== "") {
                        this.extraAddress = "";
                    }
                    if (data.userSelectedType === "R") {
                        // 사용자가 도로명 주소를 선택했을 경우
                        this.address1 = data.roadAddress;
                    } else {
                        // 사용자가 지번 주소를 선택했을 경우(J)
                        this.address1 = data.jibunAddress;
                    }

                    // 사용자가 선택한 주소가 도로명 타입일때 참고항목을 조합한다.
                    if (data.userSelectedType === "R") {
                        // 법정동명이 있을 경우 추가한다. (법정리는 제외)
                        // 법정동의 경우 마지막 문자가 "동/로/가"로 끝난다.
                        if (data.bname !== "" && /[동|로|가]$/g.test(data.bname)) {
                            this.extraAddress += data.bname;
                        }
                        // 건물명이 있고, 공동주택일 경우 추가한다.
                        if (data.buildingName !== "" && data.apartment === "Y") {
                            this.extraAddress +=
                                this.extraAddress !== ""
                                    ? `, ${data.buildingName}`
                                    : data.buildingName;
                        }
                        // 표시할 참고항목이 있을 경우, 괄호까지 추가한 최종 문자열을 만든다.
                        if (this.extraAddress !== "") {
                            this.extraAddress = `(${this.extraAddress})`;
                        }
                    } else {
                        this.extraAddress = "";
                    }
                    // 우편번호를 입력한다.
                    this.postcode = data.zonecode;
                },
            }).open();
        },
    }
}
</script>

<style scoped>

</style>
