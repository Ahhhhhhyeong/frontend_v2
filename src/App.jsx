// src/App.jsx
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { CommunityProvider } from './context/CommunityContext';

import Layout from './components/Layout.jsx';
import MainPage from './pages/MainPage.jsx';
import CommunityPage from './pages/CommunityPage.jsx';
import ProductRegistrationPage from './pages/ProductRegistrationPage.jsx';
import LoginPage from './pages/LoginPage.jsx';
// 'StatusBar' import가 이 파일에서는 사용되지 않으므로 삭제합니다.

export default function App() {
  return (
    // CommunityProvider가 앱 전체의 상태를 관리합니다.
    <CommunityProvider>
      <BrowserRouter>
        <Routes>
          {/* 1. 레이아웃을 사용하는 페이지들 */}
          <Route element={<Layout />}>
            <Route path="/" element={<MainPage />} />
            <Route path="/community" element={<CommunityPage />} />
          </Route>

          {/* 2. 레이아웃이 없는 독립적인 페이지들 */}
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register-product" element={<ProductRegistrationPage />} />
        </Routes>
      </BrowserRouter>
    </CommunityProvider>
  );
}