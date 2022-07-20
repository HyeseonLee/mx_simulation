// < 기능1 >
// 유형결과 확인하기 버튼을 누르면
// 각 질문의 selected value를 if문으로 판별해서 
// 유형변수에 += 하기
// 가장 max인 유형  


// < 기능2 >
// 유형 이름 누르면
// 유형이 나오기까지 연관되어 있는 답변들에 check



// 답변들 받아오기
let q1a1 = document.getElementById("q1a1");
let q1a2 = document.getElementById("q1a2");
let q1a3 = document.getElementById("q1a3");

let q2a1 = document.getElementById("q2a1");
let q2a2 = document.getElementById("q2a2");

let q3a1 = document.getElementById("q3a1");
let q3a2 = document.getElementById("q3a2");
let q3a3 = document.getElementById("q3a3");

let q4a1 = document.getElementById("q4a1");
let q4a2 = document.getElementById("q4a2");

let q5a1 = document.getElementById("q5a1");
let q5a2 = document.getElementById("q5a2");

let q6a1 = document.getElementById("q6a1");
let q6a2 = document.getElementById("q6a2");
let q6a3 = document.getElementById("q6a3");

let q7a1 = document.getElementById("q7a1");
let q7a2 = document.getElementById("q7a2");
let q7a3 = document.getElementById("q7a3");
let q7a4 = document.getElementById("q7a4");

let q8a1 = document.getElementById("q8a1");
let q8a2 = document.getElementById("q8a2");
let q8a3 = document.getElementById("q8a3");
let q8a4 = document.getElementById("q8a4");
let q8a5 = document.getElementById("q8a5");

let q9a1 = document.getElementById("q9a1");
let q9a2 = document.getElementById("q9a2");

let q10a1 = document.getElementById("q10a1");
let q10a2 = document.getElementById("q10a2");
let q10a3 = document.getElementById("q10a3");
let q10a4 = document.getElementById("q10a4");
let q10a5 = document.getElementById("q10a5");

let q11a1 = document.getElementById("q11a1");
let q11a2 = document.getElementById("q11a2");
let q11a3 = document.getElementById("q11a3");
let q11a4 = document.getElementById("q11a4");

let q12a1 = document.getElementById("q12a1");
let q12a2 = document.getElementById("q12a2");
let q12a3 = document.getElementById("q12a3");

let q13a1 = document.getElementById("q13a1");
let q13a2 = document.getElementById("q13a2");
let q13a3 = document.getElementById("q13a3");

let q14a1 = document.getElementById("q14a1");
let q14a2 = document.getElementById("q14a2");
let q14a3 = document.getElementById("q14a3");

let q15a1 = document.getElementById("q15a1");
let q15a2 = document.getElementById("q15a2");
let q15a3 = document.getElementById("q15a3");

const btn = document.getElementById("btn");

// case eventListener
const c1 = document.getElementById("c1"); // 나는야 칼퇴요정
const c2 = document.getElementById("c2"); // 야망을 품은 신입사원
const c3 = document.getElementById("c3"); // 든든한 가업 승계자
const c4 = document.getElementById("c4"); // 꽃 피기 1초전
const c5 = document.getElementById("c5"); // 가슴이 나를 이끈다
const c6 = document.getElementById("c6"); // 다재다능 선배
const c7 = document.getElementById("c7"); // 프로n잡러
const c8 = document.getElementById("c8"); // 네 속을 알 수가 없어
const c9 = document.getElementById("c9"); // 잘 먹고 잘 사는 베짱이
const c10 = document.getElementById("c10"); // 흰 천과 바람만 있으면
const c11 = document.getElementById("c11"); // 로스쿨로 간 전직 대기업 사원
const c12 = document.getElementById("c12"); // 든든한 사무실 지킴이
const c13 = document.getElementById("c13"); // 여유로운 뽀삐 언니
const c14 = document.getElementById("c14"); // 끊임없이 굴러가는 굴렁쇠

