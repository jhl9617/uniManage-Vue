<template>
    <div class="content susin-list">
        <div class="itb-title">
            <a style="letter-spacing: -2px;color:#333333; font-weight: 600; font-size: 16px"
            >수강신청내역</a
            >
            <a class="buttonset">
                <span class="item" id="meta_3">총 신청가능학점<em> 21</em>학점</span>
                <span class="item" id="meta_4"
                >신청과목수<em class="totalNumber">{{ courseList.length }}</em>과목</span
                >
                <span class="item" id="meta_5"
                >신청학점<em class="totalScore">{{ courseList.length*3 }}</em>학점</span
                >
            </a>
        </div>
        <!-- item block wrapper -->
        <div class="itb-cover">
            <div style="width: 100%" class="itb susin">
                <div class="itm susin-itm">
                    <a class="itm-num"></a>
                    <a v-if="!listMenu" class="itm-apply" style="width: 70px">수강삭제</a>
                    <a class="itm-snum">학수번호-분반</a>
                    <a class="itm-cname">강좌명</a>
                    <a class="itm-grd">대상학년</a>
                    <a class="itm-gname">교수명</a>
                    <a class="itm-hakzum">학점</a>
                    <a class="itm-time">강의시간/강의실</a>
                    <a class="itm-isgub">이수구분</a>
                    <a class="itm-zsugang">재수강 여부</a>
                    <a class="itm-bigo">비고</a>
                    <a style="flex:4;"></a>
                </div>
                <div class="noCourses" v-if="noCourses">
                    <a>수강신청 내역이 없습니다.</a>
                </div>
                <div v-for="num in courseList" :key="num" class="itm susin-itm">
                    <a class="itm-num">{{ num }}</a>
                    <a v-if="!listMenu" class="itm-apply" style="width: 70px"
                    ><button @click="()=>deleteCourse(num)" class="delete-btn">삭제</button></a
                    >
                    <a class="itm-snum">ADD123-01</a>
                    <a style="text-align:left;" class="itm-cname">삭제연습{{ num }}</a>
                    <a class="itm-grd">0</a>
                    <a class="itm-gname">교수{{ num }}</a>
                    <a class="itm-hakzum">3</a>
                    <a class="itm-time">월 10:30-13:00 (강의실)</a>
                    <a class="itm-isgub">이수구분</a>
                    <a class="itm-zsugang"></a>
                    <a class="itm-bigo"></a>
                    <a style="flex:4;"></a>
                </div>
            </div>
        </div>
        <!--  -->
        <div class="itm-warn itm-notice">
            <a
            ><i class="fas fa-exclamation-circle"> </i> 이수구분 : 11 전공기초, 04
                전공필수, 05 전공선택, 06 교직과, 14 중핵교과, 15 배분이수교과, 16
                기초교과, 17 자유이수, 20 교직전선, 24 계절학기전공필수, 27
                계절학기전공선택, 08 자유선택교과[배움학점제,군사학,취업스쿨,학점교류
                과목등]</a
            >
        </div>
    </div>
</template>


<script>
export default {
    name: "CourseList"
}
</script>

<style scoped>

</style>