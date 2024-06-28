import './App.css';
// ajax 통신을 할 때 외부 라이브러리
import axios from 'axios';
// 부트스트랩 테이블 포함
import Table from 'react-bootstrap/Table';
import React, { useState } from 'react';
import UserDetail from './UserDetail';
import { Routes, Route, Link, useNavigate } from 'react-router-dom';

function App() {

  // 버튼 클릭 시 가져온 데이터 저장
  // 현재 서버가 열려있는 상태
  // 데이터를 이미 가져왔다. 클릭을 하면 계속 ajax 통신을 한다.
  // let [click, setClick] = useState([]);
  // let [result, setResult] = useState([]);

  let [users, setUsers] = useState([]);

  let [search, setSearch] = useState('');
  // 전체 조회할 땐 전체 조회한 내용 저장하고, 인덱스 조회할 땐 인덱스 조회한 내용 저장하기
  let [filterUsers, setFilterUser] = useState([]);

  // 문자 조회할 경우 임시로 저장하는 변수
  let [temp, setTemp] = useState('');

  // 사이트 경로를 기억하는 것
  let navigate = useNavigate();

  // 버튼 클릭 시 전체 내용을 조회하는 함수
  function fetchUsers() {
    axios.get('https://jsonplaceholder.typicode.com/users?_limit=9').then(function (response) {
      setUsers(response.data);
      setFilterUser(response.data);
    }).catch(function (error) {
      console.error(error);
    });
  }

  // 입력창에 데이터가 변경될 때마다 저장하는 함수
  function searchChange(e) {
    setSearch(e.target.value);
  }

  // 인덱스로 검색하는 함수
  function searchByIndex() {
    const index = parseInt(search, 10);
    if (!isNaN(index) && index >= 0 && index < users.length) {
      setFilterUser([users[index]]);
    } else {
      setFilterUser([]);
    }
  }

  // 이름으로 검색하는 함수
  function searchByName() {
    let findUser = users.filter(function (user) {
      return user.name === search;
    });
    setFilterUser(findUser);
  }

  // 문자로 검색하는 함수
  function searchByChar() {
    const findChar = search.toLowerCase();
    const result = users.filter(
      function(user) {
        return (
          user.name.toLowerCase().includes(findChar)
          || user.email.toLowerCase().includes(findChar)
          || user.username.toLowerCase().includes(findChar)
        )
      }
    );
    setFilterUser(result);
  }

  // 이름 관련 문자를 검색하면 찾을 수 있는 함수
  // function searchByChar() {
  //   console.log("문자로 검색 중");
  //   const findChar = users.filter(function (user) {
  //     return user.name.toLowerCase().includes(search.toLowerCase());
  //   })
  //   setFilterUser(findChar);
  // }

  // 이름 뿐만 아니라 다른 column의 값들 모두 찾아서 확인하는 함수 (숫자는 제외할 수 있도록 코딩) - 작성 중 (20240628-17:08 기준)
  // function searchByChar() {
  //   console.log("문자로 검색 중");
  //   // 저장되어있는 users에서 filter의 조건을 만족하는 user를 뽑아서 findChar에 저장
  //   const findChar = users.filter(function (user) {
  //     // user의 column값을 불러오기 위해 forEach로 각각의 element 불러오기
  //     user.forEach(element => {
  //       //  typeof string  검사
  //       if ((typeof element) === 'Object') {
  //         return element.toLowerCase().includes(search.toLowerCase());
  //       } else {
  //         return element.includes(search);
  //       }
  //     });
  //   })
  //   setFilterUser(findChar);
  // }

  // 행을 클릭했을 때 상세페이지로 이동하는 함수
  function userClick(user) {
    // console.log("확인");

    // 페이지 경로 저장해서 이동시키기
    // navigate() 함수도 페이지 이동을 시킬 수 있다. 그리고 페이지 이동 시 히스토리스택 공간에 페이지가 저장된다.
    navigate(`/user/${user.id}`, { state: { user } });
  }

  return (
    <div className="Container mt-5">

      <Routes>
        <Route path='/' element={
          <div>
            <button className='btn btn-primary mb-3' onClick={fetchUsers}>전체 조회</button>
            <button className='btn btn-danger ml-3 mb-3' onClick={searchByIndex}>인덱스 조회</button>
            <button className='btn btn-warning ml-3 mb-3' onClick={searchByName}>이름 조회</button>
            <button className='btn btn-success ml-3 mb-3' onClick={searchByChar}>문자 조회</button>
            <input type='text' className='form-control mb-3' placeholder='name or index' onChange={searchChange}></input>

            {
              // 0 일 때는 아무 것도 출력 안함
              // 1 이상일 때 데이터 테이블에 출력하기
              filterUsers.length > 0 ? (
                <Table striped bordered hover>

                  <thead>
                    <tr>
                      <th>Id</th>
                      <th>Name</th>
                      <th>Phone</th>
                      <th>Username</th>
                      <th>Email</th>
                    </tr>
                  </thead>
                  <tbody>
                    {
                      filterUsers.map(function (user) {
                        return (
                          <tr key={user.id} onClick={() => {
                            userClick(user);
                          }} style={{ cursor: 'pointer' }}>
                            <td>{user.id}</td>
                            <td>{user.name}</td>
                            <td>{user.phone}</td>
                            <td>{user.username}</td>
                            <td>{user.email}</td>
                          </tr>
                        )
                      })
                    }
                  </tbody>

                </Table>
              ) : (<h3>찾는 데이터가 없습니다.</h3>)
            }
          </div>
        }>
        </Route>

        <Route path='/user/:id' element={<UserDetail />} />
      </Routes>

    </div>
  );
}

export default App;

{/* <button onClick={function () {
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
      }}>전체 조회</button> <br /><br /> */}

{/* 
      검색창을 만들어서 인덱스를 입력받기
      버튼 클릭 시 검색된 요소 하나만 테이블에 보여주기 
      만약 없으면 검색한 번호가 없습니다. alert() 띄우기
      */}

{/* <input type="text" onChange={function (e) {
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
      }}>인덱스 조회</button> */}


{/* 자바 스크립트를 이용하기 위해서는 중괄호 사용 {} */ }
{/* {
          click.map(function(post) {
            return (
              <h4>{post.title}</h4>
            )})
        } */}

{/* <Table striped bordered hover>
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
      </Table> */}

{/* 
     1. XMLHttpRequest
     2. fetch()
     3. axios 같은 외부 라이브러리를 사용
     → 터미널을 열고 새 창에 npm install axios 내용으로 다운로드 하기
     */}