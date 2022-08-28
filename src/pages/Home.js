import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
//App.js에서 지정한 라우터 간에 이동을 도와준다.
//Link를 이용해 페이지를 이동할 수 있다.

const Home = () => {
    const navigate = useNavigate();

    const goProducts = () => {
        navigate('/products?q=outer');
        //query? 뒤에 값은 url 경로에 영향을 주지 않는다.
    }
    return (
        <div>
            <h1>Home</h1>
            <Link to="/about">AboutPage로 이동하기</Link>
            <button onClick={goProducts}>go to products page</button>
        </div>
    );
}

export default Home;
