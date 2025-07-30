// src/App.jsx
// 앱의 전체 레이아웃과 페이지 경로를 관리하는 최상위 컴포넌트입니다.

import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Header from './components/Header.jsx';
import Navigation from './components/Navigation.jsx';
import MainPage from './pages/MainPage.jsx';
import CommunityPage from './pages/CommunityPage.jsx';
// 새로 만든 상품 등록 페이지를 불러옵니다.
import ProductRegistrationPage from './pages/ProductRegistrationPage.jsx';
import LoginPage from './pages/LoginPage.jsx';

// --- 초기 데이터 ---
const initialCommunityPosts = [
    { id: 1, farmName: '새벽들딸기농원', avatar: 'https://images.unsplash.com/photo-1542883339-f97e41c3671d?q=80&w=100&auto=format&fit=crop', content: ["논산에서 15년째 딸기농사를 짓고 있어요."], image: 'https://images.unsplash.com/photo-1587393855524-7ab3f96c976d?q=80&w=800&auto=format&fit=crop', images: ['https://images.unsplash.com/photo-1587393855524-7ab3f96c976d?q=80&w=800&auto=format&fit=crop'], likes: '1.2k', comments: '342', taggedProducts: [ { id: 101, name: '[당일 수확] 논산 유기농 설향 딸기 1kg', brand: '새벽들딸기농원', price: '14,960원', discount: '12%', image: 'https://images.unsplash.com/photo-1591282402213-c39c8a08a41a?q=80&w=100&auto=format&fit=crop', position: { top: '55%', left: '40%' } }, ] },
    // ... (다른 게시물 데이터)
];

export default function App() {
  const [communityPosts, setCommunityPosts] = useState(initialCommunityPosts);

  const handleCreatePost = (newPost) => {
    setCommunityPosts([newPost, ...communityPosts]);
  };

  return (
    <BrowserRouter>
      {/* Routes 컴포넌트가 모든 경로를 감싸도록 구조를 변경합니다.
          이렇게 하면 헤더가 없는 전체 화면 페이지를 만들 수 있습니다. */}
      <Routes>
        {/* 기본 레이아웃을 사용하는 페이지들 */}
        <Route path="/*" element={
          <div className="bg-gray-100 min-h-screen">
            <div className="bg-white max-w-2xl mx-auto font-sans">
              <div className="sticky top-0 z-20 bg-white">
                <Header />
                <Navigation />
              </div>
              <Routes>
                <Route path="/" element={<MainPage onCreatePost={handleCreatePost} />} />
                <Route path="/community" element={<CommunityPage posts={communityPosts} onCreatePost={handleCreatePost} />} />
                <Route path="/login" element={<LoginPage />} />
              </Routes>
            </div>
          </div>
        } />
        
        {/* 상품 등록 페이지 (헤더와 네비게이션이 없는 전체 화면) */}
        <Route path="/register-product" element={<ProductRegistrationPage />} />
      </Routes>
    </BrowserRouter>
  );
}
