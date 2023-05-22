<!-- PersonInfo.vue -->
<template>
    <div>
        <table class="table table-bordered">
            <tr>
                <th colspan="2">개인정보 조회</th>
            </tr>
            <tr>
                <th style="width: 25%">소속</th>
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
                <th>학적상태</th>
                <td>재직</td>
            </tr>
        </table>
        <br>
        <table class="table table-bordered">
            <tr>
                <th colspan="2">개인정보 수정</th>
            </tr>
            <tr>
                <th>전화번호</th>
                <td>
                    <input type="text" class="form-control" v-model="phone">

                </td>
            </tr>
            <tr>
                <th>우편번호</th>
                <td >
                    <input type="text" class="form-control" v-model="postcode">
                </td>
            </tr>
            <tr>
                <th style="vertical-align: middle;">기본주소</th>
                <td>
                    <input type="text" class="form-control" v-model="address1">
                </td>
                <th style="vertical-align: middle;">상세주소</th>
                <td>
                    <input type="text" class="form-control" v-model="address2">
                </td>
            </tr>
        </table>
        <button type="button" class="" v-on:click="fnSave">개인정보 수정하기</button>&nbsp; &nbsp;
        <button type="button" class="" v-on:click="fnMain">메인페이지로 이동하기</button>
    </div>
</template>



<script>

export default {
    data() {
        return {
            requestBody: null,
            memberId: null,
            birthday: '',
            name: '',
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
        this.fnView()
    },
    methods: {
        async fnView() {
            const response = await fetch("/prof/info");
            if(response.ok) {
                const data = await response.json();
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
                console.log(data);
            } else {
                console.log("HTTP-Error: " + response.status);
            }

        },

        //교수 메인페이지로 이동하기
        fnMain(){
        delete this.requestBody.member_id
        this.$router.push({
            path: './prof/main',
            query: this.requestBody
        })
    },

        //개인정보(우편번호, 기본주소, 상세주소, 전화번호) 수정하기
        fnSave() {
            let apiUrl = this.$serverUrl + '/prof/info'
            this.form = {
                "phone": this.phone,
                "postcode": this.postcode,
                "address1": this.address1,
                "address2": this.address2,
            }
            if (this.member_id === undefined) {
                this.$axios.post(apiUrl, this.form)
                    .then((res) => {
                        alert('개인정보가 수정되었습니다.')
                        this.fnView(res.data.member_id)
                    }).catch((err) => {
                    if (err.message.indexOf('Network Error') > -1) {
                        alert('네트워크가 원활하지 않습니다.\n잠시 후 다시 시도해주세요.')
                    }
                })
            } else {
                this.$axios.patch(apiUrl, this.form)
                    .then((res) => {
                        alert('개인정보가 수정되었습니다.')
                        this.fnView(res.data.member_id)
                    }).catch((err) => {
                    if (err.message.indexOf('Network Error') > -1) {
                        alert('네트워크가 원활하지 않습니다.\n잠시 후 다시 시도해주세요.')
                    }
                })
            }
        }
    }
}
</script>

<style>
td {
    text-align: left;
}
</style>