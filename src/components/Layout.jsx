// src/components/Layout.jsx
import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from './Header';
import Navigation from './Navigation'; 

export default function Layout() {
  return (
    // 👇 전체 화면을 중앙 정렬하기 위해 flex와 justify-center를 추가합니다.
    <div className="bg-gray-100 min-h-screen flex justify-center">
      {/* 👇 max-w-2xl을 w-[375px]로 변경하여 너비를 375px로 고정합니다. */}
      <div className="bg-white w-[375px] font-sans shadow-lg"> {/* 그림자 효과 추가 */}
        <div className="sticky top-0 z-20 bg-white">
          <Header />
          <Navigation />
        </div>

        <main>
          <Outlet />
        </main>
      </div>
    </div>
  );
}