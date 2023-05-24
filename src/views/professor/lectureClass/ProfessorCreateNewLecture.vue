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
      loginMember: null,

      requestBody: this.$router.query,
      lecture_id: this.$route.query.lecture_id,

      member_id: '',
      classification: '',
      semester: '',
      department_id: '',
      lecture_title: '',
      number_of_student: '',
      credit: '',
      roomcode1: '',
      roomcode2: '',
      roomcode3: '',
      timecode1: '',
      timecode2: '',
      timecode3: '',
      syllabus_title: '',
      syllabus_rename: '',
      lecture_apply_status: '',

      showPopup: false,
      modalOpen: {
        1: false,
        2: false,
        3: false,
      },
    };
  },
  mounted() {
    this.fnGetView()
  },
  methods: {
    fnGetView() {
      if (this.lecture_id !== undefined) {
        this.$axios.get(this.$serverUrl + '/prof/create/' + this.lecture_id, {
          params: this.requestBody
        }).then((res) => {
          this.lecture_id = res.data.lecture_id
          this.member_id = res.data.member_id
          this.classification = res.data.classification
          this.semester = res.data.semester
          this.department_id = res.data.department_id
          this.lecture_title = res.data.lecture_title
          this.number_of_student = res.data.number_of_student
          this.credit = res.data.credit
          this.roomcode1 = res.data.roomcode1
          this.roomcode2 = res.data.roomcode2
          this.roomcode3 = res.data.roomcode3
          this.timecode1 = res.data.timecode1
          this.timecode2 = res.data.timecode2
          this.timecode3 = res.data.timecode3
          this.syllabus_title = res.data.syllabus_title
          this.syllabus_rename = res.data.syllabus_rename
          this.lecture_apply_status = res.data.lecture_apply_status
        }).catch((err) => {
          console.log(err)
        })
      }
    },
    fnList() {
      delete this.requestBody.lecture_id
      this.$router.push({
        path: './list',
        query: this.requestBody
      })
    },
    fnView(lecture_id) {
      this.requestBody.lecture_id = lecture_id
      this.$router.push({
        path: './view',
        query: this.requestBody
      })
    },
    fnSave() {
      console.log(this.loginMember);
      let apiUrl = this.$serverUrl + '/prof/crete'
      this.form = {
        "lecture_id": this.lecture_id,
        "lecture_title": this.lecture_title,
        "classification": this.classification,
        "semester": this.semester,
        "number_of_student": this.number_of_student,
        "credit": this.credit,
        "roomcode1": this.roomcode1,
        "roomcode2": this.roomcode2,
        "roomcode3": this.roomcode3,
        "timecode1": this.timecode1,
        "timecode2": this.timecode2,
        "timecode3": this.timecode3,
        "syllabus_title": this.syllabus_title,
        /*"member_id": this.loginMember.member_id,
        "department_id": this.loginMember.department_id,*/
      }

      if (this.lecture_id === undefined) {
        //INSERT
        this.$axios.post(apiUrl, this.form)
            .then((res) => {
              alert('강의가 저장되었습니다.')
              this.fnView(res.data.lecture_id)
            }).catch((err) => {
              if (err.message.indexOf('Network Error') > -1) {
                alert('네트워크가 원할하지 않습니다.\n잠시 후 다시 시도해주세요.')
              }
        })
      } else {
        //UPDATE
        this.$axios.patch(apiUrl, this.form)
            .then((res) => {
              alert('강의가 저장되었습니다.')
              this.fnView(res.data.lecture_id)
            }).catch((err) => {
          if (err.message.indexOf('Network Error') > -1) {
            alert('네트워크가 원활하지 않습니다.\n잠시 후 다시 시도해주세요.')
          }
        })
      }
    }, async getSession() {
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
    created() {
      this.getSession();
    },
    openModal(index) {
      this.modalOpen[index] = true;
    },
    closeModal(index) {
      this.modalOpen[index] = false;
    },
    handleSelectedLecture1(selectedData) {
      this.roomcode1 = selectedData.lecture_room_code;
      this.timecode1 = selectedData.timecode;
    },

    handleSelectedLecture2(selectedData) {
      this.roomcode2 = selectedData.lecture_room_code;
      this.timecode2 = selectedData.timecode;
    },

    handleSelectedLecture3(selectedData) {
      this.roomcode3 = selectedData.lecture_room_code;
      this.timecode3 = selectedData.timecode;
    },
    resetForm() {
      this.lecture_title = "";
      this.classification = "";
      this.credit = "";
      this.roomcode1 = "";
      this.timecode1 = "";
      this.roomcode2 = "";
      this.timecode2 = "";
      this.roomcode3 = "";
      this.timecode3 = "";
      this.syllabus_title = "";
      this.semester = "";
    }
  }
}
</script>

<style>
#newlecture tr {
  vertical-align: middle
}

#newlecture tr td select option {
  text-align: center;
}

#newlecture tr td {
  text-align: center;
}

#newlecture tr td input {
  text-align: center;
}

#newlecture tr th {
  vertical-align: middle;
}

.modal {
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  text-align: center;
  top: 0;
  left: 300px;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
}

.modal-content {
  background-color: #fff;
  padding: 20px;
  border-radius: 5px;
  max-width: 800px;
}
</style>