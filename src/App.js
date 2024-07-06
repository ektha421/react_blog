/* eslint-disable */

import './App.css';
import { useState } from 'react';

function App() {
let [getTitle, setTitle] = useState(['여자 코트 추천', '강남 우동맛집', '리액트 공부']);
let [cnt, nextCnt] = useState([0,0,0]);
let [modal, setModal] = useState(false);
let [modalTitle, setModalTitle] = useState(0); 
let [str, changeStr] = useState('');
let [strArr, changeStrArr] = useState([]);

  return (
    <div className="App">
      <div className="black-nav">
        <h4>SOMBLOG</h4>
      </div>
      {strArr}
      {
        getTitle.map((title,i) => {
          return(
            <div className="list" key={i}>
              <h4 onClick={()=> {setModal(true); setModalTitle(i)}} style={{display:'inline-block'}}>{title} </h4>
              <span onClick={(e) => {
                e.stopPropagation();
                let copyCnt = [...cnt];
                 copyCnt[i]++;
                nextCnt(copyCnt)}
                }>👍</span> 
                <button onClick={(e)=>{
                  var array = [...getTitle];
                   array.splice(i,1);
                   setTitle(array);                
                }}>삭제</button>
              {cnt[i]}
              <p>2월 17일 발행</p>
            </div>
          )
        })
      }
      <input type='text' onChange={(e)=>{
        changeStr(e.target.value);
        }}/><button onClick={()=>{setTitle(v=> [...v,str])}}>입력</button>

      {
        modal ? <Modal cnt={modalTitle} title={getTitle} /> : null
      }
    </div>
  );


}

/** 
 * 컴포넌트가 쓰면 좋은 상황
 * 반복적인 html 축약할 때 
 * 큰 페이지들
 * 자주 변경되는 UI */
function Modal(props){
  //function 만들고 return안에 html만들기, <함수명></함수명> 쓰기
  //<></> fragment
  return(
    <>
      <div className="modal">
          <h4>{props.title[props.cnt]}</h4>
          <p>날짜</p>
          <p>상세내용</p>
          <button>글수정</button>
      </div>
    </>
  )
}

export default App;
