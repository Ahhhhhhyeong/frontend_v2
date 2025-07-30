// src/components/Layout.jsx
import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from './Header';
import StatusBar from '../assets/icons/StatusBar.svg?react';
// 👇 1. 이 부분의 주석을 해제하여 Navigation 컴포넌트를 불러옵니다.
import Navigation from './Navigation'; 

export default function Layout() {
  return (
    <div className="bg-gray-100 min-h-screen">
      <div className="bg-white max-w-2xl mx-auto font-sans">
        <div className="sticky top-0 z-20 bg-white">
          <StatusBar className="w-full" />
          <Header />
          {/* 👇 2. 이 부분의 주석을 해제하여 Navigation 컴포긍정적으로 화면에 표시합니다. */}
          <Navigation />
        </div>

        {/* 자식 라우트(MainPage, CommunityPage 등)가 이 자리에 렌더링됩니다. */}
        <main>
          <Outlet />
        </main>
      </div>
    </div>
  );
}