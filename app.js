// html element를 javascript로 가지고 오는 법
const h1 = document.querySelector(".hello h1");

function handleTitleClick() {

    // const clickedClass = "clicked"
    // if (h1.classList.contains(clickedClass)) {
    //     h1.classList.remove(clickedClass);
    // } else {
    //     h1.classList.add(clickedClass);
    // }

    //===> toggle이 간단하게 스위치 역할을 함

    h1.classList.toggle("clicked");
}

h1.addEventListener("click", handleTitleClick);
