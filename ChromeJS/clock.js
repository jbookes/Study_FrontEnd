// 일반적인 호출
// const clockContainer = document.querySelector(".js-clock")
// const clockTitle = clockContainer.querySelector("h1")

// 줄이기
const clockContainer = document.querySelector(".js-clock"),
  clockTitle = clockContainer.querySelector("h1");

function getTime() {
  const date = new Date();
  const minutes = date.getMinutes();
  const hours = date.getHours();
  const secodns = date.getSeconds();
  clockTitle.innerHTML = `${hours < 10 ? `0${hours}` : hours}:${
    minutes < 10 ? `0${minutes}` : minutes
  }:${secodns < 10 ? `0${secodns}` : secodns}`;
}

// setInterval([함수], [실행할 시간])

function init() {
  setInterval(getTime, 1000);
}
init();