const result_section = document.getElementById("result_sec");


// 제출버튼 클릭시 가중치 계산 logic
btn.addEventListener("click", (e)=>{
    // 😊 점수 초기화
    let case_obj = {
        c1:0,
        c2:0,
        c3:0,
        c4:0,
        c5:0,
        c6:0,
        c7:0,
        c8:0,
        c9:0,
        c10:0,
        c11:0,
        c12:0,
        c13:0,
        c14:0,
    }

    // 😊 유형 결과 배경 초기화
    c1.style.backgroundColor = '#ffffff';
    c2.style.backgroundColor = '#ffffff';
    c3.style.backgroundColor = '#ffffff';
    c4.style.backgroundColor = '#ffffff';
    c5.style.backgroundColor = '#ffffff';
    c6.style.backgroundColor = '#ffffff';
    c7.style.backgroundColor = '#ffffff';
    c8.style.backgroundColor = '#ffffff';
    c9.style.backgroundColor = '#ffffff';
    c10.style.backgroundColor = '#ffffff';
    c11.style.backgroundColor = '#ffffff';
    c12.style.backgroundColor = '#ffffff';
    c13.style.backgroundColor = '#ffffff';
    c14.style.backgroundColor = '#ffffff';
 
    // 😊 Question 1~15 가중치 계산 !

    // Q1
    if(q1a1.checked==true){
        console.log('q1a1체크됨');
        case_obj.c7 += 10;
        case_obj.c6 += 9;
        case_obj.c14 += 8;
        case_obj.c4 += 7;
        case_obj.c10 += 6;
        case_obj.c13 += 5;
    }
    else if(q1a2.checked==true){
        console.log('q1a2체크됨');
        case_obj.c1 += 10;
        case_obj.c13 += 7;
        case_obj.c8 += 5;
        case_obj.c12 += 3;
        case_obj.c5 += 4;
    }
    else if(q1a3.checked==true){
        console.log('q1a3체크됨');
        case_obj.c3 += 10;
        case_obj.c11 += 7;
        case_obj.c9 += 5;
    }
    else{
        // alert('1번 질문 체크 안되었습니다.');
    }

    // Q2
    if(q2a1.checked==true){
        console.log('q2a1체크됨');
        // 가중치 계산
        case_obj.c2 += 9;
        case_obj.c5 += 8;
        case_obj.c7 += 6;
        case_obj.c4 += 4;
        case_obj.c6 += 3;
    }
    else if(q2a2.checked==true){
        console.log('q2a2체크됨');
        // 가중치 계산
        case_obj.c1 += 7;
        case_obj.c9 += 6;
        case_obj.c12 += 2;
        case_obj.c13 += 1;
    }
    else{
        // alert('2번 질문 체크 안되었습니다.');
    }    

    // Q3
    if(q3a1.checked==true){
        console.log('q3a1체크됨');
        // 가중치 계산
        case_obj.c2 += 9;
        case_obj.c7 += 5;
        case_obj.c11 += 3;
    }
    else if(q3a2.checked==true){
        console.log('q3a2체크됨');
        // 가중치 계산
        case_obj.c10 += 8;
        case_obj.c12 += 7;
        case_obj.c4 += 5;
        case_obj.c13 += 4;
        case_obj.c8 += 3;
    }
    else if(q3a3.checked==true){
        console.log('q3a3체크됨');
        // 가중치 계산
        case_obj.c1 += 7;
        case_obj.c3 += 5;
        case_obj.c9 += 4;
    }
    else{
        // alert('3번 질문 체크 안되었습니다.');
    }

    // Q4
    if(q4a1.checked==true){
        console.log('q4a1체크됨');
        // 가중치 계산
        case_obj.c2 += 9;
        case_obj.c10 += 8;
        case_obj.c7 += 7;
        case_obj.c5 += 7;
        case_obj.c14 += 6;
        case_obj.c5 += 5;
        case_obj.c4 += 4;
        case_obj.c6 += 3;
    }
    else if(q4a2.checked==true){
        console.log('q4a2체크됨');
        // 가중치 계산
        case_obj.c9 += 7;
        case_obj.c12 += 6;
        case_obj.c3 += 5;
    }
    else{
        // alert('4번 질문 체크 안되었습니다.');
    }   
    
    // Q5
    if(q5a1.checked==true){
        console.log('q5a1체크됨');
        // 가중치 계산
        case_obj.c1 += 9;
        case_obj.c12 += 9;
        case_obj.c13 += 8;
        case_obj.c11 += 5;
        case_obj.c9 += 4;
    }
    else if(q5a2.checked==true){
        console.log('q5a2체크됨');
        // 가중치 계산
        case_obj.c10 += 8;
        case_obj.c7 += 6;
        case_obj.c5 += 5;
        case_obj.c4 += 6;
    }
    else{
        // alert('5번 질문 체크 안되었습니다.');
    }   

    // Q6
    if(q6a1.checked==true){
        console.log('q6a1체크됨');
        // 가중치 계산
        case_obj.c2 += 9;
        case_obj.c9 += 5;
        case_obj.c11 += 4;
        case_obj.c12 += 2;
        case_obj.c13 += 1;
    }
    else if(q3a2.checked==true){
        console.log('q6a2체크됨');
        // 가중치 계산
        case_obj.c14 += 6;
        case_obj.c6 += 6;
        case_obj.c10 += 5;
        case_obj.c5 += 4;
        case_obj.c4 += 4;
        case_obj.c11 += 3;
        case_obj.c13 += 2;
    }
    else if(q6a3.checked==true){
        console.log('q6a3체크됨');
        // 가중치 계산
        case_obj.c1 += 5;
        case_obj.c3 += 4;
        case_obj.c8 += 3;
    }
    else{
        // alert('6번 질문 체크 안되었습니다.');
    }

    // Q7
    if(q7a1.checked==true){
        console.log('q7a1체크됨');
        // 가중치 계산
        case_obj.c2 += 8;
        case_obj.c14 += 8;
        case_obj.c6 += 7;
        case_obj.c7 += 7;
        case_obj.c11 += 5;
    }
    else if(q7a2.checked==true){
        console.log('q7a2체크됨');
        // 가중치 계산
        case_obj.c9 += 6;
        case_obj.c12 += 5;
        case_obj.c1 += 2;
    }
    else if(q6a3.checked==true){
        console.log('q7a3체크됨');
        // 가중치 계산
        case_obj.c3 += 8;
        case_obj.c8 += 6;
    }
    else if(q7a4.checked==true){
        console.log('q7a4체크됨');
        // 가중치 계산
        case_obj.c3 += 4;
        case_obj.c8 += 3;
    }
    else{
        // alert('7번 질문 체크 안되었습니다.');
    }
    // Q8   
    if(q8a1.checked==true){
        console.log('q8a1체크됨');
        // 가중치 계산
        case_obj.c14 += 9;
        case_obj.c10 += 8;
        case_obj.c5 += 8;
        case_obj.c7 += 7;
        case_obj.c4 += 4;
        case_obj.c8 += 4;
    }
    else if(q8a2.checked==true){
        console.log('q8a2체크됨');
        // 가중치 계산
        case_obj.c7 += 8;
        case_obj.c6 += 8;
        case_obj.c5 += 7;
        case_obj.c14 += 7;
        case_obj.c4 += 6;
        case_obj.c2 += 6;
        case_obj.c8 += 4;
    }
    else if(q8a3.checked==true){
        console.log('q8a3체크됨');
        // 가중치 계산
        case_obj.c11 += 10;
        case_obj.c9 += 7;
        case_obj.c12 += 5;
        case_obj.c2 += 4;
        case_obj.c13 += 3;
    }
    else if(q8a4.checked==true){
        console.log('q8a4체크됨');
        // 가중치 계산
        case_obj.c2 += 9;
    }
    else if(q8a5.checked==true){
        console.log('q8a5체크됨');
        // 가중치 계산
        case_obj.c1 += 10;
        case_obj.c12 += 8;
        case_obj.c13 += 7;
        case_obj.c3 += 5;
        case_obj.c11 += 3;
    }
    else{
        // alert('8번 질문 체크 안되었습니다.');
    }

    // Q9
    if(q9a1.checked==true){
        console.log('q9a1체크됨');
        // 가중치 계산
        case_obj.c10 += 8;
        case_obj.c5 += 7;
        case_obj.c11 += 6;
        case_obj.c6 += 5;
        case_obj.c8 += 5
        case_obj.c7 += 4;
        case_obj.c4 += 2;
        case_obj.c1 += 2;
    }
    else if(q9a2.checked==true){
        console.log('q9a2체크됨');
        // 가중치 계산
        case_obj.c3 += 5;
        case_obj.c12 += 1;
    }
    else{
        // alert('9번 질문 체크 안되었습니다.');
    }   

    // Q10   
    if(q10a1.checked==true){
        console.log('q10a1체크됨');
        // 가중치 계산
        case_obj.c11 += 9;
        case_obj.c2 += 7;
        case_obj.c12 += 4;
        case_obj.c9 += 3;
    }
    else if(q10a2.checked==true){
        console.log('q10a2체크됨');
        // 가중치 계산
        case_obj.c6 += 6;
        case_obj.c9 += 5;
        case_obj.c4 += 4;
        case_obj.c12 += 3;
    }
    else if(q10a3.checked==true){
        console.log('q10a3체크됨');
        // 가중치 계산
        case_obj.c9 += 6;
        case_obj.c14 += 6;
        case_obj.c13 += 6;
        case_obj.c7 += 6;
        case_obj.c5 += 6;
        case_obj.c6 += 3;
    }
    else if(q10a4.checked==true){
        console.log('q10a4체크됨');
        // 가중치 계산
        case_obj.c6 += 7;
        case_obj.c14 += 6;
        case_obj.c7 += 4;
    }
    else if(q10a5.checked==true){
        console.log('q10a5체크됨');
        // 가중치 계산
        case_obj.c3 += 8;
        case_obj.c8 += 6;
        case_obj.c1 += 3;
    }
    else{
        // alert('10번 질문 체크 안되었습니다.');
    }

    
    // Q11 
    if(q11a1.checked==true){
        console.log('q11a1체크됨');
        // 가중치 계산
        case_obj.c2 += 9;
        case_obj.c14 += 7;
        case_obj.c7 += 4;
    }
    else if(q11a2.checked==true){
        console.log('q11a2체크됨');
        // 가중치 계산
        case_obj.c10 += 9;
        case_obj.c11 += 7;
        case_obj.c12 += 6;
        case_obj.c4 += 4;
    }
    else if(q11a3.checked==true){
        console.log('q11a3체크됨');
        // 가중치 계산
        case_obj.c3 += 6;
        case_obj.c9 += 3;
        case_obj.c13 += 3;
    }
    else if(q11a4.checked==true){
        console.log('q11a4체크됨');
        // 가중치 계산
        case_obj.c8 += 4;
        case_obj.c1 += 3;
    }
    else{
        // alert('11번 질문 체크 안되었습니다.');
    }

    // Q12
    if(q12a1.checked==true){
        console.log('q12a1체크됨');
        // 가중치 계산
        case_obj.c6 += 9;
        case_obj.c10 += 8;
        case_obj.c2 += 6;
        case_obj.c7 += 5;
        case_obj.c13 += 3;
        case_obj.c14 += 1;
    }
    else if(q12a2.checked==true){
        console.log('q12a2체크됨');
        // 가중치 계산
        case_obj.c12 += 3;
        case_obj.c3 += 2;
    }
    else if(q12a3.checked==true){
        console.log('q12a3체크됨');
        // 가중치 계산
        case_obj.c1 += 10;
        case_obj.c9 += 6;
        case_obj.c11 += 3;
    }
    else{
        // alert('12번 질문 체크 안되었습니다.');
    }
    
    // Q13
    if(q13a1.checked==true){
        console.log('q13a1체크됨');
        // 가중치 계산
        case_obj.c7 += 7;
        case_obj.c13 += 7;
        case_obj.c6 += 4;

    }
    else if(q13a2.checked==true){
        console.log('q13a2체크됨');
        // 가중치 계산
        case_obj.c4 += 6;
        case_obj.c2 += 5;
        case_obj.c10 += 4;
    }
    else if(q13a3.checked==true){
        console.log('q13a3체크됨');
        // 가중치 계산
        case_obj.c1 += 3;
        case_obj.c12 += 2;
        case_obj.c3 += 2;
    }
    else{
        // alert('13번 질문 체크 안되었습니다.');
    }

    
    // Q14
    if(q14a1.checked==true){
        console.log('q14a1체크됨');
        // 가중치 계산
        case_obj.c5 += 8;
        case_obj.c4 += 7;
        case_obj.c7 += 6;
    }
    else if(q14a2.checked==true){
        console.log('q14a2체크됨');
        // 가중치 계산
        case_obj.c2 += 6;
        case_obj.c14 += 5;
        case_obj.c1 += 3;

    }
    else if(q14a3.checked==true){
        console.log('q14a3체크됨');
        // 가중치 계산
        case_obj.c9 += 7;
        case_obj.c8 += 6;
        case_obj.c11 += 5;
        case_obj.c3 += 4;
        case_obj.c12 += 3;
    }
    else{
        // alert('14번 질문 체크 안되었습니다.');
    }

        
    // Q15
    if(q15a1.checked==true){
        console.log('q15a1체크됨');
        // 가중치 계산
        case_obj.c2 += 10;
        case_obj.c6 += 9;
        case_obj.c7 += 8;
        case_obj.c14 += 7;
        case_obj.c11 += 5;
        case_obj.c13 += 3;
        case_obj.c1 += 2;
    }
    else if(q15a2.checked==true){
        console.log('q15a2체크됨');
        // 가중치 계산
        case_obj.c12 += 8;
        case_obj.c5 += 6;
        case_obj.c9 += 5;
        case_obj.c10 += 4;
        case_obj.c4 += 2;
    }
    else if(q15a3.checked==true){
        console.log('q15a3체크됨');
        // 가중치 계산
        case_obj.c3 += 5;
    }
    else{
        // alert('15번 질문 체크 안되었습니다.');
    }

    // 가장 max인 유형 key 찾기
    let arr = Object.values(case_obj);
    let max = Math.max(...arr);
    console.log( `max value: ${max}` );

    let maxKey = getKeyByValue(case_obj, max);
    function getKeyByValue(case_obj, value){
        return Object.keys(case_obj).find(key=>case_obj[key] === value);
    }

    console.log(case_obj);
    console.log(`max key: ${maxKey}, value: ${case_obj[maxKey]}`);



    // 유형결과 id로 접근해서 color change
    let case_name = maxKey;
    let find = document.getElementById(case_name);
    console.log(find);
    find.style.backgroundColor = '#ffcee9';
})







