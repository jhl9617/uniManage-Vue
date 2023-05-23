<template>
  <div class="container" style="text-align: center">
    강의실 조회 <br><br>
    <!-- 강의실 검색을 위한 폼 -->
    <!--    <form @submit="searchLectureRooms">-->
    <!-- 건물, 요일, 강의실 호수를 선택하기 위한 셀렉트 옵션 -->
    <!-- ... (중략) ... -->
    <!--    </form>-->
    <br>
    <!-- 강의실 목록을 표시하기 위한 테이블 -->
    <div>
      <table class="table table-hover">
        <thead>
        <tr>
          <th>건물이름</th>
          <th>강의실번호</th>
          <th>요일</th>
          <th>시간</th>
          <th>수용인원</th>
          <th>선택</th>
        </tr>
        </thead>
        <tbody>
        <!-- lectureRooms 배열을 순회하며 각각의 강의실을 표시합니다 -->
        <tr v-for="lectureRoom in lectureRooms" :key="lectureRoom.lectureRoomTimetableIdx">
          <td>{{ lectureRoom.buildingName }}</td>
          <td>{{ lectureRoom.lectureRoomNum }}</td>
          <td>{{ lectureRoom.dayTime }}</td>
          <td>{{ lectureRoom.startTime }}</td>
          <td>{{ lectureRoom.classCapacity }}</td>
          <td>
            <button @click="selectLectureRoom(lectureRoom)">선택</button>
          </td>
        </tr>
        </tbody>
      </table>
      <!-- 페이지 변경을 처리하기 위한 페이지네이션 컴포넌트 -->
      <!--      <pagination :currentPage="currentPage" :totalPages="totalPages" @pageChanged="handlePageChange"/>-->
    </div>
    <br><br>
    <!-- 선택한 강의실을 표시하는 추가적인 내용 -->
    <div>
      선택한 강의실
      <table class="table">
        <!-- ... (중략) ... -->
      </table>
    </div>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      lectureRooms: [], // 강의실 데이터를 저장하는 배열
      currentPage: 1,
      totalPages: 0
    };
  },
  mounted() {
    this.fetchLectureRooms();
  },
  methods: {
    fetchLectureRooms() {
      axios.post('/prof/create/room')
          .then(response => {
            this.lectureRooms = response.data.data; // 서버에서 받은 강의실 목록 업데이트
          })
          .catch(error => {
            console.log(error);
          });
    }
  }
};
</script>