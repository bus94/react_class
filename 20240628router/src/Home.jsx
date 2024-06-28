import React from 'react'
import { Routes, Route } from 'react-router-dom'
import About from './About'

export default function Home() {
    return (
        <div>
            <h2>Home Page</h2>
            <p>홈페이지 환영합니다!</p>
            {/* 페이지 경로 설정 */}
            <Routes>
                <Route path='member' element={<About />} />
            </Routes>
        </div>
    )
}