// 유형결과 클릭하면 -> 연관된 답변들 나오게 

// 나는야 칼퇴요정
c1.addEventListener('click',(e)=>{
    c1.style.backgroundColor = '#92B9F5';
    q1a2.checked=true;
    q2a2.checked=true;
    q3a3.checked=true;
    q5a1.checked=true;
    q6a3.checked=true;
    q7a2.checked=true;
    q8a5.checked=true;
    q9a1.checked=true;
    q10a5.checked=true;
    q11a4.checked=true;
    q12a3.checked=true;
    q13a3.checked=true;
    q14a2.checked=true;
    q15a1.checked=true;
})
// 야망을 품은 신입사원
c2.addEventListener('click',(e)=>{
    c2.style.backgroundColor = '#92B9F5';

    q2a1.checked=true;
    q3a1.checked=true;
    q4a1.checked=true;
    q6a1.checked=true;
    q7a1.checked=true;
    q8a2.checked=true;
    q8a3.checked=true;
    q8a4.checked=true;
    q10a1.checked=true;
    q11a1.checked=true;
    q12a1.checked=true;
    q13a2.checked=true;
    q14a2.checked=true;
    q15a1.checked=true;
})

// 든든한 가업 승계자
c3.addEventListener('click',(e)=>{
    c3.style.backgroundColor = '#92B9F5';

    q1a3.checked=true;
    q3a3.checked=true;
    q4a2.checked=true;
    q6a3.checked=true;
    q7a3.checked=true;
    q7a4.checked=true;
    q8a5.checked=true;
    q9a2.checked=true;
    q10a5.checked=true;
    q11a3.checked=true;
    q12a2.checked=true;
    q13a3.checked=true;
    q14a3.checked=true;
    q15a3.checked=true;
})

