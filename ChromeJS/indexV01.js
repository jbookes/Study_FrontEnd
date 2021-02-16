// 구형
// prompt("test"); // 값을 받아올 때 사용했음. 지금은 안사용
// const age = prompt("how old are you?");
// if (age > 18) {
//   console.log("you can drink");
// } else {
//   console.log("you can't drink");
// }
// -------------------------------------------------------------

// alert("test");

// -------------------------------------------------------------

// document은 Object이다.
// const title = document.getElementById("title");
const title = document.querySelector("#title"); // id로 찾겠다 '#title, class로 찾겠다 '.title'

// -------------------------------------------------------------

// DOM = document Object module
// title.innerHTML = "HI! From JS";
// title.style.color = "blue";

// -------------------------------------------------------------

// 가능한 부분 전체 확인
// console.dir(title);
// console.dir(document);

// -------------------------------------------------------------

// css에 있는 h1의 color: #34495e를 함수 사용

const BASE_COLOR = "rgb(52, 73, 94)";
const OTHER_COLOR = "#7f8c8d";

function handleClick() {
  // console.log(title.style.color);
  const currentColor = title.style.color;
  // console.log(currentColor);
  if (currentColor === BASE_COLOR) {
    title.style.color = OTHER_COLOR;
  } else {
    title.style.color = BASE_COLOR;
  }
}

function init() {
  title.style.color = BASE_COLOR;

  // HTML Javascript DOM event MDN = https://developer.mozilla.org/ko/docs/Web/Events
  title.addEventListener("mouseenter", handleClick);
  // title.addEventListener("click", handleClick);
}
init();

// -------------------------------------------------------------

// function handleOnline(){
//   console.log("온라인일 때 뜨는 결과")
// }

// function handleOffline{
//   console.log("인터넷을 끊었을 때 뜨는 결과")
// }

// window.addEventListener("online", handleOnline)
// window.addEventListener("offline", handleOffline)
