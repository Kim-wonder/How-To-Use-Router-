import React from 'react';
import { Link } from 'react-router-dom';
//App.js에서 지정한 라우터 간에 이동을 도와준다.
//Link를 이용해 페이지를 이동할 수 있다.

const Home = () => {
    return (
        <div>
            <h1>Home</h1>
            <Link to="/about">AboutPage로 이동하기</Link>
        </div>
    );
}

export default Home;
