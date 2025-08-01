// src/App.jsx
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
import ProductDetailRegistrationPage from './pages/ProductDetailRegistrationPage.jsx';

export default function App() {
  return (
    <CommunityProvider>
      <BrowserRouter>
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<MainPage />} />
            <Route path="/community" element={<CommunityPage />} />
            <Route path="/mypage" element={<MyPage />} />
            <Route path="/seller-mypage" element={<SellerMyPage />} />
            <Route path="/product-detail/:id" element={<ProductDetailPage />} />
          </Route>

          <Route path="/login" element={<LoginPage />} />
          <Route path="/register-product" element={<ProductRegistrationPage />} />
          <Route path="/register-product/detail" element={<ProductDetailRegistrationPage />} />
          <Route path="/product-registration-confirmation" element={<ProductRegistrationConfirmation />} />
        </Routes>
      </BrowserRouter>
    </CommunityProvider>
  );
}