const API_KEY = "0f7545fa703331a046ff507809a2a7fa";

function onGeoOK(position) {
  const lat = position.coords.latitude;
  const lon = position.coords.longitude;
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      const weather = document.querySelector("#weather span:first-child");
      const city = document.querySelector("#weather span:last-child");
      weather.innerText = data.weather[0].main;
      city.innerText = `${data.name} / ${data.main.temp}`;
    });
  //url을 fetch하고 response 받아야 함
}

function onGeoError() {
  alert("Can't find you. No weather for you.");
}

navigator.geolocation.getCurrentPosition(onGeoOK, onGeoError);
//브라우저에서 위치 좌표 찍어줌
//getCurrentPosition은 argument 두 개 필요
// (모든 게 잘 됐을 때 실행 될 함수, 에러가 발생했을 때 함수)

// 위도 경도 숫자들을 장소로 바꿔줄 서비스
