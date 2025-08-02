/**
 * App.jsx
 * 프로젝트의 모든 페이지 경로를 설정하고 관리하는 최상위 라우팅 파일입니다.
 */
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

// --- 레이아웃 컴포넌트 ---
import Layout from './components/Layout';
import FormLayout from './components/FormLayout';

// --- 페이지 컴포넌트 (모든 페이지 import) ---
import MainPage from './pages/MainPage';
import CommunityPage from './pages/CommunityPage';
import LoginPage from './pages/LoginPage';
import MyPage from './pages/MyPage';
import SellerMyPage from './pages/SellerMyPage';
import ProductRegistrationPage from './pages/ProductRegistrationPage';
import ProductDetailRegistrationPage from './pages/ProductDetailRegistrationPage';
import ProductPreviewPage from './pages/ProductPreviewPage';
import SellerMarketPage from './pages/SellerMarketPage';
// [오류 수정] ProductDetailPage의 import 경로를 올바르게 수정합니다.
import ProductDetailPage from './pages/ProductDetailPage';
import ProductRegistrationConfirmation from './pages/ProductRegistrationConfirmation';
// 커뮤니티 글쓰기 관련 페이지
import CommunityWritePage from './pages/community/CommunityWritePage';
import CommunityWriteImagePage from './pages/community/CommunityWriteImagePage';
import CommunityWriteTagPage from './pages/community/CommunityWriteTagPage';
// [오류 수정] 누락되었던 CommunityWriteConfirmPage를 import 합니다.
import CommunityWriteConfirmPage from './pages/community/CommunityWriteConfirmPage';

// --- Context Provider ---
import { CommunityProvider } from './context/CommunityContext';

function App() {
  return (
    <CommunityProvider>
      <BrowserRouter>
        <Routes>
          {/* --- 그룹 1: 메인 앱 화면 (하단 탭 바가 있는 레이아웃) --- */}
          <Route element={<Layout />}>
            <Route path="/" element={<MainPage />} />
            <Route path="/community" element={<CommunityPage />} />
            <Route path="/mypage" element={<MyPage />} />
            <Route path="/seller-mypage" element={<SellerMyPage />} />
            <Route path="/seller-market" element={<SellerMarketPage />} />
            <Route path="/product-detail/:id" element={<ProductDetailPage />} />
          </Route>

          {/* --- 그룹 2: 폼 전용 레이아웃 --- */}
          <Route element={<FormLayout />}>
            <Route path="/register-product" element={<ProductRegistrationPage />} />
            <Route path="/register-product/detail" element={<ProductDetailRegistrationPage />} />
            <Route path="/product-detail/preview" element={<ProductPreviewPage />} />
            <Route path="/product-registration-confirmation" element={<ProductRegistrationConfirmation />} />
            
            {/* [신규] 커뮤니티 글쓰기 6단계에 해당하는 전체 경로 */}
            <Route path="/community/write" element={<CommunityWritePage />} />
            <Route path="/community/write-image" element={<CommunityWriteImagePage />} />
            <Route path="/community/write-tag" element={<CommunityWriteTagPage />} />
            <Route path="/community/write-confirm" element={<CommunityWriteConfirmPage />} />
          </Route>

          {/* --- 그룹 3: 독립적인 전체 화면 페이지 (예: 로그인) --- */}
          <Route path="/login" element={<LoginPage />} />
        </Routes>
      </BrowserRouter>
    </CommunityProvider>
  );
}

export default App;