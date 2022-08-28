import './App.css';
import Home from './pages/Home';
import Aboutpage from './pages/AboutPage';
import { Routes, Route } from 'react-router-dom';
import Product from './pages/Product';
//Routes : Route 를 감싼다. 각 페이지를 스위치 하는 역할. 
//          Router 5버전에서는 switch 라고 적음.
//Route : Routes 안에서 path로 '/경로' 를 설정하고 
//        element={<어떤 컴포넌트를 불러올지/>} 정한다.


function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/about' element={<Aboutpage />}/>
        <Route path='/allProducts' element={<Product />}/>
      </Routes>
    </div>
  );
}

export default App;


// 리액트는 Router를 이용해 페이지를 갈아끼울 수 있다.
// App.js에 { Routes, Route }를 import하고
// Route 태그 안에 path(url에 표시되는 주소) 와 element(path에 연결할 컴포넌트)를 입력해주고
// Routes 태그 안에 Route 태그를 넣어준다.

// 좀 더 쉽게 페이지를 이동하기 위해 링크를 연결해야 한다. 방법은 두가지
// 글자에 링크를 걸거나{ Link }
// 버튼에 링크를 걸거나{ useNavigate }

// { Link }
// <Link to="/about">AboutPage로 이동하기</Link>
// 텍스트에 링크를 걸어 원하는 페이지로 바로 이동할 수 있다.

// { useNavigate }
// 리액트 라우터 돔에서 제공하는 리액트 훅
// 버튼을 만들어주고 onClick에 함수를 걸어준다. 
// <button onClick={goToHome}>HomePage</button>
// navigate를 선언해준다. 
// const navigate = useNavigate();
// onClick에 걸어둔 함수에 navigate를 이용해 이동할 페이지의 path를 적는다.
// const goToHome = () => { navigate('/'); };