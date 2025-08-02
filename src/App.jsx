// src/App.jsx
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { CommunityProvider } from './context/CommunityContext';

// --- ✨ 수정된 부분: Layout 컴포넌트를 import 합니다. ---
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
// 새로 만든 판매자 마켓 페이지를 import 합니다.
import SellerMarketPage from './pages/SellerMarketPage.jsx';

export default function App() {
  return (
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
            <Route path="/product-detail/preview" element={<ProductDetailPage />} />
            <Route path="/seller-mypage/products" element={<div>나의 상품 관리 페이지</div>} />
            <Route path="/seller-mypage/product-inquiries" element={<div>상품 문의 관리 페이지</div>} />
            <Route path="/seller-mypage/reviews" element={<div>리뷰 관리 페이지</div>} />
            <Route path="/seller-mypage/posts" element={<div>작성 글 관리 페이지</div>} />
            <Route path="/seller-mypage/comments" element={<div>댓글 관리 페이지</div>} />
          </Route>

          {/* Layout이 없는 독립적인 페이지들 */}
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register-product" element={<ProductRegistrationPage />} />
          <Route path="/register-product/detail" element={<ProductDetailRegistrationPage />} />
          <Route path="/product-registration-confirmation" element={<ProductRegistrationConfirmation />} />
          
          {/* 새로 추가된 판매자 마켓 페이지 경로 */}
          <Route path="/seller-market" element={<SellerMarketPage />} />
        </Routes>
      </BrowserRouter>
    </CommunityProvider>
  );
}