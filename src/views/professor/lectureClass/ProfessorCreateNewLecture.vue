<template>
  <div class="container">
    <h4>신규강의 개설하기</h4> <br>
    <table id="newlecture" class="table" style="width: 1000px;">
      <tr>
        <th>강의명</th>
        <td colspan="4"><input class="form-control" type="text"></td>
      </tr>
      <tr>
        <th>학점</th>
        <td colspan="4">
          <select id="" class="form-control" name="">
            <option selected value="">선택</option>
            <option value="">1학점</option>
            <option value="">2학점</option>
            <option value="">3학점</option>
          </select>
        </td>
      </tr>
      <tr>
        <th style="width: 13%;">강의실 1</th>
        <td style="width: 33%"><input v-model="lectureRoom1" class="form-control" type="text"></td>
        <th style="width: 13%;">강의시간 1</th>
        <td style="width: 33%"><input v-model="lectureTime1" class="form-control" type="text"></td>
        <td style="width: 8%">
          <button class="btn" @click="openModal(1)">조회</button>
          <div v-if="modalOpen[1]">
            <ModalComponent @close="closeModal(1)">
              <LectureRoom :room="lectureRoom1" :time="lectureTime1"></LectureRoom>
            </ModalComponent>
          </div>
        </td>
      </tr>
      <tr>
        <th>강의실 2</th>
        <td><input v-model="lectureRoom2" class="form-control" type="text"></td>
        <th>강의시간 2</th>
        <td><input v-model="lectureTime2" class="form-control" type="text"></td>
        <td>
          <button class="btn" @click="openModal(2)">조회</button>
          <div v-if="modalOpen[2]">
            <ModalComponent @close="closeModal(2)">
              <LectureRoom :room="lectureRoom2" :time="lectureTime2"></LectureRoom>
            </ModalComponent>
          </div>
        </td>
      </tr>
      <tr>
        <th>강의실 3</th>
        <td><input v-model="lectureRoom3" class="form-control" type="text"></td>
        <th>강의시간 3</th>
        <td><input v-model="lectureTime3" class="form-control" type="text"></td>
        <td>
          <button class="btn" @click="openModal(3)">조회</button>
          <div v-if="modalOpen[3]">
            <ModalComponent @close="closeModal(3)">
              <LectureRoom :room="lectureRoom3" :time="lectureTime3"></LectureRoom>
            </ModalComponent>
          </div>
        </td>
      </tr>
      <tr>
        <th>강의계획서</th>
        <td colspan="4">
          <input class="btn btn-toolbar" type="file">
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

export default {
  components: {
    LectureRoom,
    ModalComponent
  },
  data() {
    return {
      showPopup: false,
      modalOpen: {
        1: false,
        2: false,
        3: false,
      },
      lectureRoom1: "",
      lectureTime1: "",
      lectureRoom2: "",
      lectureTime2: "",
      lectureRoom3: "",
      lectureTime3: "",
    };
  },
  methods: {
    openModal(index) {
      this.modalOpen[index] = true;
    },
    closeModal(index) {
      this.modalOpen[index] = false;
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