// 꽃 피기 1초전
c4.addEventListener('click',(e)=>{
    c4.style.backgroundColor = '#92B9F5';

    q1a1.checked=true;
    q2a1.checked=true;
    q3a2.checked=true;
    q4a1.checked=true;
    q5a2.checked=true;
    q6a2.checked=true;
    q8a1.checked=true;
    q8a2.checked=true;
    q9a1.checked=true;
    q10a2.checked=true;
    q11a2.checked=true;
    q13a2.checked=true;
    q14a1.checked=true;
    q15a2.checked=true;
})

// 가슴이 나를 이끈다
c5.addEventListener('click',(e)=>{
    c5.style.backgroundColor = '#92B9F5';

    q1a2.checked=true;
    q2a1.checked=true;
    q4a1.checked=true;
    q5a2.checked=true;
    q6a2.checked=true;
    q8a1.checked=true;
    q8a2.checked=true;
    q9a1.checked=true;
    q10a3.checked=true;
    q14a1.checked=true;
    q15a2.checked=true;
})

// 다재다능 선배
c6.addEventListener('click',(e)=>{
    c6.style.backgroundColor = '#92B9F5';

    q1a1.checked=true;
    q2a1.checked=true;
    q4a1.checked=true;
    q6a2.checked=true;
    q7a1.checked=true;
    q8a2.checked=true;
    q9a1.checked=true;
    q10a2.checked=true;
    q10a3.checked=true;
    q10a4.checked=true;
    q12a1.checked=true;
    q13a1.checked=true;
    q15a1.checked=true;
})

