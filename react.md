# React

## 1. useState 사용법

```javascript
import { useState } from 'react';

function App(){
    let [getTitle,setTitle] = useState('테스트');
    let [getItems,setItems] = useState(['test1','test2','test33']);
}

//distructuring 문법
//let num = [1,2];
//let [a,b] = [1,2];

chageItems(){
    let copy = [...getItems]; // copy = getItems x
    //state 변경함수 특징
    //copy = getItems는 기존 state와 신규 state가 값이 동일할 경우 변경안함
    //array, object의 경우 무조건 복사해서 값을 변경해줘야함
    copy.sort();
    setItems(copy);
}
```
* state와 변수의 다른 점은 state가 변경되면 html이 자동 재렌더링 됨.
* setTitle('테스트2');  => state 변경