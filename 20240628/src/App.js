import './App.css';
// ajax 통신을 할 때 외부 라이브러리
import axios from 'axios';
// 부트스트랩 테이블 포함
import Table from 'react-bootstrap/Table';
import { useState } from 'react';

function App() {

  // 버튼 클릭 시 가져온 데이터 저장
  // 현재 서버가 열려있는 상태
  // 데이터를 이미 가져왔다. 클릭을 하면 계속 ajax 통신을 한다.
  let [click, setClick] = useState([]);

  let [search, setSearch] = useState([]);
  let [result, setResult] = useState([]);

  return (
    <div className="App">
      <button onClick={function () {
        // 1. url axios.get(url)
        axios.get('https://jsonplaceholder.typicode.com/users?_limit=9')
        .then(function (결과) {
          // 성공시 사용하는 then(동작하는 콜백함수)
          // console.log(결과.data);
          setClick(결과.data);
          console.log(click);
        }).catch(function (실패) {
          // 실패 시에 사용하는 catch(동작하는 콜백함수)
          console.log("실패함");
        })
      }}>전체 조회</button> <br /><br />

      {/* 
      검색창을 만들어서 인덱스를 입력받기
      버튼 클릭 시 검색된 요소 하나만 테이블에 보여주기 
      만약 없으면 검색한 번호가 없습니다. alert() 띄우기
      */}

      <input type="text" onChange={function (e) {
        setSearch(e.target.value);
      }} />
      <button onClick={function () {
        let num = parseInt(search, 10);
        
        let list = click.map(function (indexSearchResult, index) {
          //  console.log(indexSearchResult + "/인덱스: " + index);
          //  console.log(search);
          if(index === num) {
            // console.log((index === num));
            // console.log((index === num) ? true : false);
            setResult(indexSearchResult);
            console.log(result);
          }
          return null;
        })
      }}>인덱스 조회</button>


      {/* 자바 스크립트를 이용하기 위해서는 중괄호 사용 {} */}
      {/* {
          click.map(function(post) {
            return (
              <h4>{post.title}</h4>
            )})
        } */}

      <Table striped bordered hover>
        <thead>
          <tr>
            <th>id</th>
            <th>name</th>
            <th>phone</th>
            <th>username</th>
            <th>email</th>
          </tr>
        </thead>
        <tbody>
          {
            // let r = (typeof result) === 'Object';
            click.map(function (user,index) {
              return (<tr key={index}>
                <th>{user.id}</th>
                <th>{user.name}</th>
                <th>{user.phone}</th>
                <th>{user.username}</th>
                <th>{user.email}</th>
              </tr>
              )
            })
          }
        </tbody>
      </Table>

      {/* 
     1. XMLHttpRequest
     2. fetch()
     3. axios 같은 외부 라이브러리를 사용
     → 터미널을 열고 새 창에 npm install axios 내용으로 다운로드 하기
     */}
    </div>
  );
}

export default App;
