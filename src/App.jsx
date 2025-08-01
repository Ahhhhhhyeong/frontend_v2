// src/App.jsx
// 앱의 전체 레이아웃과 페이지 경로를 관리하는 최상위 컴포넌트입니다.

import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { CommunityProvider } from './context/CommunityContext';

// 컴포넌트들을 import 합니다.
import Layout from './components/Layout.jsx';
import MainPage from './pages/MainPage.jsx';
import CommunityPage from './pages/CommunityPage.jsx';
import ProductRegistrationPage from './pages/ProductRegistrationPage.jsx';
import ProductRegistrationConfirmation from './pages/ProductRegistrationConfirmation.jsx';
import ProductDetailPage from './pages/ProductDetailPage.jsx';
import LoginPage from './pages/LoginPage.jsx';
import MyPage from './pages/MyPage.jsx';
import SellerMyPage from './pages/SellerMyPage.jsx';

export default function App() {
  return (
    // CommunityProvider로 앱 전체의 상태를 관리합니다.
    <CommunityProvider>
      <BrowserRouter>
        <Routes>
          {/* Layout을 사용하는 모든 페이지들을 하나의 부모 Route 안에 묶습니다. */}
          <Route element={<Layout />}>
            <Route path="/" element={<MainPage />} />
            <Route path="/community" element={<CommunityPage />} />
            <Route path="/mypage" element={<MyPage />} />
            <Route path="/seller-mypage" element={<SellerMyPage />} />
            <Route path="/product-detail/:id" element={<ProductDetailPage />} />
          </Route>

          {/* Layout이 없는 독립적인 페이지들 */}
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register-product" element={<ProductRegistrationPage />} />
          <Route path="/product-registration-confirmation" element={<ProductRegistrationConfirmation />} />
        </Routes>
      </BrowserRouter>
    </CommunityProvider>
  );
}