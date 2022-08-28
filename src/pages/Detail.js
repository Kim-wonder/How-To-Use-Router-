import React from 'react';
import { useParams } from 'react-router-dom';

const Detail = () => {
    const params = useParams();
    console.log(params); 
    // {id: '1'}라는 오브젝트가 id라는 ket값과 '1'이라는 value값을 반환한다.
    // id라는 key값은 Route에서 적은 것으로 자동으로 지정된다.
    // App.js에 :id 말고 => :table/:num 이라 적고 url이 url/flower/81 이라면 
    // console에는 {table: 'flower', num: '81' } 이라 찍힌다.

    const {id} = useParams();
    // {id} 로 useParams를 사용하면
    // {id} 라는 오브젝트의 id 라는 key의 value값을 바로 사용할 수 있다.
    return (
        <div>
            <h1>this is detail! {id}</h1>
        </div>
    );
}

export default Detail;
