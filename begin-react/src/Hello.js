import React from 'react'

function Hello( {color, name} ) {
    //console.log(props); //F12 Console에 {name: "react"} 가 생김.
    return <div style={{
        color
    }}>안녕하세요 {name}</div>
}

export default Hello;


Hello.defaultProps = {
    name: '이름없음'
};




/*
import React from 'react'

function Hello(props) {
    console.log(props); //F12 Console에 {name: "react"} 가 생김.
    return <div>안녕하세요</div>
}

export default Hello;
*/
