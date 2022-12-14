import { useState } from 'react';
import './App.css';
import Home from './pages/Home';
import Aboutpage from './pages/AboutPage';
import { Routes, Route, Navigate } from 'react-router-dom';
// ๐ฅ ์ฌ๊ธฐ ์๋ Navigate ๋ Redirect๋ฅผ ๋์์ฃผ๋ ์ปดํฌ๋ํธ์!
import Products from './pages/Product';
import Detail from './pages/Detail';
import Loginpage from './pages/LoginPage';
import Userpage from './pages/UserPage';
//Routes : Route ๋ฅผ ๊ฐ์ผ๋ค. ๊ฐ ํ์ด์ง๋ฅผ ์ค์์น ํ๋ ์ญํ . 
//          Router 5๋ฒ์ ์์๋ switch ๋ผ๊ณ  ์ ์.
//Route : Routes ์์์ path๋ก '/๊ฒฝ๋ก' ๋ฅผ ์ค์ ํ๊ณ  
//        element={<์ด๋ค ์ปดํฌ๋ํธ๋ฅผ ๋ถ๋ฌ์ฌ์ง/>} ์ ํ๋ค.


function App() {
  const [authenticate, setAuthenticate] = useState(false);
  // user๊ฐ ๋ก๊ทธ์ธ์ ์ํ์ผ๋ฉด authenticate ๊ฐ์ด false
  // ๋ก๊ทธ์ธ์ ํ์ผ๋ฉด true


  const PrivateRoute = () => {
    //์ด๊ฑด ์ปดํฌ๋ํธ์ (P ๋๋ฌธ์๋ก ์์ํ๋๊น)
    return (
      authenticate == true ? <Userpage/> : <Navigate to='/login'/>
      //{/*authenticate ๊ฐ true(๋ก๊ทธ์ธ์ ํ์ผ๋ฉด)๋ฉด <Userpage/>๋ฅผ ๋ณด์ฌ์ฃผ๊ณ  : ์๋๋ฉด <Navigate to='/login'/> ๋ก๊ทธ์ธ ํ์ด์ง๋ก ๋ฐ๋ ค๊ฐ๋ผ.*/}
    );
  };
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<Aboutpage/>}/>
        <Route path='/products' element={<Products/>}/>
        <Route path='/products/:id' element={<Detail/>}/> {/*/:id = restfull routes design*/}
        <Route path='/login' element={<Loginpage/>}/>
        <Route path='/user' element={<PrivateRoute/>}/>
      </Routes>
    </div>
  );
}

export default App;


// ๋ฆฌ์กํธ๋ Router๋ฅผ ์ด์ฉํด ํ์ด์ง๋ฅผ ๊ฐ์๋ผ์ธ ์ ์๋ค.
// App.js์ { Routes, Route }๋ฅผ importํ๊ณ 
// Route ํ๊ทธ ์์ path(url์ ํ์๋๋ ์ฃผ์) ์ element(path์ ์ฐ๊ฒฐํ  ์ปดํฌ๋ํธ)๋ฅผ ์๋ ฅํด์ฃผ๊ณ 
// Routes ํ๊ทธ ์์ Route ํ๊ทธ๋ฅผ ๋ฃ์ด์ค๋ค.

// ์ข ๋ ์ฝ๊ฒ ํ์ด์ง๋ฅผ ์ด๋ํ๊ธฐ ์ํด ๋งํฌ๋ฅผ ์ฐ๊ฒฐํด์ผ ํ๋ค. ๋ฐฉ๋ฒ์ ๋๊ฐ์ง
// ๊ธ์์ ๋งํฌ๋ฅผ ๊ฑธ๊ฑฐ๋{ Link }
// ๋ฒํผ์ ๋งํฌ๋ฅผ ๊ฑธ๊ฑฐ๋{ useNavigate }

// { Link }
// <Link to="/about">AboutPage๋ก ์ด๋ํ๊ธฐ</Link>
// ํ์คํธ์ ๋งํฌ๋ฅผ ๊ฑธ์ด ์ํ๋ ํ์ด์ง๋ก ๋ฐ๋ก ์ด๋ํ  ์ ์๋ค.

// { useNavigate }
// ๋ฆฌ์กํธ ๋ผ์ฐํฐ ๋์์ ์ ๊ณตํ๋ ๋ฆฌ์กํธ ํ
// ๋ฒํผ์ ๋ง๋ค์ด์ฃผ๊ณ  onClick์ ํจ์๋ฅผ ๊ฑธ์ด์ค๋ค. 
// <button onClick={goToHome}>HomePage</button>
// navigate๋ฅผ ์ ์ธํด์ค๋ค. 
// const navigate = useNavigate();
// onClick์ ๊ฑธ์ด๋ ํจ์์ navigate๋ฅผ ์ด์ฉํด ์ด๋ํ  ํ์ด์ง์ path๋ฅผ ์ ๋๋ค.
// const goToHome = () => { navigate('/'); };