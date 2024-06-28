import React, { useState } from 'react'

export default function KeyEx() {

    // const items = ['🍎', '🥝', '🍍'];
    // console.log(items);
    const items = ['Apple', 'Banana', 'Cherry'];
    // input에서 입력받은 데이터를 저장
    let [search, setSearch] = useState('');
    // 배열에서 찾은 결과값 저장
    let [result, setResult] = useState('');

    return (
        <div>
            {/* 
        map을 사용해서 여러 개의 요소값을 생성하다 보면 요소에 들어가는 항목 변경, 추가, 삭제를 하기 위해서 요소를 구별하는 사용법으로 key를 사용한다.
        */}

            <ul>
                {
                    items.map(function (item, index) {
                        return (
                            <li key={index}>{item}</li>
                        )
                    })
                }
            </ul>

            <input type="text" onChange={function(e) {
                setSearch(e.target.value);
                // console.log(e.target.value);
            }} />
            <button className='btn btn-primary' onClick={function() {
                // console.log('클릭');
                let findItem = items.find(function(item) {
                    return item === search;
                })
                setResult(findItem);
            }}>검색</button>
            
        </div>
    )
}
