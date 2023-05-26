<template>
    <div>
        <h5>개인정보 조회</h5>
        <table class="w3-table-all">
            <tr>
                <th>학과</th>
                <td>{{ this.departmentName}}</td>
            </tr>
            <tr>
                <th>생년원일</th>
                <td>{{this.birthday}}</td>
            </tr>
            <tr>
                <th>이름</th>
                <td>{{ this.name }}</td>
            </tr>
            <tr>
                <th>E-Mail</th>
                <td>{{ this.email }}</td>
            </tr>
            <tr>
                <th>학년</th>
                <td>{{ this.grade }}</td>
            </tr>
        </table>
        <br><br><br>
        <h5>개인정보 수정</h5>
        <table class="w3-table-all">
            <tr>
                <th>전화번호</th>
                <td>
                    <input type="text" v-model="phone">
                </td>
            </tr>
            <tr>
                <th>우편번호</th>
                <td >
                    <input type="text" v-model="postcode">
                </td>
            </tr>
            <tr>
                <th>기본주소</th>
                <td>
                    <input type="text" v-model="address1">
                </td>
            </tr>
            <tr>
                <th>상세주소</th>
                <td>
                    <input type="text" v-model="address2">
                </td>
            </tr>
        </table>
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
            memberId: null,
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
        this.fnGetView()
    },
    methods: {
        async fnGetView() {
            const response = await fetch("/student/mypage");
            if (response.ok) {
                const data = await response.json();
                this.member_idx = data.member_idx;
                this.memberId = data.memberId;
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
        }

    }
    }
</script>


<style scoped>
</style>