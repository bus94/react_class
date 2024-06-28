import './App.css';
import { Routes, Route, Link, useNavigate } from 'react-router-dom';
import Home from './Home';
import About from './About';
import Content from './Content';


// 페이지 나누는 라이브러리

function App() {
  // 페이지를 이동하는 함수
  // 뒤로 가기, 앞으로 이동하기
  // navigate('페이지명')
  // navigate(숫자)  -1 : 뒤로 가기 / 2 : 앞으로 2번 이동 (현재 페이지는 0번)
  let navigate = useNavigate();

  return (
    <div className="App">
      <h2>App.js</h2>

      <nav>
        <ul>
          {/* 유저들이 url을 직접 입력 안하니 버튼을 눌렀을 때 이동할 수 있는 것 */}
          <li><Link to='/'>Main</Link></li>
          <li><Link to='/home'>Home</Link></li>
          <li><Link to='/about'>About</Link></li>
          <li><Link to='/content'>Content</Link></li>
        </ul>
      </nav>

      {/* 서브 경로 페이지 안에 새로운 페이지 추가하기 */}
      <Routes>
        <Route path='/home' element={<Home />}>
          <Route path='member' element={<About />} />
        </Route>
        <Route path='/about' element={<About />} />
        <Route path='/content' element={<Content />} />
      </Routes>

      <div>
        <h1>Main 화면 내용이다</h1>
      </div>

      {/* 
      html 처럼 여러 개의 페이지로 나누고 싶을 경우에는 react-router-dom 외부라이브러리 다운을 받아서 쓴다.
      npm install react-router-dom@6 
      */}
    </div>
  );
}

export default App;

{/* 
  <Routes>
  <Route path='/home' element={<Home />} />
  <Route path='/about' element={<About />} />
  <Route path='/content' element={<Content />} />

  <Route path='*' element={<h1>없는 페이지! Error Error Error</h1>} />
</Routes> 
*/}