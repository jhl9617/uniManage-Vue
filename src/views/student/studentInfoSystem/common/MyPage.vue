<template>
    <div>
        <h5>개인정보 조회</h5>
        <div class="container">
        <table class="w3-table-all half-width">
            <tr>
                <th>학과</th>
                <td>{{ this.departmentName}}</td>
            </tr>
            <tr>
                <th>생년월일</th>
                <td>{{this.birthday}}</td>
            </tr>
            <tr>
                <th>이름</th>
                <td>{{ this.name }}</td>
            </tr>
            <tr>
                <th>학년</th>
                <td>{{ this.grade }}</td>
            </tr>
            <tr>
                <th>학번</th>
                <td>{{ this.member_id }}</td>
            </tr>
        </table>
            </div>
        <br><br><br>
        <h5>개인정보 수정</h5>
        <div class="container">
        <table class="w3-table-all half-width">
            <tr>
                <th>전화번호</th>
                <td>
                    <input type="text" v-model="phone">
                </td>
            </tr>
            <tr>
                <th>e-mail</th>
                <td>
                    <input type="text" v-model="email">
                </td>
            </tr>
            <tr>
                <th>주소</th>
                <td >
                    <input type="text" v-model="postcode" readonly />
                    <input type="button" @click="execDaumPostcode()" value="우편번호 찾기"/><br>
                    <input type="text" v-model="address1" readonly/><br>
                    <input type="text" v-model="address2" />

                </td>
            </tr>
        </table>
            </div>
        <br>
        <button type="button" class="w3-button w3-round w3-blue-gray" v-on:click="fnSave">개인정보 수정하기</button>
    </div>
</template>

<script>
export default {
    data() {
        return {
            requestBody: null,
            member_idx: '',
            member_id: '',
            member_pwd:'',
            birthday: '',
            name: '',
            grade:'',
            email: '',
            phone: '',
            postcode: '',
            address1: '',
            address2: '',
            department_id: '',
            departmentName: '',
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
        async fnGetView() {
            const response = await fetch("/student/mypage");
            if (response.ok) {
                const data = await response.json();
                this.member_idx = data.member_idx;
                this.member_id = data.member_id;
                this.birthday = data.birthday;
                this.name = data.name;
                this.email = data.email;
                this.phone = data.phone;
                this.postcode = data.postcode;
                this.address1 = data.address1;
                this.address2 = data.address2;
                this.department_id = data.department_id;
                this.departmentName = data.department_name;

                if (data.auth === 3) {
                    this.grade = data.grade + '학년';
                } else if (data.auth === 4) {
                    this.grade = '졸업생';
                } else if (data.auth === 5) {
                    this.grade = '휴학생';
                }

                console.log(data);
            } else {
                console.log("HTTP-Error: " + response.status);
            }
        },

        fnSave() {
            const apiUrl = '/student/mypage';
            const form = {
                phone: this.phone,
                email: this.email,
                postcode: this.postcode,
                address1: this.address1,
                address2: this.address2,
            };

            if (this.member_idx !== null) {
                this.$axios.patch(apiUrl, form)
                    .then(() => {
                        alert('개인정보가 수정되었습니다.');
                        this.fnGetView();
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
.half-width {
    width: 50%;
}
.container {
    display: flex;
    justify-content: center;
    align-items: center;
    /*height: 100vh; !* 페이지 높이에 맞게 조절 *!*/
}
</style>