// 프로n잡러
c7.addEventListener('click',(e)=>{
    c7.style.backgroundColor = '#92B9F5';

    q1a1.checked=true;
    q2a1.checked=true;
    q3a1.checked=true;
    q4a1.checked=true;
    q5a2.checked=true;
    q7a1.checked=true;
    q8a1.checked=true;
    q8a2.checked=true;
    q9a1.checked=true;
    q10a3.checked=true;
    q10a4.checked=true;
    q11a1.checked=true;
    q12a1.checked=true;
    q13a1.checked=true;
    q14a1.checked=true;
    q15a1.checked=true;
})

// 네 속을 알 수 없어
c8.addEventListener('click',(e)=>{
    c8.style.backgroundColor = '#92B9F5';

    q1a2.checked=true;
    q3a2.checked=true;
    q6a3.checked=true;
    q7a3.checked=true;
    q7a4.checked=true;
    q8a1.checked=true;
    q8a2.checked=true;
    q9a1.checked=true;
    q10a5.checked=true;
    q11a4.checked=true;    
    q14a3.checked=true;
})

// 잘 먹고 잘 사는 베짱이
c9.addEventListener('click',(e)=>{
    c9.style.backgroundColor = '#92B9F5';

    q1a3.checked=true;
    q2a2.checked=true;
    q3a3.checked=true;
    q4a2.checked=true;
    q5a1.checked=true;
    q6a1.checked=true;
    q7a2.checked=true;
    q8a3.checked=true;
    q10a1.checked=true;
    q10a2.checked=true;
    q10a3.checked=true;
    q11a3.checked=true;
    q12a3.checked=true;
    q14a3.checked=true;
    q15a2.checked=true;
})

