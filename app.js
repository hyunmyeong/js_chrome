// const loginForm = document.getElementById("login-form");
// const loginInput = loginForm.querySelector("input");
// const loginButton = loginForm.querySelector("button");

const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");

const link = document.querySelector("a");

function onLoginSubmit(event) {
    event.preventDefault();
    console.log(loginInput.value);
}

function handleLink(event) {
    event.preventDefault();
    alert("clicked!");
}

loginForm.addEventListener("submit", onLoginSubmit);
link.addEventListener("click", handleLink);