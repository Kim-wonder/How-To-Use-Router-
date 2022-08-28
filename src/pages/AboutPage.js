import React from 'react';
import { useNavigate } from 'react-router-dom';
//useNavigate는 리액트-라우터-돔에서 제공하는, 버튼을 클릭해 페이지를 이동할 수 있도록 해준다.

const Aboutpage = () => {
    //useNavigate를 navigate라는 이름의 변수로 지정해두고,
    const navigate = useNavigate();

    //버튼 안에 navigate변수안에 함수()를 지정해주는데,
    // 안에 '/'로 원하는 path를 넣어주면 된다.
    const goToHome = () => {
        navigate('/');
    };

    return (
        <div>
            <h1>AboutPage</h1>
            <button onClick={goToHome}>HomePage</button>
        </div>
    );
}

export default Aboutpage;
