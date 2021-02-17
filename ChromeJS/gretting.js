const form = document.querySelector(".js-form");
const input = document.querySelector("input");
const greeting = document.querySelector(".js-greetings");

const USER_LS = "currentUser";
const SHOWING_CN = "showing";

function saveName(text) {
  localStorage.setItem(USER_LS, text);
}

function handleSubmit(event) {
  // 보통 이벤트가 발생하면 root에서 일어남
  event.preventDefault(); // Enter 입력시 새로고침 X
  const currentValue = input.value;
  paintGreeting(currentValue);
  console.log(currentValue);
  saveName(currentValue); // saveName 값 저장시킴
}

function askForName() {
  form.classList.add(SHOWING_CN);
  // Form문에 뭔가를 submit한다면 처리하도록
  form.addEventListener("submit", handleSubmit);
}

function paintGreeting(text) {
  form.classList.remove(SHOWING_CN);
  greeting.classList.add(SHOWING_CN);
  greeting.innerText = `HI ${text}`;
}

// application -> storage -> 저장
function loadName() {
  const currentUser = localStorage.getItem(USER_LS);
  if (currentUser === null) {
    askForName();
  } else {
    // 로컬 스트리지에서 가져온 텍스트와 함께 paint greeting 함수를 호출
    paintGreeting(currentUser);
  }
}

function init() {
  loadName();
}
init();

// 노마드코더 자바스크립트 3-3 6:42
