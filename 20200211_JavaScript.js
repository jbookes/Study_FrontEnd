// 언어의 시작은 Hellow World
console.log('Hellow World~');


//특정값의 변수를 넣어 선언 하려면 var, let, const 을 사용


//var 사용 X
var name = 'Hellow';
console.log(name) // Hellow
var name = 'World';
console.log(name) // World
/*
var는 변수를 한번 더 선언하여도 에러가 안나온다
결과 값은 각기 다른 값으로 나오는 증상으로 인해
최근에는 잘 사용하지 않는다.
*/


// 그렇다면 let, const의 차이는 무엇일까?
// let 은 변수에 재할당이 가능하다
let name = 'Hellow'
console.log(name) // Hellow

let name = 'World'
console.log(name) //Uncaught SyntaxError: Identifier 'name' has already been declared

name = 'World'
console.log(name) //World

// const는 변수 재선언, 변수 재할당 모두 불가능하다.
console.log(name) // Hellow

let name = 'World'
console.log(name) //Uncaught SyntaxError: Identifier 'name' has already been declared

name = 'World'
console.log(name) //Uncaught TypeError: Assignment to constant variable.
// 추가적으로, IE9, IE10 같은 구형 브라우저에서는 let 과 const 를 사용 할 수 없습니다.
// 하지만, 보통 개발을 하게 될 때는 Babel 과 같은 도구를 사용하여 코드가 구형 브라우저에서도 돌아갈 수 있게끔 변환작업을 합니다



// 참 혹은 거짓
let good = true;
let loading = false;

let bad = null; //없다
let someting = undefined; // 아직 값이 정해지지 않았다.


let friend = null;
console.log(friend); //진짜 친구가 없다

let criminal;
console.log(criminal); //범인은 있지만 아직 정해짐이 없음..



// ++ 순서에 대해 정리
let a = 1;
console.log(a++) // 1
console.log(a) // 2
console.log(++a) //3
























