
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

