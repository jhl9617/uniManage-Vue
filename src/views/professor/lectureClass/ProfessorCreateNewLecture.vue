<template>
    <div class="container">
        <h4>신규강의 개설하기</h4> <br>
        <table class="table" id="newlecture" style="width: 1000px;">
            <tr>
                <th>강의명</th>
                <td colspan="4"><input type="text" class="form-control"></td>
            </tr>
            <tr>
                <th>학점</th>
                <td colspan="4">
                    <select name="" id="" class="form-control">
                        <option value="" selected>선택</option>
                        <option value="">1학점</option>
                        <option value="">2학점</option>
                        <option value="">3학점</option>
                    </select>
                </td>
            </tr>
            <tr>
                <th style="width: 13%;">강의실 1</th>
                <td style="width: 33%"><input type="text" class="form-control" v-model="lectureRoom1"></td>
                <th style="width: 13%;">강의시간 1</th>
                <td style="width: 33%"><input type="text" class="form-control" v-model="lectureTime1"></td>
                <td style="width: 8%">
                    <button class="btn" @click="openModal">조회</button>
                    <div v-if="modalOpen">
                        <ModalComponent @close="closeModal">
                            <LectureRoom :room="lectureRoom1" :time="lectureTime1"></LectureRoom>
                        </ModalComponent>
                    </div>
                </td>
            </tr>
            <tr>
                <th>강의실 2</th>
                <td><input type="text" class="form-control"></td>
                <th>강의시간 2</th>
                <td><input type="text" class="form-control"></td>
                <td>
                    <button class="btn" @click="openModal">조회</button>
                    <div v-if="modalOpen">
                        <ModalComponent @close="closeModal">
                            <LectureRoom></LectureRoom>
                        </ModalComponent>
                    </div>
                </td>
            </tr>
            <tr>
                <th>강의실 3</th>
                <td><input type="text" class="form-control"></td>
                <th>강의시간 3</th>
                <td><input type="text" class="form-control"></td>
                <td>
                    <button class="btn" @click="openModal">조회</button>
                    <div v-if="modalOpen">
                        <ModalComponent @close="closeModal">
                            <LectureRoom></LectureRoom>
                        </ModalComponent>
                    </div>
                </td>
            </tr>
            <tr>
                <th>강의계획서</th>
                <td colspan="4">
                    <input type="file" class="btn btn-toolbar">
                </td>
            </tr>
        </table>
        <input type="submit" value="신규강의 생성하기"> &nbsp; &nbsp;
        <input type="button" value="홈페이지로 돌아가기">
    </div>
</template>
<script>
import LectureRoom from '@/views/professor/lectureClass/LectureRoom.vue'
import ModalComponent from '@/components/professor/ModalComponent.vue'
import axios from "axios";

export default {
    components: {
        LectureRoom,
        ModalComponent
    },
    data() {
        return {
            modalOpen: false,
            lectureRoom1: "", // 강의실 1의 정보를 저장할 데이터
            lectureTime1: "" // 강의시간 1의 정보를 저장할 데이터
        }
    },
    methods: {
        openModal() {
            this.modalOpen = true;
        },
        closeModal() {
            this.modalOpen = false;
        },
        createNewLecture() {
            // lectureRoom1과 lectureTime1 정보를 활용하여 서버로 전송하는 로직 작성
            const lectureRoom = this.lectureRoom1;
            const lectureTime = this.lectureTime1;

            // 서버로 데이터 전송하는 코드 작성
            // 예시: axios를 사용한 POST 요청
            axios.post('/api/create-lecture', { room: lectureRoom, time: lectureTime })
                .then(response => {
                    // 서버 응답에 대한 처리 작성
                    console.log(response.data);
                })
                .catch(error => {
                    // 에러 처리 작성
                    console.error(error);
                });
        }
    }
}
</script>

<style>
#newlecture tr {
    vertical-align: middle
}

#newlecture tr td {
    text-align: left;
}

#newlecture tr th {
    vertical-align: middle;
}
.modal {
    display: flex;
    justify-content: center;
    align-items: center;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
}

.modal-content {
    background-color: #fff;
    padding: 20px;
    border-radius: 5px;
    max-width: 600px;
}
</style>