import React, { useState } from 'react';
import { Link } from 'react-router-dom';
// 컴포넌트 임포트
import Section from '@/components/Section.jsx';
import ProductCard from '@/components/ProductCard.jsx';
import StoryCard from '@/components/StoryCard.jsx';
import { EditIcon } from '@/components/Icons.jsx';
import CategoryChips from '@/components/chips/CategoryChips.jsx';
import MainBanner from '@/components/banner/MainBanner.jsx';
// 이미지 임포트
import mainBannerImg from '@/assets/images/homecommerce.png';
import userAvatarImg from '@/assets/images/user-profile.png';
// 더미 데이터 임포트
import { interestProducts, seasonalProducts, farmerStories } from '@/data.js';
// 섹션 컴포넌트 임포트
import ProductRecommendationSection from './commerce/ProductRecommendationSection';
import SeasonalFoodSection from './commerce/SeasonalFoodSection.jsx';
import StorySection from './commerce/StorySection.jsx';
import FloatButton from '../../components/button/FloatButton.jsx';

// --- 메인 페이지 컴포넌트 ---
export default function MainPage() {
  const [activeChip, setActiveChip] = useState('베스트');
  // 카테고리 칩 데이터
  const categories = ['베스트', '과일', '채소', '축산', '수산', '김치/젓갈', '쌀/잡곡'];
  const recommendCategories = ['추천', '수박', '옥수수', '최근 본 상품'];

  return (
    <div className='relative'>
      <main className='px-4 py-6 space-y-10 bg-white'>
        <CategoryChips categories={categories} activeChip={activeChip} setActiveChip={setActiveChip} />
        <MainBanner mainBannerImg={mainBannerImg} userAvatarImg={userAvatarImg} />

        {/* 사용자의 관심있는 상품 영역 */}
        <ProductRecommendationSection
          userName={'사용자'}
          tabs={recommendCategories}
          interestProducts={interestProducts}
        />
        {/* 7월 인기 제철음식 섹션 */}
        <SeasonalFoodSection seasonalProducts={seasonalProducts} />

        {/* 농부의 이야기 섹션 */}
        <StorySection farmerStories={farmerStories} />
        {/* <FloatButton href={'/register-product'} />  */}
      </main>
    </div>
  );
}
