// html element를 javascript로 가지고 오는 법
const h1 = document.querySelector(".hello h1");

function handleTitleClick() {
    h1.style.color = "red";
}

function handleMouseEnter() {
    h1.innerText = "mouse is here!";
}

function handleMouseLeave() {
    h1.innerText = "mouse is gone!";
}

function handleWindowResize() {
    document.body.style.backgroundColor = "tomato";
}

function handleWindowCopy() {
    alert("copier!");
}

function handleWindowOffLine() {
    alert("SOS no WIFI!");
}

function handleWindowOnLine() {
    alert("WIFI GOOD!");
}

h1.addEventListener("click", handleTitleClick);
h1.addEventListener("mouseenter", handleMouseEnter);
h1.addEventListener("mouseleave", handleMouseLeave);

//===>

// h1.onclick = handleTitleClick;
// h1.onmouseenter = handleMouseEnter;
// h1.onmouseleave = handleMouseLeave;

window.addEventListener("resize", handleWindowResize);
window.addEventListener("copy", handleWindowCopy);
window.addEventListener("offline", handleWindowOffLine)
window.addEventListener("online", handleWindowOnLine)