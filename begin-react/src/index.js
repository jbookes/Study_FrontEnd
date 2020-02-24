import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
// ReactDOM.render 의 역할
// 브라우저가 있는 실제 DOM 내부에 리액트 컴포넌트를 랜더링.
// ID가 rppt 인 DOM은 어디에 있는가? public/index.html 내부에 있다.



// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();








