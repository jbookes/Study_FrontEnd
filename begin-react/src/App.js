import React from 'react';
//import logo from './logo.svg';
import './App.css';
import Hello from './Hello';
import Wrapper from './Wrapper';



function App() {
  return (
     <Wrapper>
      <Hello name="react" color="red" />
      <Hello color="pink" />
    </Wrapper>
    )
}



/*

function App() {

  const name = '_ react _';
  const style = {
    backgroundColor : 'black',
    color : 'aqua'
    //fontSize : 24, //기본 단위 px
    //padding : '1rem' //다른 단위 사용시 문자열로 설정
  }

  return (

    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        
        <Hello />
        <div style={style}>{name}</div>
        <div>안녕히계세요</div>
        
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      


      
    </div>
  );
}



// <div>를 사용하기 위하여 위 아래로 <div>  </div>를 감싸고
// <div> 텍스트 </div> 사용할 수 있다.
// <div></div>를 사용하기 위하여 위아래를 감싸는 부분이 너무 불필요하기 때문에
// 리엑트의 Fragment를 사용하면 편하다 간단하게 <> </>로 감싸고 그 안에 <div></div> 사용
// 태그를 작성 할 때 이름 없이 작성하면 Fragment가 만들어짐.


// JSX 내부에 자바스크립트 변수를 보여줘야 할 때에는 {}를 사용
*/


export default App;