// 흰 천과 바람과 있으면
c10.addEventListener('click',(e)=>{
    c10.style.backgroundColor = '#92B9F5';

    q1a1.checked=true;
    q4a1.checked=true;
    q3a2.checked=true;
    q5a2.checked=true;
    q6a2.checked=true;
    q8a1.checked=true;
    q9a1.checked=true;
    q10a3.checked=true;
    q11a2.checked=true;
    q12a1.checked=true;
    q13a2.checked=true;
    q15a2.checked=true;
})

// 로스쿨에 입학한 전직 대기업 사원
c11.addEventListener('click',(e)=>{
    c11.style.backgroundColor = '#92B9F5';

    q1a3.checked=true;
    q3a1.checked=true;
    q5a1.checked=true;
    q6a1.checked=true;
    q6a2.checked=true;
    q7a1.checked=true;
    q8a3.checked=true;
    q8a5.checked=true;
    q9a1.checked=true;
    q10a1.checked=true;
    q11a2.checked=true;
    q12a3.checked=true;
    q14a3.checked=true;
    q15a1.checked=true;
})

// 든든한 사무실 지킴이
c12.addEventListener('click',(e)=>{
    c12.style.backgroundColor = '#92B9F5';

    q1a2.checked=true;
    q4a2.checked=true;
    q2a2.checked=true;
    q3a2.checked=true;
    q5a1.checked=true;
    q6a1.checked=true;
    q7a2.checked=true;
    q8a3.checked=true;
    q8a5.checked=true;
    q9a2.checked=true;
    q10a1.checked=true;
    q10a2.checked=true;
    q11a2.checked=true;
    q12a2.checked=true;
    q13a3.checked=true;
    q14a3.checked=true;
    q15a2.checked=true;
})

