import React from 'react'
import { useLocation, useNavigate } from 'react-router-dom';

export default function UserDetail() {

    // App.js 파일에서 테이블을 선택 시 넘어온 데이터를 꺼낼 때 사용하는 기능(훅)
    // 현재 위치 정보를 담은 객체를 가져온다.
    const location = useLocation();
    const {user} = location.state || {};
    // console.log(user);

    const navigate = useNavigate();

    return (
        <div className='container mt-3'>
            <h1>{user.name}의 정보</h1>
            <br />
            <p>UserId: {user.id}</p>
            <p>UserName: {user.name}</p>
            <p>UserPhone: {user.phone}</p>
            <p>UserUsername: {user.username}</p>
            <p>UserEmail: {user.email}</p>
            <p>UserAddress.city: {user.address.city}</p>

            <button className='btn btn-primary mb-3' onClick={function() {
                navigate(-1);
            }}>뒤로가기</button>
        </div>
    )
}
