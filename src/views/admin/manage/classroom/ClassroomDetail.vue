<template>
    강의실 상세
    <br><br>
    <div class="container">
        <table class="w3-table-all half-width">
                <tr>
                    <th width="100">강의실 코드</th>
                    <td>{{ lecture_room_code }}</td>
                </tr>
                <tr>
                    <th width="100">건물 코드</th>
                    <td>{{ building_code }}</td>
                </tr>
                <tr>
                    <th width="100">건물명</th>
                    <td>{{ building_name }}</td>
                </tr>
                <tr>
                    <th width="100">층수</th>
                    <td>{{ number_floor }}층</td>
                </tr>
                <tr>
                    <th width="100">강의실 호수</th>
                    <td>{{ lecture_room_num }}</td>
                </tr>
                <tr>
                    <th width="100">강의실 수용인원</th>
                    <td>{{ class_capacity }}명</td>
                </tr>
        </table>
    </div>
        <br>
        <div>
            <button type="button" class="w3-button w3-round w3-blue-gray" v-on:click="fnUpdate">수정</button>
            <button type="button" class="w3-button w3-round w3-red" v-on:click="fnDelete">삭제</button>&nbsp;
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
            this.$axios.get(this.$serverUrl + '/admin/manage/classroom/' + this.lecture_class_idx, {
                params: this.requestBody
            }).then((res) => {  //성공 -> res에 정보를 저장함
                console.log(res.data)
                this.lecture_room_code = res.data.lecture_room_code
                this.building_code = res.data.building_code
                this.building_name = res.data.building_name
                this.number_floor = res.data.number_floor
                this.lecture_room_num = res.data.lecture_room_num
                this.class_capacity = res.data.class_capacity
            }).catch((err) => { //실패 -> err에 정보를 저장함
                if (err.message.indexOf('Network Error') > -1) {
                    alert('네트워크가 원활하지 않습니다.\n잠시 후 다시 시도해주세요.')
                }
            })
        },
        fnList() {
            delete this.requestBody.lecture_class_idx
            this.$router.push({
                path: '/admin/manage/classroom',
                query: this.requestBody
            })
        },
        fnUpdate() {
            this.$router.push({
                path: '/admin/manage/classroom/write',
                query: this.requestBody
            })
        },
        fnDelete() {
            if (!confirm("삭제하시겠습니까?")) return

            this.$axios.delete(this.$serverUrl + '/admin/manage/classroom/' + this.lecture_class_idx, {})
                .then(() => {
                    alert('삭제되었습니다.')
                    this.fnList();
                }).catch((err) => {
                console.log(err);
            })
        }
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
table {
    margin: 0 auto;
}

th, td {
    text-align: center;
}

</style>