// 여유로운 뽀삐 언니
c13.addEventListener('click',(e)=>{
    c13.style.backgroundColor = '#92B9F5';

    q1a1.checked=true;
    q1a2.checked=true;
    q2a2.checked=true;
    q3a2.checked=true;
    q5a1.checked=true;
    q6a1.checked=true;
    q6a2.checked=true;
    q8a3.checked=true;
    q8a5.checked=true;
    q10a3.checked=true;
    q11a3.checked=true;
    q12a1.checked=true;
    q13a1.checked=true;
    q15a1.checked=true;
})

// 끊임없이 굴러가는 굴렁쇠
c14.addEventListener('click',(e)=>{
    c14.style.backgroundColor = '#92B9F5';

    q1a1.checked=true;
    q4a1.checked=true;
    q6a2.checked=true;
    q7a1.checked=true;
    q8a1.checked=true;
    q8a2.checked=true;
    q10a3.checked=true;
    q10a4.checked=true;
    q11a1.checked=true;
    q12a1.checked=true;
    q14a2.checked=true;
    q15a1.checked=true;
})


// function calulate(case_name, weight){
//     switch(case_name){
//         case 'a':
//             case_a+=weight;
//     }
// }



// document.getElementById("show_result").addEventListener("click",calc);



// while(isfilled < total_question) {

// }
// 유형에 highlight 하기
    // 지금까지 case 숫자 중 max 값에 highlight


// 코드 기획
// max 유형 찾아서 


// test 
