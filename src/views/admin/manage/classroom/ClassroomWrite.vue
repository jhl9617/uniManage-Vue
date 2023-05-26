<template>
    강의실 등록
    <div style="border:2px solid black; padding:100px;">
        <table align="center" class="table table-bordered">
            <tr>
                <th width="100">강의실 코드</th>
                <td>
                    <input type="text" v-model="lecture_room_code" class="w3-input w3-border" placeholder="강의실 코드를 입력해주세요.">
                </td>
            </tr>
            <tr>
                <th width="100">건물 코드</th>
                <td>
                    <input type="text" v-model="building_code" class="w3-input w3-border" placeholder="건물 코드를 입력해주세요.">
                </td>
            </tr>
            <tr>
                <th width="100">건물명</th>
                <td>
                    <input type="text" v-model="building_name" class="w3-input w3-border" placeholder="건물명을 입력해주세요.">
                </td>
            </tr>
            <tr>
                <th width="100">층수</th>
                <td>
                    <input type="number" v-model="number_floor" class="w3-input w3-border" placeholder="층수를 입력해주세요.">
                </td>
            </tr>
            <tr>
                <th width="100">강의실 호수</th>
                <td>
                    <input type="text" v-model="lecture_room_num" class="w3-input w3-border" placeholder="000호 형식으로 입력해 주세요.">
                </td>
            </tr>
            <tr>
                <th width="100">강의실 수용인원</th>
                <td>
                    <input type="number" v-model="class_capacity" class="w3-input w3-border" placeholder="강의실 호수를 입력해주세요.">
                </td>
            </tr>

        </table>
        <br>
        <button type="button" class="w3-button w3-round w3-blue-gray" v-on:click="fnSave">저장</button>&nbsp;
        <button type="button" class="w3-button w3-round w3-gray" v-on:click="fnList">목록</button>
    </div>
</template>

<script>
export default {
    data() { //변수생성
        return {
            requestBody: this.$route.query, //route 가 가지고 있는 쿼리를 requestBody 에 담는다.
            lecture_class_idx: this.$route.query.lecture_class_idx,

            lecture_room_code: '',
            building_code: '',
            building_name: '',
            number_floor: '',
            lecture_room_num:'',
            class_capacity:'',
        }
    },
    mounted() {
        this.fnGetView()
    },
    methods: {
        fnGetView() {
            if (this.lecture_class_idx !== undefined) {
                this.$axios.get(this.$serverUrl + '/admin/manage/classroom/' + this.lecture_class_idx, {
                    params: this.requestBody
                }).then((res) => {
                    this.lecture_class_idx = res.data.lecture_class_idx
                    this.lecture_room_code = res.data.lecture_room_code
                    this.building_code = res.data.building_code
                    this.building_name = res.data.building_name
                    this.number_floor = res.data.number_floor
                    this.lecture_room_num = res.data.lecture_room_num
                    this.class_capacity = res.data.class_capacity
                }).catch((err) => {
                    console.log(err)
                })
            }
        },
        fnView(lecture_class_idx) {
            this.requestBody.lecture_class_idx = lecture_class_idx
            this.$router.push({
                path: './detail',
                query: this.requestBody
            })
        },
        fnList() {
            delete this.requestBody.lecture_class_idx
            this.$router.push({
                path: '/admin/manage/classroom',
                query: this.requestBody
            })
        },
        fnSave() {
            let apiUrl = this.$serverUrl + '/admin/manage/classroom'  //let = var
            this.form = {
                "lecture_class_idx": this.lecture_class_idx,
                "lecture_room_code": this.lecture_room_code,
                "building_code": this.building_code,
                "building_name": this.building_name,
                "number_floor": this.number_floor,
                "lecture_room_num": this.lecture_room_num,
                "class_capacity": this.class_capacity
            }

            if (this.lecture_class_idx === undefined) {
                //INSERT
                this.$axios.post(apiUrl, this.form)
                    .then((res) => {
                        alert('새 강의실이 등록되었습니다.')
                        this.fnView(res.data.lecture_class_idx)
                    }).catch((err) => {
                    if (err.message.indexOf('Network Error') > -1) {
                        alert('네트워크가 원활하지 않습니다.\n잠시 후 다시 시도해주세요.')
                    }
                })
            } else {
                //UPDATE
                this.$axios.patch(apiUrl, this.form)
                    .then(() => {
                        alert('강의실 정보가 수정되었습니다.')
                        this.fnView(this.lecture_class_idx)
                    }).catch((err) => {
                    if (err.message.indexOf('Network Error') > -1) {
                        alert('네트워크가 원활하지 않습니다.\n잠시 후 다시 시도해주세요.')
                    }
                })
            }
        },
    }
}
</script>

<style scoped>

</style>