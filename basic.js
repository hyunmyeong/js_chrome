
const a = 5;
const b = 2;

//let은 아래에서 업데이트될 수도 있는 변수를 칭할 때 사용
let myName = "hyun";


console.log(a+b);
console.log(a*b);
console.log(a/b);
console.log("hello" + myName);

//위에서 설정한 let의 변수를 바꿀 때 위와 같이 변수명만 쓰고 새로운 값을 넣기
//let은 새롭게 처음으로 변수를 설정할 때 써야 함
myName = "doyoung";

console.log("your name is " + myName);

const amIFat = true;
console.log(amIFat);
//true !=== "true"
//null : 값(변수명)은 있지만 아무것도(값) 없다! => 비어있다 [null은 자연발생X]
//undefined : 값(변수명)은 있지만 값이 아직 정의되지 않았다!

//array
const nonsense = [1, 2, "doyoung", true, 5, 'hello'];

//배열에서 원하는 값 꺼내는 방법
console.log(nonsense[2]);

//배열에 값을 추가하는 방법
nonsense.push("dongsung", "tigers");
console.log(nonsense);


//objects
const playerName = "doyoung";
const playerPoint = 5;
const playerHandsome = true;
const playerFat = "nope";

const player = {
    name : "doyoung",
    point : 5,
    handsome : true,
    fat : "nope"
};

console.log(player);
console.log(player.name);
console.log(player["name"]);

//objects 업데이트
player.handsome = "cute";
player.point = player.point + 48;
console.log(player);
//const는 변경을 할 수 없지만 (player 전체를 변경 할 수는 없다 ==> 에러 남), const player 안의 값을 변경하는 것은 가능

//objects 추가
player.lastName = "Kim";
console.log(player);

//데이터를 function에 보내는 법
function sayHello(nameOfPerson, age){
    console.log("Hello my name is " + nameOfPerson + ", and I'm " + age);
}

sayHello("doyoung", 20);
sayHello("seokhwan", 24);

function plus(a,b){
    console.log(a+b);
}

plus(20,24);

function divide(a,b){
    console.log(a/b);
}

divide(98,20);

//object 안의 function을 가져올 때는 92번 줄처럼 
const kbo_player = {
    name : "seokhwan",
    sayHi : function(otherPersonsName){
        console.log("hi!" + otherPersonsName + " nice!")
    }
}

console.log(kbo_player)
kbo_player.sayHi("lee");


//prac + return
const calculator ={
    plus : function(a,b) {
        return a+b;
    },
    minus : function(a,b) {
        return a-b;
    },
    times : function(a,b) {
        return a*b;
    },
    divide : function(a,b) {
        return a/b;
    },
    power : function(a,b) {
        return a**b;
    }
}

const pulsResult = calculator.plus(2,3);
const minusResult = calculator.minus(pulsResult,10);
const timesResult = calculator.times(10,minusResult);
const divideResult = calculator.divide(timesResult,pulsResult);
const powerResult = calculator.power(divideResult,minusResult);
//콘솔 창에 pulsResult등을 입력하면 값이 나옴


const age = 23;
function calculatorKrAge(ageOfForeigner) {
    return ageOfForeigner + 2;
}

const krAge = calculatorKrAge(age);

console.log(krAge);

//console.log => 콘솔 창에 보여주는 방식
//return => 결과 도출 + return 되는 순간 그 아래 코드는 나오지 않음!

//조건문
const ageCheck = parseInt(prompt("몇살이세요?"));

console.log(isNaN(ageCheck));
//typeof => 해당 값의 타입을 알 수 있음
//paeseInt => string -> number
//NaN => Not a Number
//isNaN() => 해당 값이 숫자인지 아닌지를 true / false 로 알려줌

if(isNaN(ageCheck) || ageCheck < 0) {
    console.log("나이를 입력해주세요");
} else if (ageCheck < 18) {
    console.log("애들은 가라");
} else if (ageCheck >= 18 && ageCheck <= 50) {
    console.log("마음껏 술 드십쇼")
} else if (ageCheck > 50 && ageCheck <= 80) {
    console.log("운동하시는 것이 건강에 좋습니다")
} else if (ageCheck === 100) {
    console.log("장수 비결이 뭔가요?")
} else if (ageCheck > 80) {
    console.log("하고싶은거 하세요")
} 

//&& => and  (a && b) => a와 b 모두 true일 때 -> true , 하나라도 다르면 false
//|| => or (a || b) => a와 b 중 하나라도 true일 때 -> true

// true || true === true
// true || false === true
// false || true === true
// false || false === false 

// true && true === true
// false && true === false
// true && false === false
// false && false === false

