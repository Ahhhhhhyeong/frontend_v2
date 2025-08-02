import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

// 레이아웃 컴포넌트
import Layout from './components/Layout';
import FormLayout from './components/FormLayout';

// 페이지 컴포넌트
import MainPage from './pages/MainPage';
import CommunityPage from './pages/CommunityPage';
import LoginPage from './pages/LoginPage';
import MyPage from './pages/MyPage';
import SellerMyPage from './pages/SellerMyPage';
import ProductRegistrationPage from './pages/ProductRegistrationPage';
import ProductDetailRegistrationPage from './pages/ProductDetailRegistrationPage';
import ProductPreviewPage from './pages/ProductPreviewPage';
import SellerMarketPage from './pages/SellerMarketPage';
import ProductDetailPage from './pages/ProductDetailPage';
import ProductRegistrationConfirmation from './pages/ProductRegistrationConfirmation';

// Context Provider
import { CommunityProvider } from './context/CommunityContext';

function App() {
  return (
    <CommunityProvider>
      <BrowserRouter>
        <Routes>
          {/* 그룹 1: 메인 앱 화면 (하단 탭 바가 있는 기본 레이아웃) */}
          <Route element={<Layout />}>
            <Route path="/" element={<MainPage />} />
            <Route path="/community" element={<CommunityPage />} />
            <Route path="/mypage" element={<MyPage />} />
            <Route path="/seller-mypage" element={<SellerMyPage />} />
            <Route path="/seller-market" element={<SellerMarketPage />} />
            <Route path="/product-detail/:id" element={<ProductDetailPage />} />
          </Route>

          {/* 그룹 2: 상품 등록 등 집중이 필요한 폼 전용 레이아웃 */}
          <Route element={<FormLayout />}>
            <Route path="/register-product" element={<ProductRegistrationPage />} />
            <Route path="/register-product/detail" element={<ProductDetailRegistrationPage />} />
            <Route path="/product-detail/preview" element={<ProductPreviewPage />} />
            <Route path="/product-registration-confirmation" element={<ProductRegistrationConfirmation />} />
          </Route>

          {/* 그룹 3: 독립적인 전체 화면 페이지 */}
          <Route path="/login" element={<LoginPage />} />
        </Routes>
      </BrowserRouter>
    </CommunityProvider>
  );
}

export default App;