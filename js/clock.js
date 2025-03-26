const clock = document.querySelector("#clock");

function getClock() {
  const date = new Date();
  const hours = String(date.getHours()).padStart(2, "0");
  const minutes = String(date.getMinutes()).padStart(2, "0");
  const seconds = String(date.getSeconds()).padStart(2, "0");
  clock.innerText = `${hours}:${minutes}:${seconds}`;
}

getClock(); //website가 load되자마자 실행되도록
setInterval(getClock, 1000);

// setInterval(실행할 함수, 주기)
// setInterval(sayHello, 5000);

// setTimeout(sayHello,5000); 시간 이후에 함수 실행

//"1".padStart(2,"0")
// "1"이라는 문자열 길이를 2로 만드는데 길이가 2가 아니라면 "0"을 앞에 추가
//"1".padEnd(2,"0")
