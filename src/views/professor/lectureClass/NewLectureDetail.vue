<template>
  <div class="container">
    <h3><b>신규강의 개설하기</b></h3> <br>
    <table id="newlecture" class="table" style="width: 1000px;">
      <tr>
        <th>강의명</th>
        <td colspan="4">
          <input class="form-control" type="text" name="text" v-model="lecture_title" required>
        </td>
      </tr>
      <tr>
        <th>구분</th>
        <td>
          <select class="form-control" v-model="classification" required>
            <option value="">선택</option>
            <option value="1">교양</option>
            <option value="2">전공</option>
          </select>
        </td>
        <th>학점</th>
        <td>
          <select class="form-control" v-model="credit" required>
            <option value="">선택</option>
            <option value="1">1학점</option>
            <option value="2">2학점</option>
            <option value="3">3학점</option>
          </select>
        </td>
        <td></td>
      </tr>
      <tr>
        <th>학기</th>
        <td colspan="4">
          <input type="number" class="form-control" v-model="semester" placeholder="202301" required>
        </td>
      </tr>
      <tr>
        <th style="width: 13%;">강의실 1</th>
        <td style="width: 33%"><input v-model="roomcode1" class="form-control" type="text" disabled required></td>
        <th style="width: 13%;">강의시간 1</th>
        <td style="width: 33%"><input v-model="timecode1" class="form-control" type="text" disabled required></td>
        <td style="width: 8%">
          <button class="w3-button w3-round w3-blue-gray" @click="openModal(1)">조회</button>
          <div v-if="modalOpen[1]">
            <ModalComponent @close="closeModal(1)">
              <LectureRoom @selectLectureRoom="handleSelectedLecture1" @close="closeModal(1)" :room="roomcode1"
                           :time="timecode1"></LectureRoom>
            </ModalComponent>
          </div>
        </td>
      </tr>
      <tr>
        <th>강의실 2</th>
        <td><input v-model="roomcode2" class="form-control" type="text" disabled></td>
        <th>강의시간 2</th>
        <td><input v-model="timecode2" class="form-control" type="text" disabled></td>
        <td>
          <button class="w3-button w3-round w3-blue-gray" @click="openModal(2)">조회</button>
          <div v-if="modalOpen[2]">
            <ModalComponent @close="closeModal(2)">
              <LectureRoom @selectLectureRoom="handleSelectedLecture2" @close="closeModal(2)" :room="roomcode2"
                           :time="timecode2"></LectureRoom>
            </ModalComponent>
          </div>
        </td>
      </tr>
      <tr>
        <th>강의실 3</th>
        <td><input v-model="roomcode3" class="form-control" type="text" disabled></td>
        <th>강의시간 3</th>
        <td><input v-model="timecode3" class="form-control" type="text" disabled></td>
        <td>
          <button class="w3-button w3-round w3-blue-gray" @click="openModal(3)">조회</button>
          <div v-if="modalOpen[3]">
            <ModalComponent @close="closeModal(3)">
              <LectureRoom @selectLectureRoom="handleSelectedLecture3" @close="closeModal(3)" :room="roomcode3"
                           :time="timecode3"></LectureRoom>
            </ModalComponent>
          </div>
        </td>
      </tr>
      <tr>
        <th>수강인원</th>
        <td colspan="4">
          <input type="number" class="form-control" min="5" max="100" step="5" placeholder="30" v-model="number_of_student" required>
        </td>
      </tr>
      <tr>
        <th>강의계획서</th>
        <td colspan="5" style="text-align: left;">
          <input type="file" class="w3-button w3-round w3-blue-gray" required>
        </td>
      </tr>
    </table>
    <button type="submit" class="w3-button w3-round w3-blue-gray" v-on:click="fnSave">작성</button> &nbsp;
    <button type="reset" class="w3-button w3-round w3-blue-gray" @click="resetForm">취소</button> &nbsp;
    <router-link to="/prof/main">
      <button type="button" class="w3-button w3-round w3-blue-gray">메인페이지</button>
    </router-link>
  </div>
</template>
<script setup>
import ModalComponent from "@/components/professor/ModalComponent.vue";
import LectureRoom from "@/views/professor/lectureClass/LectureRoom.vue";
</script>