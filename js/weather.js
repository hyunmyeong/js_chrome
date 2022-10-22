const API_KEY = "e04f0548af06e129812f553d855f169c"

function onGeoOk(position) {
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;
    console.log("You live in", lat, lon);
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`
    fetch(url)
    .then(response => response.json())
    .then(data => {
        const weather = document.querySelector("#weather span:first-child");
        const city = document.querySelector("#weather span:last-child");
        city.innerText = data.name;
        weather.innerText = `${data.weather[0].main} / ${data.main.temp}`
    });
}

function onGeoError() {
    alert("Can't find you. No weather for you.")
}

//위치를 찾는 함수 / getCurrentPosition(성공 시 실행할 함수, 실패 시 실행할 함수)
navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);
