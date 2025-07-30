// src/components/Layout.jsx
import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from './Header';
import StatusBar from '../assets/icons/StatusBar.svg?react';
import Navigation from './Navigation'; 

export default function Layout() {
  return (
    <div className="bg-gray-100 min-h-screen">
      <div className="bg-white max-w-2xl mx-auto font-sans">
        <div className="sticky top-0 z-20 bg-white">
          <Header />
       <Navigation /> {/* ✨ 이 부분의 주석을 제거하세요! */}
        </div>

        <main>
          <Outlet />
        </main>
      </div>
    </div>
  );
}