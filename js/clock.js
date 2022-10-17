const clock = document.querySelector("h2#clock");

function getClock() {
    //new Date() => 시간 관련 함수
    const date = new Date();

    //String()으로 감싸주면 문자로 바꿀 수 있음
    const hours = String(date.getHours()).padStart(2,"0");
    const minutes = String(date.getMinutes()).padStart(2,"0");
    const seconds = String(date.getSeconds()).padStart(2,"0");
    clock.innerText = `${hours} : ${minutes} : ${seconds}`
}

//특정 시간마다 함수를 실행 setInterval(실행하려는 함수,ms 시간)
// setInterval(sayHello,5000);

//일정 시간이 지난 후, 함수를 실행 setTimeout(실행하려는 함수, ms 시간)
// setTimeout(sayHello, 5000);

//getClock 함수를 바로 호출 => 1초 안기다리고 바로 실행 + setInterval로 1초마다 실행
getClock()
setInterval(getClock, 1000)