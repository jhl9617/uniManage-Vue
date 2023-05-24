<template>
    <div class="container">
        <div class="row">
            <h3>휴강신청 허용</h3>
            <br>
            <table class="table table-bordered" id="closelist">
                <thead>
                <tr>
                    <th>번호</th>
                    <th>강의명</th>
                    <th>휴강회차</th>
                    <th>보강일시</th>
                    <th>제출서류</th>
                    <th>승인여부</th>
                </tr>
                </thead>
                <tbody>
                <tr v-for="(row, cancelled_lecture_idx_seq) in list" :key="cancelled_lecture_idx_seq">
                    <td>{{row.cancelled_lecture_idx_seq}}</td>
                    <td><a v-on:click="fnList(`${row.cancelled_lecture_idx_seq}`)">{{row.lecture_id}}</a></td>
                    <td>{{row.attendance_day}}</td>
                    <td>{{row.supply_date}}</td>
                    <td><select v-model="approved">
                        <option disabled value="">- 선택 -</option>
                        <option value="author" selected>승인</option>
                        <option value="title">반려</option>
                        <option value="contents">대기</option>
                    </select></td>
                </tr>
                </tbody>
            </table>
